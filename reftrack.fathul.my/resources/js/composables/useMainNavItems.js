import { LayoutGrid, HandHeart, Landmark, Wallet, User } from 'lucide-vue-next';

export function useMainNavItems() {
  return [
    {
      title: 'Dashboard',
      href: '/dashboard',
      icon: LayoutGrid,
    }
  ];
}