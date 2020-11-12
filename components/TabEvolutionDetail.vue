<template>
  <v-tab-item>
    <v-card flat>
      <v-card-title class="tw-text-gray-800"> Evolution Chain </v-card-title>
      <v-row align="center" justify="center">
        <v-col cols="12" md="4">
          <v-img
            contain
            height="100"
            max-height="100"
            position="center"
            :src="
              'https://cdn.traction.one/pokedex/pokemon/' +
              $store.state.pokemon.pokemonEvolution.species.url
                .split('https://pokeapi.co/api/v2/pokemon-species/')[1]
                .replace('/', '') +
              '.png'
            "
          ></v-img>
          <h1 class="text-center tw-capitalize tw-text-xl">
            {{ $store.state.pokemon.pokemonEvolution.species.name }}
          </h1>
        </v-col>
        <v-col
          v-for="(level, i) in $store.state.pokemon.pokemonEvolution.evolves_to"
          :key="i + 'l'"
          cols="12"
          md="4"
          class="text-center justify-center"
        >
          <v-icon class="tw-block">mdi-arrow-right</v-icon>
          Level {{ level.evolution_details[0].min_level }}
        </v-col>
        <v-col
          v-for="(data, i) in $store.state.pokemon.pokemonEvolution.evolves_to"
          :key="i"
          cols="12"
          md="4"
        >
          <v-img
            contain
            height="100"
            max-height="100"
            position="center"
            :src="
              'https://cdn.traction.one/pokedex/pokemon/' +
              data.species.url
                .split('https://pokeapi.co/api/v2/pokemon-species/')[1]
                .replace('/', '') +
              '.png'
            "
          ></v-img>
          <h1 class="text-center tw-capitalize tw-text-xl">
            {{ data.species.name }}
          </h1>
        </v-col>
      </v-row>
      <v-row align="center" justify="center">
        <v-col
          v-for="(data, i) in $store.state.pokemon.pokemonEvolution.evolves_to"
          :key="i + 'f'"
          cols="12"
          md="4"
        >
          <v-img
            contain
            height="100"
            max-height="100"
            position="center"
            :src="
              'https://cdn.traction.one/pokedex/pokemon/' +
              data.species.url
                .split('https://pokeapi.co/api/v2/pokemon-species/')[1]
                .replace('/', '') +
              '.png'
            "
          ></v-img>
          <h1 class="text-center tw-capitalize tw-text-xl">
            {{ data.species.name }}
          </h1>
        </v-col>
        <v-col
          v-for="(level, i) in $store.state.pokemon.pokemonEvolution
            .evolves_to[0].evolves_to"
          :key="i + 'l2'"
          cols="12"
          md="4"
          class="text-center justify-center"
        >
          <v-icon class="tw-block">mdi-arrow-right</v-icon>
          Level {{ level.evolution_details[0].min_level }}
        </v-col>
        <v-col
          v-for="(data, i) in $store.state.pokemon.pokemonEvolution
            .evolves_to[0].evolves_to"
          :key="i + 'lv'"
          cols="12"
          md="4"
        >
          <v-img
            contain
            height="100"
            max-height="100"
            position="center"
            :src="
              'https://cdn.traction.one/pokedex/pokemon/' +
              data.species.url
                .split('https://pokeapi.co/api/v2/pokemon-species/')[1]
                .replace('/', '') +
              '.png'
            "
          ></v-img>
          <h1 class="text-center tw-capitalize tw-text-xl">
            {{ data.species.name }}
          </h1>
        </v-col>
      </v-row>
    </v-card>
  </v-tab-item>
</template>

<script>
export default {}
</script>
