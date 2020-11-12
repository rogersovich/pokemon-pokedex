<template>
  <div class="tw-mb-10">
    <v-row>
      <v-col cols="12" sm="6" md="6">
        <nuxt-link :to="{ name: 'pokemon' }">
          <v-icon x-large dark>mdi-arrow-left</v-icon>
        </nuxt-link>
      </v-col>
    </v-row>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="6" md="6">
        <h1
          class="tw-text-6xl tw-capitalize tw-text-white tw-text-left tw-leading-tight tw-font-medium"
        >
          {{ $store.state.pokemon.pokemon.name }}
        </h1>
      </v-col>
      <v-col cols="12" sm="4" md="4">
        <v-btn
          v-for="(type, i) in $store.state.pokemon.pokemon.types"
          :key="i"
          rounded
          depressed
          nuxt
          dark
          large
          width="120"
          color="#60DF71"
          :to="{ name: 'pokemon' }"
          class="tw-mr-4 tw-capitalize tw-font-normal tw-text-2xl tw-tracking-normal"
        >
          {{ type.type.name }}
        </v-btn>
      </v-col>
      <v-col cols="12" sm="2" md="2">
        <h1
          class="tw-text-4xl tw-text-right tw-capitalize tw-text-white tw-text-left tw-leading-tight tw-font-medium"
        >
          #00{{ $store.state.pokemon.pokemon.id }}
        </h1>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
