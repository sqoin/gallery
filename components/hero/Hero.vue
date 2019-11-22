<template>

<div class="container-fluid"> 
   
   
  
    <div class="parallax">

       <div class="textbuy col-md-12 col-sm-12">
     <h1>  Buy Photos Using CryptoCurrency </h1>
         </div>

    </div>
        
       <div class="parallax-div">
         <h1 class="parallax-text">
            Welcome to your GALLERY
         </h1>
        </div>
       
     </div>
  


</template>


 <script>
 import { mdbContainer, mdbCarousel, mdbCard } from "mdbvue";
  
   
  
  export default {
   
    }
</script>

<style lang="scss" scoped>


.parallax-div {
    height: 100%;
    background: url("http://res.cloudinary.com/tempest/image/upload/c_limit,cs_srgb,dpr_1.0,q_80,w_10000/MTMwOTgxMTI5NDk3OTA5NzI2.jpg");
    background-size: cover;
    background-attachement: fixed;
     text-align: center;
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
  background-image: url("../../static/background.jpg");

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
 	color:white;
	font-size: 90px;
  font-weight:bold;
	letter-spacing: 2px;
	-webkit-transition: all 0.15s ease 0s;
	position: relative;
	z-index: 10;
     padding: 30% 20%;
  
}
</style>
