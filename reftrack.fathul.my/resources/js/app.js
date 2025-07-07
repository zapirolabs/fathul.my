import './bootstrap';
import { createApp, h } from 'vue';
import { ZiggyVue } from 'ziggy-js';
import { createInertiaApp } from '@inertiajs/vue3';
import { initializeTheme } from './composables/useAppearance';

createInertiaApp({
  title: (title) => title,
  resolve: name => {
    const eagerPages = import.meta.glob('./Pages/{Form}.vue', { eager: true });
    const lazyPages = import.meta.glob('./Pages/!({Form}).vue');
    const pagePath = `./Pages/${name}.vue`;
    if (eagerPages[pagePath]) {
      return eagerPages[pagePath];
    }
    if (lazyPages[pagePath]) {
      return lazyPages[pagePath]();
    }
    throw new Error(`Unknown page: ${name}`);
  },

  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .use(ZiggyVue)
      .mount(el);
  },
});

// initializeTheme();