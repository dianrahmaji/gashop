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
                <v-flex xs5 md1>Quantity</v-flex>
                <v-flex xs12 md3>Total</v-flex>
                <v-flex xs5 md1>Status</v-flex>
              </v-layout>
            </v-card>
            <v-divider class="my-3"></v-divider>
            <v-card  v-for="order in orders" :key="order._id" class="text-xs-center" flat>
              <v-layout row wrap>
                <v-flex xs12 md3>{{ order.productID.name }}</v-flex>
                <v-flex xs12 md3>
                  <v-img class="mx-5 my-2" :src="`http://localhost:3000/images/${order.productID.imageURL}`" max-height="700"></v-img>
                </v-flex>
                <v-flex xs5 md1>{{ order.cartID.quantity }}</v-flex>
                <v-flex xs12 md3>{{ order.cartID.quantity * order.productID.price + 20000 }}</v-flex>
                <v-flex xs5 md1>{{ getStatus(order.status) }}</v-flex>
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
  import axios from 'axios'
  import auth from '@/auth'

  export default {
    components: {
      AppNavigation,
      'my-footer': Footer
    },
    data() {
      return {
        orders: []
      }
    },
    mounted() {
      axios.get(`http://localhost:3000/api/orders`, {
				headers: {
					'Authorization': auth.getAuthenticationHeader(this)
				}
			}).then(response => {
      this.orders = response.data;
			}).catch(error => {
				throw error;
			});
    },
    methods: {
      getStatus(stat) {
				if(stat == 1) {
					return 'Shipped'
				} else if (stat == 2) {
					return 'Pending'
				} else if (stat == 3) {
					return 'Confirmed'
				} else {
					return 'error';
				}
			},
    }
  }
</script>
