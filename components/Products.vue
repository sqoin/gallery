<template>


  <md-card md-with-hover>

    
        <figure class="image is-3by2">
            <img class="animated flipInX" slot="image" :src="product.image" alt="Card image cap" />
        </figure>

 
    <div class="card-footer ">
    


         <md-button
          class="card-footer-item "
           :title="removeFromFavouriteLabel"
           v-show="product.isFavourite"
           @click="removeFromFavourite(product.id)"
       >
         <span class="icon is-small">
           <i class="fa fa-heart"></i>
          </span>
       </md-button>
       <md-button class="card-footer-item is-size-4 ">{{product.price}} &dollar;</md-button>
       <md-button
        :title="addToFavouriteLabel"
        v-show="!product.isFavourite"
        @click="saveToFavorite(product.id)"
       >
         <span class="icon is-small">
          <i class="fa fa-heart-o"></i>
        </span>
      </md-button>

       <md-button
        class="card-footer-item btn btn-outline-warning"
        v-if="!product.isPurchased"
        @click="showCheckoutModal(),addToCart(product.id)"
       >{{ addToCartLabel }}</md-button>

      <md-button disabled 
        class="btn btn-outline-success"
        v-if="product.isPurchased"
        @click="removeFromCart(product.id, false)"
      >{{ removeFromCartLabel }}</md-button>




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



      ></nuxt-link>
    </div>
  </md-card>




</template>
<script>
export default {
  name: "products",
  props: ["product"],

  data() {
    return {
      addToCartLabel: "Buy ",
      viewDetailsLabel: "Details",
      removeFromCartLabel: "Paid",
      addToFavouriteLabel: "Add",
      removeFromFavouriteLabel: "Remove",
      selected: 1,
      showDialog: false,
      name:'',
      quantityArray: [],
      
    };
  },

  mounted() {
    for (let i = 1; i <= 20; i++) {
      this.quantityArray.push(i);
    }

    if (this.$props.product.quantity > 1) {
      this.selected = this.$props.product.quantity;
    }
  },

  computed: {
    isUserLogged() {
      return this.$store.getters.isUserLoggedIn;
    }
  },

  methods: {
    addToCart(id) {
      let data = {
        id: id,
        status: true
      };
      //	window.open('https://sqoin.exchange/walletd/#/checkout');
      this.$store.commit("addToCart", id);
      this.$store.commit("setAddedBtn", data);
    },
    removeFromCart(id) {
      let data = {
        id: id,
        status: false
      };
      this.$store.commit("removeFromCart", id);
      this.$store.commit("setAddedBtn", data);
    },
    saveToFavorite(id) {
      let isUserLogged = this.$store.state.userInfo.isLoggedIn;

      if (isUserLogged) {
        this.$store.commit("addToFavourite", id);
      } else {
        this.$store.commit("showLoginModal", true);
      }
    },
    removeFromFavourite(id) {
      this.$store.commit("removeFromFavourite", id);
    },
    onSelectQuantity(id) {
      let data = {
        id: id,
        quantity: this.selected
      };
      this.$store.commit("quantity", data);
    },
    showCheckoutModal() {
      this.$store.commit("showCheckoutModal", true);
    }
  }
};
</script>

<style lang="scss" scoped>
.details {
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;

  &:hover {


   border-style: none;
   border: 2px solid orange;
  
     
   

  }
}
figure{
  margin:0px;
}
.mdcard .card-footer {
  position: absolute;
  width: 100%;
  height: 30%;
  

  background-color:white;
  border:none;
 
  //border-bottom: 1px solid #FFF;
  //border-top: 1px solid #FFF;

  -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
  transition: opacity 0.35s, transform 0.35s;

  -webkit-transform: scale(0, 1);
  -ms-transform: scale(0, 1);
  transform: scale(0, 1);

}

.md-card:hover .mdcard .card-footer {
  opacity: 1;
  filter: alpha(opacity=100);
  -webkit-transform: scale(1);
  -ms-transform: scale(1);
  transform: scale(1);
}



</style>


