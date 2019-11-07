<template>


<div class="container-fluid">

  <!--Section: Content-->
  <section class="mx-md-5 ">

  	<!-- Grid row -->
    <div class="row">

      <!-- Grid column -->
      <div class="col-md-12">

        <!-- Card -->
    

          <!-- Card image 
          <mdb-carousel :interval="3000" slide :items="items" indicators controlls></mdb-carousel>

          Card content -->
          <div class="card-body card-body-cascade text-center">

            
           
            
          </div>
          <!-- Card content -->
</div>
</div>

   
 <mdb-carousel :interval="8000" slide :items="items" indicators controlls></mdb-carousel>

       
      
         

    
    
   <br><br>
    <!-- Title -->
            <h3 class="font-weight-bold"><a>Welcome in your GALLERY</a></h3>
  </section> 
</div>
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
.font-weight-bold{
  margin-bottom: 30px;
}

</style>

