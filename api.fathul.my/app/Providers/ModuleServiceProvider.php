<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Route;

/**
 * ModuleServiceProvider handles the loading and registration of modular components in the application.
 * It provides functionality to automatically discover, load, and register routes and configurations
 * from module directories.
 */
class ModuleServiceProvider extends ServiceProvider
{
    /**
     * Register services and load modules.
     *
     * @return void
     */
    public function register()
    {
        $this->loadModules();
    }

    /**
     * Load all modules by scanning the Modules directory.
     * For each module found, loads its routes and configuration.
     *
     * @return void
     */
    private function loadModules()
    {
        $modules = $this->scanDirectory(app_path('Modules'));
        foreach ($modules as $modulePath) {
            $this->loadModuleRoutes($modulePath);
            $this->loadModuleConfig($modulePath);
        }
    }

    /**
     * Recursively scan directory to find valid modules.
     * A valid module must contain either a Routes directory or a config.php file.
     *
     * @param string $path The directory path to scan
     * @return array Array of paths to valid modules
     */
    private function scanDirectory($path)
    {
        $results = [];

        if (!File::exists($path)) {
            return $results;
        }

        $directories = File::directories($path);

        foreach ($directories as $directory) {
            if (File::exists($directory . '/routes') || File::exists($directory . '/config.php')) {
                $results[] = $directory;
            }

            $results = array_merge($results, $this->scanDirectory($directory));
        }

        return $results;
    }

    /**
     * Load routes for a specific module.
     * Supports different route types (api, web) with appropriate middleware and prefixes.
     * Route prefixes are built based on the module's directory structure.
     *
     * @param string $modulePath Path to the module directory
     * @return void
     */
    private function loadModuleRoutes($modulePath)
    {
        $routePath = $modulePath . '/routes';

        if (File::exists($routePath)) {
            $routeFiles = File::files($routePath);

            foreach ($routeFiles as $file) {
                $extension = $file->getExtension();
                if ($extension === 'php') {
                    $filename = $file->getFilenameWithoutExtension();

                    // Build route prefix from module path
                    $modulePathParts = explode(DIRECTORY_SEPARATOR, $modulePath);
                    $moduleIndex = array_search('Modules', $modulePathParts);
                    $routePrefix = '';

                    if ($moduleIndex !== false) {
                        $moduleParts = array_slice($modulePathParts, $moduleIndex + 1);
                        // Custom casing rules
                        $moduleParts = array_map(function ($part) {
                            // Special cases
                            if ($part === 'Notes') return 'notes';
                            // Default case
                            return strtolower($part);
                        }, $moduleParts);
                        $routePrefix = implode('/', $moduleParts);
                    }

                    // Register routes based on file type
                    switch ($filename) {
                        case 'api':
                            $fullPrefix = trim(implode('/', [
                                config('api.prefix'),
                                config('api.version'),
                                $routePrefix
                            ]), '/');
                            Route::group([
                                'middleware' => 'api',
                                'prefix' => $fullPrefix
                            ], $file->getPathname());
                            break;
                        case 'web':
                            Route::middleware('web')
                                ->prefix($routePrefix)
                                ->group($file->getPathname());
                            break;
                        default:
                            Route::prefix($routePrefix)
                                ->group($file->getPathname());
                    }
                }
            }
        }
    }

    /**
     * Load configuration for a specific module.
     * Configurations are loaded based on the module's directory structure
     * and made available through the config() helper.
     *
     * Example: A module at Modules/SiZA/SPA/Module will have its config
     * accessible via config('siza.spa.module.*')
     *
     * @param string $modulePath Path to the module directory
     * @return void
     */
    private function loadModuleConfig($modulePath)
    {
        $configFile = $modulePath . '/config.php';

        if (File::exists($configFile)) {
            $modulePathParts = explode(DIRECTORY_SEPARATOR, $modulePath);
            $moduleName = strtolower(end($modulePathParts));

            $moduleIndex = array_search('Modules', $modulePathParts);
            if ($moduleIndex !== false) {
                $moduleNames = array_slice($modulePathParts, $moduleIndex + 1);
                $moduleNames = array_map(function ($part) {
                    if ($part === 'Notes') return 'notes';
                    return strtolower($part);
                }, $moduleNames);
                $configKey = implode('.', $moduleNames);

                config([$configKey => require $configFile]);
            }
        }
    }

    /**
     * Bootstrap any application services.
     * Currently used to publish the API configuration file.
     *
     * @return void
     */
    public function boot()
    {
        $this->publishes([
            __DIR__ . '/../../config/api.php' => config_path('api.php'),
        ], 'api-config');
    }
}
