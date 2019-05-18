import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import Shop from '@/components/Shop.vue'
import Products from '@/components/Products.vue'
import About from '@/components/About.vue'

// import Intro from '@/components/Intro'

Vue.use(Router)

export default new Router({
  routes: [

    {
      path: '/',
      component: Home
    },
    {
      path: '/test',
      component: Home
    },
    {
      path: '/shop/:clothes_type',
      name: 'shop',
      component: Shop,
      props: true
    },

    {
      path: '/products/:productID',
      name: 'products',
      component: Products,
      props: true
    },

    {
      path: '/about',
      component: About,
     
    },
  ],

  mode: 'history'
})
