<template>
  <div class="contenant">
   
    <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(10).jpg"
        alt="First slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(16).jpg"
        alt="Second slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(17).jpg"
        alt="Third slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
        alt="Third slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(5).jpg"
        alt="Third slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg"
        alt="Third slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg"
        alt="Third slide">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
    
    <h1 class="parallax-text"><marquee>Buy Photos Using CryptoCurrency </marquee></h1>
    <div class="heroo">
      <h1>WELCOME TO YOUR SQOIN GALLERY</h1>
    </div>
  </div>
</template>


 <script>

import { mdbContainer, mdbCarousel, mdbCard } from "mdbvue";
export default {
  name: "CarouselPage",
  components: {
    mdbCarousel 
   
  },
  data() {
    return {
      items: [
        {
          img: true,
          src: "https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
        },
        {
          img: true,
          src: "https://mdbootstrap.com/img/Photos/Slides/img%20(16).jpg"
        },
        {
          img: true,
          src: "https://mdbootstrap.com/img/Photos/Slides/img%20(17).jpg"
        },
        {
          img: true,
          src: "https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg"
        },
        {
          img: true,
          src: "https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg"
        },
        {
          img: true,
          src: "https://mdbootstrap.com/img/Photos/Slides/img%20(5).jpg"
        },
        {
          img: true,
          src: "https://mdbootstrap.com/img/Photos/Slides/img%20(8).jpg"
        },
        {
          img: true,
          src: "https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg"
        },
        {
          img: true,
          src: "https://mdbootstrap.com/img/Photos/Slides/img%20(20).jpg"
        }
      ]
    };
  }
};
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

.heroo h1 {
  text-align: center;
  color: white;
  text-shadow: 6px 5px 6px #000000;
  font-family: serif;
  font-size: 3rem;
}
.heroo h2 {
  color: black;
  text-align: center;
  font-size: 40px;
  font-family: cursive;
}

.heroo {
  position: absolute;
  top: 10%;
  left: 30%;
  z-index: 999;

  width: 40%;
  height: 5%;

  opacity: 0.5;
}



@media (max-width: 991px){
   .heroo h1 {
    text-align: center;
    color: red;
    text-shadow: 6px 5px 6px #000000;
    font-family: serif;
    font-size: 2rem;
  }
   .heroo {
    position: absolute;
    top: 5%;
    left: 30%;
    z-index: 999;

    width: 40%;
    height: 5%;

    opacity: 0.5;
  }

  .parallax-text {
  overflow: hidden;
    background-color: black;
    color: white;
    font-size: 30px;
    line-height: 86px;
    font-weight: 300;
    text-transform: uppercase;
    height: 100%;
    font-family: "cursive";
    text-align: center;
    height: 100px;
}
}


@media (max-width: 600px) {
  .heroo h1 {
    text-align: center;
    color: rgb(255, 255, 255);
    text-shadow: 6px 5px 6px #000000;
    font-family: serif;
    font-size: 20px;
  }

  .heroo {
    position: absolute;
    top: 2%;
    left: 30%;
    z-index: 999;

    width: 40%;
    height: 5%;

    opacity: 0.5;
  }
  .parallax-text {
    overflow: hidden;
    background-color: black;
    color: white;
    font-size: 17px;
    line-height: 86px;
    font-weight: 30;
    text-transform: uppercase;
    // mix-blend-mode: lighten;

    
    font-family: "cursive";
    text-align: center;
    height: 46%;
  }
}
@media (min-width: 601px) and (max-width: 767px){
  .heroo{
    position: absolute;
    top: 1.7%;
     top: 2%;
    left: 30%;
    z-index: 999;

    width: 40%;
    height: 5%;

    opacity: 0.5
  }
}
</style>
