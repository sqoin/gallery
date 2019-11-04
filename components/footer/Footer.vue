<template>
<footer class="footer font-small pt-0" color="peach">

    
<mdb-row class="py-4 d-flex align-items-center">
          <mdb-col md="4" lg="4" class="text-center text-md-left mb-4 mb-md-0">
            <h6 class="mb-0 ">Get connected with us on social networks!</h6>
          </mdb-col>
          <mdb-col md="4" lg="4" class="content has-text-centered has-text-grey-lighter">
         <ul>
           <li>
            <a href="#" class="has-text-warning is-size-4">SQOIN</a>  <i class="el-icon-camera "></i>
           </li>
         </ul></mdb-col>
          <mdb-col md="4" lg="4" class="text-center text-md-right">
            <a class="fb-ic ml-0"><i class="fa fa-facebook" style="font-size:20px;color:blue"></i></a>
            <a class="tw-ic"><i class="fa fa-twitter" style="font-size:20px;color:#1DA1F2"></i></a>
            <a class="gplus-ic"><i class="fa fa-google-plus" style="font-size:20px;color:red"></i></a>
            <a class="li-ic"><i class="fa fa-linkedin" style="font-size:20px;color:#2867B2"></i></a>
            <a class="ins-ic"><i class="fa fa-instagram" style="font-size:20px;color:pink"></i></a>
          </mdb-col>
        </mdb-row>
<!--  <div class="content has-text-centered has-text-grey-lighter">
         <ul>
           <li>
            <a href="#" class="has-text-warning is-size-4">SQOIN</a>  <i class="el-icon-camera "></i>
           </li>
         </ul>
       <el-button a href="#"  circle :title="linkedinTooltip">
          <i class="fa fa-linkedin" style="font-size:16px;color:#2867B2"></i>
        </a></el-button>
        
        <el-button a href="#"   circle  :title="twitterTooltip">
        <i class="fa fa-twitter" style="font-size:26px;color:#1DA1F2"></i>
        </a></el-button>
        <el-button a href="#" circle :title="instagramTooltip">
        <i class="fa fa-instagram" style="font-size:36px;color:pink"></i>
         </a></el-button>
         <el-button a href="#" :title="facebookTooltip">
        <i class="fa fa-facebook" style="font-size:48px;color:blue"></i>
         </a></el-button>
     </div>-->
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

.navbar {
    ul {
    margin-bottom: 0;
    padding: 0;
    list-style: none;
    margin-left: 25%;
    
    li {
      display: inline-block;


      a {
        color: orange;

        text-transform: uppercase;
        text-decoration: none;

        &:hover {
          text-decoration: none;
        }
      }
    }
  }

  &:after {
    display: table;
    clear: both;
    content: " ";
  }
}


.footer{

 //background-image: url("../../static/footer.jpg");
 //background-repeat:no-repeat;
padding-bottom: 0px;
}
a {
        color: orange;

        text-transform: uppercase;
        text-decoration: none;

        &:hover {
          text-decoration: none;
        }
      }

</style>
