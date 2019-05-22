<template>
  <div>
    <AppNavigation/>
    <v-content>
      <v-container>
        <v-layout row wrap>
          <v-flex xs12 md6>
            <v-img class="mx-5 my-2" src="https://aqueous-retreat-19121.herokuapp.com/images/a1.jpg" max-height="700"></v-img>
          </v-flex>
          <v-flex xs12 md6>
            <div class="display-1 orange--text my-2">{{ product.name }}</div>
            <div class="headline my-2">{{ product.price }}</div>
            <v-rating class="mx-0 my-2" color="orange" background-color="orange" :value="rating" v-model="rating"></v-rating>
            <div class="subheading grey--text py-2">Check delivery, payment options and charges at your location</div>
            <v-form>
              <v-layout row wrap>
                <v-flex xs12>
                  <v-text-field color="orange" v-model="newCart.address" label="Address"></v-text-field>
                  <v-text-field color="orange" v-model="newCart.postalCode" label="Postal Code"></v-text-field>
                  <v-text-field color="orange" v-model="newCart.quantity" type="number" label="Quantity"></v-text-field>
                <!-- </v-flex> -->
                <!-- <v-flex xs12 md4> -->
                </v-flex>
              </v-layout>
              <v-radio-group row label="Shipping Method" v-model="newCart.shippingMethod">
                <v-radio color="orange" name="active" label="JNE (20.000)" :value="1"></v-radio>
                <v-radio color="orange" name="active" label="J&T (20.000)" :value="2"></v-radio> 
                <v-radio color="orange" name="active" label="TIKI (20.000)" :value="3"></v-radio> 
              </v-radio-group>
              <v-btn dark depressed color="orange my-2" @click="addToCart()">Add to cart</v-btn>
            </v-form>
          </v-flex>
        </v-layout>
      </v-container>
      <v-container>
        <v-flex xs12>
          <v-tabs icons-and-text>
            <v-tabs-slider color="orange"></v-tabs-slider>
            <v-tab class="orange--text" href="#tab-1">
              Description
            </v-tab>
            <v-tab class="orange--text" href="#tab-2">
              Review
            </v-tab>
            <v-tab-item
              v-for="i in 2"
              :key="i"
              :value="'tab-' + i"
            >
              <v-layout class="my-5" row wrap align-center justify-start fill-height>
                <div>
                  <ul>
                    <li>Sport shoe design they saw the light with a responsive</li>
                    <li>Blue color</li>
                    <li>Primeknit top</li>
                    <li>Textile Insole</li>
                    <li>Dual-density Technology Boost pads for stability when running</li>
                    <li>With Fitcounter Molded heel counter on sections for a natural movement</li>
                    <li>Continental™ Rubber outsole that is suitable for wet and dry Kolopetong</li>
                    <li>Front Strap</li>
                    <li>Almond toe</li>
                  </ul>
                </div>
              </v-layout>
            </v-tab-item>
          </v-tabs>
        </v-flex>
      </v-container>
    </v-content>
    <my-footer></my-footer>
  </div>
</template>

<script>
  import AppNavigation from '@/components/AppNavigation'
  import Footer from '@/components/Footer'
  import axios from 'axios'
  import auth from '@/auth'
  export default {
    data() {
      return {
        rating: 3,
        isAuthenticated: false,
        product: [],
        newCart: {
          productID: '5ce4825a0a131527333bc178',
          quantity: '',
          address: '',
          postalCode: '',
          shippingMethod: 1
        }
      }
    },
    components: {
      AppNavigation,
      'my-footer': Footer
    },
    mounted() {
      axios.get(`https://aqueous-retreat-19121.herokuapp.com/api/products/5ce4825a0a131527333bc178`).then(response => {
        this.product = response.data[0];
      }).catch(error => {
        throw error;
      });
    },
    computed: {
      id() {
        return this.$store.state.id
      }
    },
    methods: {
      addToCart() {
        const product = {
          productID: this.newCart.productID,
          quantity: this.newCart.quantity,
          address: this.newCart.address,
          postalCoda: this.newCart.postalCode,
          shippingMethod: this.newCart.shippingMethod
        }

        axios.post('https://aqueous-retreat-19121.herokuapp.com/api/carts', product, {headers: {
          'Authorization': auth.getAuthenticationHeader(this)
        }}).catch(error => {
          throw error;
        }).finally(() => {
          this.loading = false;
          this.dialog = false;
          window.location.replace('/cart');
        });
      }
    }
  }
</script>
