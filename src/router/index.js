import Vue from 'vue'
import Router from 'vue-router'
import VueHead from 'vue-head'
import Top from '../components/index'
import Profile from '../components/Profile'
import Activity from '../components/Activity'
import Link from '../components/Link'
import Doyagaeru from '../components/Doyagaeru'
import ComicSymbols from '../components/ComicSymbols'
import KyotoShrineBattle from '../components/KyotoShrineBattle'
import Umania from '../components/Umania'
import CatooonHouse from '../components/CatooonHouse'
import Processing from '../components/Processing'
import NewYearCard from '../components/NewYearCard'

Vue.use(Router)
Vue.use(VueHead)

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
    },
    {
      path: '/activity',
      name: 'Activity',
      component: Activity
    },
    {
      path: '/link',
      name: 'Link',
      component: Link
    },
    {
      path: '/doyagaeru',
      name: 'Doyagaeru',
      component: Doyagaeru
    },
    {
      path: '/new-year-card',
      name: 'NewYearCard',
      component: NewYearCard
    },
    {
      path: '/comic-symbols',
      name: 'ComicSymbols',
      component: ComicSymbols
    },
    {
      path: '/kyoto-shrine-battle',
      name: 'KyotoShrineBattle',
      component: KyotoShrineBattle
    },
    {
      path: '/umania',
      name: 'Umania',
      component: Umania
    },
    {
      path: '/catooon-house',
      name: 'CatooonHouse',
      component: CatooonHouse
    },
    {
      path: '/processing',
      name: 'Processing',
      component: Processing
    }
  ]
})
