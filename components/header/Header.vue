  <template>
         <nav class="navbar " role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <nuxt-link :to="{ name: 'index' }" class="navbar-item ">
          <h1 class="title is-3"></h1>
        </nuxt-link>

        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbar-menu">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div class="navbar-menu is-active">
        
          <div class="navbar-item">
           
            <VmSearch></VmSearch>
          </div>
        
        
        
     

     
      

      <!-- For desktop -->
    <div class="navbar-item">
        <VmMenu></VmMenu>
      </div>
   
  </div>
 
</nav> 
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
  .title {
    background: url('../../static/vuemmerce-logo1.png') no-repeat;
    background-position: 70% 30%;
    background-size: 175px;
    width: 165px;
    height: 50px;
  }
 
  a {
    color: grey;
  }
</style>