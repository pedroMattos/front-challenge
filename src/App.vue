<template>
  <v-app class="main">
    <v-main>
      <router-view name="Header"></router-view>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  })
}
</script>

<style lang="scss" scoped>
.main {
  background-color: #E5E5E5 !important;
}
</style>
