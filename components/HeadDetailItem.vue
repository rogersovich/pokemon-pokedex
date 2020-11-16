<template>
  <div class="tw-mb-10">
    <v-row>
      <v-col cols="6" sm="6" md="6">
        <nuxt-link :to="{ name: 'item' }">
          <v-icon x-large>mdi-arrow-left</v-icon>
        </nuxt-link>
      </v-col>
      <number-item></number-item>
    </v-row>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
