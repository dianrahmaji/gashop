<template>
  <div>
    <AppNavigation/>
    <v-content>
      <v-container fluid class="pa-0">
        <v-layout row wrap>
        <v-flex xs12>
          <v-carousel hide-controls>
            <v-carousel-item
              v-for="(item,i) in items"
              :key="i"
              :src="item.src"
            ></v-carousel-item>
          </v-carousel>
        </v-flex>
        </v-layout>
      </v-container>
      <v-container>
        <v-layout row wrap>
        <v-flex xs12>
          <v-tabs centered icons-and-text>
            <v-tabs-slider color="orange"></v-tabs-slider>
            <v-tab class="orange--text" href="#tab-1">
              Recents
            </v-tab>
            <v-tab class="orange--text" href="#tab-2">
              Special Offers
            </v-tab>
            <v-tab class="orange--text" href="#tab-3">
              Collections
            </v-tab>
            <v-tab-item
              v-for="i in 3"
              :key="i"
              :value="'tab-' + i"
            >
              <v-layout row wrap align-center justify-start fill-height>
                 <v-flex v-for="product in products" :key="product._id"  class="ma-3" xs12 sm4 md3>
                  <v-card >
                    <v-img
                      :src="`http://localhost:3000/images/${product.imageURL}`"
                      aspect-ratio=".8"
                    ></v-img>

                    <v-card-title primary-title>
                      <div>
                        <div class="headline orange--text">{{ product.name }}</div>
                        <div class="subheading">{{ product.price }}</div>
                        <div></div>
                      </div>
                    </v-card-title>

                    <v-card-actions>
                      <v-btn @click="viewProduct(`${product._id}`)" dark depresed color="orange">Preview</v-btn>
                      <v-spacer></v-spacer>
                      <!-- <v-btn dark depressed color="orange">Add to cart</v-btn> -->
                    </v-card-actions>
                  </v-card>
               </v-flex>
              </v-layout>
            </v-tab-item>
          </v-tabs>
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
  import axios from 'axios'
  import auth from '@/auth'
  export default {
      components: {
        AppNavigation,
        'my-footer': Footer
      },
      data() {
        return {
          items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
          }
        ],
        products: [],
        isAuthenticated: false,
        id: ''
        }
      },
      mounted() {
        axios.get('http://localhost:3000/api/products').then(response => {
          this.products = response.data;
        }).catch(error => {
          throw error
        });
        this.isAuthenticated = auth.isAuthenticated();
      },
      methods: {
        viewProduct(id) {
          this.$store.dispatch('setID', id);
          window.location.replace('/preview');
        }
      }
  }
</script>
