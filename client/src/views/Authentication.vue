<template>
  <v-content>
    <v-container>
      <v-layout align-center justify-center>
        <v-flex xs12 sm6 md3>
          <v-card flat>
            <v-img
              :src="require('../assets/logo.jpg')"
              class="my-3"
              contain
              height="200"
            ></v-img>
            <v-card-actions>
              <v-form ref="form">
                <v-text-field label="Username" color="orange"></v-text-field>
                <v-text-field label="Password" color="orange"></v-text-field>
                <v-btn depressed dark color="orange">Login</v-btn>
              </v-form>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
  export default {
      
  }
</script>

<style>

</style>
