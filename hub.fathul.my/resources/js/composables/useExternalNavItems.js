import { BookOpen, Folder } from 'lucide-vue-next';

export function useExternalNavItems() {
  return [
    {
      title: 'Github Repo',
      href: 'https://github.com/laravel/vue-starter-kit',
      icon: Folder,
    },
    {
      title: 'Documentation',
      href: 'https://laravel.com/docs/starter-kits#vue',
      icon: BookOpen,
    },
    ];
}