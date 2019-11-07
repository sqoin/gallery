<template>

  <nav class="navbar"  id ="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <nuxt-link :to="{ name: 'index' }" class="navbar-item col-xs-8">
        <h1 class="title  is-flex-mobile"></h1>
      </nuxt-link>

     
    </div>


    <div class="navbar-menu is-active">
      <div class="navbar-start">
        <div class="navbar-item field">
          <VmSearch></VmSearch>
        </div>
      </div>
    </div>

    <!-- For mobile and tablet -->
    <div class="navbar-end">
      <VmMenu></VmMenu>
    </div>

    <!-- For desktop -->
    <div v-show="isMenuOpen" class="navbar-end is-hidden-mobile">
      <VmMenu></VmMenu>
    </div>
  </nav> 


</template>

<script>
import VmMenu from "../menu/Menu";
import VmSearch from "../search/Search";



export default {
  name: "VmHeader",


  data() {
    return {
      linkedinTooltip: "Follow us on Linkedin",
      facebookTooltip: "Follow us on Facebook",
      twitterTooltip: "Follow us on Twitter",
      instagramTooltip: "Follow us on Instagram",
      isCheckoutActive: false,
      isMenuOpen: false,
     
    };
  },

  components: {
    VmSearch,
    VmMenu
  },

  computed: {
    numProductsAdded() {
      return this.$store.getters.productsAdded.length;
    }
  },

  methods: {
    showCheckoutModal() {
      this.$store.commit("showCheckoutModal", true);
    },
  }
};
</script>

<style lang="scss" scoped>

.navbar {
  
  position: sticky;
  top: 0;
 
  width: 100%; 
 
  height: 5%;
  padding-top: 0%;
}
.title {
  background: url("../../static/vuemmerce-logo1.png");
  background-position: 70% 30%;
  background-repeat: no-repeat;

  background-size: 165px;
  width: 175px;
  height: 50px;
}
.navbar-menu.is-active {
  background: transparent !important;
  box-shadow: none;
}
@media (max-width: 1000px) {
  .navbar-brand {
    width: 100%;
    margin: 0;
  }
  .navbar-brand .navbar-item,
  .navbar-brand .navbar-burger {
    display: inline-block;

  }

  .navbar-burger {
  }
}
@media (max-width: 600px) {
  .navbar-menu,
  .navbar-end {
    width: 100%;
  }

  .navbar-menu.is-active{
    background: transparent;
    box-shadow: unset;
  }
  @media (max-width: 1000px) {
    .navbar-brand{
    width: 100%;
    margin: 0;
  }
  .navbar-brand .navbar-item,.navbar-brand .navbar-burger{
    display: inline-block;
  }
  .navbar-burger{
    float: right;
  }
  }
  @media (max-width: 600px) {
    .navbar-menu,.navbar-end{
        width: 100%;
    }
  }
}


.navbar{
  background: #f1f1f1;
}

</style>
