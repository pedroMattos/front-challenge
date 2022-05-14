<template>
  <div>
    <v-simple-table
    fixed-header
    height="500px">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">
              Name
            </th>
            <th class="text-left">
              Gender
            </th>
            <th class="text-left">
              Birth
            </th>
            <th class="text-left">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, index) in patientsList"
            :key="index"
          >
            <td>{{ item.name | capitalize }}</td>
            <td>{{ item.gender | capitalizeFirst }}</td>
            <td>{{ item.birth | formatDate }}</td>
            <td><v-btn icon>
              <v-icon>mdi-play-circle</v-icon></v-btn></td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    {{ patientsList }}
  </div>
</template>

<script>
export default {
  computed: {
    patientsList() {
      return this.$store.getters.patientsList
    }
  },
  mounted() {
    this.$store.dispatch('getPatients')
    this.$store.commit('changeActualPage', 2)
    this.$store.dispatch('getPatients')
  },
  filters: {
    capitalize(value) {
      if (!value) return
      value = value.split(' ')

      value.forEach((name, index) => {
        value[index] = name.charAt(0).toUpperCase() + name.slice(1)
      });

      return value.join(' ')
    },
    capitalizeFirst(value) {
      if (!value) return

      return value.charAt(0).toUpperCase() + value.slice(1)
    },
    formatDate(value) {
      return `${value.slice(8, 10)}/${value.slice(5, 7)}/${value.slice(0, 4)}`;
    }
  }
}
</script>
