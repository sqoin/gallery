<template>

	<p class="control has-icons-left ">
		<input
			class="btn btn-outline-light  input is-warning"
			type="search"
			v-model="value"
			:placeholder="Search"
			@keyup="search(value)"
		>
		<span class="icon is-small is-left">
			<i class="fa fa-search"></i>
		</span>
	
	</p>
</template>

<script>
export default {
  name: 'search',
	data () {
		return {
			value: ''
		}
	},

	computed: {
		placeholder () {
			if (this.$route.path === '/wishlist') {
				return 'Search in wishlist...';
			} else {
				return 'Search...';
			}
		}
	},

	methods: {
		search (value) {
			if (value.length > 0) {
				this.$store.commit('setHasUserSearched', true);
				this.$store.commit('setProductTitleSearched', value);
			} else {
				this.$store.commit('setHasUserSearched', false);
				this.$store.commit('setProductTitleSearched', '');
			}
		}
	}
}
</script>

