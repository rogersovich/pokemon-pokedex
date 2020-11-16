<template>
  <v-col cols="6" md="9">
    <v-btn
      v-if="$store.state.move.move.type.name == 'normal'"
      rounded
      dark
      depressed
      small
      width="100"
      nuxt
      :to="{ name: 'move' }"
      class="tw-capitalize tw-font-medium tw-tracking-wider tw-bg-normal"
    >
      {{ $store.state.move.move.type.name }}
    </v-btn>
    <v-btn
      v-if="$store.state.move.move.type.name == 'fighting'"
      rounded
      dark
      depressed
      small
      width="100"
      nuxt
      :to="{ name: 'move' }"
      class="tw-capitalize tw-font-medium tw-tracking-wider tw-bg-fighting"
    >
      {{ $store.state.move.move.type.name }}
    </v-btn>
    <v-btn
      v-if="$store.state.move.move.type.name == 'flying'"
      rounded
      dark
      depressed
      small
      width="100"
      nuxt
      :to="{ name: 'move' }"
      class="tw-capitalize tw-font-medium tw-tracking-wider tw-bg-flying"
    >
      {{ $store.state.move.move.type.name }}
    </v-btn>
    <v-btn
      v-if="$store.state.move.move.type.name == 'poison'"
      rounded
      dark
      depressed
      small
      width="100"
      nuxt
      :to="{ name: 'move' }"
      class="tw-capitalize tw-font-medium tw-tracking-wider tw-bg-poison"
    >
      {{ $store.state.move.move.type.name }}
    </v-btn>
    <v-btn
      v-if="$store.state.move.move.type.name == 'ground'"
      rounded
      dark
      depressed
      small
      width="100"
      nuxt
      :to="{ name: 'move' }"
      class="tw-capitalize tw-font-medium tw-tracking-wider tw-bg-ground"
    >
      {{ $store.state.move.move.type.name }}
    </v-btn>
    <v-btn
      v-if="$store.state.move.move.type.name == 'rock'"
      rounded
      dark
      depressed
      small
      width="100"
      nuxt
      :to="{ name: 'move' }"
      class="tw-capitalize tw-font-medium tw-tracking-wider tw-bg-rock"
    >
      {{ $store.state.move.move.type.name }}
    </v-btn>
    <v-btn
      v-if="$store.state.move.move.type.name == 'bug'"
      rounded
      dark
      depressed
      small
      width="100"
      nuxt
      :to="{ name: 'move' }"
      class="tw-capitalize tw-font-medium tw-tracking-wider tw-bg-bug"
    >
      {{ $store.state.move.move.type.name }}
    </v-btn>
    <v-btn
      v-if="$store.state.move.move.type.name == 'ghost'"
      rounded
      dark
      depressed
      small
      width="100"
      nuxt
      :to="{ name: 'move' }"
      class="tw-capitalize tw-font-medium tw-tracking-wider tw-bg-ghost"
    >
      {{ $store.state.move.move.type.name }}
    </v-btn>
    <v-btn
      v-if="$store.state.move.move.type.name == 'steel'"
      rounded
      dark
      depressed
      small
      width="100"
      nuxt
      :to="{ name: 'move' }"
      class="tw-capitalize tw-font-medium tw-tracking-wider tw-bg-steel"
    >
      {{ $store.state.move.move.type.name }}
    </v-btn>
    <v-btn
      v-if="$store.state.move.move.type.name == 'fire'"
      rounded
      dark
      depressed
      small
      width="100"
      nuxt
      :to="{ name: 'move' }"
      class="tw-capitalize tw-font-medium tw-tracking-wider tw-bg-fire"
    >
      {{ $store.state.move.move.type.name }}
    </v-btn>
    <v-btn
      v-if="$store.state.move.move.type.name == 'water:'"
      rounded
      dark
      depressed
      small
      width="100"
      nuxt
      :to="{ name: 'move' }"
      class="tw-capitalize tw-font-medium tw-tracking-wider tw-bg-water:"
    >
      {{ $store.state.move.move.type.name }}
    </v-btn>
    <v-btn
      v-if="$store.state.move.move.type.name == 'grass'"
      rounded
      dark
      depressed
      small
      width="100"
      nuxt
      :to="{ name: 'move' }"
      class="tw-capitalize tw-font-medium tw-tracking-wider tw-bg-grass"
    >
      {{ $store.state.move.move.type.name }}
    </v-btn>
    <v-btn
      v-if="$store.state.move.move.type.name == 'electric'"
      rounded
      dark
      depressed
      small
      width="100"
      nuxt
      :to="{ name: 'move' }"
      class="tw-capitalize tw-font-medium tw-tracking-wider tw-bg-electric"
    >
      {{ $store.state.move.move.type.name }}
    </v-btn>
    <v-btn
      v-if="$store.state.move.move.type.name == 'psychic'"
      rounded
      dark
      depressed
      small
      width="100"
      nuxt
      :to="{ name: 'move' }"
      class="tw-capitalize tw-font-medium tw-tracking-wider tw-bg-psychic"
    >
      {{ $store.state.move.move.type.name }}
    </v-btn>
    <v-btn
      v-if="$store.state.move.move.type.name == 'ice'"
      rounded
      dark
      depressed
      small
      width="100"
      nuxt
      :to="{ name: 'move' }"
      class="tw-capitalize tw-font-medium tw-tracking-wider tw-bg-ice"
    >
      {{ $store.state.move.move.type.name }}
    </v-btn>
    <v-btn
      v-if="$store.state.move.move.type.name == 'dragon'"
      rounded
      dark
      depressed
      small
      width="100"
      nuxt
      :to="{ name: 'move' }"
      class="tw-capitalize tw-font-medium tw-tracking-wider tw-bg-dragon"
    >
      {{ $store.state.move.move.type.name }}
    </v-btn>
    <v-btn
      v-if="$store.state.move.move.type.name == 'dark'"
      rounded
      dark
      depressed
      small
      width="100"
      nuxt
      :to="{ name: 'move' }"
      class="tw-capitalize tw-font-medium tw-tracking-wider tw-bg-dark"
    >
      {{ $store.state.move.move.type.name }}
    </v-btn>
    <v-btn
      v-if="$store.state.move.move.type.name == 'fairy'"
      rounded
      dark
      depressed
      small
      width="100"
      nuxt
      :to="{ name: 'move' }"
      class="tw-capitalize tw-font-medium tw-tracking-wider tw-bg-fairy"
    >
      {{ $store.state.move.move.type.name }}
    </v-btn>
    <v-btn
      v-if="$store.state.move.move.type.name == 'unknown'"
      rounded
      dark
      depressed
      small
      width="100"
      nuxt
      :to="{ name: 'move' }"
      class="tw-capitalize tw-font-medium tw-tracking-wider tw-bg-unknown"
    >
      {{ $store.state.move.move.type.name }}
    </v-btn>
    <v-btn
      v-if="$store.state.move.move.type.name == 'shadow'"
      rounded
      dark
      depressed
      small
      width="100"
      nuxt
      :to="{ name: 'move' }"
      class="tw-capitalize tw-font-medium tw-tracking-wider tw-bg-shadow"
    >
      {{ $store.state.move.move.type.name }}
    </v-btn>
  </v-col>
</template>

<script>
export default {}
</script>
