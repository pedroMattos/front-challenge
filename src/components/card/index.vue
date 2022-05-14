<template>
  <v-card
    elevation="0"
    max-width="250"
    height="280"
  >
    <v-layout align-center>
      <v-flex align-self-center>
        <v-img
          contain
          :lazy-src="value.imageUrl"
          max-height="96"
          max-width="96"
          :src="value.imageUrl" />
      </v-flex>
    </v-layout>
    <p class="poke-name">{{ value.pokeName | capitalizeFirst }}</p>
    <p class="poke-cod"><strong>Cod: {{ value.cod }}</strong></p>
    <div class="type"><p>{{ value.type }}</p></div>
  </v-card>
</template>

<script>
const COLORS = { fire: '#ee7f30' }

export default {
  props: {
    value: { type: Object, default: () => ({}) }
  },
  filters: {
    capitalizeFirst(value) {
      if (!value) return

      return value.charAt(0).toUpperCase() + value.slice(1)
    },
  },
  computed: {
    colors() {
      return COLORS
    }
  },
}
</script>

<style lang="scss" scoped>
.v-card {
  &.elevation-0 {
    box-shadow: 0px 4px 20px #E1E1E1 !important;
  }
  margin: 30px auto;
  padding: 9px 6px 20px;
  border-radius: 8px !important;
  .v-responsive {
    margin: 0 auto;
  }
  p {
    text-align: center;
    &.poke-name {
      margin-top: 10px;
      margin-bottom: 15px;
    }
    &.poke-cod {
      margin-bottom: 50px;
    }
  }
}
.type {
  height: 26px;
  width: 100%;
  background-color: #F7F7F7;
  border-radius: 5px !important;
  p {
    color: #C4C4C4;
    user-select: none;
  }
}
</style>
