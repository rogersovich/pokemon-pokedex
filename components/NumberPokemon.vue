<template>
  <v-col cols="12" sm="2" md="2">
    <h1
      v-if="$store.state.pokemon.pokemon.id.toString().length === 1"
      class="tw-text-4xl tw-text-right tw-capitalize tw-text-white tw-text-left tw-leading-tight tw-font-medium"
    >
      #00{{ $store.state.pokemon.pokemon.id }}
    </h1>
    <h1
      v-else-if="$store.state.pokemon.pokemon.id.toString().length === 2"
      class="tw-text-4xl tw-text-right tw-capitalize tw-text-white tw-text-left tw-leading-tight tw-font-medium"
    >
      #0{{ $store.state.pokemon.pokemon.id }}
    </h1>
    <h1
      v-else-if="$store.state.pokemon.pokemon.id.toString().length === 3"
      class="tw-text-4xl tw-text-right tw-capitalize tw-text-white tw-text-left tw-leading-tight tw-font-medium"
    >
      #{{ $store.state.pokemon.pokemon.id }}
    </h1>
  </v-col>
</template>

<script>
export default {}
</script>
