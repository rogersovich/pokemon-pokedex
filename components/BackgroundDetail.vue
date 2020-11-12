<template>
  <v-app dark>
    <v-main
      v-if="$store.state.pokemon.pokemon.types[0].type.name == 'normal'"
      class="tw-bg-normal"
    >
      <nuxt />
    </v-main>
    <v-main
      v-else-if="$store.state.pokemon.pokemon.types[0].type.name == 'fighting'"
      class="tw-bg-fighting"
    >
      <nuxt />
    </v-main>
    <v-main
      v-else-if="$store.state.pokemon.pokemon.types[0].type.name == 'flying'"
      class="tw-bg-flying"
    >
      <nuxt />
    </v-main>
    <v-main
      v-else-if="$store.state.pokemon.pokemon.types[0].type.name == 'poison'"
      class="tw-bg-poison"
    >
      <nuxt />
    </v-main>
    <v-main
      v-else-if="$store.state.pokemon.pokemon.types[0].type.name == 'ground'"
      class="tw-bg-ground"
    >
      <nuxt />
    </v-main>
    <v-main
      v-else-if="$store.state.pokemon.pokemon.types[0].type.name == 'rock'"
      class="tw-bg-rock"
    >
      <nuxt />
    </v-main>
    <v-main
      v-else-if="$store.state.pokemon.pokemon.types[0].type.name == 'bug'"
      class="tw-bg-bug"
    >
      <nuxt />
    </v-main>
    <v-main
      v-else-if="$store.state.pokemon.pokemon.types[0].type.name == 'ghost'"
      class="tw-bg-ghost"
    >
      <nuxt />
    </v-main>
    <v-main
      v-else-if="$store.state.pokemon.pokemon.types[0].type.name == 'steel'"
      class="tw-bg-steel"
    >
      <nuxt />
    </v-main>
    <v-main
      v-else-if="$store.state.pokemon.pokemon.types[0].type.name == 'fire'"
      class="tw-bg-fire"
    >
      <nuxt />
    </v-main>
    <v-main
      v-else-if="$store.state.pokemon.pokemon.types[0].type.name == 'water'"
      class="tw-bg-water"
    >
      <nuxt />
    </v-main>
    <v-main
      v-else-if="$store.state.pokemon.pokemon.types[0].type.name == 'grass'"
      class="tw-bg-grass"
    >
      <nuxt />
    </v-main>
    <v-main
      v-else-if="$store.state.pokemon.pokemon.types[0].type.name == 'electric'"
      class="tw-bg-electric"
    >
      <nuxt />
    </v-main>
    <v-main
      v-else-if="$store.state.pokemon.pokemon.types[0].type.name == 'psychic'"
      class="tw-bg-psychic"
    >
      <nuxt />
    </v-main>
    <v-main
      v-else-if="$store.state.pokemon.pokemon.types[0].type.name == 'ice'"
      class="tw-bg-ice"
    >
      <nuxt />
    </v-main>
    <v-main
      v-else-if="$store.state.pokemon.pokemon.types[0].type.name == 'dragon'"
      class="tw-bg-dragon"
    >
      <nuxt />
    </v-main>
    <v-main
      v-else-if="$store.state.pokemon.pokemon.types[0].type.name == 'dark'"
      class="tw-bg-dark"
    >
      <nuxt />
    </v-main>
    <v-main
      v-else-if="$store.state.pokemon.pokemon.types[0].type.name == 'fairy'"
      class="tw-bg-fairy"
    >
      <nuxt />
    </v-main>
    <v-main
      v-else-if="$store.state.pokemon.pokemon.types[0].type.name == 'unknown'"
      class="tw-bg-unknown"
    >
      <nuxt />
    </v-main>
    <v-main v-else class="tw-bg-shadow">
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {}
</script>
