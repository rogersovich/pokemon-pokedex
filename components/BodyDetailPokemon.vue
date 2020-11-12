<template>
  <div>
    <v-row>
      <v-col cols="12" sm="6" md="6">
        <v-img
          contain
          height="400"
          max-height="400"
          position="left"
          :src="
            'https://cdn.traction.one/pokedex/pokemon/' +
            $store.state.pokemon.pokemon.id +
            '.png'
          "
        ></v-img>
      </v-col>
      <v-col cols="12" sm="6" md="6">
        <v-card max-height="400" height="400" rounded="xl" class="pa-6">
          <v-tabs v-model="tab" align-with-title>
            <v-tab v-for="item in items" :key="item">{{ item }}</v-tab>
          </v-tabs>

          <v-tabs-items v-model="tab">
            <v-tab-item v-for="item in items" :key="item">
              <v-card flat>
                <v-card-text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </v-card-text>
              </v-card>
            </v-tab-item>
          </v-tabs-items>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tab: null,
      items: ['About', 'Base Stats', 'Evolutions', 'Moves'],
    }
  },
}
</script>
