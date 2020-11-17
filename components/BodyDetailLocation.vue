<template>
  <div class="tw-my-10">
    <v-row align="center">
      <v-col cols="12" sm="12" md="12">
        <h1
          class="tw-text-6xl tw-capitalize tw-text-left tw-leading-tight tw-font-medium"
        >
          {{ $store.state.location.location.name }}
        </h1>
      </v-col>
      <v-col cols="12" sm="12" md="12">
        <h1
          class="tw-text-3xl tw-capitalize tw-text-left tw-leading-tight tw-font-bold mb-3"
        >
          Region
        </h1>
        <h1 class="tw-text-xl tw-text-left tw-tracking-wide tw-font-regular">
          {{ $store.state.location.location.region.name }}
        </h1>
      </v-col>
      <v-col cols="12" sm="12" md="12">
        <h1
          class="tw-text-3xl tw-capitalize tw-text-left tw-leading-tight tw-font-bold mb-3"
        >
          Generation
        </h1>
        <v-btn
          v-for="(data, i) in $store.state.location.location.game_indices"
          :key="i"
          outlined
          class="ma-1"
        >
          {{ data.generation.name }}
        </v-btn>
      </v-col>
      <v-col cols="12" md="10">
        <h1
          class="tw-text-3xl tw-capitalize tw-text-left tw-leading-tight tw-font-bold mb-3"
        >
          Areas
        </h1>
        <v-btn
          v-for="(data, i) in $store.state.location.location.areas"
          :key="i"
          outlined
          class="ma-1 tw-normal-case"
        >
          {{ data.name }}
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>
