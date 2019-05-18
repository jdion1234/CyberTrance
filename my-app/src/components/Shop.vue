<template>
  <v-container class>
    <v-layout align-content-center="true" align-center justify-center column class="my-5">
      <v-flex class="title_style">
        <div>{{clothes_type}}</div>
      </v-flex>
      <v-flex class="text_style"></v-flex>
      <h1 v-show="clothes_array[0].status=== this.empty">Coming soon!</h1>
      
      <h1 v-show="clothes_array[0].status=== this.empty" class="pt-5"><v-btn dark to="/">HOME</v-btn></h1>
    </v-layout>

    <v-layout row>
      <v-flex xs1 sm1 md1 lg1 xl2 class="text_style"></v-flex>
      <v-flex xs10 sm10 md10 lg10 xl8 v-show="clothes_array[0].status!==this.empty">
        <v-layout row wrap class>
          <clothes-card v-for="(item) in clothes_array" :key="item.id" :article="item"></clothes-card>
        </v-layout>
      </v-flex>
      <v-flex xs1 sm1 md1 lg1 xl2 class="text_style"></v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import ClothesCard from "./ClothesCard.vue";

export default {
  props: {
    clothes_type: {
      type: String,
      required: true
    }
  },

  data: () => ({

    empty: "empty"
  }),

  computed: {
    clothes_array: function() {
      // eslint-disable-next-line no-console
      console.log(
        "Computed clothes type is: " +
          this.$store.getters.GET_CONTENT(this.clothes_type)
      );
      return this.$store.getters.GET_CONTENT(this.clothes_type);
    }
  },

  created: function() {
    // eslint-disable-next-line no-console
    console.log("I was created " + this.clothes_type);
  },

  watch: {
    clothes_type: function() {
      // eslint-disable-next-line no-console
      console.log("clothes_type changed to: " + this.clothes_type);
    }
  },

  components: {
    "clothes-card": ClothesCard
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Rajdhani");

.container_style {
  background-color: rgb(3, 3, 3);
}

.title_style {
  color: rgb(3, 3, 3);
  font-family: "Rajdhani", sans-serif;
  font-size: 60px;
}

.content_style_unhighlighted {
  color: rgb(3, 3, 3);
  font-family: "Rajdhani", sans-serif;
}

.content_style_highlighted {
  color: rgb(0, 104, 165);
  font-family: "Rajdhani", sans-serif;
}

.helperclass {
  border: 3px red;
}

.v-btn {
  font-family: "Rajdhani", sans-serif;
  color: aliceblue !important;
}
</style>



