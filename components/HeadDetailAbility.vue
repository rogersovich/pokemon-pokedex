<template>
  <div>
    <v-row>
      <v-col cols="6" sm="6" md="6">
        <nuxt-link :to="{ name: 'ability' }">
          <v-icon x-large>mdi-arrow-left</v-icon>
        </nuxt-link>
      </v-col>
      <number-ability></number-ability>
    </v-row>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
