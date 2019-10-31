<template>
<footer class="footer">
  <div class="content has-text-centered has-text-grey-lighter">
         <ul>
           <li>
            <a href="#" class="has-text-warning is-size-4">SQOIN</a>  <i class="el-icon-camera "></i>
           </li>
         </ul>
       <el-button a href="#"  circle :title="facebookTooltip">
          <i class="fa fa-linkedin" style="font-size:16px;color:#2867B2"></i>
        </a></el-button>
        
        <el-button a href="#"   circle  :title="twitterTooltip">
        <i class="fa fa-twitter" style="font-size:26px;color:#1DA1F2"></i>
        </a></el-button>
        <el-button a href="#" circle :title="instagramTooltip">
        <i class="fa fa-instagram" style="font-size:36px;color:pink"></i>
         </a></el-button>
         <el-button a href="#" :title="linkedinTooltip">
        <i class="fa fa-facebook" style="font-size:48px;color:blue"></i>
         </a></el-button>
     </div>
</footer>
 
</template>

<script>
export default {
  name: "VmFooter",

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
  background-image: url("../../static/footer.jpg");
 background-repeat:no-repeat;
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
