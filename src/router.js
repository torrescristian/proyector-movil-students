import Vue from 'vue'
import Router from 'vue-router'
import DisplayPage from './pages/DisplayPage.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'reproducir',
      component: DisplayPage
    },
    {
      path: '/compartir',
      name: 'share-page',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "share-page" */ './pages/SharePage.vue')
    }
  ]
})
