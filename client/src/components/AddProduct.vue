<template>
  <v-dialog max-width="600px" v-model="dialog">
    <v-btn slot="activator" depressed dark color="orange" class="hidden-xs-and-only">
      <span>Add Product</span>
    </v-btn>
    <v-card>
      <v-card-title>
        <h2>Add New Product</h2>
        <v-card-text>
          <v-form class="px-5" ref="form">
            <v-text-field color="orange" label="Name" v-model="newProduct.name"></v-text-field>
            <v-text-field color="orange" label="Image Name" v-model="newProduct.imageURL"></v-text-field>
            <!-- <v-btn flat color="orange" @click="$refs.inputUpload.click()">Browse Image . . .</v-btn>
            <input v-show="false" ref="inputUpload" type="file" @change="onFileChanged" > -->
            <v-text-field color="orange" label="Stock" type="number" v-model="newProduct.stock"></v-text-field>
            <v-text-field color="orange" label="Price(Rp)" type="number" v-model="newProduct.price"></v-text-field>
            <v-btn depressed @click="submit()" :loading="loading" dark class="mx-0 mt-3" color="orange">Add</v-btn>
          </v-form>
        </v-card-text>
      </v-card-title>
    </v-card>
  </v-dialog>
</template>

<script>
  import axios from 'axios'
  import auth from '@/auth'

  export default {
    data() {
      return {
        newProduct: {
          name: '',
          stock: '',
          price:'',
          imageURL: '',
        },
        dialog: false,
        loading: false,
      }
    },
    methods: {
      onFileChanged (event) {
        this.file = event.target.files[0]
      },
      submit() {
        const product = {
          name: this.newProduct.name,
          price: this.newProduct.price,
          stock: this.newProduct.stock,
          imageURL: this.newProduct.imageURL
        }
        axios.post('http://localhost:3000/api/products', product, {headers: {
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

<style>

</style>
