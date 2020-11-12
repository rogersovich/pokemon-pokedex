<template>
  <v-col cols="12" sm="4" md="4">
    <div
      v-for="(type, i) in $store.state.pokemon.pokemon.types"
      :key="i"
      class="tw-inline-block"
    >
      <v-btn
        v-if="type.type.name == 'normal'"
        rounded
        nuxt
        dark
        large
        width="120"
        :to="{ name: 'pokemon' }"
        class="tw-mr-4 tw-capitalize tw-font-normal tw-text-2xl tw-tracking-normal tw-bg-normal"
      >
        {{ type.type.name }}
      </v-btn>
      <v-btn
        v-else-if="type.type.name == 'fighting'"
        rounded
        nuxt
        dark
        large
        width="120"
        :to="{ name: 'pokemon' }"
        class="tw-mr-4 tw-capitalize tw-font-normal tw-text-2xl tw-tracking-normal tw-bg-fighting"
      >
        {{ type.type.name }}
      </v-btn>
      <v-btn
        v-else-if="type.type.name == 'flying'"
        rounded
        nuxt
        dark
        large
        width="120"
        :to="{ name: 'pokemon' }"
        class="tw-mr-4 tw-capitalize tw-font-normal tw-text-2xl tw-tracking-normal tw-bg-flying"
      >
        {{ type.type.name }}
      </v-btn>
      <v-btn
        v-else-if="type.type.name == 'poison'"
        rounded
        nuxt
        dark
        large
        width="120"
        :to="{ name: 'pokemon' }"
        class="tw-mr-4 tw-capitalize tw-font-normal tw-text-2xl tw-tracking-normal tw-bg-poison"
      >
        {{ type.type.name }}
      </v-btn>
      <v-btn
        v-else-if="type.type.name == 'ground'"
        rounded
        nuxt
        dark
        large
        width="120"
        :to="{ name: 'pokemon' }"
        class="tw-mr-4 tw-capitalize tw-font-normal tw-text-2xl tw-tracking-normal tw-bg-ground"
      >
        {{ type.type.name }}
      </v-btn>
      <v-btn
        v-else-if="type.type.name == 'rock'"
        rounded
        nuxt
        dark
        large
        width="120"
        :to="{ name: 'pokemon' }"
        class="tw-mr-4 tw-capitalize tw-font-normal tw-text-2xl tw-tracking-normal tw-bg-rock"
      >
        {{ type.type.name }}
      </v-btn>
      <v-btn
        v-else-if="type.type.name == 'bug'"
        rounded
        nuxt
        dark
        large
        width="120"
        :to="{ name: 'pokemon' }"
        class="tw-mr-4 tw-capitalize tw-font-normal tw-text-2xl tw-tracking-normal tw-bg-bug"
      >
        {{ type.type.name }}
      </v-btn>
      <v-btn
        v-else-if="type.type.name == 'ghost'"
        rounded
        nuxt
        dark
        large
        width="120"
        :to="{ name: 'pokemon' }"
        class="tw-mr-4 tw-capitalize tw-font-normal tw-text-2xl tw-tracking-normal tw-bg-ghost"
      >
        {{ type.type.name }}
      </v-btn>
      <v-btn
        v-else-if="type.type.name == 'steel'"
        rounded
        nuxt
        dark
        large
        width="120"
        :to="{ name: 'pokemon' }"
        class="tw-mr-4 tw-capitalize tw-font-normal tw-text-2xl tw-tracking-normal tw-bg-steel"
      >
        {{ type.type.name }}
      </v-btn>
      <v-btn
        v-else-if="type.type.name == 'fire'"
        rounded
        nuxt
        dark
        large
        width="120"
        :to="{ name: 'pokemon' }"
        class="tw-mr-4 tw-capitalize tw-font-normal tw-text-2xl tw-tracking-normal tw-bg-fire"
      >
        {{ type.type.name }}
      </v-btn>
      <v-btn
        v-else-if="type.type.name == 'water'"
        rounded
        nuxt
        dark
        large
        width="120"
        :to="{ name: 'pokemon' }"
        class="tw-mr-4 tw-capitalize tw-font-normal tw-text-2xl tw-tracking-normal tw-bg-water"
      >
        {{ type.type.name }}
      </v-btn>
      <v-btn
        v-else-if="type.type.name == 'grass'"
        rounded
        nuxt
        dark
        large
        width="120"
        :to="{ name: 'pokemon' }"
        class="tw-mr-4 tw-capitalize tw-font-normal tw-text-2xl tw-tracking-normal tw-bg-grass"
      >
        {{ type.type.name }}
      </v-btn>
      <v-btn
        v-else-if="type.type.name == 'electric'"
        rounded
        nuxt
        dark
        large
        width="120"
        :to="{ name: 'pokemon' }"
        class="tw-mr-4 tw-capitalize tw-font-normal tw-text-2xl tw-tracking-normal tw-bg-electric"
      >
        {{ type.type.name }}
      </v-btn>
      <v-btn
        v-else-if="type.type.name == 'psychic'"
        rounded
        nuxt
        dark
        large
        width="120"
        :to="{ name: 'pokemon' }"
        class="tw-mr-4 tw-capitalize tw-font-normal tw-text-2xl tw-tracking-normal tw-bg-psychic"
      >
        {{ type.type.name }}
      </v-btn>
      <v-btn
        v-else-if="type.type.name == 'ice'"
        rounded
        nuxt
        dark
        large
        width="120"
        :to="{ name: 'pokemon' }"
        class="tw-mr-4 tw-capitalize tw-font-normal tw-text-2xl tw-tracking-normal tw-bg-ice"
      >
        {{ type.type.name }}
      </v-btn>
      <v-btn
        v-else-if="type.type.name == 'dragon'"
        rounded
        nuxt
        dark
        large
        width="120"
        :to="{ name: 'pokemon' }"
        class="tw-mr-4 tw-capitalize tw-font-normal tw-text-2xl tw-tracking-normal tw-bg-dragon"
      >
        {{ type.type.name }}
      </v-btn>
      <v-btn
        v-else-if="type.type.name == 'dark'"
        rounded
        nuxt
        dark
        large
        width="120"
        :to="{ name: 'pokemon' }"
        class="tw-mr-4 tw-capitalize tw-font-normal tw-text-2xl tw-tracking-normal tw-bg-dark"
      >
        {{ type.type.name }}
      </v-btn>
      <v-btn
        v-else-if="type.type.name == 'fairy'"
        rounded
        nuxt
        dark
        large
        width="120"
        :to="{ name: 'pokemon' }"
        class="tw-mr-4 tw-capitalize tw-font-normal tw-text-2xl tw-tracking-normal tw-bg-fairy"
      >
        {{ type.type.name }}
      </v-btn>
      <v-btn
        v-else-if="type.type.name == 'unknown'"
        rounded
        nuxt
        dark
        large
        width="120"
        :to="{ name: 'pokemon' }"
        class="tw-mr-4 tw-capitalize tw-font-normal tw-text-2xl tw-tracking-normal tw-bg-unknown"
      >
        {{ type.type.name }}
      </v-btn>
      <v-btn
        v-else
        rounded
        nuxt
        dark
        large
        width="120"
        :to="{ name: 'pokemon' }"
        class="tw-mr-4 tw-capitalize tw-font-normal tw-text-2xl tw-tracking-normal tw-bg-shadow"
      >
        {{ type.type.name }}
      </v-btn>
    </div>
  </v-col>
</template>

<script>
export default {}
</script>
