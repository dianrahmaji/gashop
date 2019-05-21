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
            <v-btn flat color="orange">Browse Image . . .</v-btn>
            <v-text-field color="orange" label="Stock" type="number" v-model="newProduct.stock"></v-text-field>
            <v-text-field color="orange" label="Price(Rp)" type="number" v-model="newProduct.price"></v-text-field>
            <v-btn depressed dark class="mx-0 mt-3" color="orange">Add</v-btn>
          </v-form>
        </v-card-text>
      </v-card-title>
    </v-card>
  </v-dialog>
</template>

<script>
  export default {
    data() {
      return {
        newProduct: {
          name: '',
          stock: '',
          price:''
        }
      }
    }
  }
</script>

<style>

</style>
