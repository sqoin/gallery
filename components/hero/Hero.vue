<template>
  <div class="contenant " >

 <mdb-carousel :items="items" :interval="5000" controlls>


 </mdb-carousel>
 <h1 class="parallax-text">Buy Photos Using CryptoCurrency</h1>
 <div class="heroo">
   <h1>WELCOME TO YOUR SQOIN GALLERY</h1>
  </div>
 

  </div>
  
</template>


 <script>

import { mdbContainer, mdbCarousel, mdbCard } from "mdbvue";
export default {
    name: 'CarouselPage',
    components: {
      mdbCarousel
    },
    data() {
      return {
        items: [
          {
            img: true,
            src: "https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg",

          },
          {
            img: true,
            src: "https://mdbootstrap.com/img/Photos/Slides/img%20(16).jpg",

          },
          {
            img: true,
            src: "https://mdbootstrap.com/img/Photos/Slides/img%20(17).jpg",

          },
           {
            img: true,
           src: "https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg",

          },
           {
            img: true,
           src: "https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg",

          },
           {
            img: true,
           src: "https://mdbootstrap.com/img/Photos/Slides/img%20(5).jpg",

          },
           {
            img: true,
           src: "https://mdbootstrap.com/img/Photos/Slides/img%20(8).jpg",

          },{
            img: true,
           src: "https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg",

          },{
            img: true,
           src: "https://mdbootstrap.com/img/Photos/Slides/img%20(20).jpg",

          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
.parallax-text {
  overflow: hidden;
  background-color: black;
  color: white;
  font-size: 50px;
  line-height: 86px;
  font-weight: 600;
  text-transform: uppercase;
  // mix-blend-mode: lighten;
  
  height: 100%;
  font-family: "cursive";
  text-align: center;
  height: 100px;
}


.heroo h1{
  text-align: center;
  color: white;
  text-shadow: 6px 5px 6px #000000;
  font-family: serif;
  font-size: 3rem;
}
.heroo h2{
  color: black;
  text-align: center;
    font-size: 40px;
    font-family: cursive;

}

.heroo{
  position: absolute;
  top: 10%;
  left: 30%;
  z-index: 999;
 
  width:40%;
  height: 5%;

    opacity: 0.5;
        
}




@media (max-width:600px) {

  .heroo h1{
  text-align: center;
  color: red;
  text-shadow: 6px 5px 6px #000000;
  font-family: serif;
  font-size: 1rem;
}

  .heroo{
  position: absolute;
  top: 10%;
  left: 30%;
  z-index: 999;
 
  width:40%;
  height: 5%;

    opacity: 0.5;
   
   


}
}
</style>
