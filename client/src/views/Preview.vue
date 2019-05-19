<template>
  <div>
    <AppNavigation/>
    <v-content>
      <v-container>
        <v-layout row wrap>
          <v-flex xs12 md6>
            <v-img src="https://picsum.photos/510/300?random" aspect-ratio=".8"></v-img>
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
