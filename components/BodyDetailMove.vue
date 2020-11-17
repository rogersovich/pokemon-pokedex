<template>
  <div>
    <v-row align="center">
      <v-col cols="12" sm="12" md="12">
        <h1
          class="tw-text-2xl tw-capitalize tw-text-left tw-leading-tight tw-font-medium"
        >
          {{ $store.state.move.move.meta.category.name }}
        </h1>
      </v-col>
      <v-col cols="12" sm="12" md="12">
        <h1
          class="tw-text-6xl tw-capitalize tw-text-left tw-leading-tight tw-font-medium"
        >
          {{ $store.state.move.move.name }}
        </h1>
      </v-col>
      <v-col cols="12" sm="6" md="6">
        <h1
          class="tw-text-3xl tw-capitalize tw-text-left tw-leading-tight tw-font-bold mb-3"
        >
          Move Data
        </h1>
        <move-data></move-data>
      </v-col>
      <v-col cols="12" sm="6" md="6">
        <h1
          class="tw-text-3xl tw-capitalize tw-text-left tw-leading-tight tw-font-bold mb-3"
        >
          Other languages
        </h1>
        <v-row
          v-for="(data, i) in $store.state.move.move.names"
          :key="i"
          align="center"
        >
          <v-col cols="6" md="3">
            {{ data.language.name }}
          </v-col>
          <v-col cols="6" md="9">
            {{ data.name }}
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" md="10">
        <h1
          class="tw-text-3xl tw-capitalize tw-text-left tw-leading-tight tw-font-bold mb-3"
        >
          Effect
        </h1>
        <h1
          class="tw-text-xl tw-normal-case tw-text-left tw-tracking-wide tw-font-regular"
        >
          {{ $store.state.move.move.effect_entries[0].effect }}
        </h1>
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
