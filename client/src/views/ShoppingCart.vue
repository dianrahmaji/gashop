<template>
  <div>
		<AppNavigation/>
		<v-content>
			<v-container>
				<div class="display-2 text-md-center .font-weight-bold">My Shopping Cart</div>
					<v-card v-for="cart in carts" :key="cart._id" flat>
						<v-layout class="my-5" row wrap>
							<v-flex xs12 md3>
								<div class="mb-3 caption grey--text">Product</div>
								<div>{{ cart.productID.name }}</div>
							</v-flex>
							<v-flex xs12 md3>
								<div class="mb-3 caption grey--text">Image</div>
								<v-img
								:src="`http://localhost:3000/images/${cart.productID.imageURL}`"
								aspect-ratio=".8"
								></v-img>
							</v-flex>
							<v-flex xs4 md2>
								<div class="mb-3 caption grey--text">Quantity</div>
								<div>{{cart.quantity}}</div>
							</v-flex>
							<v-flex xs4 md2>
								<div class="mb-3 caption grey--text">Price</div>
								<div>{{ cart.productID.price }}</div>
							</v-flex>
							<v-flex xs4 md2>
								<div class="mb-3 caption grey--text">Total</div>
								<div>{{cart.quantity * cart.productID.price + 20000  }}</div>
							</v-flex>
						</v-layout>
						<v-divider></v-divider>
						<v-layout row wrap>
							<v-flex class="my-2" xs12 md3>
								<div class="mb-3 caption grey--text">Customer</div>
								<div>{{ cart.customerID.username }}</div>
							</v-flex>
							<v-flex  class="my-2" xs12 md3>
								<div class="mb-3 caption grey--text">Address</div>
								<div>{{ cart.address }}</div>
							</v-flex>
							<v-flex  class="my-2" xs12 md3>
								<div class="mb-3 caption grey--text">Shipping Method</div>
								<div>{{shippingMethod(cart.shippingMethod)}}</div>
							</v-flex>
							<v-flex justify-end class="my-2" xs12>
								<v-layout justify-end>
									<v-btn class="mx-3" flat dark color="orange">Cancel</v-btn>
									<v-btn @click="checkOut()" depressed dark color="orange">
										<span>Check Out</span>
									</v-btn>
								</v-layout>
							</v-flex>
						</v-layout>
					</v-card>
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
			'my-footer': Footer,
		},
		data() {
			return {
				carts: [],
			}
		},
		mounted() {
			axios.get(`http://localhost:3000/api/carts`, {
				headers: {
					'Authorization': auth.getAuthenticationHeader(this)
				}
			}).then(response => {
			this.carts = response.data;
			}).catch(error => {
				throw error;
			});
		},
		methods: {
			shippingMethod(method) {
				if(method == 1) {
					return 'JNE (Rp20.000)'
				} else if (method == 2) {
					return 'J&T (Rp20.000)'
				} else if (method == 3) {
					return 'TIKI (Rp20.000)'
				} else {
					return 'error';
				}
			},
			checkOut() {
				const order = {
					cart: this.carts[0]
				}

				axios.post('http://localhost:3000/api/orders', order, {
					headers: {
						'Authorization': auth.getAuthenticationHeader(this)
					}
				}).catch(error => {
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

