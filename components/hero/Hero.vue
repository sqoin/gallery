<template>

  <section class="hero is-info is-large has-text-centered">

    <div class="hero-body"  >
        <div class="container has-text-centered is-primary">
           <p class="title"><strong> SQOIN</strong></p>
           <p class="subtitle"> WELCOME TO YOUR GALLERY </p>
         </div>
  
       
      <a href="#productlistcontainer" class="aa at-item is-size-4 
  has-text-info has-text-centered is-family-sans-serif has-text-weight-semibold">
        GET STARTED <br>
         <i class="el-icon-arrow-down "></i>
      </a>

    
    
    </div>
    
  </section>

</template>

<script>
import VmProductsList from '@/components/products_list/ProductsListContainer';
export default {
  components: {
   
    VmProductsList,
    
}}
</script>
<style lang="scss" scoped>
.hero {
 background: url('../../static/pexels-photo-269923.jpeg');
}
.hero:hover{
  text-decoration:none;
  
}
.hero-body{ background: rgba(0, 0, 0, 0.2);  }
$t-duration: 800ms;
$t-delay: 300ms;




</style>
