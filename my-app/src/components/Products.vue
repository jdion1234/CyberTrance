<template>
  <v-container class fluid>
    <v-layout align-start justify-center row wrap class="my-5">
      <v-flex xs12 sm6 md5 lg5 xl4 d-flex class="pa-3">
        <v-img :src="item.storage_ref" aspect-ratio="1"></v-img>
      </v-flex>
      <v-flex xs12 sm6 md6 lg7 xl6 class="pl-5">
        <v-layout column justify-start align-start class>
          <v-flex class="my-5 title_style" :style="text_size">{{item.name}} {{item.type}} <v-btn dark>BUY NOW</v-btn></v-flex>
          <v-flex :style="description_size">{{item.description}} </v-flex>
          <v-flex>

            
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
function loadDoc() {
  // eslint-disable-next-line no-console
  console.log("in load doc");
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    // eslint-disable-next-line no-console
    console.log("on ready state change");
    if (this.readyState == 4 && this.status == 200) {
      // eslint-disable-next-line no-console
      console.log("it worked: " + this.responseText);
      // eslint-disable-next-line no-console
      console.log(typeof this.responseText);
      return this.responseText;
    } else {
      // eslint-disable-next-line no-console
      console.log("it didnt work");
      return "Didn't work.";
    }
  };
  xhttp.open("GET", "https://api.printful.com/products", true);
  xhttp.send();
}

export default {
  props: {
    productID: {
      type: String,
      required: true
    }
  },

  data: () => ({}),

  computed: {
    item: function() {
      // eslint-disable-next-line no-console
      console.log("I was computed IN PRODUCTS");
      return this.$store.getters.GET_ITEM_BY_ID(this.productID);
    },

    API_TEST: function() {
      // eslint-disable-next-line no-console
      console.log("I was computed IN API TEST");
      return this.$store.getters.GET_API;
    },

    COMPUTED_TEST: function() {
      return "HI";
    },

    text_size: function() {
      if (this.$vuetify.breakpoint.xs) {
        // eslint-disable-next-line no-console
        //console.log("we're here");
        return "font-size: 40px;";
      } else if (this.$vuetify.breakpoint.sm) {
        return "font-size: 45px;";
      } else if (this.$vuetify.breakpoint.md) {
        return "font-size: 60px;";
      } else if (this.$vuetify.breakpoint.lg) {
        return "font-size: 60px;";
      } else return "font-size: 60px;";
    },

    description_size: function() {
      if (this.$vuetify.breakpoint.xs) {
        // eslint-disable-next-line no-console
        //console.log("we're here");
        return "font-size: 15px;";
      } else if (this.$vuetify.breakpoint.sm) {
        return "font-size: 15px;";
      } else if (this.$vuetify.breakpoint.md) {
        return "font-size: 17.5px;";
      } else if (this.$vuetify.breakpoint.lg) {
        return "font-size: 17.5px;";
      } else return "font-size: 17.5px;";
    }
  },

  created: function() {
    this.$store.dispatch("API_ADDER", loadDoc());
    // eslint-disable-next-line no-console
    console.log("I was created " + this.productID);
  },

  watch: {
    id: function() {
      // eslint-disable-next-line no-console
      console.log("id changed to: " + this.productID);
    }
  },

  components: {}
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
  /* font-size: 60px; */
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
  border-style: solid;
  border-color: red;
  border-width: 2px;
}

.v-btn {
  font-family: "Rajdhani", sans-serif;
  color: aliceblue !important;
}
</style>



