<template>
	<v-dialog max-width="600px">
		<v-btn slot="activator" depressed dark color="orange">
      <span>Check Out</span>
    </v-btn>
		<v-card>
			<v-card-title>
				<h2 class="text-xs-center">Check Out</h2>
				<v-card-text>
					<v-layout class="pa-3" row wrap>
						<v-flex xs12>
							<div class="mb-3 caption grey--text">Product</div>
							<div>Sepatu</div>
						</v-flex>
						<v-flex xs12>
							<div class="mb-3 caption grey--text">Image</div>
							<div>Gambar</div>
						</v-flex>
						<v-flex xs12>
							<div class="mb-3 caption grey--text">Quantity</div>
							<div>10</div>
						</v-flex>
						<v-flex xs12>
							<div class="mb-3 caption grey--text">Price</div>
							<div>100000</div>
						</v-flex>
						<v-flex xs12>
							<div class="mb-3 caption grey--text">Total</div>
							<div>1000000</div>
						</v-flex>
						<v-flex class="my-2" xs12>
							<div class="mb-3 caption grey--text">Customer</div>
							<div>Me</div>
						</v-flex>
						<v-flex  class="my-2" xs12>
							<div class="mb-3 caption grey--text">Address</div>
							<div>Sleman, Indonesia</div>
						</v-flex>
						<v-flex xs12>
							<v-layout justify-end>
								<v-card-actions>
									<v-btn depressed dark color="orange">Check Out</v-btn>
								</v-card-actions>
							</v-layout>
						</v-flex>
					</v-layout>
				</v-card-text>
			</v-card-title>
		</v-card>
	</v-dialog>
</template>

<script>
	export default {
		
	}
</script>

