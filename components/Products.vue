<template>

  <card class="col-lg-4 col-md-4 col-6 ">
 
      <figure class="image is-3by2 ">
        <img  class="animated flipInX" slot="image" :src="product.image" alt="Card image cap" 
        />
       
		
        <img
          class="profil is-rounded md-raised"
          @click="showDialog = true"
           :src="this.$store.state.userInfo.photo"
          alt="Image"
        />

       </figure>
      
      <md-dialog :md-active.sync="showDialog">
        <md-dialog-title>
          Photographe Profil
          <md-icon>favorite</md-icon>
          <md-icon>camera_alt</md-icon>
        </md-dialog-title>

        <md-tabs md-dynamic-height>
          <md-tab md-label="General">
            <div class="box">
              <article class="media">
                <div class="media-left">
                  <figure class="image is-64x64">
                    <img
                      :src="this.$store.state.userInfo.photo"
                      alt="Image"
                    />
                  </figure>
                </div>
                <div class="media-content">
                  <div class="content">
                    <p>
                      <strong>{{ this.$store.state.userInfo.name }}</strong>
                      <small>@Larasmith</small>
                      <br />Rien n’est plus simple et immédiat qu’une photo de profil pour montrer qui vous êtes. En un regard, vous levez une partie du voile sur votre personnalité. A condition que votre photo soit réussie)
                    </p>
                  </div>
                  <nav class="level is-mobile">
                    <div class="level-left">
                      <a class="level-item" aria-label="reply">
                        <span class="icon is-small">
                          <i class="fa fa-reply" aria-hidden="true"></i>
                        </span>
                      </a>
                      <a class="level-item" aria-label="retweet">
                        <span class="icon is-small">
                          <i class="fa fa-retweet" aria-hidden="true"></i>
                        </span>
                      </a>
                      <a class="level-item" aria-label="like">
                        <span class="icon is-small">
                          <i class="fa fa-heart" aria-hidden="true"></i>
                        </span>
                      </a>
                    </div>
                  </nav>
                </div>
              </article>
            </div>
          </md-tab>

          <md-tab md-label="Activity">
            <div class="tile is-ancestor">
              <div class="tile is-vertical is-8">
                <div class="tile">
                  <div class="tile is-parent is-vertical">
                    <article class="tile is-child notification is-primary">
                      <p class="title">Nature...</p>
                      <figure class="image is-5by4">
                        <img
                          src="https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        />
                      </figure>
                    </article>
                    <article class="tile is-child notification is-warning">
                      <p class="title">...tiles</p>
                      <p class="subtitle">Bottom tile</p>
                    </article>
                  </div>
                  <div class="tile is-parent">
                    <article class="tile is-child notification">
                      <p class="subtitle">With an image</p>
                      <figure class="image is-5by4">
                        <img
                          src="https://www.ouest-france.fr/sites/default/files/styles/image-640x360-p/public/2017/05/31/quentin-un-photographe-passionne-par-la-nature.jpg?itok=u5K-hqPZ"
                        />
                      </figure>
                    </article>
                  </div>
                </div>
              </div>
              <div class="tile is-parent">
                <article class="tile is-child notification is-success">
                  <div class="content">
                    <p class="title">Tall tile</p>
                    <p class="subtitle">With even more content</p>
                    <div class="content">
                      <!-- Content -->
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </md-tab>
        </md-tabs>

        <md-dialog-actions>
          <md-button class="md-primary" @click="showDialog = false">Close</md-button>
        </md-dialog-actions>
      </md-dialog>
      
    <div class="flip-card">
      <div class="flip-card-inner">
         <div class="flip-card-front">
           <p>{{ product.description }}</p>
       </div>
    
    <div class="flip-card-back">
    
    
      <md-button
        class="card-footer-item"
        :title="removeFromFavouriteLabel"
        v-show="product.isFavourite"
        @click="removeFromFavourite(product.id)"
      >
        <span class="icon is-small">
          <i class="fa fa-heart"></i>
        </span>
      </md-button>
      <md-button class="card-footer-item is-hovered">{{product.price}} &dollar;</md-button>
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

     </div>
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

       ></nuxt-link>
     
    
    </div>
  </card>

 

</template>
<script>
export default {
  name: "products Direction DialogCustom  ",
  props: ["product","name"],

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
   //border: 0.1px solid red;
  
     
   

  }
}


.profil {
  display: none;
  position: absolute;
  max-width: 50px;
  max-height: 50px;
  /* top: initial; */
  margin-top: 50%;
}
.card:hover .profil {
  display: block;
  bottom: 20%;
  color: orange;
}
.md-dialog {
  max-width: 900px;
}
.flip-card {
  background-color: transparent;
  width: 100%;
  height: 50px;
  //border: 1px solid #f1f1f1;
  perspective: 1000px; /* Remove this if you don't want the 3D effect */
}

/* This container is needed to position the front and back side */
.flip-card-inner {
    text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

/* Do an horizontal flip when you move the mouse over the flip box container */
.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

/* Position the front and back side */
.flip-card-front, .flip-card-back {
  position: absolute;

 
  backface-visibility: hidden;
}

/* Style the front side (fallback if image is missing) */

/* Style the back side */
.flip-card-back {
  //background-color: dodgerblue;
  
  transform: rotateY(180deg);
}

</style>


