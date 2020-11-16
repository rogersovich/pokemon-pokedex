<template>
  <v-container class="tw-py-16">
    <v-row justify="start" align="center" class="tw-mb-10">
      <v-col cols="12" sm="8" md="6">
        <h1
          class="tw-text-6xl tw-text-gray-900 tw-text-left tw-leading-tight tw-font-medium"
        >
          What Pokémon are you looking for ?
        </h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="4" md="4">
        <nuxt-link :to="{ name: 'pokemon' }">
          <v-card color="#4DB6AC" rounded="lg" flat dark>
            <v-row>
              <v-col cols="6" sm="6" md="6">
                <v-card-title
                  class="tw-text-2xl tw-tracking-wide tw-font-normal"
                >
                  Pokemon
                </v-card-title>
              </v-col>
              <v-col cols="6" sm="6" md="6">
                <v-img
                  contain
                  src="https://ik.imagekit.io/1akf8cdsyg/pokeballs_NycEcg800i3.svg"
                  height="80"
                  position="right"
                ></v-img>
              </v-col>
            </v-row>
          </v-card>
        </nuxt-link>
      </v-col>
      <v-col cols="12" sm="4" md="4">
        <v-card color="#64B5F6" rounded="lg" flat dark>
          <v-row>
            <v-col cols="6" sm="6" md="6">
              <v-card-title class="tw-text-2xl tw-tracking-wide tw-font-normal">
                Abilities
              </v-card-title>
            </v-col>
            <v-col cols="6" sm="6" md="6">
              <v-img
                contain
                src="https://ik.imagekit.io/1akf8cdsyg/pokeballs_NycEcg800i3.svg"
                height="80"
                position="right"
              ></v-img>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col cols="12" sm="4" md="4">
        <v-card color="#E57373" rounded="lg" flat dark>
          <v-row>
            <v-col cols="6" sm="6" md="6">
              <v-card-title class="tw-text-2xl tw-tracking-wide tw-font-normal">
                Moves
              </v-card-title>
            </v-col>
            <v-col cols="6" sm="6" md="6">
              <v-img
                contain
                src="https://ik.imagekit.io/1akf8cdsyg/pokeballs_NycEcg800i3.svg"
                height="80"
                position="right"
              ></v-img>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col cols="12" sm="4" md="4">
        <nuxt-link :to="{ name: 'item' }">
          <v-card color="#FFD54F" rounded="lg" flat dark>
            <v-row>
              <v-col cols="6" sm="6" md="6">
                <v-card-title
                  class="tw-text-2xl tw-tracking-wide tw-font-normal"
                >
                  Items
                </v-card-title>
              </v-col>
              <v-col cols="6" sm="6" md="6">
                <v-img
                  contain
                  src="https://ik.imagekit.io/1akf8cdsyg/pokeballs_NycEcg800i3.svg"
                  height="80"
                  position="right"
                ></v-img>
              </v-col>
            </v-row>
          </v-card>
        </nuxt-link>
      </v-col>
      <v-col cols="12" sm="4" md="4">
        <v-card color="#7986CB" rounded="lg" flat dark>
          <v-row>
            <v-col cols="6" sm="6" md="6">
              <v-card-title class="tw-text-2xl tw-tracking-wide tw-font-normal">
                Locations
              </v-card-title>
            </v-col>
            <v-col cols="6" sm="6" md="6">
              <v-img
                contain
                src="https://ik.imagekit.io/1akf8cdsyg/pokeballs_NycEcg800i3.svg"
                height="80"
                position="right"
              ></v-img>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col cols="12" sm="4" md="4">
        <v-card color="#A1887F" rounded="lg" flat dark>
          <v-row>
            <v-col cols="6" sm="6" md="6">
              <v-card-title class="tw-text-2xl tw-tracking-wide tw-font-normal">
                Type Charts
              </v-card-title>
            </v-col>
            <v-col cols="6" sm="6" md="6">
              <v-img
                contain
                src="https://ik.imagekit.io/1akf8cdsyg/pokeballs_NycEcg800i3.svg"
                height="80"
                position="right"
              ></v-img>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {}
</script>
