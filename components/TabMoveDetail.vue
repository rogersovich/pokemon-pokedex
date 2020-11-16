<template>
  <v-tab-item>
    <v-card flat class="px-6">
      <v-card-title class="tw-text-gray-800"> List Moves </v-card-title>
      <v-chip-group column active-class="primary--text">
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
