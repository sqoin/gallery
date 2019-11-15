<template>

  <div class ="container ">
    <article class="tile is-child notification has-text-warning">
        <h2 class="title is-4">{{ product.title }}</h2>

        <div class="columns is-vcentered">
        
        
    
           <div class="box16">
 
                        <img class="image " :src="product.image">
                         <div class="box-content">
                            <h3 class="title">{{product.owner}}</h3>
                            
                            <ul class="social">
                                <li><a href="#"><i class="fa fa-facebook" style="color:blue"></i></a></li>
                                <li><a href="#"><i class="fa fa-twitter" style="color:#00acee"></i></a></li>
                                <li><a href="#"><i class="fa fa-instagram" style="color:pink"></i></a></li>
                                <li><a href="#"><i class="fa fa-google-plus" style="color:red"></i></a></li>
                            </ul>
                        </div>
            </div>
         
          
       
           <div class="column has-text-centered">
          
          <div class="card-content__price">
            <span class="title is-3">
              <strong>{{ product.price }}&dollar;</strong>
            </span>
          </div>
          <div class="card-content__btn">
            <md-button
              class="button is-small"
              :title="removeFromFavouriteLabel"
              v-show="product.isFavourite"
              @click="removeFromFavourite(product.id)"
            >
              <span class="icon is-small">
                <i class="fa fa-heart"></i>
              </span>
            </md-button>
            <md-button
              class="button is-small"
              :title="addToFavouriteLabel"
              v-show="!product.isFavourite"
              @click="saveToFavorite(product.id)"
            >
              <span class="icon is-small">
                <i class="fa fa-heart-o" style="color:red"></i>
              </span>
            </md-button>

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


     if (window.location.href.indexOf("txid") > -1) {
       
       this.$store.commit('purchase', this.product.id);
       //alert("paid "+ this.product.isPurchased)
         //this.$store.commit(this.product.isPurchased, true);
     }
  },

  computed: {
    isAddedBtn() {
      return this.product.isAddedBtn;
    }
  },

  methods: {

    purchasedProduct(){
    if (product.isPurchased || (window.location.href.indexOf("txid") > -1) ){
      return true;
    }
    else {
      return false;
    }

    },
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
.box16
{text-align:center;
color:#fff;
position:relative}
.box16 .box-content,.box16:after{width:50%;position:absolute;left:0}
.box16:after{content:"";height:100%;background:linear-gradient(to bottom,rgba(0,0,0,0) 0,rgba(0,0,0,.08) 69%,rgba(0,0,0,.76) 100%);top:0;transition:all .5s ease 0s}
.box16 .post,.box16 .title{transform:translateY(145px);transition:all .4s cubic-bezier(.13,.62,.81,.91) 0s}
.box16:hover:after{background:linear-gradient(to bottom,rgba(0,0,0,.01) 0,rgba(0,0,0,.09) 11%,rgba(0,0,0,.12) 13%,rgba(0,0,0,.19) 20%,rgba(0,0,0,.29) 28%,rgba(0,0,0,.29) 29%,rgba(0,0,0,.42) 38%,rgba(0,0,0,.46) 43%,rgba(0,0,0,.53) 47%,rgba(0,0,0,.75) 69%,rgba(0,0,0,.87) 84%,rgba(0,0,0,.98) 99%,rgba(0,0,0,.94) 100%)}

.box16 .box-content{padding:20px;margin-bottom:20px;bottom:0;z-index:1}
.box16 .title{font-size:22px;font-weight:700;text-transform:uppercase;margin:0 0 10px}

.box16 .social li a,.box17 .icon li a{border-radius:20%;font-size:20px;}
.box16:hover .post,.box16:hover .title{transform:translateY(0)}
.box16 .social{list-style:none;padding:0 0 5px;margin:40px 0 25px;opacity:0;position:relative;transform:perspective(500px) rotateX(-90deg) rotateY(0) rotateZ(0);transition:all .6s cubic-bezier(0,0,.58,1) 0s}
.box16:hover .social{opacity:1;transform:perspective(500px) rotateX(0) rotateY(0) rotateZ(0)}
.box16 .social:before{content:"";width:50px;height:2px;background:#fff;margin:0 auto;position:absolute;top:-23px;left:0;right:0}
.box16 .social li{display:inline-block}
.box16 .social li a{display:block;width:30px;height:30px;line-height:30px;background:#ffffff;margin-right:10px;transition:all .3s ease 0s}
.box17 .icon li,.box17 .icon li a{display:inline-block}
.box16 .social li a:hover{background:#bea041}
.box16 .social li:last-child a{margin-right:0}
.image{
  width:460px;
  height:500px;
}
.tile{
  margin:100px;
  border:none;
}
@media only screen and (width:450px){.box16{margin-bottom:30px}
}
</style>
