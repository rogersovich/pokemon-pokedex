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
        <v-card rounded="xl" class="pa-4">
          <v-tabs v-model="tab" show-arrows align-with-title centered>
            <v-tab v-for="item in items" :key="item">{{ item }}</v-tab>
          </v-tabs>

          <v-tabs-items v-model="tab">
            <tab-about-detail></tab-about-detail>
            <tab-stat-detail></tab-stat-detail>
            <tab-evolution-detail></tab-evolution-detail>
            <tab-move-detail></tab-move-detail>
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
