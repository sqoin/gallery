<template>
  <div class="section">
    <h3 class="title">{{ pageTitle }}</h3>
    <div class="row">
      <div class="col-lg-4 col-md-4 col-6" v-for="product in productsSold" :key="product.id">
        <VmProductsList :product="product"></VmProductsList>
      </div>
      <div class="section" v-if="productsSold.length === 0">
        <p>{{ noProductLabel }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import VmProductsList from '@/components/Products';
import { getByTitle } from '@/assets/filters';

export default {
	name: 'user-ventes-ventes',

	data () {
    return {
      pageTitle: 'Your Sold List',
      noProductLabel: 'Your Sold List is empty'
    }
  },

  components: { VmProductsList },

  computed: {
    productsSold () {
      if (this.$store.state.userInfo.hasSearched) {
        return this.getProductByTitle();
      } else {
        return this.$store.getters.productsSold;
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
  .card {
    margin: 10px;
  }
/*  .card .profil,
.card .card-footer
 {display: none !important;}*/
</style>


