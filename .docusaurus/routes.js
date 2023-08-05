
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug','3d6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config','914'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content','c28'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry','0da'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes','244'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog','520'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive','f4c'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post','6c7'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post','f06'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post','bee'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags','e13'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus','ddf'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook','ede'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello','4c2'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola','752'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome','bfa'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page','be1'),
    exact: true
  },
  {
    path: '/test',
    component: ComponentCreator('/test','9d2'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs','edd'),
    routes: [
      {
        path: '/docs/docker/jekyllDocker',
        component: ComponentCreator('/docs/docker/jekyllDocker','4ff'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro','aed'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/react/react-query',
        component: ComponentCreator('/docs/react/react-query','3c6'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/react/reusableModal',
        component: ComponentCreator('/docs/react/reusableModal','2ad'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/react/test',
        component: ComponentCreator('/docs/react/test','068'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tailwind/test',
        component: ComponentCreator('/docs/tailwind/test','1d0'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/asyncStorage',
        component: ComponentCreator('/docs/tutorial-basics/asyncStorage','f37'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/backgroundTimer',
        component: ComponentCreator('/docs/tutorial-basics/backgroundTimer','c18'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/boolean',
        component: ComponentCreator('/docs/tutorial-basics/boolean','ac6'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/firebase-apple-auth',
        component: ComponentCreator('/docs/tutorial-basics/firebase-apple-auth','d08'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/firebaseGetData',
        component: ComponentCreator('/docs/tutorial-basics/firebaseGetData','e7c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/get-data-fetch',
        component: ComponentCreator('/docs/tutorial-basics/get-data-fetch','a9b'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/getApi',
        component: ComponentCreator('/docs/tutorial-basics/getApi','d45'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/mapview',
        component: ComponentCreator('/docs/tutorial-basics/mapview','df6'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/parse-data',
        component: ComponentCreator('/docs/tutorial-basics/parse-data','0a3'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/reusableModal',
        component: ComponentCreator('/docs/tutorial-basics/reusableModal','921'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/rnFirebaseApi',
        component: ComponentCreator('/docs/tutorial-basics/rnFirebaseApi','4d9'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/screencomp',
        component: ComponentCreator('/docs/tutorial-basics/screencomp','def'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/test',
        component: ComponentCreator('/docs/tutorial-basics/test','6c2'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/themeSwitch',
        component: ComponentCreator('/docs/tutorial-basics/themeSwitch','e5f'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/track-player',
        component: ComponentCreator('/docs/tutorial-basics/track-player','c00'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/Xcode Permissions',
        component: ComponentCreator('/docs/tutorial-basics/Xcode Permissions','8da'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/vite/deployVercel',
        component: ComponentCreator('/docs/vite/deployVercel','04e'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/','deb'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
