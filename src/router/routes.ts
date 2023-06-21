import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },
  {
    path: '/gis',
    component: () => import('layouts/GisLayout.vue'),
    children: [
      { path: '', component: () => import('pages/GisPage.vue') },
      { path: '/test', component: () => import('pages/GisTest.vue') },
      { path: '/test2', component: () => import('pages/GisTest2.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
