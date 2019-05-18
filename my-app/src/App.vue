<template>
  <v-app id="cybertrance">
    <v-navigation-drawer v-model="sideNav" app disable-resize-watcher>
      <v-list class="pt-0" dense>
        <v-divider></v-divider>
        <v-list-group prepend-icon="shopping_basket" :value="false">
          <template v-slot:activator>
            <v-list-tile>
              <v-list-tile-title>Shop</v-list-tile-title>
            </v-list-tile>
          </template>
          <router-link
            v-for="(item, index) in shopItems"
            :key="index"
            :to="item.link"
            style="text-decoration: none;"
          >
            <v-list-tile @click>
              <v-list-tile-title
                style="text-decoration: none;"
                class="navigation_style"
              >{{item.title}}</v-list-tile-title>
            </v-list-tile>
          </router-link>
        </v-list-group>
        <router-link
          v-for="item in menuItems"
          :key="item.title"
          :to="item.link"
          style="text-decoration: none;"
        >
          <v-list-tile @click>
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>

            <v-list-tile-content >
              <v-list-tile-title style="text-decoration: none;" class="navigation_style">{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </router-link>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="black" fixed app class="toolbar_style">
      <v-toolbar-side-icon
        class="hidden-md-and-up toolbar_content_style"
        @click.native.stop="sideNav=!sideNav"
      ></v-toolbar-side-icon>
      <v-toolbar-title class="toolbar_content_style">
        <router-link to="/">
          <img :src="logo" :height="logo_height" :width="logo_width" class="pt-2">
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down toolbar_content_style">
        <v-menu open-on-hover offset-y v-model="toggle">
          <template v-slot:activator="{ on }">
            <v-btn
              flat
              :input-value="isButtonActive(toggle)"
              class="toolbar_content_style"
              v-on="on"
            >
              <v-icon left>shopping_basket</v-icon>SHOP
            </v-btn>
          </template>

          <v-list>
            <v-list-tile v-for="(item, index) in shopItems" :key="index" router :to="item.link">
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
        <v-btn
          flat
          class="toolbar_content_style"
          v-for="item in menuItems"
          :key="item.title"
          :to="item.link"
        >
          <v-icon left>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content class="background_style">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import * as firebase from "firebase";
import store from "@/store";
const dispatcher = store.dispatch;
const getter = store.getters;

function clothesGetter(docRef) {
  docRef.onSnapshot(function(snapshot) {
    snapshot.docChanges().forEach(function(change) {
      if (change.type === "added") {
        dispatcher("CLOTHES_ADDER", change.doc.data());
      }

      if (change.type === "modified") {
        var teeArray1 = getter.GET_TEES;
        for (let i = 0; i < teeArray1.length; i++) {
          if (teeArray1[i].name === change.doc.data().name) {
            dispatcher("TEE_UPDATER", i);
          }
        }
      }

      if (change.type === "removed") {
        var teeArray2 = getter.GET_TEES;
        for (let i = 0; i < teeArray2.length; i++) {
          if (teeArray2[i].name === change.doc.data().name) {
            dispatcher("TEE_REMOVER", i);
          }
        }
      }
    });
  });
}
export default {
  name: "App",

  data: () => ({
    sideNav: false,
    toggle: false,
    menuItems: [
      // { icon: "fiber_new", title: "Brand New", link: "/" },
      // { icon: "whatshot", title: "Best Sellers", link: "/" },
      { icon: "info", title: "About", link: "/about" }
    ],
    shopItems: [
      { icon: " ", title: "tees", link: "/shop/tees" },
      { icon: " ", title: "hats", link: "/shop/hats" },
      { icon: " ", title: "hoodies", link: "/shop/hoodies" },
      { icon: " ", title: "long sleeves", link: "/shop/longsleeves" }
    ],

    logo:
      "https://firebasestorage.googleapis.com/v0/b/cybertrance-10b2d.appspot.com/o/logo.png?alt=media&token=81aea2bb-ff88-4b9b-8b93-2eda3806c029",

    logo_height: 60,

    test_value: undefined
  }),

  computed: {
    vuextest: function() {
      return this.$store.state.test;
    },

    logo_width: function() {
      return this.logo_height * 3;
    }
  },

  methods: {
    test_method: function() {
      this.test_value = 1;
      return 0;
    },

    isButtonActive: function(test) {
      if (test === true) return 1;
      else return undefined;
    }
  },

  watch: {},

  created: function() {
    var db = firebase.firestore();

    var tees_MENS = db
      .collection("clothes")
      .doc("t_shirts")
      .collection("mens");

    var tees_WOMENS = db
      .collection("clothes")
      .doc("t_shirts")
      .collection("womens");

    var hats_NEUTRAL = db
      .collection("clothes")
      .doc("hats")
      .collection("neutral");

    clothesGetter(tees_MENS);
    clothesGetter(tees_WOMENS);
    clothesGetter(hats_NEUTRAL);
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Monda");
@import url("https://fonts.googleapis.com/css?family=Cute+Font");
.background_style {
  background-color: aliceblue !important;
}
.v-btn {
  font-family: "Monda", sans-serif;
  /* color: rgb(255, 0, 0) !important; */
}

.toolbar_content_style {
  color: aliceblue !important;
}

.toolbar_style {
  color: aliceblue !important;
}

.navigation_style {
  color: rgb(0, 0, 0) !important;
}
</style>