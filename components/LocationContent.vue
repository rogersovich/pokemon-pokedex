<template>
  <v-container class="tw-py-16">
    <v-row justify="start" align="center" class="tw-mb-10">
      <v-col cols="12" sm="8" md="6">
        <nuxt-link :to="{ name: 'index' }">
          <v-icon x-large color="#1a202c" class="tw-mb-4"
            >mdi-arrow-left</v-icon
          >
        </nuxt-link>
        <h1
          class="tw-text-6xl tw-text-gray-900 tw-text-left tw-leading-tight tw-font-medium"
        >
          Locations
        </h1>
        <v-text-field
          v-model="search"
          :disabled="loading"
          hide-details="auto"
          label="Cari nama location disini"
          append-outer-icon="mdi-refresh"
          @keypress.enter="searchData()"
          @click:append-outer="getAllLocations(), clearInput()"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        v-for="(data, i) in $store.state.location.locations"
        :key="i"
        cols="12"
        sm="4"
        md="3"
      >
        <v-card color="#dfe4ea" rounded="lg" flat class="pa-2">
          <v-row>
            <v-col cols="12" sm="12" md="12">
              <h1
                class="tw-text-xl tw-text-center tw-tracking-wide tw-font-medium tw-mb-2 tw-capitalize"
              >
                {{ data.name }}
              </h1>

              <v-btn
                rounded
                depressed
                nuxt
                block
                color="#fff"
                :to="{ name: 'location-slug', params: { slug: data.name } }"
                class="tw-my-2 tw-font-normal tw-font-regular tw-normal-case tw-text-lg tw-tracking-wide tw-text-gray-900"
              >
                Detail
              </v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <div class="text-center tw-mt-4">
      <v-btn
        v-if="
          $store.state.location.next !== null &&
          !loading &&
          !$store.state.location.search
        "
        depressed
        large
        dark
        color="#5a67d8"
        class="tw-mb-2 tw-font-normal tw-normal-case tw-text-xl tw-tracking-wide focus:tw-outline-none"
        @click="loadMore"
      >
        Load More
      </v-btn>
      <v-btn v-if="loading && !$store.state.location.search" text large dark>
        <lottie v-if="loading" :height="150" :options="lottieOptions" />
      </v-btn>
    </div>
  </v-container>
</template>

<script>
import lottie from 'vue-lottie/src/lottie.vue'
import * as animationData from '~/assets/animate1.json'

export default {
  components: {
    lottie,
  },
  data() {
    return {
      search: '',
      loading: false,
      lottieOptions: { animationData: animationData.default },
    }
  },
  methods: {
    clearInput() {
      this.search = ''
    },
    async getAllLocations() {
      await this.$store.dispatch('location/getLocations')
    },
    async loadMore() {
      this.loading = true
      const urlNext = this.$store.state.location.next.split('?')[1]
      await this.$store.dispatch('location/addLocationMore', urlNext)
      this.page++
      this.loading = false
    },
    async searchData() {
      this.loading = true
      await this.$store.dispatch('location/searchLocation', this.search)
      this.loading = false
    },
  },
}
</script>
