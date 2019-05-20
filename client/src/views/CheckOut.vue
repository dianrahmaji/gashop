<template>
  <div>
    <AppNavigation/>
    <v-content>
      <v-container>
        <div class="display-2 text-md-center .font-weight-bold">My Shopping Bag</div>
        <v-layout class="my-5" row wrap>
          <v-flex>
            <v-card class="text-xs-center" flat>
              <v-layout class="font-weight-bold subheading" row wrap>
                <v-flex xs12 md3>Product Name</v-flex>
                <v-flex xs12 md3>Product</v-flex>
                <v-flex xs10 md2>Quantity</v-flex>
                <v-flex xs12 md3>Price</v-flex>
              </v-layout>
            </v-card>
            <v-divider class="my-3"></v-divider>
            <v-card class="text-xs-center" flat>
              <v-layout row wrap>
                <v-flex xs12 md3>Hand Bag</v-flex>
                <v-flex xs12 md3>
                  <v-img class="mx-5 my-2" src="https://picsum.photos/510/300?random" max-height="700"></v-img>
                </v-flex>
                <v-flex xs10 md2>1</v-flex>
                <v-flex xs12 md3>Rp1.500.000</v-flex>
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
                <v-flex xs10 md2>1</v-flex>
                <v-flex xs12 md3>Rp1.000.000</v-flex>
                <v-flex xs2 md1>
                  <v-btn flat icon color="red">
                    <v-icon>clear</v-icon>
                  </v-btn>
                </v-flex>
              </v-layout>
            </v-card>
          </v-flex>
        </v-layout>
        <v-layout class="my-5" align-center justify-end fill-height row wrap>
           <v-flex
          xs12
          sm6
          md4
          lg3
        >
          <v-card>
            <v-card-title><h4>Shopping Basket</h4></v-card-title>
            <v-divider></v-divider>
            <v-list dense>
              <v-list-tile>
                <v-list-tile-content>Hand Bag:</v-list-tile-content>
                <v-list-tile-content class="align-end">Rp1.500.000</v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>Watch:</v-list-tile-content>
                <v-list-tile-content class="align-end">Rp.1000.000</v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>Total:</v-list-tile-content>
                <v-list-tile-content class="align-end">Rp2.500.000</v-list-tile-content>
              </v-list-tile>
            </v-list>
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

