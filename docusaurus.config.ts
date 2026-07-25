import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// ---------------------------------------------------------------------------
// SnapContact — Documentation site config
// Author: Ahsan Mahmood (https://aoneahsan.com)
// App: https://snapcontact.aoneahsan.com
// ---------------------------------------------------------------------------

const SITE_URL = 'https://snapcontact-docs.aoneahsan.com';
const APP_URL = 'https://snapcontact.aoneahsan.com';
const PLAY_URL =
  'https://play.google.com/store/apps/details?id=com.aoneahsan.snapcontact';

const config: Config = {
  title: 'SnapContact Docs',
  tagline: 'Turn every chat into a contact — capture leads, organize with context, and follow up on time.',
  favicon: 'img/favicon.svg',

  // Production URL — served from Firebase Hosting site `snap-contact-docs`
  // and mirrored to GitHub Pages at snapcontact-docs.aoneahsan.com.
  url: SITE_URL,
  baseUrl: '/',

  // GitHub metadata (drives deploy + OG tags + edit-this-page links)
  organizationName: 'aoneahsan',
  projectName: 'snap-contact-docs',

  onBrokenLinks: 'throw',
  onBrokenAnchors: 'warn',

  // SEO + AI-citability head tags. The JSON-LD payloads (WebSite,
  // Organization, SoftwareApplication) help Google Rich Results, Perplexity,
  // ChatGPT, and Claude extract structured entity data when citing these docs.
  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'canonical',
        href: `${SITE_URL}/`,
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'alternate',
        type: 'application/rss+xml',
        title: 'SnapContact Docs',
        href: `${SITE_URL}/sitemap.xml`,
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'application-name',
        content: 'SnapContact Docs',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'apple-mobile-web-app-title',
        content: 'SnapContact Docs',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'theme-color',
        content: '#3b82f6',
      },
    },
    {
      tagName: 'script',
      attributes: {
        type: 'application/ld+json',
      },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'SnapContact Documentation',
        url: SITE_URL,
        description:
          'Documentation for SnapContact, a contact intelligence and lead-capture app for Android and the web. Capture contacts (including business-card scanning), organize them with tags, notes and spaces, and stay on top of follow-up reminders. Author: Ahsan Mahmood.',
        inLanguage: 'en',
        publisher: {
          '@type': 'Person',
          name: 'Ahsan Mahmood',
          url: 'https://aoneahsan.com',
          email: 'aoneahsan@gmail.com',
          sameAs: [
            'https://linkedin.com/in/aoneahsan',
            'https://github.com/aoneahsan',
            'https://www.npmjs.com/~aoneahsan',
          ],
        },
        license: 'https://opensource.org/licenses/MIT',
      }),
    },
    {
      tagName: 'script',
      attributes: {
        type: 'application/ld+json',
      },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'SnapContact',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Android, Web',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
        },
        url: APP_URL,
        sameAs: PLAY_URL,
        author: {
          '@type': 'Person',
          name: 'Ahsan Mahmood',
          url: 'https://aoneahsan.com',
        },
        description:
          'Contact intelligence and lead-capture app: scan business cards, save leads, organize contacts with tags/notes/spaces, and never miss a follow-up. Free to get started.',
        softwareVersion: '1.1.0',
      }),
    },
    {
      tagName: 'script',
      attributes: {
        type: 'application/ld+json',
      },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Ahsan Mahmood',
        alternateName: 'aoneahsan',
        url: 'https://aoneahsan.com',
        email: 'aoneahsan@gmail.com',
        sameAs: [
          'https://linkedin.com/in/aoneahsan',
          'https://github.com/aoneahsan',
          'https://www.npmjs.com/~aoneahsan',
          'https://aoneahsan.com',
        ],
        founder: {
          '@type': 'Person',
          name: 'Ahsan Mahmood',
        },
      }),
    },
  ],

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  trailingSlash: false,

  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // `docs/` is BOTH the published content dir and the home of the
          // fixed-path internal file docs/MANUAL-TASKS.md. Keep the path (the
          // global rule fixes it) but never publish it — this repo is public.
          // NOTE: `exclude` REPLACES the plugin defaults, so they are restated.
          exclude: [
            '**/_*.{js,jsx,ts,tsx,md,mdx}',
            '**/_*/**',
            '**/*.test.{js,jsx,ts,tsx}',
            '**/__tests__/**',
            'MANUAL-TASKS.md',
          ],
          routeBasePath: '/',
          editUrl: 'https://github.com/aoneahsan/snap-contact-docs/edit/main/',
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
          breadcrumbs: true,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.7,
          lastmod: 'date',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/social-card.svg',
    metadata: [
      { name: 'description', content: 'Documentation for SnapContact — a contact intelligence and lead-capture app for Android and the web. Maintained by Ahsan Mahmood.' },
      { name: 'keywords', content: 'snapcontact, contact manager, lead capture, business card scanner, OCR contacts, contact organizer, follow-up reminders, CRM lite, contact tags, contact notes, whatsapp lead capture, import contacts, android contact app' },
      { name: 'author', content: 'Ahsan Mahmood' },
      { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:creator', content: '@aoneahsan' },
      { name: 'twitter:site', content: '@aoneahsan' },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'SnapContact Docs' },
      { property: 'og:locale', content: 'en_US' },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'article:author', content: 'Ahsan Mahmood' },
    ],
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    navbar: {
      title: 'SnapContact',
      logo: {
        alt: 'SnapContact logo',
        src: 'img/logo.svg',
        srcDark: 'img/logo.svg',
        width: 32,
        height: 32,
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'mainSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          to: '/getting-started/quick-start',
          label: 'Quick Start',
          position: 'left',
        },
        {
          to: '/about-the-author',
          label: 'Author',
          position: 'right',
        },
        {
          href: APP_URL,
          label: 'Open App',
          position: 'right',
        },
        {
          href: 'https://github.com/aoneahsan/snap-contact-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            { label: 'Introduction', to: '/intro' },
            { label: 'Quick Start', to: '/getting-started/quick-start' },
            { label: 'Business-card scanner', to: '/features/business-card-scanner' },
          ],
        },
        {
          title: 'Product',
          items: [
            { label: 'Open the app', href: APP_URL },
            { label: 'Get it on Google Play', href: PLAY_URL },
            { label: 'Privacy policy', href: `${APP_URL}/privacy` },
          ],
        },
        {
          title: 'Built by Ahsan Mahmood',
          items: [
            { label: 'aoneahsan.com', href: 'https://aoneahsan.com' },
            { label: 'LinkedIn', href: 'https://linkedin.com/in/aoneahsan' },
            { label: 'GitHub', href: 'https://github.com/aoneahsan' },
            { label: 'Support / donate', href: 'https://aoneahsan.com/payment?project-id=snapcontact&project-identifier=com.aoneahsan.snapcontact' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Ahsan Mahmood. Built with Docusaurus. Docs are MIT-licensed.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'json', 'typescript', 'kotlin', 'swift', 'yaml', 'diff'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
