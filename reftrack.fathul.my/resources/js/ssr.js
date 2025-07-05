import { createInertiaApp } from '@inertiajs/vue3';
import createServer from '@inertiajs/vue3/server';
import { renderToString } from '@vue/server-renderer';
import { createSSRApp, h } from 'vue';
import { ZiggyVue, route as ziggyRoute } from 'ziggy-js';

createServer((page) =>
  createInertiaApp({
    page,
    render: renderToString,
    title: (title) => title,
    resolve: name => {
      const eagerPages = import.meta.glob('./Pages/{Dashboard}.vue', { eager: true });
      const lazyPages = import.meta.glob('./Pages/!({Dashboard}).vue');
      const pagePath = `./Pages/${name}.vue`;
      if (eagerPages[pagePath]) {
        return eagerPages[pagePath];
      }
      if (lazyPages[pagePath]) {
        return lazyPages[pagePath]();
      }
      throw new Error(`Unknown page: ${name}`);
    },
    setup({ App, props, plugin }) {
      const app = createSSRApp({ render: () => h(App, props) });

      // Configure Ziggy for SSR...
      const ziggyConfig = {
        ...page.props.ziggy,
        location: new URL(page.props.ziggy.location),
      };

      // Create route function...
      const route = (name, params, absolute) => ziggyRoute(name, params, absolute, ziggyConfig);

      // Make route function available globally...
      app.config.globalProperties.route = route;

      // Make route function available globally for SSR...
      if (typeof window === 'undefined') {
        global.route = route;
      }

      app.use(plugin);
      app.use(ZiggyVue);
      return app;
    },
  },
  {cluster: true})
); 