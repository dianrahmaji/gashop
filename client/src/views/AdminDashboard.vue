<template>
  <div>
    <AppNavigation/>
    <v-content>
      <v-container>
        <div class="display-2 text-md-center .font-weight-bold">My Products</div>
        <v-layout class="my-5" row wrap>
          <v-flex>
            <v-card class="text-xs-center" flat>
              <v-layout class="font-weight-bold subheading" row wrap>
                <v-flex xs12 md3>Product Name</v-flex>
                <v-flex xs12 md3>Product</v-flex>
                <v-flex xs10 md2>Stock</v-flex>
                <v-flex xs12 md3>Price</v-flex>
              </v-layout>
            </v-card>
            <v-divider class="my-3"></v-divider>
            <v-card v-for="product in products" :key="product._id" class="text-xs-center" flat>
              <v-layout row wrap>
                <v-flex xs12 md3>{{ product.name }}</v-flex>
                <v-flex xs12 md3>
                  <v-img class="mx-5 my-2" :src="`https://aqueous-retreat-19121.herokuapp.com/images/${product.imageURL}`" max-height="700"></v-img>
                </v-flex>
                <v-flex xs10 md2>{{ product.stock }}</v-flex>
                <v-flex xs12 md3>{{ product.price }}</v-flex>
                <v-flex xs2 md1>
                  <v-btn flat icon color="red">
                    <v-icon>clear</v-icon>
                  </v-btn>
                </v-flex>
              </v-layout>
            </v-card>
          </v-flex>
        </v-layout>
        <v-layout wrap justify-end>
           <v-flex xs4 md1>
          <add-product></add-product>
        </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <my-footer></my-footer>
  </div>
</template>

<script>
  import AppNavigation from '@/components/AppNavigation'
  import AddProduct from '@/components/AddProduct'
  import Footer from '@/components/Footer'
  import axios from 'axios'
  import auth from '@/auth'

  export default {
    components: {
      AppNavigation,
      'my-footer': Footer,
      'add-product': AddProduct
    },
    data() {
      return {
        products: []
      }
    },
    mounted() {
      axios.get('https://aqueous-retreat-19121.herokuapp.com/api/products/me', {headers: {
            'Authorization': auth.getAuthenticationHeader(this)
          }}).then(response => {
        this.products = response.data;
      }).catch(error => {
        throw error
      })
      .finally(() => this.loading = false);
    }
  }
</script>
