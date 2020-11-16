<template>
  <div>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="12" md="12">
        <h1
          class="tw-text-2xl tw-capitalize tw-text-left tw-leading-tight tw-font-medium"
        >
          {{ $store.state.item.item.category.name }}
        </h1>
      </v-col>
      <v-col cols="12" sm="6" md="6">
        <h1
          class="tw-text-6xl tw-capitalize tw-text-left tw-leading-tight tw-font-medium"
        >
          {{ $store.state.item.item.name }}
        </h1>
      </v-col>
      <v-col cols="12" sm="6" md="6">
        <v-img
          contain
          height="80"
          position="center"
          :src="
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/' +
            $store.state.item.item.name +
            '.png'
          "
        ></v-img>
      </v-col>
      <v-col cols="12" sm="12" md="12">
        <h1
          class="tw-text-3xl tw-capitalize tw-text-left tw-leading-tight tw-font-bold mb-3"
        >
          Cost
        </h1>
        <h1
          class="tw-text-xl tw-uppercase tw-text-left tw-leading-tight tw-font-regular mt-3"
        >
          {{ $store.state.item.item.cost }} bp
        </h1>
      </v-col>
      <v-col cols="12" sm="12" md="12">
        <h1
          class="tw-text-3xl tw-capitalize tw-text-left tw-leading-tight tw-font-bold mb-3"
        >
          Attributes
        </h1>
        <v-btn
          v-for="(attr, i) in $store.state.item.item.attributes"
          :key="i"
          outlined
          class="ma-1"
        >
          {{ attr.name }}
        </v-btn>
      </v-col>
      <v-col cols="12" sm="12" md="12">
        <h1
          class="tw-text-3xl tw-capitalize tw-text-left tw-leading-tight tw-font-bold mb-3"
        >
          Game Indices
        </h1>
        <v-btn
          v-for="(gen, a) in $store.state.item.item.game_indices"
          :key="a"
          outlined
          class="ma-1"
        >
          {{ gen.generation.name }}
        </v-btn>
      </v-col>
      <v-col cols="12" sm="12" md="12">
        <h1
          class="tw-text-3xl tw-capitalize tw-text-left tw-leading-tight tw-font-bold mb-3"
        >
          Effect
        </h1>
        <h1
          v-for="(desc, d) in $store.state.item.item.effect_entries"
          :key="d"
          class="tw-text-xl tw-normal-case tw-text-left tw-leading-tight tw-tracking-wide tw-font-reguler mt-3"
        >
          {{ desc.effect }}
        </h1>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>
