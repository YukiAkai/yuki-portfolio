import Vue from 'vue'
import Router from 'vue-router'
import Top from '../components/index'
import Profile from '../components/Profile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Top',
      component: Top
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    }
  ]
})
