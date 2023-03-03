export interface NavbarLink {
  title: string;
  name: string;
  href: string;
  icon: string;
  inNavbar: boolean;
}

export const NAVBAR_LINKS: NavbarLink[] = [
  {
    title: 'home',
    name: 'Home',
    href: '/',
    icon: 'ph:house-duotone',
    inNavbar: false,
  },
  {
    title: 'about',
    name: 'About',
    href: '/about',
    icon: 'ant-design:info-circle-outlined',
    inNavbar: true,
  },
  {
    title: 'projects',
    name: 'Project',
    href: '/project',
    icon: 'ant-design:project-filled',
    inNavbar: true,
  },
  // {
  //   title: 'blog',
  //   name: 'Blog',
  //   href: '/blog',
  //   icon: 'carbon:blog',
  //   inNavbar: true,
  // },
];
