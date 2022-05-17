import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PokeDetail from '../views/PokeDetail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    components: {
      default: HomeView,
      Header: require('../components/header').default
    }
  },
  {
    path: '/poke-detail',
    name: 'pokeDetail',
    components: {
      default: PokeDetail,
      Header: require('../components/header').default
    },
    query: { pokemon: '?' }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
