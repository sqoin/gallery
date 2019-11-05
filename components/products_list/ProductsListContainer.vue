<template>

  <div class="container">
  
  <div class="row text-center text-lg-left">
   
     <div class="col-lg-4 col-md-4 col-6" v-for="product in products" :key="product.id">
      <VmProducts :product="product"></VmProducts>
     
    </div>
     

  </div>
</div>
</template>

<script>
import VmProducts from '../Products';
import { getByTitle } from '@/assets/filters';

export default {
  name: 'productsList',
  
  

  components: { VmProducts },
  
  data () {
    return {
      id: '',
      noProductLabel: 'No Image found',
      productsFiltered: []
    };
  },

  computed: {
    products () {
      if (this.$store.state.userInfo.hasSearched) {
        return this.getProductByTitle();
      } else {
        return this.$store.state.products;
      }
    }
  },

  methods: {
    getProductByTitle () {
      let listOfProducts = this.$store.state.products,
          titleSearched = this.$store.state.userInfo.productTitleSearched;
      
      return this.productsFiltered = getByTitle(listOfProducts, titleSearched);
    }
  }

};

</script>

<style lang="scss" scoped>
.card{
 margin :3px ;
}

  
</style>
