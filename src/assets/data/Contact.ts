export interface ContactLink {
  title: string;
  icon: string;
  href: string;
  description: string;
  inNavbar: boolean;
}

export const CONTACT_LINKS: ContactLink[] = [
  {
    title: 'E-mail',
    icon: 'ci:mail',
    href: 'mailto:stan.alexandru26@gmail.com',
    description: 'Email address',
    inNavbar: false,
  },
  {
    title: 'GitHub',
    icon: 'fa:github',
    href: 'https://github.com/stanAlexandru26',
    description: 'GitHub profile link',
    inNavbar: true,
  },
  {
    title: 'LinkedIn',
    icon: 'fa-brands:linkedin-in',
    href: 'https://www.linkedin.com/in/stan-alexandru-stefan',
    description: 'LinkedIn profile link',
    inNavbar: true,
  },
];
