import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import AllFilmsPage from '../pages/AllFilmsPage'
// import FilmPage from '../pages/FilmPage'

Vue.use(VueRouter)

// export default new VueRouter({
//   routes: [
//     {
//       path: '/',
//       component: FilmPage
//     },
//     {
//       path: '/films',
//       component: AllFilmsPage
//     }
//   ]
// })

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
