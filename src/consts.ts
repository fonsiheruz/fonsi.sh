import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'Fonsi Hernández',
  description:
    'Turning coffee into distributed systems. Software engineer (+9 years), aspiring founder, into gym and photography — based in San Francisco.',
  href: 'https://fonsi.sh',
  author: 'Fonsi Hernández',
  locale: 'en-US',
  featuredPostCount: 2,
  postsPerPage: 5,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/blog',
    label: 'blog',
  },
  {
    href: '/about',
    label: 'about',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/aheruz',
    label: 'GitHub',
  },
  {
    href: 'https://x.com/fonsiheruz',
    label: 'X',
  },
  {
    href: 'https://instagram.com/fonsiheruz',
    label: 'Instagram',
  },
  {
    href: 'https://linkedin.com/in/alfonsohernandezu',
    label: 'LinkedIn',
  },
  {
    href: '/rss.xml',
    label: 'RSS',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  X: 'x',
  Instagram: 'lucide:instagram',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}
