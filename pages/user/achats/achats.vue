
<template>
  <div class="container">
    <h3 class="title ">{{ pageTitle }}</h3>
    <div class="row">
      <div class=" col-lg-4 col-md-4 col-6 " v-for="product in productsPurchased" :key="product.id">
        <VmProductsList :product="product"></VmProductsList>
      </div>
      <div class="section" v-if="productsPurchased.length === 0">
        <p>{{ noProductLabel }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import VmProductsList from '@/components/Products';
import { getByTitle } from '@/assets/filters';

export default {
	name: 'user-purchases',

	data () {
    return {
      pageTitle: 'Your Purchase List',
      noProductLabel: 'Your Purchase List is empty'
    }
  },

  components: { VmProductsList },

  computed: {
    productsPurchased () {
      if (this.$store.state.userInfo.hasSearched) {
        return this.getProductByTitle();
      } else {
        return this.$store.getters.productsPurchased;
      }
    }
  },

  methods: {
    getProductByTitle () {
      let listOfProducts = this.$store.getters.productsAddedToFavourite,
          titleSearched = this.$store.state.userInfo.productTitleSearched;
      
      return this.productsFiltered = getByTitle(listOfProducts, titleSearched);
    }
  }
}
</script>

<style lang="scss" scoped>
  .title{
    margin-top: 15%;
  }

  * {
  box-sizing: border-box;
}
</style>



