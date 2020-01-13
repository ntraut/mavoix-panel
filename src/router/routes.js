
const routes = [
  {
    path: '/auth',
    component: () => import('~/layouts/AuthLayout.vue'),
    children: [
      /* Auth homepage */
      { name: 'auth', path: '/', component: () => import('~/pages/Authenticate.vue') }
    ]
  },
  {
    name: 'base',
    path: '/:assets?',
    component: () => import('~/layouts/HomeLayout.vue'),
    children: [
      /* Homepage */
      { name: 'home', path: '/home', component: () => import('~/pages/Index.vue') },

      /* Tab editor */
      { name: 'tab', path: '/tabs/:slug', component: () => import('~/pages/TabEditor.vue') },

      /* Devices routes */
      { name: 'device', path: '/devices/:slug', component: () => import('~/pages/Device.vue') }
    ]
  }
]

if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('~/pages/Error404.vue')
  })
}

export default routes
