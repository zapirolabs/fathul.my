import { computed } from 'vue'
import { route } from 'ziggy-js'

export function useBreadcrumbs(page, data = {}) {   
  return computed(() => {
    switch (page) {
      case 'dashboard':
        return [
          { title: 'Dashboard', href: route('dashboard') }
        ]
      default:
        return []
    }
  })
}