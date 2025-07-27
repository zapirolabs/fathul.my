import { Folder, Home } from 'lucide-vue-next';

export function useExternalNavItems() {
  return [
    {
      title: 'The Hub',
      href: 'https://hub.fathul.my',
      icon: Home,
    },
    {
      title: 'Portfolio',
      href: 'https://fathul.my',
      icon: Folder,
    },
    ];
}