<template>
  <div>
    <v-row align="center">
      <v-col cols="12" sm="12" md="12">
        <h1
          class="tw-text-2xl tw-capitalize tw-text-left tw-leading-tight tw-font-medium"
        >
          {{ $store.state.move.move.meta.category.name }}
        </h1>
      </v-col>
      <v-col cols="12" sm="12" md="12">
        <h1
          class="tw-text-6xl tw-capitalize tw-text-left tw-leading-tight tw-font-medium"
        >
          {{ $store.state.move.move.name }}
        </h1>
      </v-col>
      <v-col cols="12" sm="6" md="6">
        <h1
          class="tw-text-3xl tw-capitalize tw-text-left tw-leading-tight tw-font-bold mb-3"
        >
          Move Data
        </h1>
        <v-row align="center">
          <v-col cols="6" md="3">
            <h1
              class="tw-text-xl tw-capitalize tw-text-left tw-leading-tight tw-font-regular"
            >
              Type
            </h1>
          </v-col>
          <button-type-move></button-type-move>
          <v-col cols="6" md="3">
            <h1
              class="tw-text-xl tw-capitalize tw-text-left tw-leading-tight tw-font-regular"
            >
              Category
            </h1>
          </v-col>
          <v-col cols="6" md="9">
            <v-img
              v-if="$store.state.move.move.damage_class.name == 'physical'"
              height="25"
              position="left"
              src="https://ik.imagekit.io/1akf8cdsyg/pokemon/physical_4Dq5X49SLn.png"
              contain
            ></v-img>
            <v-img
              v-if="$store.state.move.move.damage_class.name == 'special'"
              height="25"
              position="left"
              src="https://ik.imagekit.io/1akf8cdsyg/pokemon/special_2RDv0mq_n-.png"
              contain
            ></v-img>
            <v-img
              v-if="$store.state.move.move.damage_class.name == 'status'"
              height="25"
              position="left"
              src="https://ik.imagekit.io/1akf8cdsyg/pokemon/status_mViR87G__.png"
              contain
            ></v-img>
          </v-col>
          <v-col cols="6" md="3">
            <h1
              class="tw-text-xl tw-capitalize tw-text-left tw-leading-tight tw-font-regular"
            >
              Power
            </h1>
          </v-col>
          <v-col cols="6" md="9">
            <h1
              class="tw-text-xl tw-capitalize tw-text-left tw-leading-tight tw-font-regular"
            >
              {{ $store.state.move.move.power }}
            </h1>
          </v-col>
          <v-col cols="6" md="3">
            <h1
              class="tw-text-xl tw-capitalize tw-text-left tw-leading-tight tw-font-regular"
            >
              Accuracy
            </h1>
          </v-col>
          <v-col cols="6" md="9">
            <h1
              class="tw-text-xl tw-capitalize tw-text-left tw-leading-tight tw-font-regular"
            >
              {{ $store.state.move.move.accuracy }}
            </h1>
          </v-col>
          <v-col cols="6" md="3">
            <h1
              class="tw-text-xl tw-capitalize tw-text-left tw-leading-tight tw-font-regular"
            >
              PP
            </h1>
          </v-col>
          <v-col cols="6" md="9">
            <h1
              class="tw-text-xl tw-capitalize tw-text-left tw-leading-tight tw-font-regular"
            >
              {{ $store.state.move.move.pp }}
            </h1>
          </v-col>
          <v-col cols="6" md="3">
            <h1
              class="tw-text-xl tw-capitalize tw-text-left tw-leading-tight tw-font-regular"
            >
              Priority
            </h1>
          </v-col>
          <v-col cols="6" md="9">
            <h1
              class="tw-text-xl tw-capitalize tw-text-left tw-leading-tight tw-font-regular"
            >
              {{ $store.state.move.move.priority }}+
            </h1>
          </v-col>
          <v-col cols="6" md="3">
            <h1
              class="tw-text-xl tw-capitalize tw-text-left tw-leading-tight tw-font-regular"
            >
              Introduced
            </h1>
          </v-col>
          <v-col cols="6" md="9">
            <h1
              class="tw-text-xl tw-capitalize tw-text-left tw-leading-tight tw-font-regular"
            >
              {{ $store.state.move.move.generation.name }}
            </h1>
          </v-col>
          <v-col offset-md="3" offset="0"></v-col>
        </v-row>
      </v-col>
      <v-col cols="12" sm="6" md="6">
        <h1
          class="tw-text-3xl tw-capitalize tw-text-left tw-leading-tight tw-font-bold mb-3"
        >
          Other languages
        </h1>
        <v-row
          v-for="(data, i) in $store.state.move.move.names"
          :key="i"
          align="center"
        >
          <v-col cols="6" md="3">
            {{ data.language.name }}
          </v-col>
          <v-col cols="6" md="9">
            {{ data.name }}
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" md="10">
        <h1
          class="tw-text-3xl tw-capitalize tw-text-left tw-leading-tight tw-font-bold mb-3"
        >
          Effect
        </h1>
        <h1
          class="tw-text-xl tw-normal-case tw-text-left tw-tracking-wide tw-font-regular"
        >
          {{ $store.state.move.move.effect_entries[0].effect }}
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
