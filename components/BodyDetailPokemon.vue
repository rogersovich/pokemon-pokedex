<template>
  <div>
    <v-row>
      <v-col cols="12" sm="6" md="6">
        <v-img
          contain
          height="400"
          max-height="400"
          :src="
            'https://pokeres.bastionbot.org/images/pokemon/' +
            $store.state.pokemon.pokemon.id +
            '.png'
          "
        ></v-img>
      </v-col>
      <v-col cols="12" sm="6" md="6">
        <v-card>
          <v-card-title> ROger </v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {}
</script>
