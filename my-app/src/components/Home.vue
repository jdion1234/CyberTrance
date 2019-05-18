<template>
  <v-container fluid class="container_style">
    <v-layout>
      <v-img :src="background"></v-img>
    </v-layout>
    <v-layout align-content-center="true" align-center justify-center column>
      <v-flex class="mt-5 title_style" :style="text_size">🔥 HOT ITEMS 🔥</v-flex>
    </v-layout>
    <custom-carousel></custom-carousel>
    <v-layout row v-bind="binding">
      <v-flex :class="[hoodie_style,flex_margins]">
        <router-link
          to="/shop/hoodies"
          @mouseover.native="mouse_over_hoodie()"
          @mouseout.native="mouse_out()"
          style="text-decoration: none;"
        >
          <v-card elevation="24" :class="card_margins">
            <v-img :src="this.hoodies_link"></v-img>
          </v-card>
        </router-link>
      </v-flex>
      <v-flex :class="[hat_style,flex_margins]">
        <router-link
          to="/shop/hats"
          @mouseover.native="mouse_over_hat()"
          @mouseout.native="mouse_out()"
          style="text-decoration: none;"
        >
          <v-card elevation="24" :class="card_margins">
            <v-img :src="this.hats_link"></v-img>
          </v-card>
        </router-link>
      </v-flex>
      <v-flex :class="[tee_style,flex_margins]">
        <router-link
          to="/shop/tees"
          @mouseover.native="mouse_over_tee()"
          @mouseout.native="mouse_out()"
          style="text-decoration: none;"
        >
          <v-card elevation="24" :class="card_margins">
            <v-img :src="this.tees_link"></v-img>
          </v-card>
        </router-link>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Carousel from "./Carousel.vue";

export default {
  components: {
    "custom-carousel": Carousel
  },

  data: () => ({
    background_link:
      "https://firebasestorage.googleapis.com/v0/b/cybertrance-10b2d.appspot.com/o/cyber_trance_banner_v2.png?alt=media&token=0a7b030c-a9ef-49a7-bd91-d0311bb3be5d",
    background_link_small:
      "https://firebasestorage.googleapis.com/v0/b/cybertrance-10b2d.appspot.com/o/cyber_trance_banner_square.png?alt=media&token=00f33ae8-beed-483e-b0a5-3b02ab6eff0a",
    tees_link:
      "https://firebasestorage.googleapis.com/v0/b/cybertrance-10b2d.appspot.com/o/tees.png?alt=media&token=a3fa2b2c-279d-48df-903a-c8eda07df580",
    hoodies_link:
      "https://firebasestorage.googleapis.com/v0/b/cybertrance-10b2d.appspot.com/o/hoodies.png?alt=media&token=98b4ed27-a044-47b5-9bfb-a24c9983799f",

    hats_link:
      "https://firebasestorage.googleapis.com/v0/b/cybertrance-10b2d.appspot.com/o/hats.png?alt=media&token=c8b5974a-7b98-48a7-a325-4ec066877c2e",

    tee_style: "card_style_unhighlighted",

    hoodie_style: "card_style_unhighlighted",

    hat_style: "card_style_unhighlighted"
  }),

  computed: {
    binding: function() {
      const binding = {};

      if (this.$vuetify.breakpoint.xs) {
        // eslint-disable-next-line no-console
        //console.log("inside binding.");
        binding.column = true;
      }

      return binding;
    },

    card_margins: function() {
      if (this.$vuetify.breakpoint.xs) {
        // eslint-disable-next-line no-console
        //console.log("we're here");
        return "ma-3";
      } else if (this.$vuetify.breakpoint.sm) {
        return "ma-3";
      } else if (this.$vuetify.breakpoint.md) {
        return "ma-3";
      } else if (this.$vuetify.breakpoint.lg) {
        return "ma-4";
      } else return "ma-4";
    },

    flex_margins: function() {
      if (this.$vuetify.breakpoint.xs) {
        // eslint-disable-next-line no-console
        //console.log("we're here");
        return "ma-1 xs12";
      } else if (this.$vuetify.breakpoint.sm) {
        return "ma-2 sm4";
      } else if (this.$vuetify.breakpoint.md) {
        return "ma-2 md4";
      } else if (this.$vuetify.breakpoint.lg) {
        return "ma-5 lg4";
      } else return "ma-5 xl4";
    },

    background: function() {
      if (this.$vuetify.breakpoint.xs) {
        // eslint-disable-next-line no-console
        //console.log("we're here");
        return this.background_link_small;
      } else if (this.$vuetify.breakpoint.sm) {
        return this.background_link;
      } else if (this.$vuetify.breakpoint.md) {
        return this.background_link;
      } else if (this.$vuetify.breakpoint.lg) {
        return this.background_link;
      } else return this.background_link;
    },

    text_size: function() {
      if (this.$vuetify.breakpoint.xs) {
        // eslint-disable-next-line no-console
        //console.log("we're here");
        return "font-size: 40px;";
      } else if (this.$vuetify.breakpoint.sm) {
        return "font-size: 55px;";
      } else if (this.$vuetify.breakpoint.md) {
        return "font-size: 55px;";
      } else if (this.$vuetify.breakpoint.lg) {
        return "font-size: 60px;";
      } else return "font-size: 70px;";
    }
  },

  methods: {
    mouse_over_tee: function() {
      this.tee_style = "tee_highlighted";
      //Vue.set(this.classArray, 0, "card_style_highlighted")
    },
    mouse_over_hoodie: function() {
      this.hoodie_style = "hoodie_highlighted";
    },
    mouse_over_hat: function() {
      this.hat_style = "hat_highlighted";
    },
    mouse_out: function() {
      this.tee_style = "card_style_unhighlighted";
      this.hoodie_style = "card_style_unhighlighted";
      this.hat_style = "card_style_unhighlighted";
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Rajdhani");

.title_style {
  
  color: rgb(3, 3, 3);
  font-family: "Rajdhani", sans-serif;
}

.container_style {
  background-color: aliceblue;
}

.text_style {
  color: aliceblue;
}

.helperclass {
  border: 3px red;
}

/* .carousel {
    height: 200px !important;
  } */

.carousel_transition {
  transition-property: opacity, left;
  transition-duration: 2s, 4s;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.125s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.card_style_unhighlighted {
  background-color: rgb(0, 0, 0, 0);
}

.tee_highlighted {
  background-color: rgb(67, 49, 165);
}

.hoodie_highlighted {
  background-color: rgb(39, 153, 85);
}

.hat_highlighted {
  background-color: rgb(204, 64, 71);
}
</style>