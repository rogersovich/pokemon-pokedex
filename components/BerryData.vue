<template>
  <v-row align="center">
    <v-col cols="6" md="4">
      <h1
        class="tw-text-xl tw-capitalize tw-text-left tw-leading-tight tw-font-regular"
      >
        Natural Type
      </h1>
    </v-col>
    <button-type-berry></button-type-berry>
    <v-col cols="6" md="4">
      <h1
        class="tw-text-xl tw-capitalize tw-text-left tw-leading-tight tw-font-regular"
      >
        Natural Power
      </h1>
    </v-col>
    <v-col cols="6" md="8">
      <h1
        class="tw-text-xl tw-capitalize tw-text-left tw-leading-tight tw-font-regular"
      >
        {{ $store.state.berry.berry.natural_gift_power }}
      </h1>
    </v-col>
    <v-col cols="6" md="4">
      <h1
        class="tw-text-xl tw-capitalize tw-text-left tw-leading-tight tw-font-regular"
      >
        Size
      </h1>
    </v-col>
    <v-col cols="6" md="8">
      <h1
        class="tw-text-xl tw-capitalize tw-text-left tw-leading-tight tw-font-regular"
      >
        {{ $store.state.berry.berry.size }}
      </h1>
    </v-col>
    <v-col cols="6" md="4">
      <h1
        class="tw-text-xl tw-capitalize tw-text-left tw-leading-tight tw-font-regular"
      >
        Smoothness
      </h1>
    </v-col>
    <v-col cols="6" md="8">
      <h1
        class="tw-text-xl tw-capitalize tw-text-left tw-leading-tight tw-font-regular"
      >
        {{ $store.state.berry.berry.smoothness }}
      </h1>
    </v-col>
    <v-col cols="6" md="4">
      <h1
        class="tw-text-xl tw-capitalize tw-text-left tw-leading-tight tw-font-regular"
      >
        Soil Dryness
      </h1>
    </v-col>
    <v-col cols="6" md="8">
      <h1
        class="tw-text-xl tw-capitalize tw-text-left tw-leading-tight tw-font-regular"
      >
        {{ $store.state.berry.berry.soil_dryness }}
      </h1>
    </v-col>
    <v-col cols="6" md="4">
      <h1
        class="tw-text-xl tw-capitalize tw-text-left tw-leading-tight tw-font-regular"
      >
        Max Harvest
      </h1>
    </v-col>
    <v-col cols="6" md="8">
      <h1
        class="tw-text-xl tw-capitalize tw-text-left tw-leading-tight tw-font-regular"
      >
        {{ $store.state.berry.berry.max_harvest }}+
      </h1>
    </v-col>
    <v-col cols="6" md="4">
      <h1
        class="tw-text-xl tw-capitalize tw-text-left tw-leading-tight tw-font-regular"
      >
        Growth Time
      </h1>
    </v-col>
    <v-col cols="6" md="8">
      <h1
        class="tw-text-xl tw-capitalize tw-text-left tw-leading-tight tw-font-regular"
      >
        {{ $store.state.berry.berry.growth_time }}
      </h1>
    </v-col>
    <v-col offset-md="4" offset="0"></v-col>
  </v-row>
</template>

<script>
export default {}
</script>
