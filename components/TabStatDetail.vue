<template>
  <v-tab-item>
    <v-card flat class="px-6">
      <v-row
        v-for="(data, i) in $store.state.pokemon.pokemon.stats"
        :key="i"
        align="center"
        justify="center"
      >
        <v-col cols="12" md="4" class="tw-capitalize">
          {{ data.stat.name }}
        </v-col>
        <v-col cols="12" md="2" class="text-center">
          {{ data.base_stat }}
        </v-col>
        <v-col cols="12" md="6">
          <v-progress-linear
            :value="data.base_stat"
            :color="data.base_stat < 50 ? '#ffb158' : '#55E288'"
          ></v-progress-linear>
        </v-col>
      </v-row>
    </v-card>
  </v-tab-item>
</template>

<script>
export default {}
</script>
