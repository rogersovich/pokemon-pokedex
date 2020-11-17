<template>
  <v-col cols="6" sm="6" md="6">
    <h1
      v-if="$store.state.location.location.id.toString().length === 1"
      class="tw-text-4xl tw-text-right tw-capitalize tw-text-left tw-leading-tight tw-font-medium"
    >
      #00{{ $store.state.location.location.id }}
    </h1>
    <h1
      v-else-if="$store.state.location.location.id.toString().length === 2"
      class="tw-text-4xl tw-text-right tw-capitalize tw-text-left tw-leading-tight tw-font-medium"
    >
      #0{{ $store.state.location.location.id }}
    </h1>
    <h1
      v-else-if="$store.state.location.location.id.toString().length === 3"
      class="tw-text-4xl tw-text-right tw-capitalize tw-text-left tw-leading-tight tw-font-medium"
    >
      #{{ $store.state.location.location.id }}
    </h1>
  </v-col>
</template>

<script>
export default {}
</script>
