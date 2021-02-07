import Vue from 'vue'
import Router from 'vue-router'
import VueHead from 'vue-head'
import Top from '../components/pages/index'
import Profile from '../components/pages/Profile'
import Activity from '../components/pages/Activity'
import Link from '../components/pages/Link'
import Doyagaeru from '../components/pages/top/Doyagaeru'
import ComicSymbols from '../components/pages/top/ComicSymbols'
import KyotoShrineBattle from '../components/pages/top/KyotoShrineBattle'
import Umania from '../components/pages/top/Umania'
import CatooonHouse from '../components/pages/top/CatooonHouse'
import Processing from '../components/pages/top/Processing'
import NewYearCard from '../components/pages/top/NewYearCard'

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
