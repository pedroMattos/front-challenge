import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    actualPage: 0,
    pokemonsList: []
  },
  getters: {
    actualPage: (state) => state.actualPage,
    pokemonsList: (state) => state.pokemonsList
  },
  mutations: {
    changeActualPage: (state) => {
      state.actualPage += 26;
    },
    pokemonsList: (state, payload) => {
      state.pokemonsList = payload;
    }
  },
  actions: {
    getPokemonDetail({ state }, payload) {
      axios.get(payload.url).then(res => {
        let pokemonData = res.data
        state.pokemonsList.push({
          pokeName: pokemonData.name,
          imageUrl: pokemonData.sprites.front_default,
          cod: pokemonData.id,
          type: pokemonData.types[0].type.name,
          abilities: pokemonData.abilities
        })
      })
    },
    getPokemons({ state, dispatch }) {
      let page = state.actualPage
    
      axios.get(`https://pokeapi.co/api/v2/pokemon?limit=24&offset=${page}`).then(res => {
        let results = res.data.results
        results.forEach(pokemon => {
          dispatch('getPokemonDetail', pokemon)
        });
      })
    },
  },
  modules: {
  }
})
