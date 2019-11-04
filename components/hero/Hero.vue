<template>

<div class="container mt-5">


  <!--Section: Content-->
  <section class="mx-md-5 ">

  	<!-- Grid row -->
    <div class="row">

      <!-- Grid column -->
      <div class="col-md-12">

        <!-- Card -->
    

          <!-- Card image -->
          <mdb-carousel :interval="5000" slide :items="items" indicators controlls></mdb-carousel>

          <!-- Card content -->
          <div class="card-body card-body-cascade text-center">

            <!-- Title -->
            <h3 class="font-weight-bold"><a>Welcome in your GALLERY</a></h3>
           
            <!-- Social shares -->
            <div class="social-counters">
              <!-- Facebook -->
              <a class="btn ">
                <i class="fa fa-facebook-f pr-2"></i>
                <span class="clearfix d-none d-md-inline-block">Facebook</span>
              </a>
              <span class="counter">46</span>
              <!-- Twitter -->
              <a class="btn ">
                <i class="fa fa-twitter pr-2"></i>
                <span class="clearfix d-none d-md-inline-block">Twitter</span>
              </a>
              <span class="counter">22</span>
              
              <span class="counter">31</span>
              <!-- Comments -->
              <a class="btn ">
                <i class="fa fa-comments pr-2"></i>
                <span class="clearfix d-none d-md-inline-block">Comments</span>
              </a>
              
            </div>
            <!-- Social shares -->

          </div>
          <!-- Card content -->
</div>
</div>

    <hr class="mb-5 mt-4">
   
 <!--<mdb-carousel :interval="8000" slide :items="items" indicators controlls></mdb-carousel>-->
<!--
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

    
    -->
   
    
  </section> </div>

</template>


 <script>
 import { mdbContainer, mdbCarousel, mdbCard } from "mdbvue";
  
   
  
  export default {
    name: 'CarouselPage',
    components: {
    
      mdbContainer,
      mdbCarousel,
      mdbCard
    },
    data() {
      return {
        items: [
          {
            img: true,
            src: "https://mdbootstrap.com/img/Photos/Slides/img%20(130).jpg"
          },
          {
            img: true,
            src: "https://mdbootstrap.com/img/Photos/Slides/img%20(129).jpg"
          },
          {
            img: true,
            src: "https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg"
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
@media (min-width: 768px) {
    .carousel-multi-item-2 .col-md-3 {
      float: left;
      width: 25%;
      max-width: 100%; } }

    .carousel-multi-item-2 .card img {
      border-radius: 2px; }

    figure {
      cursor: pointer;
    }
</style>

