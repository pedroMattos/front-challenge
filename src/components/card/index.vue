<template>
  <v-card
    elevation="0"
    :max-width="detailed ? 540 : 250"
    height="280"
  >
    <template v-if="!abilityCard">
      <v-layout align-center>
        <v-flex align-self-center>
          <v-img
            contain
            :lazy-src="value.imageUrl"
            :max-height="detailed ? 105 : 96"
            :max-width="detailed ? 542 : 96"
            :src="value.imageUrl" />
        </v-flex>
      </v-layout>
      <p class="poke-name"><strong>{{ value.pokeName | capitalizeFirst }}</strong></p>
      <p v-if="!detailed" class="poke-cod"><strong>Cod: {{ value.cod }}</strong></p>
      <div :class="{ type: true, 'custom-card-action': detailed }"><p>{{ value.type }}</p></div>
    </template>
    <template v-else>
      <p><strong>Habilidades</strong></p>
      <v-list>
        <v-list-item-group>
          <template v-for="(item, index) in abilities">
            <v-list-item :key="index">
              <v-tooltip top>
                <template v-slot:activator="{ on, attrs }">
                  <v-list-item-content
                  v-bind="attrs"
                  v-on="on">
                    <v-list-item-title v-text="item.short_effect"></v-list-item-title>
                  </v-list-item-content>
                </template>
                <span>{{ item.short_effect }}</span>
              </v-tooltip>

            </v-list-item>

            <v-divider
              v-if="index < value.length - 1"
              :key="index"
            ></v-divider>
          </template>
        </v-list-item-group>
      </v-list>
    </template>
  </v-card>
</template>

<script>
const COLORS = { fire: '#ee7f30' }

export default {
  props: {
    value: { type: Object, default: () => ({}) },
    detailed: { type: Boolean, default: false },
    abilityCard: { type: Boolean, default: false },
    abilities: { type: Array, defaul: () => [] }
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
  &.custom-card-action {
    margin-top: 80px;
  }
}
</style>
