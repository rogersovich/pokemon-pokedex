<template>
  <v-tab-item>
    <v-card flat>
      <v-card-title
        class="tw-text-gray-800 tw-font-normal"
        v-text="
          $store.state.pokemon.pokemonSpecies.flavor_text_entries[3].flavor_text
        "
      >
      </v-card-title>

      <v-row>
        <v-col cols="12" md="12" class="pb-0">
          <v-card-title class="py-0"> Custom </v-card-title>
        </v-col>
        <v-col cols="6" md="6">
          <v-card-text
            class="py-0 tw-text-gray-800 tw-font-normal tw-text-lg mb-2"
          >
            Height
          </v-card-text>
          <v-card-text class="py-0 tw-text-gray-800 tw-font-normal tw-text-lg">
            Weight
          </v-card-text>
        </v-col>
        <v-col cols="6" md="6">
          <v-card-text
            class="py-0 tw-text-gray-800 tw-font-normal tw-text-lg mb-2"
          >
            {{ $store.state.pokemon.pokemon.height / 10 + ' m' }}
          </v-card-text>
          <v-card-text
            class="py-0 tw-text-gray-800 tw-font-normal tw-text-lg mb-2"
          >
            {{ $store.state.pokemon.pokemon.weight / 10 + ' kg' }}
          </v-card-text>
        </v-col>
        <v-col cols="12" md="12" class="pb-0">
          <v-card-title class="py-0"> Breeding </v-card-title>
        </v-col>
        <v-col cols="6" md="6">
          <v-card-text
            class="py-0 tw-text-gray-800 tw-font-normal tw-text-lg mb-2"
          >
            Gender
          </v-card-text>
        </v-col>
        <v-col cols="6" md="6">
          <v-icon color="primary">mdi-gender-male</v-icon>
          <v-icon color="#ff9ff3">mdi-gender-female</v-icon>
        </v-col>
      </v-row>
    </v-card>
  </v-tab-item>
</template>

<script>
export default {}
</script>
