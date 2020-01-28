<template>
  <md-card class="cart" md-with-hover>
    <figure class="image is-4by3 ">
      <img class="animated flipInX" slot="image" v-img :src="product.image" alt="Card image cap" />
    </figure>

    <div class="card-footer">
      <md-button
        class="card-footer-item col-md-4"
        :title="removeFromFavouriteLabel"
        v-show="product.isFavourite"
        @click="removeFromFavourite(product.id)"
      >
        <span class="icon is-small">
          <i class="fa fa-heart"></i>
        </span>
      </md-button>

      <md-button class="card-footer-item is-size-4 col-md-4">{{product.price}} &dollar;</md-button>

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
        class="card-footer-item btn btn-info col-md-2"
        v-if="!product.isPurchased"
        @click="showCheckoutModal(),addToCart(product.id)"
      >{{ addToCartLabel }}</md-button>

      <md-button
        disabled
        class="btn btn-outline-success col-sm-4"
        v-if="product.isPurchased"
        @click="removeFromCart(product.id, false)"
      >{{ removeFromCartLabel }}</md-button>

      <!--  <router-link
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
      ></router-link>-->
    </div>
  </md-card>
</template>
<script>
import Vue from "vue";
import VueImg from "v-img";
Vue.use(VueImg);

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
      name: "",
      quantityArray: [],
      index: null
    };
  },

  mounted() {
    for (let i = 1; i <= 20; i++) {
      this.quantityArray.push(i);
    }

    if (this.$props.product.quantity > 1) {
      this.selected = this.$props.product.quantity;
    }

    if (window.location.href.indexOf("txid") > -1) {
      const idProduct = Number(this.$route.query.productId);
      this.$store.commit("purchase", idProduct);
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
        // localStorage.setItem("test", id)  ;
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
    // border: 2px solid orange;
  }
}
figure {
  margin: 0px;
      border-radius: 20px;
}
  img{
     border-radius: 20px;

  }

  .cart{
     border-radius: 20px;
  }
.md-card .card-footer {
  position: relative;
  display: none;
}

.card-footer-item {
  color: white;
      font-size: 10px;
    font-family: cursive;
}

.md-card:hover .card-footer {
  position: absolute;
  display: inline;

  color: white;
  /* bottom: 30%; */
  top: 80%;
  // border: 2px solid red;
  width: 100%;
  padding: 0.75rem 1.25rem;
 // background-color: rgba(59, 59, 59, 0.336);
}
.md-button {
  min-width: 50px;
}

.md-button .md-ripple {
    padding: 0 8px;
    display: contents;
    justify-content: center;
    align-items: center; }


@media (max-width: 600px) {
  .md-card:hover .card-footer {
   
    position: absolute;
    display: flex;
    color: white;
    /* bottom: 30%; */
    top: 70%;
    // border: 2px solid red;
    width: 100%;
    padding: 0.75rem 1.25rem;
    background-color: rgba(59, 59, 59, 0.336);
  }

  .md-button {
    min-width: 30px;
  }
}

@media (min-width: 601px) and (max-width: 767px){

.md-card:hover .card-footer {
   
    position: absolute;
    display: flex;
    color: white;
    /* bottom: 30%; */
    top: 75%;
    // border: 2px solid red;
    width: 100%;
    padding: 0.75rem 1.25rem;
    background-color: rgba(59, 59, 59, 0.336);
  }

  .card-footer-item {
  color: white;
      font-size: 10px;
    font-family: cursive;
}


}

@media (min-width: 992px) and (max-width: 1200px) { 
  .md-card:hover .card-footer {
   
    position: absolute;
    display: flex;
    color: white;
    /* bottom: 30%; */
    top: 60%;
    // border: 2px solid red;
    width: 100%;
    padding: 0.75rem 1.25rem;
    background-color: rgba(59, 59, 59, 0.336);
  }

  .card-footer-item {
  color: white;
     font-size: 0.8em;
    font-family: cursive;
        padding: 0;
}

.md-button-content {
    position: relative;
    z-index: 2;
    font-size: 5px;
    
    padding: 7px; }

    
.md-button .md-ripple {
    padding: 0 8px;
    display: contents;
    justify-content: center;
    align-items: center; }



 }
</style>


