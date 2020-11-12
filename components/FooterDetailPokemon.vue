<template>
  <div>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="6" md="6">
        <nuxt-link
          :to="{
            name: 'pokemon-slug',
            params: { slug: $store.state.pokemon.pokemonPrev.name },
          }"
        >
          <v-icon dark> mdi-arrow-left </v-icon>
          <img
            class="tw-inline-block tw-h-12"
            :src="
              'https://cdn.traction.one/pokedex/pokemon/' +
              $store.state.pokemon.pokemonPrev.id +
              '.png'
            "
          />
        </nuxt-link>
      </v-col>
      <v-col cols="12" sm="6" md="6" class="text-right">
        <nuxt-link
          :to="{
            name: 'pokemon-slug',
            params: { slug: $store.state.pokemon.pokemonNext.name },
          }"
        >
          <img
            class="tw-inline-block tw-h-12"
            :src="
              'https://cdn.traction.one/pokedex/pokemon/' +
              $store.state.pokemon.pokemonNext.id +
              '.png'
            "
          />
          <v-icon dark> mdi-arrow-right </v-icon>
        </nuxt-link>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {}
</script>
