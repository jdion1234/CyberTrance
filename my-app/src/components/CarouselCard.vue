<template>
  <v-layout column style="height: 100%;" justify-center row fill-height :class="card_style">
    <v-flex xs5 sm5 md5 lg5 xl5></v-flex>
    <v-flex xs2 sm2 md2 lg2 xl2 :class="[flex_padding]">
      <router-link
        :to="{ name: 'products', params: {productID: this.article.id } }"
        @mouseover.native="mouse_over()"
        @mouseout.native="mouse_out()"
        style="text-decoration: none;"
      >
        <v-img :src="this.article.storage_ref"></v-img>
      </router-link>
    </v-flex>
    <v-flex xs5 sm5 md5 lg5 xl5 style="position: relative;top: 4%" >
      <p
        :class="[current_style,card_name_centering]"
      > {{this.article.name}} {{this.article.type}}</p>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data: function() {
    return {
      current_style: "content_style_unhighlighted",
      card_style: "card_style_unhighlighted",
      text_alignment: "text-md-center",
      
      card_name_centering: "text-xs-center text-sm-center text-md-center text-lg-center text-xl-center"
    };
  },

  computed: {
    product_route: function() {
      var extension = this.article.id;
      return "/products/" + extension;
    }
  },

  methods: {
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
  },

  props: {
    article: {
      type: Object,
      required: true
    },
    flex_size: {
      type: String,
      required: false
    },
    flex_padding: {
      type: String,
      required: false,
      default: "pa-0"
    }
  },

  created: function() {},

  watch: {}
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
  background-color: rgb(0, 0, 0, 0.1);
}

.helperclass {
  border: 3px red;
}

.v-btn {
  font-family: "Rajdhani", sans-serif;
  color: aliceblue !important;
}
</style>



