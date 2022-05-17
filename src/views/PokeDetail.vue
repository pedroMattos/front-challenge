<template>
  <v-container>
    <pokemon-cards :value="selectedPokemon[0]" detailed />
    <pokemon-cards detailed abilityCard :abilities="shortEffectEntries" />

    <v-layout>
      <v-btn plain href="/" color="#00A3FF">Voltar</v-btn>
    </v-layout>
  </v-container>
</template>

<script>
import pokemonCards from '../components/card'
import axios from 'axios'
export default {
  components: {
    pokemonCards
  },
  data() {
    return {
      selectedPokemon: null,
      shortEffectEntries: []
    }
  },
  computed: {
    queryParam() {
      return this.$route.query.pokemon
    },
  },
  watch: {
    queryParam: {
      immediate: true,
      handler(value) {
        if (value) {
          this.selectedPokemon = 
            this.$store.getters.pokemonsList
            .filter(pokemon => pokemon.pokeName == this.queryParam)
          
          // Query abilities
          this.getAbilities({ pokemon: this.selectedPokemon[0] })
        }
      }
    }
  },
  methods: {
    getAbilities({ pokemon }) {
      pokemon?.abilities.forEach(a => {
        axios.get(`https://pokeapi.co/api/v2/ability/${a.ability.name}`).then(resp => {
          this.shortEffectEntries
            .push(resp.data.effect_entries.filter(entry => entry.language.name == 'en')[0])
        })
      });
    },
    getLanguage({ abilityList }) {

    }
  },
}
</script>

<style lang="scss" scoped>
.v-btn {
  margin: 0 auto;
}
</style>
