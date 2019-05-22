<template>
  <v-dialog max-width="600px">
    <v-btn slot="activator" flat color="orange" class="hidden-xs-only">
      <span>Sign In</span>
    </v-btn>
    <v-card>
      <v-card-title>
        <h2>Sign Up</h2>
        <v-card-text>
          <v-form class="px-3" ref="form">
            <v-text-field color="orange" label="Username" v-model="newUser.username"></v-text-field>
            <v-text-field color="orange" label="Email" v-model="newUser.email"></v-text-field>
            <v-text-field color="orange" label="Password" type="password" v-model="newUser.password"></v-text-field>
            <v-btn flat class="mx-0 mt-3" color="orange" @click="signup()">Sign Up</v-btn>
          </v-form>
        </v-card-text>
      </v-card-title>
    </v-card>
    <v-card>
      <v-card-title>
        <h2>Sign In</h2>
        <v-card-text>
          <v-form class="px-3" ref="form">
            <v-text-field color="orange" label="Username" v-model="credentials.username"></v-text-field>
            <v-text-field color="orange" label="Password" type="password" v-model="credentials.password"></v-text-field>
            <v-btn flat class="mx-0 mt-3" color="orange" @click="login()">Sign In</v-btn>
          </v-form>
        </v-card-text>
      </v-card-title>
    </v-card>
  </v-dialog>
</template>

<script>
  import auth from '@/auth'

  export default {
    data() {
      return {
        credentials: {
          username: '',
          password: ''
        },
        newUser: {
          username: '',
          email: '',
          password: ''
        }
      }
    },
    methods: {
      login() {
        auth.authenticate(this, this.credentials, '/');
      },
      signup() {
        auth.signup(this, this.newUser, '/'); 
      },
      signout() {
        auth.signout(this, '/');
      }
    }
  }
</script>

<style>

</style>
