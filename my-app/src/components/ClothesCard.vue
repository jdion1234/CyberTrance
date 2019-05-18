<template>
  <v-flex xs6 sm4 md3 lg3 xl3 d-flex class="pa-3">
    <router-link
          :to="{ name: 'products', params: {productID: this.article.id } }"
          @mouseover.native="mouse_over()"
          @mouseout.native="mouse_out()"
          style="text-decoration: none;"
        >
    <v-card :class="card_style" elevation="0">
      <v-img :src="this.article.storage_ref" aspect-ratio="1"></v-img>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-flex :class="[current_style,card_name_centering]"> {{this.article.name}} {{this.article.type}}</v-flex>

        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
    </router-link>
  </v-flex>
</template>

<script>

export default {
  data: function() {
    return {
      current_style: "content_style_unhighlighted",
      card_style: "card_style_unhighlighted",
      card_name_centering: "text-xs-center text-sm-center text-md-center text-lg-center text-xl-center"
    };
  },

  computed: {
    product_route: function() {
      var extension = this.article.id;
      return ("/products/" + extension)
    }
  },

  methods: {
    mouse_over: function() {
      this.current_style = "content_style_highlighted";
      this.card_style = "card_style_highlighted";
    },
    mouse_out: function() {
      this.current_style = "content_style_unhighlighted";
      this.card_style = "card_style_unhighlighted";
    }
  },

  props: {
    article: {
      type: Object,
      required: true
    }
  },

  created: function() {
  },

  watch: {

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

.card_style_unhighlighted {
  background-color: rgb(0, 0, 0, 0);
}

.card_style_highlighted {
  background-color: rgb(0, 0, 0, .1);
}

.helperclass {
  border: 3px red;
}

.v-btn {
  font-family: "Rajdhani", sans-serif;
  color: aliceblue !important;
}
</style>



