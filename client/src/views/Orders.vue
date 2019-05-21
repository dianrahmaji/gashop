<template>
  <div>
    <AppNavigation/>
    <v-content>
      <v-container>
        <div class="display-2 text-md-center .font-weight-bold">Orders</div>
        <v-layout class="my-5" row wrap>
          <v-flex>
            <v-card class="text-xs-center" flat>
              <v-layout class="font-weight-bold subheading" row wrap>
                <v-flex xs12 md3>Product Name</v-flex>
                <v-flex xs12 md3>Product</v-flex>
                <v-flex xs5 md1>Stock</v-flex>
                <v-flex xs12 md3>Price</v-flex>
                <v-flex xs5 md1>Status</v-flex>
              </v-layout>
            </v-card>
            <v-divider class="my-3"></v-divider>
            <v-card class="text-xs-center" flat>
              <v-layout row wrap>
                <v-flex xs12 md3>Hand Bag</v-flex>
                <v-flex xs12 md3>
                  <v-img class="mx-5 my-2" src="https://picsum.photos/510/300?random" max-height="700"></v-img>
                </v-flex>
                <v-flex xs5 md1>20</v-flex>
                <v-flex xs12 md3>Rp1.500.000</v-flex>
                <v-flex xs5 md1>Shipped</v-flex>
                <v-flex xs2 md1>
                  <v-btn flat icon color="red">
                    <v-icon>clear</v-icon>
                  </v-btn>
                </v-flex>
              </v-layout>
            </v-card>
            <v-card class="text-xs-center" flat>
              <v-layout row wrap>
                <v-flex xs12 md3>Watch</v-flex>
                <v-flex xs12 md3>
                  <v-img class="mx-5 my-2" src="https://picsum.photos/510/300?random" max-height="700"></v-img>
                </v-flex>
                <v-flex xs5 md1>15</v-flex>
                <v-flex xs12 md3>Rp1.000.000</v-flex>
                <v-flex xs5 md1>Shipped</v-flex>
                <v-flex xs2 md1>
                  <v-btn flat icon color="red">
                    <v-icon>clear</v-icon>
                  </v-btn>
                </v-flex>
              </v-layout>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <my-footer></my-footer>
  </div>
</template>

<script>
  import AppNavigation from '@/components/AppNavigation'
  import Footer from '@/components/Footer'

  export default {
    components: {
      AppNavigation,
      'my-footer': Footer
    }
  }
</script>
