<template>
  <nav>
    <v-toolbar flat app>
      <v-toolbar-side-icon class="hidden-md-and-up" color="orange--text"></v-toolbar-side-icon>
      <v-toolbar-title class="text-uppercase orange--text">
        <span class="font-weight-light">GA</span>
        <span>SHOP</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu class="hidden-sm-and-down">
        <v-btn flat slot="activator" color="orange">
          <v-icon left>expand_more</v-icon>
          <span>Men's Wear</span>
        </v-btn>
      </v-menu>
      <v-menu class="hidden-sm-and-down">
        <v-btn flat slot="activator" color="orange">
          <v-icon left>expand_more</v-icon>
          <span>Women's Wear</span>
        </v-btn>
      </v-menu>
      <div v-if="true">
        <Authentication/>
      </div>
      <v-btn v-else class="hidden-xs-and-only" flat color="orange">
        <span class="hidden-xs-only">Sign Out</span>
      </v-btn>
    </v-toolbar>
  </nav>
</template>

<script>
  import Authentication from '@/components/Authentication'
  export default {
    components: {
      Authentication
    }
  }
</script>
