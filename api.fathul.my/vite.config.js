import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import { resolve } from 'path';

export default defineConfig({
    resolve: {
        alias: {
            '@': path.resolve(__dirname),
            'ziggy-js': resolve(__dirname, 'vendor/tightenco/ziggy')
        },
    },
    plugins: [
        vue(),
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            ssr: 'resources/js/ssr.js',
            refresh: true,
        }),
        tailwindcss(),
    ],
});
