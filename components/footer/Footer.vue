<template>
  <footer class="footer font-small pt-0" color="peach">
    <mdb-row class="row-header align-items-center">
      <mdb-col md="4" lg="4" class="text-center text-md-left mb-4 mb-md-0"><h6>Contact Us</h6></mdb-col>
      <mdb-col md="4" lg="4" class="text-center text-md-left mb-4 mb-md-0"><h6>FOLLOW US</h6></mdb-col>
      <mdb-col md="4" lg="4" class="text-center text-md-left mb-4 mb-md-0"><h6>Newsletter</h6></mdb-col>

    </mdb-row>
    <mdb-row class=" align-items-center">
    
      <mdb-col md="4" lg="4" class="text-center text-md-left mb-4 mb-md-0">
        <div class="contact-details">
          
          <p>
            <i class="fa fa-phone fa-lg" aria-hidden="true"></i> 216 71 877000
          </p>
          <p>
            <i class="fa fa-envelope-o" aria-hidden="true"></i> admin@sqoin.us
          </p>
          <p>
            <i class="fa fa-map-marker fa-lg" aria-hidden="true"></i> Ghazela Centre,Cité Ghazela,Ariana 2083 TUNISIE
          </p>
        </div>
      </mdb-col>

     
     
      
         
      <mdb-col md="4" lg="4" class="medialink ">
        
        <div class="logo-link">
        <a href="https://www.facebook.com/sqoin/" class="fb-ic ml-0">
          <i class="fa fa-facebook" style="font-size:20px;color:blue"></i>
        </a>
         <a  href="https://fr.linkedin.com/company/sqoin" class="li-ic">
          <i class="fa fa-linkedin" style="font-size:20px;color:#2867B2"></i>
        </a>
        <a class="tw-ic">
          <i class="fa fa-twitter" style="font-size:20px;color:#1DA1F2"></i>
        </a>
        <a class="gplus-ic">
          <i class="fa fa-google-plus" style="font-size:20px;color:red"></i>
        </a>
       
        <a class="ins-ic">
          <i class="fa fa-instagram" style="font-size:20px;color:pink"></i>
        </a>
        </div>
      </mdb-col>

      <mdb-col  md="4" lg="4"  class="text-center text-md-left mb-4 mb-md-0">
     
        <div class="input-group  ">
                      <input type="text" class="form-control" placeholder="Search for...">
                      <span class="input-group-btn">
                        <button class="btn btn-default" type="button"><i class="fa  fa-envelope"></i></button>
                      </span>
                    </div>
      </mdb-col>
   
    </mdb-row>

    <div class="copyright">© COPYRIGHT SQOIN 2019 ALL RIGHTS RESERVED</div>
  </footer>
</template>

<script>
import { mdbFooter, mdbContainer, mdbRow, mdbCol } from "mdbvue";

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
      linkedinTooltip: "Follow us on Linkedin",
      facebookTooltip: "Follow us on Facebook",
      twitterTooltip: "Follow us on Twitter",
      instagramTooltip: "Follow us on Instagram"
    };
  }
};
</script>

<style lang="scss" scoped>
.row-header{
  color: goldenrod;
  padding-left: 20px;
}
.footer {
  background-color: currentColor;
  bottom: 0%;
  width: 100vw;
  padding: 0%;


}
a {
  color: orange;

  text-transform: uppercase;
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }
}
.logo-link{
  padding: 10px;
}

.logo-link a{
  padding: 15px;
}

.medialink {
  padding: 10px;
}
 .medialink h4{
 
   margin-left: 20px;
 }
.contact-details {
  color: white;
  font-size: 0.8em;
  margin-left: 25px;
}
ul {
  list-style: none;
}

.copyright {
      font-family: initial;
  text-align: center;
   font-size: 0.8em;
   color: darkgrey;
}
 .input-group{
   
   width: 80%;
 }
</style>
