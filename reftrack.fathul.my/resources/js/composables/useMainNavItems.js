import { LayoutGrid, HandHeart, Landmark, Wallet, User } from 'lucide-vue-next';

export function useMainNavItems() {
  return [
    {
      title: 'Dashboard',
      href: '/dashboard',
      icon: LayoutGrid,
    },
    {
      title: 'Maklumat Zakat',
      href: '/maklumat-zakat',
      icon: HandHeart,
    },
    {
      title: 'Maklumat Wakaf',
      href: '/maklumat-wakaf', 
      icon: Landmark,
    },
    {
      title: 'Potongan Gaji',
      href: '/potongan-gaji',
      icon: Wallet,
    },
    {
      title: 'Akaun Anda',
      href: '/akaun-anda',
      icon: User,
    },
  ];
}