<template>
  <div>
    <AppNavigation/>
    <v-content>
      <v-container>
        <v-layout row wrap>
          <v-flex xs12 md6>
            <v-img class="mx-5 my-2" src="https://picsum.photos/510/300?random" max-height="700"></v-img>
          </v-flex>
          <v-flex xs12 md6>
            <div class="display-1 orange--text my-2">{{ product.name }}</div>
            <div class="headline my-2">{{ product.price }}</div>
            <v-rating class="mx-0 my-2" color="orange" background-color="orange" v-model="rating"></v-rating>
            <div class="subheading grey--text py-2">Check delivery, payment options and charges at your location</div>
            <v-form>
              <v-layout>
                <v-flex xs12>
                  <v-text-field color="orange" label="Address"></v-text-field>
                  <v-text-field color="orange" label="Postal Code"></v-text-field>
                <!-- </v-flex> -->
                <!-- <v-flex xs12 md4> -->
                  <v-select
                    class=" my-2"
                    v-model="select"
                    :items="items"
                    :error-messages="selectErrors"
                    label="Quantity"
                    color="orange"
                    required
                    @change="$v.select.$touch()"
                    @blur="$v.select.$touch()">
                  </v-select>
                </v-flex>
              </v-layout>
              <div class="subheading grey--text">Payment Method</div>
              <v-radio-group row v-model="radioGroup">
                <v-radio
                  class=" my-2"
                  color="orange"
                  v-for="n in 3"
                  :key="n"
                  :label="`Radio ${n}`"
                  :value="n"
                ></v-radio>
              </v-radio-group>
              <v-btn dark depressed color="orange my-2">Add to cart</v-btn>
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
              <v-layout class="my-5" row wrap v-layout align-center justify-start fill-height>
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
        product: '',
        quantity: '',
        rating: '',
        isAuthenticated: false
      }
    },
    components: {
      AppNavigation,
      'my-footer': Footer
    },
    mounted() {
      axios.get('http://localhost:3000/api/products/PROPS!').then(response => {
        this.product = response.data;
      }).catch(error => {
        throw error;
      });
    },
    methods: {
      addToCart() {
        const product = {
          productID: this.product._id,
          status: 1,
          quantity: this.quantity
        }

        axios.post('http://localhost:3000/api/transacitons', product, {headers: {
          'Authorization': auth.getAuthenticationHeader(this)
        }}).catch(error => {
          throw error;
        }).finally(() => {
          this.loading = false;
          this.dialog = false;
          window.location.reload();
        });
      }
    }
  }
</script>
