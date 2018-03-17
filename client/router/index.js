import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from 'views/Dashboard'
import Post from 'views/Post'
import About from 'views/About'
import Detail from 'views/Detail'

Vue.use(Router)

export const routes = [
  {
    path: '/',
    component: Dashboard,
    meta: {
      title: 'Startship'
    }
  }, {
    path: '/post/:id',
    component: Post,
    meta: {
      title: 'Post'
    }
  }, {
    path: '/about',
    component: About,
    meta: {
      title: 'About'
    }
  }, {
    path: '/detail/:id',
    component: Detail
  }
]
export const router = new Router({ mode: 'history', routes })
