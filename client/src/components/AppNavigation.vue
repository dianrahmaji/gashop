<template>
  <nav>
    <v-toolbar flat app>
      <v-toolbar-side-icon class="hidden-md-and-up" color="orange--text"></v-toolbar-side-icon>
      <v-toolbar-title class="text-uppercase orange--text">
        <v-btn @click="home()" large flat dark color="orange">
          <span class=" display-1 font-weight-light">GA</span>
          <span class="display-1 font-weight-bold">SHOP</span>
        </v-btn>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu class="hidden-sm-and-down">
        <v-btn @click="dashboard()" flat slot="activator" color="orange">
          <span>Dashboard</span>
        </v-btn>
      </v-menu>
      <v-menu class="hidden-sm-and-down">
        <v-btn @click="cart()" flat slot="activator" color="orange">
          <span>Cart</span>
        </v-btn>
      </v-menu>
      <v-menu class="hidden-sm-and-down">
        <v-btn @click="orders()" flat slot="activator" color="orange">
          <span>MYOrder</span>
        </v-btn>
      </v-menu>
      <v-menu class="hidden-sm-and-down">
        <v-btn @click="orderedToMe()" flat slot="activator" color="orange">
          <span>OrderedToMe</span>
        </v-btn>
      </v-menu>
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
      <div v-if="!isAuthenticated">
        <Authentication/>
      </div>
      <v-btn @click="signOut()" v-else class="hidden-xs-and-only" flat color="orange">
        <span class="hidden-xs-only">Sign Out</span>
      </v-btn>
    </v-toolbar>
  </nav>
</template>

<script>
  import Authentication from '@/components/Authentication'
  import auth from '@/auth'
  export default {
    components: {
      Authentication
    },
    data() {
      return {
        isAuthenticated: auth.user.authenticated
      }
    },
    mounted() {
      this.isAuthenticated = auth.isAuthenticated();
    },
    methods: {
      signOut() {
        auth.signout(this, '/');
        // this.isAuthenticated = false;
      },
      home() {
        window.location.replace('/');
      },
      dashboard() {
        window.location.replace('/admin')
      },
      cart() {
        window.location.replace('/cart')
      },
      orders() {
        window.location.replace('/orders')
      },
      orderedToMe() {
        window.location.replace('/admin/orders')
      }
    }
  }
</script>
