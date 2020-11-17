<template>
  <div>
    <v-row>
      <v-col cols="12" sm="12" md="12">
        <h1
          class="tw-text-2xl tw-capitalize tw-text-left tw-leading-tight tw-font-medium"
        >
          {{ $store.state.berry.berry.item.name }}
        </h1>
      </v-col>
      <v-col cols="12" sm="12" md="12">
        <h1
          class="tw-text-6xl tw-capitalize tw-text-left tw-leading-tight tw-font-medium"
        >
          {{ $store.state.berry.berry.name }}
        </h1>
      </v-col>
      <v-col cols="12" sm="6" md="6">
        <h1
          class="tw-text-3xl tw-capitalize tw-text-left tw-leading-tight tw-font-bold mb-3"
        >
          Berry Data
        </h1>
        <berry-data></berry-data>
      </v-col>
      <v-col cols="12" sm="6" md="6">
        <h1
          class="tw-text-3xl tw-capitalize tw-text-left tw-leading-tight tw-font-bold mb-3"
        >
          Flavors
        </h1>
        <v-row>
          <v-col cols="12" md="12">
            <v-chip
              v-for="(data, i) in $store.state.berry.berry.flavors"
              :key="i"
              class="ma-2"
            >
              {{ data.flavor.name }}
            </v-chip>
          </v-col>
        </v-row>
        <h1
          class="tw-text-3xl tw-capitalize tw-text-left tw-leading-tight tw-font-bold mb-3 mt-3"
        >
          Firmness
        </h1>
        <v-row>
          <v-col cols="12" md="12">
            <h1
              class="tw-text-xl tw-capitalize tw-text-left tw-leading-tight tw-font-regular"
            >
              {{ $store.state.berry.berry.firmness.name }}
            </h1>
          </v-col>
        </v-row>
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
