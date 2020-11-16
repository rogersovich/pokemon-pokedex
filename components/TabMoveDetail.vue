<template>
  <v-tab-item>
    <v-card flat class="px-0 lg:px-6">
      <v-card-title class="tw-text-gray-800"> List Moves </v-card-title>
      <v-chip-group
        v-if="$vuetify.breakpoint.smAndDown"
        column
        active-class="primary--text"
      >
        <v-chip
          v-for="(data, i) in $store.state.pokemon.pokemon.moves"
          :key="i"
          large
          class="px-4"
        >
          {{ data.move.name }}
        </v-chip>
      </v-chip-group>
      <v-chip-group
        v-if="$vuetify.breakpoint.mdAndUp"
        column
        active-class="primary--text"
      >
        <v-chip
          v-for="(data, i) in $store.state.pokemon.pokemon.moves"
          :key="i"
        >
          {{ data.move.name }}
        </v-chip>
      </v-chip-group>
    </v-card>
  </v-tab-item>
</template>

<script>
export default {}
</script>
