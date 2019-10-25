<template>

<div class="card" data-aos="flip-up" data-aos-duration="infinte">
    <div class="card-image">
    <figure class="image is-3by2">
      <img
          slot="image"
        
          :src="product.image"
          alt="Card image cap"
           
        />
        
   </figure>
  </div>
  <div class="card-footer is-centered">
  
     <md-button class="card-footer-item" :title="removeFromFavouriteLabel" v-show="product.isFavourite" @click="removeFromFavourite(product.id)">
       <span class="icon is-small">
         <i class="fa fa-heart"></i>
       </span>
     </md-button>
            <md-button class="card-footer-item is-hovered"> {{product.price}} &dollar;</md-button>
        <md-button  :title="addToFavouriteLabel" v-show="!product.isFavourite" @click="saveToFavorite(product.id)">
              <span class="icon is-small">
              <i class="fa fa-heart-o"></i>
            </span>
          </md-button>
          
            <md-button class="card-footer-item btn btn-outline-warning" v-if="!product.isAddedToCart" @click="showCheckoutModal(),addToCart(product.id)" >{{ addToCartLabel }}</md-button>
           <md-button  class="btn btn-outline-success" v-if="product.isAddedToCart" @click="removeFromCart(product.id, false)">{{ removeFromCartLabel }}</md-button> 
          
          
       
  </div>
    <nuxt-link
      class="details"
      :to="{
        name: 'product_detail-id',
        params: {
          id: product.id,
          title: product.title,
          image: product.image,
          price: product.price,
          rating: product.ratings,
          reviews: product.reviews,
          isAddedBtn: product.isAddedBtn
        }
      }"
    >
    </nuxt-link>
  </div>
</template>





<script>
export default {
  name: 'products',
  props: ['product'],
   name: 'Direction',

  data () {
    return {
      addToCartLabel: 'Buy ',
      viewDetailsLabel: 'Details',
      removeFromCartLabel: 'Remove',
      addToFavouriteLabel: 'Add',
      removeFromFavouriteLabel: 'Remove',
      selected: 1,
      quantityArray: [],
      
    }
  },

  mounted () {
    for (let i = 1; i <= 20; i++) {
      this.quantityArray.push(i);
    }

    if (this.$props.product.quantity > 1) {
      this.selected = this.$props.product.quantity;
    }
  },

  computed: {
    isUserLogged () {
      return this.$store.getters.isUserLoggedIn;
    }
  },

  methods: {
    addToCart (id) {
      let data = {
        id: id,
        status: true
      }
      this.$store.commit('addToCart', id);
      this.$store.commit('setAddedBtn', data);
    },
    removeFromCart (id) {
      let data = {
        id: id,
        status: false
      }
      this.$store.commit('removeFromCart', id);
      this.$store.commit('setAddedBtn', data);
    },
    saveToFavorite (id) {
      let isUserLogged = this.$store.state.userInfo.isLoggedIn;

      if (isUserLogged) {
        this.$store.commit('addToFavourite', id);
      } else {
        this.$store.commit('showLoginModal', true);
      }
    },
    removeFromFavourite (id) {
      this.$store.commit('removeFromFavourite', id);
    },
    onSelectQuantity (id) {
      let data = {
        id: id,
        quantity: this.selected
      }
      this.$store.commit('quantity', data);
    },showCheckoutModal () {
        
        this.$store.commit('showCheckoutModal', true);
      
      }
  }
}
</script>

<style lang="scss" scoped>
.avatar{
 border: 2px solid red;
}


 .details {
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;

    &:hover {
      border: 1px solid orange;
    }
 }
 
 
</style>


