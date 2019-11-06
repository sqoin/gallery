<template>
<footer class="footer font-small pt-0" >

    
<mdb-row class="py-4 d-flex align-items-center">
          <mdb-col md="4" lg="4" class="text-center text-md-left mb-4 mb-md-0">

             <div class="contact-details">
          <h6>Contact details</h6>
          <p><i class="fa fa-phone fa-lg" aria-hidden="true"></i> 216 71 877000</p>
          <p><i class="fa fa-envelope-o" aria-hidden="true"></i> admin@sqoin.us</p>
          <p><i class="fa fa-map-marker fa-lg" aria-hidden="true"></i> Ghazela Centre,Cité Ghazela,Ariana 2083 TUNISIE</p>
        </div>
                


          </mdb-col>
          <mdb-col md="4" lg="4" class="content has-text-centered has-text-grey-lighter">

         <ul>
           <li>
            <a href="#" class="has-text-warning is-size-4" style="font-size:50px"><strong> SQOIN</strong></a>  <i class="el-icon-camera "></i>
           </li>

         </ul></mdb-col>
          <mdb-col md="4" lg="4" class="medialink text-center text-md-right">
            <a href="#" class="fb-ic ml-0"><i class="fa fa-facebook" style="font-size:40px;color:blue"></i></a>
            <a class="tw-ic"><i class="fa fa-twitter" style="font-size:40px;color:#1DA1F2"></i></a>
            <a class="gplus-ic"><i class="fa fa-google-plus" style="font-size:40px;color:red"></i></a>
            <a class="li-ic"><i class="fa fa-linkedin" style="font-size:40px;color:#2867B2"></i></a>
            <a class="ins-ic"><i class="fa fa-instagram" style="font-size:40px;color:pink"></i></a>
          </mdb-col>
        </mdb-row>


</footer>
 
</template>

<script>
import { mdbFooter, mdbContainer, mdbRow, mdbCol } from 'mdbvue';
  
export default {
  name: "VmFooter",
 components: {
      mdbFooter,
      mdbContainer,
      mdbRow,
      mdbCol
    },
  data() {
    return {
      year: new Date().getFullYear(),
       linkedinTooltip: 'Follow us on Linkedin',
        facebookTooltip: 'Follow us on Facebook',
        twitterTooltip: 'Follow us on Twitter',
        instagramTooltip: 'Follow us on Instagram'
    };
  }
};
</script>

<style lang="scss" scoped>
.footer{


width:100%;
background: black;


}
a {
        
        text-decoration: none;

        &:hover {
          text-decoration: none;
        }
      }
   
   
  .medialink{
    padding: 20px;
  } 

  .contact-details{
    color: white;
  }
ul{
  list-style: none;
}
</style>
