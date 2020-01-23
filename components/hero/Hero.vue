<template>
  <div class="contenant">
    <!--Carousel Wrapper-->
    <div id="video-carousel-example2" class="carousel slide carousel-fade" data-ride="carousel">
      <!--Indicators-->
      <ol class="carousel-indicators">
        <li data-target="#video-carousel-example2" data-slide-to="0" class="active"></li>
        <li data-target="#video-carousel-example2" data-slide-to="1"></li>
        <li data-target="#video-carousel-example2" data-slide-to="2"></li>
      </ol>
      <!--/.Indicators-->
      <!--Slides-->
      <div class="carousel-inner" role="listbox">
        <!-- First slide -->
        <div class="carousel-item active">
          <!--Mask color-->
          <div class="view">
            <!--Video source-->
            <video class="video-fluid" autoplay loop muted>
              <source src="https://mdbootstrap.com/img/video/Lines.mp4" type="video/mp4" />
            </video>
            <div class="mask rgba-indigo-light"></div>
          </div>

          <!--Caption
          <div class="carousel-caption">
            <div class="animated fadeInDown">
              <h3 class="h3-responsive">Light mask</h3>
              <p>First text</p>
            </div>
          </div>
          Caption-->
        </div>
        <!-- /.First slide -->

        <!-- Second slide -->
        <div class="carousel-item">
          <!--Mask color-->
          <div class="view">
            <!--Video source-->
            <video class="video-fluid" autoplay loop muted>
              <source src="https://mdbootstrap.com/img/video/animation-intro.mp4" type="video/mp4" />
            </video>
            <div class="mask rgba-purple-slight"></div>
          </div>

          <!--Caption
          <div class="carousel-caption">
            <div class="animated fadeInDown">
              <h3 class="h3-responsive">Super light mask</h3>
              <p>Secondary text</p>
            </div>
          </div>
          -->
        </div>
        <!-- /.Second slide -->

        <!-- Third slide -->
        <div class="carousel-item">
          <!--Mask color-->
          <div class="view">
            <!--Video source-->
            <video class="video-fluid" autoplay loop muted>
              <source src="https://mdbootstrap.com/img/video/Tropical.mp4" type="video/mp4" />
            </video>
            <div class="mask rgba-black-strong"></div>
          </div>

          <!--Caption
          <div class="carousel-caption">
            <div class="animated fadeInDown">
              <h3 class="h3-responsive">Strong mask</h3>
              <p>Third text</p>
            </div>
          </div>
          -->
        </div>
        <!-- /.Third slide -->
      </div>
      <!--/.Slides-->
      <!--Controls-->
      <a
        class="carousel-control-prev"
        href="#video-carousel-example2"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#video-carousel-example2"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
      <!--/.Controls-->
    </div>
    <!--Carousel Wrapper-->
    <h1 class="parallax-text">Buy Photos Using CryptoCurrency</h1>
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
