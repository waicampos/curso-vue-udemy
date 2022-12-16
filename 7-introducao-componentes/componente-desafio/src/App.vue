<template>
  <v-app>
    <app-menu />

    <app-toolbar />

    <v-content>
      <app-carousel />
      <app-table />

    </v-content>

    <app-footer />
  </v-app>
</template>

<script>
import Carousel from './components/Carousel.vue'
import Footer from './components/Footer.vue'
import Toolbar from './components/Toolbar.vue'
import Menu from './components/Menu.vue'
import Table from './components/table.vue'

export default {
  components: {
    'app-carousel': Carousel,
    'app-footer': Footer,
    'app-toolbar': Toolbar,
    'app-menu': Menu,
    'app-table': Table
  }
}
</script>
