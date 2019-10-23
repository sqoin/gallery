<template>

  <section class="hero is-info is-large">

    <div class="hero-body  is-medium"  >
        <div class="container has-text-centered is-primary">
           <p class="title"><strong> SQOIN</strong></p>
           <p class="subtitle"> WELCOME TO YOUR GALLERY </p>
        </div>
       </div>
  <a href="#productlistcontainer" class="aa at-item is-size-4 has-text-info has-text-centered is-family-sans-serif has-text-weight-semibold">
        GET STARTED <br>
         <i class="el-icon-arrow-down "></i>
      </a>


  </section>

</template>

<script>
export default {};
</script>
<style lang="scss" scoped>
.hero {
 background: url('../../static/pexels-photo-269923.jpeg')
}
.aa:hover{
  text-decoration:none;
  
}
.hero-body{ background: rgba(0, 0, 0, 0.2);  }
.at-item {
 
 animation-name: angry-animation;
 animation-duration: 1.5s;
 animation-timing-function: ease;
 animation-delay: 0s;
 animation-iteration-count: infinite;
 animation-direction: normal;
}
@keyframes angry-animation {
 0% {
   -webkit-transform: translateY(0);
   transform: translateY(0);
 }
 20% {
   -webkit-transform: translateY(0);
   transform: translateY(0);
 }
 40% {
   -webkit-transform: translateY(-30px);
   transform: translateY(-30px);
 }
 50% {
   -webkit-transform: translateY(0);
   transform: translateY(0);
 }
 60% {
   -webkit-transform: translateY(-15px);
   transform: translateY(-15px);
 }
 80% {
   -webkit-transform: translateY(0);
   transform: translateY(0);
 }
 100% {
   -webkit-transform: translateY(0);
   transform: translateY(0);
 }
}
.slideInRight {
 -webkit-animation-name: slideInRight;
 animation-name: slideInRight;
 -webkit-animation-duration: 1s;
 animation-duration: 1s;
 -webkit-animation-fill-mode: both;
 animation-fill-mode: both;
}
@-webkit-keyframes slideInRight {
 0% {
   -webkit-transform: translateX(100%);
   transform: translateX(100%);
   visibility: visible;
 }
 100% {
   -webkit-transform: translateX(0);
   transform: translateX(0);
 }
}
@keyframes slideInRight {
 0% {
   -webkit-transform: translateX(100%);
   transform: translateX(100%);
   visibility: visible;
 }
 100% {
   -webkit-transform: translateX(0);
   transform: translateX(0);
 }
}
</style>
