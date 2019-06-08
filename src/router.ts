import Vue from 'vue';
import Router, { RouterMode, RouteConfig } from 'vue-router';
import DisplayPage from './pages/DisplayPage.vue';

Vue.use(Router);

const mode: RouterMode = 'history';
const base: string = process.env.BASE_URL;
const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'reproducir',
    component: DisplayPage
  },
  {
    path: '/compartir',
    name: 'share-page',
    component: () => import(/* webpackChunkName: "share-page" */ './pages/SharePage.vue')
  }
];

export default new Router({
  mode,
  base,
  routes,
});
