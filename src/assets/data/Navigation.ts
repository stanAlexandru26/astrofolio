export interface NavbarLink {
  title: string;
  name: string;
  href: string;
  icon: string;
}

export const NAVBAR_LINKS: NavbarLink[] = [
  {
    title: 'home',
    name: 'Home',
    href: '/',
    icon: 'ph:house-duotone',
  },
  {
    title: 'about',
    name: 'About',
    href: '/about',
    icon: 'ant-design:info-circle-outlined',
  },
  {
    title: 'projects',
    name: 'Project',
    href: '/projects',
    icon: 'ant-design:project-filled',
  },
  // {
  //   title: 'blog',
  //   name: 'Blog',
  //   href: '/blog',
  //   icon: 'carbon:blog',
  // },
];
