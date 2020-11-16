<template>
  <div class="tw-mb-10">
    <v-row>
      <v-col cols="6" sm="6" md="6">
        <nuxt-link :to="{ name: 'pokemon' }">
          <v-icon x-large dark>mdi-arrow-left</v-icon>
        </nuxt-link>
      </v-col>
      <v-col cols="6">
        <number-pokemon v-if="$vuetify.breakpoint.smAndDown"></number-pokemon>
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
      <button-type></button-type>
      <number-pokemon v-if="$vuetify.breakpoint.mdAndUp"></number-pokemon>
    </v-row>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
