<template>
  <div>
  
    <nav class="navbar is-transparent" role="navigation" aria-label="main navigation" >
      <div class="navbar-brand">
        <nuxt-link :to="{ name: 'index' }" class="navbar-item col-xs-8">
          <h1 class="title is-3 is-flex-mobile"></h1>
        </nuxt-link>

        <a role="button" class="navbar-burger burger col-xs-4" @click="isMenuOpen = !isMenuOpen" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true" class="border-bottom"></span>
          <span aria-hidden="true" class="border-bottom"></span>
          <span aria-hidden="true" class="border-bottom"></span>
        </a>
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
      <div v-show="isMenuOpen"  class="navbar-end is-hidden-mobile">
        <VmMenu></VmMenu>
      </div>
    </nav>
  </div>
</template>

<script>
  import VmMenu from '../menu/Menu';
  import VmSearch from '../search/Search';

  export default {
    name: 'VmHeader',

    data () {
      return {
       isCheckoutActive: false,
        isMenuOpen: false
      }
    },

    components: {
      VmSearch,
      VmMenu
    },

    computed: {
      numProductsAdded () {
        return this.$store.getters.productsAdded.length;
      }
    },

    methods: {
      showCheckoutModal () {
        this.$store.commit('showCheckoutModal', true);
      }
    }
  };
</script>

<style lang="scss" scoped>
//.navbar{background: url('../../static/pexels-photo-1.jpg')}
  .title {
    background: url('../../static/vuemmerce-logo1.png') ;
    background-position: 70% 30%;
    background-repeat:no-repeat;
    
    background-size: 165px;
    width: 200px;
    height: 50px;
  }
  .shopping-cart {
    cursor: pointer;
    
  }
  a {
    color: #fab915;
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
</style>
