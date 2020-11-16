<template>
  <div>
    <v-row justify="center" align="center">
      <v-col cols="6" sm="6" md="6">
        <nuxt-link
          :to="{
            name: 'item-slug',
            params: { slug: $store.state.item.itemPrev.name },
          }"
        >
          <v-icon> mdi-arrow-left </v-icon>
          <img
            class="tw-inline-block tw-h-12"
            :src="
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/' +
              $store.state.item.itemPrev.name +
              '.png'
            "
          />
        </nuxt-link>
      </v-col>
      <v-col cols="6" sm="6" md="6" class="text-right">
        <nuxt-link
          :to="{
            name: 'item-slug',
            params: { slug: $store.state.item.itemNext.name },
          }"
        >
          <img
            class="tw-inline-block tw-h-12"
            :src="
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/' +
              $store.state.item.itemNext.name +
              '.png'
            "
          />
          <v-icon> mdi-arrow-right </v-icon>
        </nuxt-link>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {}
</script>
