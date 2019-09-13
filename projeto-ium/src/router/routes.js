const login=false;


const routes = [
  {
    path: '/',
    component: () => import('pages/Index.vue')
    
    // children: [
    //   { path: '/Index', component: () => import('pages/Index.vue'), name: 'index' }
    // ]
  },
  {
    path: '/login',
    component: () => import('pages/login')
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
