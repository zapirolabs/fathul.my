import { computed } from 'vue'
import { route } from 'ziggy-js'

export function useBreadcrumbs(page, data = {}) {   
  return computed(() => {
    switch (page) {
      case 'dashboard':
        return [
          // { title: 'Halaman Utama', href: route('home') },
          { title: 'Dashboard', href: route('dashboard') }
        ]
      // case 'user.show':
      //   return [
      //     { title: 'Home', href: route('home') },
      //     { title: 'Users', href: route('users.index') },
      //     { title: data.user.name, href: route('users.show', { id: data.user.id }) }
      //   ]
      default:
        return []
    }
  })
}