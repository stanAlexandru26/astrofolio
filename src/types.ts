export interface MetaSEO {
  title?: string;
  description?: string;
  image?: string;

  canonical?: string | URL;
  noindex?: boolean;
  nofollow?: boolean;

  ogTitle?: string;
  ogType?: string;
}

export interface Post {
  id: string;
  slug: string;

  title: string;
  publishDate: Date;
  author?: string;
  category?: string;
  description?: string;
  thumbnail?: string;
  repoUrl?: string;
  demoUrl?: string;
  icons?: string[];

  canonical?: string | URL;
  permalink?: string;

  draft?: boolean;

  excerpt?: string;

  Content: unknown;
  content?: string;

  readingTime?: number;
}
