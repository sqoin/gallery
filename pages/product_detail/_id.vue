

<template>

  <div class ="container">
    <article class="tile is-child notification has-text-warning">
      <h2 class="title is-4">{{ product.title }}</h2>

      <div class="columns is-vcentered">
        <div class="column is-8">
          <span class="bd-notification is-primary">
           <div class="view overlay">
            <figure class="image is-4by3 img-fluid rounded-0">
              <img slot="image" :src="product.image" alt="Card image cap" />
            </figure>
            </div>
          </span>
        </div>
        <div class="column has-text-centered">
          <p class="bd-notification is-primary"></p>
          <div class="card-content__price">
            <span class="title is-3">
              <strong>{{ product.price }}&dollar;</strong>
            </span>
          </div>
          <div class="card-content__btn">
            <button
              class="button is-small"
              :title="removeFromFavouriteLabel"
              v-show="product.isFavourite"
              @click="removeFromFavourite(product.id)"
            >
              <span class="icon is-small">
                <i class="fa fa-heart"></i>
              </span>
            </button>
            <button
              class="button is-small"
              :title="addToFavouriteLabel"
              v-show="!product.isFavourite"
              @click="saveToFavorite(product.id)"
            >
              <span class="icon is-small">
                <i class="fa fa-heart-o" style="color:red"></i>
              </span>
            </button>

            <md-button
              class="card-footer-item btn btn-outline-warning"
              v-if="!product.isPurchased"
              @click="showCheckoutModal(),addToCart(product.id)"
            >{{ addToCartLabel }}</md-button>

            <md-button
              class="btn btn-outline-success"
              v-if="product.isPurchased"
            >{{ removeFromCartLabel }}</md-button>
          </div>
        </div>
      </div>
    </article>

  </div>
</template>

<script>
export default {
  name: "product_detail-id",

  validate({ params }) {
    return /^\d+$/.test(params.id);
  },

  data() {
    return {

      addToCartLabel: "Buy",
      removeFromCartLabel: "paid",
      addToFavouriteLabel: "Add to favourite",
      removeFromFavouriteLabel: "Remove from favourite",

      product: {},
      selected: 1,
      quantityArray: []
    };
  },

  mounted() {
    this.product = this.$store.getters.getProductById(this.$route.params.id);
    this.selected = this.product.quantity;

    for (let i = 1; i <= 20; i++) {
      this.quantityArray.push(i);
    }
  },

  computed: {
    isAddedBtn() {
      return this.product.isAddedBtn;
    }
  },

  methods: {
    addToCart(id) {
      let data = {
        id: id,
        status: true
      };
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
    onSelectQuantity(id) {
      let data = {
        id: id,
        quantity: this.selected
      };
      this.$store.commit("quantity", data);
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
    showCheckoutModal() {
      this.$store.commit("showCheckoutModal", true);
    }
  }
};
</script>

<style lang="scss" scoped>

  .card-content {
    

    &__text {
      margin: 15px 0;
    }
   

  }

</style>

