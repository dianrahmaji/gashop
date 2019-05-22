<template>
  <div>
		<AppNavigation/>
		<v-content>
			<v-container>
				<div class="display-2 text-md-center .font-weight-bold">Ordered to You</div>
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
