<template>
  <v-container>
    <br>
    <v-text-field
      label="Pesquise por nome ou código"
      filled
      rounded
      outlined
      clearable
      dense
      background-color="#FFFFFF"
      v-model="search"
    ></v-text-field>
    <h1>Pokémons</h1>
    <v-layout row>
      <v-flex align-self-center xs2 v-for="(pokemon, index) in filteredPokemons.length > 0 ? filteredPokemons : pokemonsList" :key="index">
        <router-link :to="{ name: 'pokeDetail', query: { pokemon: pokemon.pokeName } }">
          <pokemon-cards :value="pokemon" />
        </router-link>
      </v-flex>
    </v-layout>

    <br>

    <p class="centralizer">
      <v-progress-circular
        indeterminate
        color="primary"
      ></v-progress-circular>
    </p>
  </v-container>
</template>

<script>
import pokemonCards from '../components/card'
  export default {
    components: {
      pokemonCards
    },
    beforeMount() {
      this.$store.dispatch('getPokemons')
    },
    mounted() {
      window.addEventListener('scroll',()=>{
        if(window.scrollY + window.innerHeight >= 
          document.documentElement.scrollHeight) {
            this.$store.commit('changeActualPage')
            this.$store.dispatch('getPokemons')
        }
      })
    },
    computed: {
      pokemonsList() {
        let pokemonList = this.$store.getters.pokemonsList.sort((a, b) => a.cod - b.cod)
        return pokemonList
      }
    },
    data() {
      return {
        search: null,
        filteredPokemons: []
      }
    },
    watch: {
      search(v) {
        if (v) {
          this.filteredPokemons = this.pokemonsList.filter(
            pokemon => pokemon.pokeName.indexOf(v.toLowerCase()) > -1 || pokemon.cod == v
            ) 
        } else {
          this.filteredPokemons = []
        }
      }
    },
  }
</script>

<style lang="scss" scoped>
h1 {
  margin-left: 15px;
  margin-bottom: 38px;
}
.centralizer {
  text-align: center;
}
a {
  text-decoration: none;
}
</style>
