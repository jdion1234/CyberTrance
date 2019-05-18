<template>
  <v-container class>
    <v-layout align-content-center="true" align-center justify-center column class="my-5">
      <v-flex class="title_style">
        <div>About</div>
      </v-flex>
    </v-layout>

    <v-layout row>
      <v-flex xs1 sm3 md3 lg4 xl5 class="text_style"></v-flex>
      <v-flex xs10 sm6 md6 lg4 xl3 >
        <v-layout column>
          <v-flex>
            <ul>
              <li class="pt-5">Made by Jordan Dion with Vue.js, Vuetify, and Google Firebase</li>
              <li class="pt-5">All art on the site was made using copyright-free assets</li>
              <li class="pt-5">For demonstration purposes only</li>
            </ul>
            
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex xs1 sm3 md3 lg4 xl5 class="text_style"></v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    card_name_centering:
      "text-xs-center text-sm-center text-md-center text-lg-center text-xl-center"
  })
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



