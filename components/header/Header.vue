<template>
  <nav class="navbar custom-nav fixed-top navbar-expand-lg navbar-light">
    <div class="container">
      <router-link class="navbar-brand" to="/">
        <img src="../../static/vuemmerce-logo1.png" />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link to="/#" class="nav-link">
              <strong>Home |</strong>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/#productlist" class="nav-link">
              <strong>Our Gallery |</strong>
            </router-link>
          </li>

          <li class="nav-item">
            <router-link to="/#footer" class="nav-link">
              <strong>Contact Us</strong>
            </router-link>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <div v-if="!isUserLoggedIn">
            <a
              class="btn btn-outline-warning my-2 my-sm-0"
              v-if="!isUserLoggedIn"
              @click="showLoginModal"
            >Login</a>
            <a
              class="btn btn-outline-warning my-2 my-sm-0"
              v-if="!isUserLoggedIn"
              @click="showSignupModal"
            >Sign up</a>
          </div>
        </form>

        <div v-if="isUserLoggedIn" class="navbar-item">
          <ul class="nav-log navbar-nav-log">
            <li class="dropdown">
              <a
                href="#"
                class="dropdown-toggle log"
                data-toggle="dropdown"
              > Welcome {{ getUserName }}</a>
              <ul class="dropdown-menu">
                <li>
                  <nuxt-link class="navbar-item" :to="{ name: 'user-wishlist' }">{{ wishlistLabel }}</nuxt-link>
                </li>
                <li>
                  <nuxt-link
                    class="navbar-item"
                    :to="{ name: 'user-achats-achats' }"
                  >{{ purchasedLabel }}</nuxt-link>
                </li>
                <li>
                  <nuxt-link
                    class="navbar-item"
                    :to="{ name: 'user-ventes-ventes' }"
                  >{{ soldLabel }}</nuxt-link>
                </li>
                <li>
                  <hr class="navbar-divider" />
                  <a class="navbar-item" @click="logout">{{ logoutLabel }}</a>
                  <span class="glyphicon glyphicon-log-out pull-right"></span>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      



      
    </div>
  </nav>
</template>

<script>
import VmProducts from "../Products";
import { getByTitle } from "@/assets/filters";
export default {
  name: "Vmheader",

  data() {
    return {
      isActive: false,
      Shoppinglist: "Shopping List",
      wishlistLabel: "Wishlist",
      purchasedLabel: "Purchased",
      soldLabel: "Sold",
      logoutLabel: "Log out",
      loginLabel: "Log in",
      signupLabel: "Sign up"
    };
  },

  computed: {
    isUserLoggedIn() {
      return this.$store.getters.isUserLoggedIn;
    },
    getUserName() {
      let name = this.$store.getters.getUserName;

      if (name === "") {
        return "user";
      } else {
        return name;
      }
    }
  },

  methods: {
    logout() {
      this.$store.commit("isUserLoggedIn", false);
      this.$store.commit("isUserSignedUp", false);
      this.$store.commit("removeProductsFromFavourite");
      this.$store.commit("logout");
      // redirect to homepage
      this.$router.push({ name: "index" });
    },
    showLoginModal() {
      this.$store.commit("showLoginModal", true);
    },
    showSignupModal() {
      this.$store.commit("showSignupModal", true);
    },
    togglehamburger() {
      this.isActive = !this.isActive;
    },
    myFunction() {
      var x = document.getElementById("myTopnav");
      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
    }
  },
  mounted() {
    if (localStorage.getItem("info")) {
      var localData = JSON.parse(localStorage.getItem("info"));
      this.$store.commit("setLoginDataFromLocalStorage", localData);
    }
  }
};
</script>


<style scoped lang="scss">
.dropdown a{
     color: #020202;
    font-size: 20px;
   font-family: serif;
}

.dropdown a:hover{
  text-decoration: none;
  color: #fcb045;
}

.nav-log{
  margin: 0;
}

.btn{
  
      color: black;
    text-decoration: blink;
    font-family: cursive;

}

.nav-link{
  font-family: serif;
}
.navbar {
  height: 10%;
}
.navbar-light .navbar-nav .nav-link:hover {
  color: black;
}
.navbar-brand img {
  width: 19%;
}

.navbar-login {
  width: 305px;
  padding: 10px;
  padding-bottom: 0px;
}

.navbar-login-session {
  padding: 10px;
  padding-bottom: 0px;
  padding-top: 0px;
}

.icon-size {
  font-size: 87px;
}
.image_outer_container {
  margin-top: auto;
  margin-bottom: auto;
  border-radius: 50%;
  position: relative;
}

.image_inner_container {
  border-radius: 50%;
  padding: 2px;
  background: green;
  background: -webkit-linear-gradient(to bottom, #fcb045, #fd1d1d, #833ab4);
  background: linear-gradient(to bottom, #fcb045, #fd1d1d, #833ab4);
}
.image_inner_container img {
  height: 25px;
  width: 25px;
  border-radius: 50%;
  border: 1px solid white;
}

.image_outer_container .green_icon {
  background-color: #4cd137;
  position: absolute;
  left: 25px;
  bottom: 10px;
  height: 10px;
  width: 10px;
  border: 2px solid white;
  border-radius: 50%;
}

@media (min-width: 992px) {
  .navbar.custom-nav {
    padding-top: 5px;
    padding-bottom: 5px;
    background-color: #fff !important;
  }
}

.dropdown {
  background: #fff;

  border-radius: 10px;
  width: 100px;
}
.dropdown-menu > li > a {
  color: black;
}
.dropdown ul.dropdown-menu {
  border-radius: 4px;
  box-shadow: none;
  margin-top: 20px;
  width: 100px;
}
.dropdown ul.dropdown-menu:before {
  content: "";
  border-bottom: 10px solid #fff;
  border-right: 10px solid transparent;
  border-left: 10px solid transparent;
  position: absolute;
  top: -10px;
  right: 16px;
  z-index: 10;
}
.dropdown ul.dropdown-menu:after {
  content: "";
  border-bottom: 12px solid #ccc;
  border-right: 12px solid transparent;
  border-left: 12px solid transparent;
  position: absolute;
  top: -12px;
  right: 14px;
  z-index: 9;
}

@media (max-width: 600px){
  .navbar-brand img {
  width: 14%;
}

.navbar-collapse{
 background-color: #c3c2c299;
}
.dropdown{
  background-color:transparent;
  
  color: rgb(112, 95, 51);
  
}



}

@media (min-width: 601px) and (max-width: 767px){
   .navbar-brand img {
  width: 20%;
}
.navbar-collapse{
 background-color: #c3c2c299;
}

.dropdown{
  background-color:transparent;
  
  color: rgb(112, 95, 51);
  
}
}

@media (max-width: 434px) {
  .navbar-brand{
       display: contents;
  }
  
}
</style>