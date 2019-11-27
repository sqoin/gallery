<template>
  <div class="container-fluid">
    <div class="parallax">
      <div class="textbuy col-md-12 col-sm-12">
        <h1>
		 
          <a href="#productlist" class="test col-md-12 col-sm-12"  >Buy Photos Using CryptoCurrency</a>

        </h1>
      </div>
    </div>
  </div>
</template>


 <script>
import { mdbContainer, mdbCarousel, mdbCard } from "mdbvue";
export default {};
</script>

<style lang="scss" scoped>



.parallax-div {
  height: 100%;
  background: url("http://res.cloudinary.com/tempest/image/upload/c_limit,cs_srgb,dpr_1.0,q_80,w_10000/MTMwOTgxMTI5NDk3OTA5NzI2.jpg");
  background-size: cover;
  background-attachement: fixed;
  text-align: center;
  width: 150%;
}

.parallax-text {
  overflow: hidden;
  background: #fff;
  color: #3a3a3a;
  font-size: 50px;
  line-height: 86px;
  font-weight: 600;
  text-transform: uppercase;
  mix-blend-mode: lighten;
  margin-top: 50px;
  height: 100%;
  font-family: "Gill Sans", sans-serif;
}

.parallax {
  /* The image used */
  background-image: url("../../static/pexels-photo-2275911.jpeg");

  /* Full height */
  height: 60vw;

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  position: relative;
}
.textbuy {
  text-align: center;
  top: 30%;
  
}
.textbuy a {
  color: rgb(85, 212, 221);
  font-family: "Comic Sans MS", cursive, sans-serif;
  font-size: 60px;
  font-weight: bold;
  letter-spacing: 2px;
  word-spacing: 1.6px;
 transition: all 2s ease 2s;
  position: relative;
  z-index: 10;
  font-style: italic;

   
}
.textbuy a:hover {
  color: rgb(13, 138, 196);
  text-decoration: none;
}
.test{

}
.page-enter-active,
.page-leave-active {
  transition-property: opacity;
  transition-timing-function: ease-in-out;
  transition-duration: 5000ms;
}

@media (max-width:600px) {
.textbuy a {
 color: rgb(30, 126, 133);
  font-size: 40px;
  font-weight: bold;
  letter-spacing: 2px;
 // transition: all 0.15s ease 0s;
  position: relative;
  z-index: 10;
  
   
}

}

</style>
