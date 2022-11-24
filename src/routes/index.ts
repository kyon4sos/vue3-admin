import useAuth from '@/hooks/use-auth';
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const adminLayout = () => import('@/layout/admin-layout.vue');
const workplace = () => import('@/pages/dashbord/workplace/workplace.vue');
const login = () => import('@/pages/auth/login/login.vue');
const analysis = () => import('@/pages/visualization/analysis/analysis.vue');
// const multiAnalysis = () =>
//   import("@/pages/visualization/multi-d-analysis/index.vue");
const searchTable = () => import('@/pages/list/search-table/search-table.vue');
// const card = () => import("@/pages/list/card/index.vue");
const success = () => import('@/pages/result/success/success.vue');
const fail = () => import('@/pages/result/fail/fail.vue');
const permissionDenied = () => import('@/pages/exception/403/403.vue');
const notFound = () => import('@/pages/exception/404/404.vue');
const systemError = () => import('@/pages/exception/500/500.vue');
const info = () => import('@/pages/user/info/info.vue');
const setting = () => import('@/pages/user/setting/setting.vue');

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    redirect: '/dashboard/workplace',
    meta: {
      hidden: true,
    },
  },
  {
    path: '/login',
    name: 'login',
    component: login,
    meta: {
      hidden: true,
    },
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    meta: {
      title: 'Dashboard',
      icon: 'ant-design:appstore-outlined',
    },
    component: adminLayout,
    children: [
      {
        path: 'workplace',
        name: 'dashboard/workplace',
        meta: {
          title: 'workplace',
          icon: 'dashboard-one',
        },
        component: workplace,
      },
    ],
  },
  {
    path: '/visualization',
    name: 'visualization',
    meta: {
      title: 'Data Visualization',
      icon: 'material-symbols:insert-chart-outline-sharp',
    },
    component: adminLayout,
    children: [
      {
        path: 'analysis',
        name: 'analysis',
        meta: {
          title: 'Analysis',
          icon: 'data-sheet',
        },
        component: analysis,
      },
      // {
      //   path: "multi-d-analysis",
      //   name: "multi-d-analysis",
      //   meta: {
      //     title: "Multi-D Analysis",
      //     icon: "data-sheet",
      //   },
      //   component: multiAnalysis,
      // },
    ],
  },
  {
    path: '/list',
    name: 'list',
    meta: {
      title: 'List',
      icon: 'ant-design:ordered-list-outlined',
    },
    component: adminLayout,
    children: [
      {
        path: 'search-table',
        name: 'list',
        meta: {
          title: 'Search Table',
          icon: 'ant-design:ordered-list-outlined',
        },
        component: searchTable,
      },
    ],
  },
  {
    path: '/result',
    name: 'result',
    meta: {
      title: 'Result',
      icon: 'carbon:result',
    },
    component: adminLayout,
    children: [
      {
        path: 'success',
        name: 'success',
        meta: {
          title: 'Success',
          icon: 'folder-success',
        },
        component: success,
      },
      {
        path: 'fail',
        name: 'fail',
        meta: {
          title: 'Fail',
          icon: 'list-checkbox',
        },
        component: fail,
      },
    ],
  },
  {
    path: '/exception',
    name: 'exception',
    meta: {
      title: 'exception',
      icon: 'ant-design:exception-outlined',
    },
    component: adminLayout,
    children: [
      {
        path: '403',
        name: '403',
        meta: {
          title: '403',
          icon: 'list-checkbox',
        },
        component: permissionDenied,
      },
      {
        path: '404',
        name: '404',
        meta: {
          title: '404',
          icon: 'list-checkbox',
        },
        component: notFound,
      },
      {
        path: '500',
        name: '500',
        meta: {
          title: '500',
          icon: 'list-checkbox',
        },
        component: systemError,
      },
    ],
  },
  {
    path: '/user',
    name: 'user',
    meta: {
      title: 'User',
      icon: 'ant-design:user-outlined',
    },
    component: adminLayout,
    children: [
      {
        path: 'info',
        name: 'info',
        meta: {
          title: 'info',
          icon: 'list-checkbox',
        },
        component: info,
      },
      {
        path: 'setting',
        name: 'setting',
        meta: {
          title: 'Setting',
          icon: 'list-checkbox',
        },
        component: setting,
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: notFound,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, _) => {
  const { isLogin } = useAuth();
  if (!isLogin && to.name !== 'login') {
    router.push({
      name: 'login',
      query: {
        redirectUrl: router.currentRoute.value.path,
      },
    });
  }
});

export default router;
