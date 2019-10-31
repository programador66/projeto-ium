const login=false;


const routes = [
  {
    path: '/index',
    component: () => import('pages/Index.vue')
    
    // children: [
    //   { path: '/Index', component: () => import('pages/Index.vue'), name: 'index' }
    // ]
  },
  {
    path: '/',
    component: () => import('pages/splashArt')
  },
  {
    path: '/vagas',
    component: () => import('pages/Vagas')
  },
  {
    path: '/empresa-perfil',
    component: () => import('pages/Empresa')
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
