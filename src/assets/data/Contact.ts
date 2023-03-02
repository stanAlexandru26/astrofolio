export interface ContactLink {
  title: string;
  icon: string;
  href: string;
  description: string;
  inNavbar: boolean;
  highlight: boolean;
}

export const CONTACT_LINKS: ContactLink[] = [
  {
    title: 'Resume',
    icon: 'fluent:arrow-download-24-filled',
    href: '/resume.pdf',
    description: 'Download Résumé',
    inNavbar: false,
    highlight: true,
  },
  {
    title: 'E-mail',
    icon: 'ci:mail',
    href: 'mailto:stan.alexandru26@gmail.com',
    description: 'Hit me an email',
    inNavbar: false,
    highlight: false,
  },
  {
    title: 'GitHub',
    icon: 'fa:github',
    href: 'https://github.com/stanAlexandru26',
    description: 'My GitHub',
    inNavbar: true,
    highlight: false,
  },
  {
    title: 'LinkedIn',
    icon: 'fa-brands:linkedin-in',
    href: 'https://www.linkedin.com/in/stan-alexandru-stefan',
    description: 'LinkedIn profile',
    inNavbar: true,
    highlight: false,
  },
];
