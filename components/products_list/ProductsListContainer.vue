<template>
  <div class=" test2" id="productlist">
    <h1 class="parallax-text">Welcome to your GALLERY</h1>

    <div class="row">
      <div class="aa col-lg-3 col-md-6 col-xs-12" v-for="product in products" :key="product.id">
        <VmProducts :product="product"></VmProducts>
      </div>
    </div>
  </div>
</template>

<script>
import VmProducts from "../Products";
import { getByTitle } from "@/assets/filters";

export default {
  name: "productsList",

  components: { VmProducts },

  data() {
    return {
      id: "",
      noProductLabel: "No Image found",
      productsFiltered: []
    };
  },

  computed: {
    products() {
      if (this.$store.state.userInfo.hasSearched) {
        return this.getProductByTitle();
      } else {
        return this.$store.state.products;
      }
    }
  },

  methods: {
    getProductByTitle() {
      let listOfProducts = this.$store.state.products,
        titleSearched = this.$store.state.userInfo.productTitleSearched;

      return (this.productsFiltered = getByTitle(
        listOfProducts,
        titleSearched
      ));
    }
  }
};
</script>

<style lang="scss" scoped>
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}

.card {
  margin: 5px;
  
}

.aa {
  padding: 10px;
 
}

.parallax-text {
  overflow: hidden;
  background-color: rgb(156, 210, 214);
  color: white;
  font-size: 50px;
  line-height: 86px;
  font-weight: 600;
  text-transform: uppercase;
  // mix-blend-mode: lighten;
  margin-top: 50px;
  height: 100%;
  font-family: "Gill Sans", sans-serif;
  text-align: center;
}

.test2{
margin: 5rem;
}


@media (max-width: 600px) {
  .parallax-text {
    overflow: hidden;
    background-color: rgb(156, 210, 214);
    color: white;
    font-size: 20px;
    line-height: 30px;
    font-weight: 600;
    text-transform: uppercase;
    // mix-blend-mode: lighten;
    margin-top: 50px;
    height: 80px;
    font-family: "Gill Sans", sans-serif;
    text-align: center;
    padding: 20px;
  }
}
</style>
