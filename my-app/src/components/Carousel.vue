<template>
  <v-layout class>
    <!-- <v-flex>{{test_value2}}</v-flex> -->
    <v-flex class>
      <v-carousel class="carousel" hide-delimiters :cycle="false" :height="350" light>
        <v-carousel-item v-for="n in tee_array_length" :key="n">
          <v-layout
            class="px-5"
            align-center
            justify-space-around
            row
            fill-height
            style="height: 98%;"
          >
            <v-flex
              v-for="(shirt) in sorting_method(n,shirt_array)"
              :key="shirt.id"
              xs12
              sm3
              md3
              lg2
              xl2
              style="height: 100%;"
            >
           
                <clothes-card :article="shirt" :flex_padding="flex_padding_prop"></clothes-card>

            </v-flex>
          </v-layout>
        </v-carousel-item>
      </v-carousel>
    </v-flex>
  </v-layout>
</template>

<script>
import CarouselCard from "./CarouselCard.vue";

export default {
  components: {
    "clothes-card": CarouselCard
  },

  data: () => ({
    show: false,
    card_style: "card_style_unhighlighted",
    newshirtlist: [], // array containing all shirts
    shirt_amount: 5 // number of shirts you want in one slide of the carousel (will automatically account for leftovers)
  }),

  computed: {
    tee_array_length: function() {
      // return this.$store.getters.GET_TEES_LENGTH;
      return Math.ceil(
        this.$store.getters.GET_CAROUSEL_LENGTH / this.test_value2
      );
    },
    shirt_array: function() {
      return this.$store.getters.GET_CAROUSEL_ITEMS;
    },
    test_value2: function() {
      if (this.$vuetify.breakpoint.xs) {
        // eslint-disable-next-line no-console
        //console.log("we're here");
        return 1;
      } else if (this.$vuetify.breakpoint.sm) {
        return 3;
      } else if (this.$vuetify.breakpoint.md) {
        return 4;
      } else if (this.$vuetify.breakpoint.lg) {
        return 5;
      } else return 6;
    },

    flex_size_prop: function() {
      if (this.$vuetify.breakpoint.xs) {
        // eslint-disable-next-line no-console
        //console.log("we're here");
        return "xs12";
      } else if (this.$vuetify.breakpoint.sm) {
        return "xs6";
      } else if (this.$vuetify.breakpoint.md) {
        return "xs4";
      } else return "xl2";
    },

    flex_padding_prop: function() {
      if (this.$vuetify.breakpoint.xs) {
        // eslint-disable-next-line no-console
        //console.log("we're here");
        return "mx-5 px-3";
      } else if (this.$vuetify.breakpoint.sm) {
        return " ";
      } else if (this.$vuetify.breakpoint.md) {
        return " ";
      } else if (this.$vuetify.breakpoint.lg) {
        return " ";
      } else return " ";
    },

    padding_prop: function() {
      if (this.$vuetify.breakpoint.xs) {
        // eslint-disable-next-line no-console
        //console.log("we're here");
        return "px-4 pb-0 py-4";
      } else if (this.$vuetify.breakpoint.sm) {
        return "pa-0";
      } else if (this.$vuetify.breakpoint.md) {
        return "px-4 pb-0 pt-4 ";
      } else if (this.$vuetify.breakpoint.lg) {
        return "pa-0";
      } else return "pa-0";
    }
  },

  methods: {
    sorting_method: function(index, tee_array) {
      var changed_index = (index - 1) * this.test_value2;
      index = index * this.test_value2;
      return this.test_value2
        ? tee_array.slice(changed_index, index)
        : tee_array;
    },
    mouse_over: function() {
      // eslint-disable-next-line no-console
      console.log("you moused over");
      this.current_style = "content_style_highlighted";
      this.card_style = "card_style_highlighted";
    },
    mouse_out: function() {
      this.current_style = "content_style_unhighlighted";
      this.card_style = "card_style_unhighlighted";
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Rajdhani");

.container_style {
  background-color: rgb(3, 3, 3);
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
  transition: opacity 0.25s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.v-btn {
  font-family: "Rajdhani", sans-serif;
  /* color: rgb(255, 0, 0) !important; */
}

.v-carousel {
  width: 100%;
  /* height: 400px !important; */
  position: relative;
  overflow: hidden;
  overflow-x: hidden;
  overflow-y: hidden;
  -webkit-box-shadow: -20px 9px 1px -2px rgba(0, 0, 0, 0),
    14px -20px 2px 0px rgba(0, 0, 0, 0), 19px 20px 5px 0px rgba(0, 0, 0, 0);
  box-shadow: -11px 20px 1px -2px rgba(0, 0, 0, 0),
    0px 2px 2px 0px rgba(0, 0, 0, 0), 0px 1px 5px 0px rgba(0, 0, 0, 0);
}

/* .v-btn.v-btn__content.v-icon {
        color: black;
    } */

.content_style_unhighlighted {
  color: rgb(3, 3, 3);
  font-family: "Rajdhani", sans-serif;
}

.content_style_highlighted {
  color: rgb(0, 104, 165);
  font-family: "Rajdhani", sans-serif;
}

.test_class2 {
  border-style: solid;
  border-width: 5px;
  border-color: red;
}

.test_class3 {
  border-style: solid;
  border-width: 5px;
  border-color: green;
}

.test_class4 {
  border-style: solid;
  border-width: 5px;
  border-color: rgb(161, 245, 6);
}

.fill {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.fill img {
  flex-shrink: 0;
  min-width: 100%;
  min-height: 100%;
}

.content_style_unhighlighted {
  color: rgb(3, 3, 3);
  font-family: "Rajdhani", sans-serif;
}

.content_style_highlighted {
  color: rgb(0, 104, 165);
  font-family: "Rajdhani", sans-serif;
}

.card_style_unhighlighted {
  background-color: rgb(0, 0, 0, 0);
}

.card_style_highlighted {
  background-color: rgb(0, 0, 0, 0.1);
}
</style>