
<template>
  <div class="container">
    <h3 class="title">{{ pageTitle }}</h3>
    <div class="column">
      <table  >
  <tr>
    <th>PHOTO</th>
    <th>TITLE</th> 
    <th>Description</th>
    <th>PRICE</th>
    <th>Action</th>
  </tr>
  <tr v-for="product in productsPurchased" :key="product.id">
    <td>
      <figure class="image is-96x96">
              <img slot="image" :src="product.image" alt="Card image cap" />
            </figure>
      
    <td>{{product.title}}</td>
    <td>{{product.description}}</td>
    <td>{{product.price}}$</td>
    <td ><button class="btn"><i class="fa fa-download"></i> Download</button></td>
  </tr>
  
</table>
     
     
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
    margin-top: 40px;
  }

  .purchasephoto{
    width: 250px;
  }
  table{
    width: 100%;
  }

  td, th {
    padding: 10px;
}

.btn {
  background-color: DodgerBlue;
  border: none;
  color: white;
  padding: 12px 30px;
  cursor: pointer;
  font-size: 15px;
}
</style>



