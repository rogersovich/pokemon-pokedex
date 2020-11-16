<template>
  <div class="tw-mb-10">
    <v-row>
      <v-col cols="6" sm="6" md="6">
        <nuxt-link :to="{ name: 'move' }">
          <v-icon x-large>mdi-arrow-left</v-icon>
        </nuxt-link>
      </v-col>
      <number-move></number-move>
    </v-row>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
