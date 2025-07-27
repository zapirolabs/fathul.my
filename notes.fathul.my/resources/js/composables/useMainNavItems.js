import { LayoutGrid } from 'lucide-vue-next';

export function useMainNavItems() {
  return [
    {
      title: 'Dashboard',
      href: '/dashboard',
      icon: LayoutGrid,
    }
  ];
}