import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

/**
 * Sidebar layout for the SnapContact documentation site.
 * Every entry maps to a real .md file under docs/.
 */
const sidebars: SidebarsConfig = {
  mainSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'getting-started/installation',
        'getting-started/account-and-sign-in',
        'getting-started/quick-start',
      ],
    },
    {
      type: 'category',
      label: 'Features',
      collapsed: false,
      items: [
        'features/contacts',
        'features/business-card-scanner',
        'features/spaces',
        'features/reminders',
        'features/tools-import-export',
        'features/insights-analytics',
        'features/messaging-campaigns',
        'features/whatsapp-extension',
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      collapsed: true,
      items: [
        'guides/scan-a-business-card',
        'guides/capture-leads-from-whatsapp',
        'guides/import-existing-contacts',
        'guides/set-up-follow-up-reminders',
      ],
    },
    {
      type: 'category',
      label: 'Privacy & Data',
      collapsed: true,
      items: [
        'privacy/data-and-privacy',
        'privacy/permissions',
        'privacy/account-deletion',
      ],
    },
    {
      type: 'category',
      label: 'About',
      collapsed: true,
      items: ['about-the-author'],
    },
  ],
};

export default sidebars;
