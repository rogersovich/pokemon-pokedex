<template>
  <div>
    <v-row justify="center" align="center">
      <v-col cols="6" sm="6" md="6">
        <nuxt-link
          :to="{
            name: 'berry-slug',
            params: { slug: $store.state.berry.berryPrev.name },
          }"
        >
          <v-icon> mdi-arrow-left </v-icon>
          <h1
            class="tw-text-black tw-inline-block tw-text-lg tw-text-capitalize"
          >
            {{ $store.state.berry.berryPrev.name }}
          </h1>
        </nuxt-link>
      </v-col>
      <v-col cols="6" sm="6" md="6" class="text-right">
        <nuxt-link
          :to="{
            name: 'berry-slug',
            params: { slug: $store.state.berry.berryNext.name },
          }"
        >
          <h1
            class="tw-text-black tw-inline-block tw-text-lg tw-text-capitalize"
          >
            {{ $store.state.berry.berryNext.name }}
          </h1>
          <v-icon> mdi-arrow-right </v-icon>
        </nuxt-link>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {}
</script>
