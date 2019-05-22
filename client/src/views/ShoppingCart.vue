<template>
  <div>
		<AppNavigation/>
		<v-content>
			<v-container>
				<div class="display-2 text-md-center .font-weight-bold">My Shopping Cart</div>
					<v-card flat>
						<v-layout class="my-5" row wrap>
							<v-flex xs12 md3>
								<div class="mb-3 caption grey--text">Product</div>
								<div>Sepatu</div>
							</v-flex>
							<v-flex xs12 md3>
								<div class="mb-3 caption grey--text">Image</div>
								<div>Gambar</div>
							</v-flex>
							<v-flex xs4 md2>
								<div class="mb-3 caption grey--text">Quantity</div>
								<div>10</div>
							</v-flex>
							<v-flex xs4 md2>
								<div class="mb-3 caption grey--text">Price</div>
								<div>100000</div>
							</v-flex>
							<v-flex xs4 md2>
								<div class="mb-3 caption grey--text">Total</div>
								<div>1000000</div>
							</v-flex>
						</v-layout>
						<v-divider></v-divider>
						<v-layout row wrap>
							<v-flex class="my-2" xs12>
								<div class="mb-3 caption grey--text">Buyer</div>
								<div>Me</div>
							</v-flex>
							<v-flex  class="my-2" xs12>
								<div class="mb-3 caption grey--text">Address</div>
								<div>Sleman, Indonesia</div>
							</v-flex>
							<v-flex justify-end class="my-2" xs12>
								<v-layout justify-end>
									<v-btn class="mx-3" flat dark color="orange">Cancel</v-btn>
									<CheckOut/>
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
	import CheckOut from '@/components/CheckOut'

	export default {
		components: {
			AppNavigation,
			'my-footer': Footer,
			CheckOut
		}
		
	}
</script>

