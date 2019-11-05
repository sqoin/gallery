<template>

  <div>
    <!--  end navbar -->
    <div class="navbar-item">
      <div class="field is-grouped">
        <p class="control">
          <a v-if="!isUserLoggedIn" class="btn btn-warning" @click="showSignupModal">
            <span class="icon">
              <i class="fa fa-user-plus"></i>
            </span>
            <span>{{ signupLabel }}</span>
          </a>
        </p>
        <p class="control">
          <a v-if="!isUserLoggedIn" class="btn btn-warning" @click="showLoginModal">
            <span class="icon">
              <i class="fa fa-user"></i>
            </span>
            <span>{{ loginLabel }}</span>
          </a>
        </p>
      </div>
    </div>
    <div v-if="isUserLoggedIn" class="navbar-item navbaruser">
      <a class="navbar-item">
        <h2>Welcome {{ getUserName }}</h2>
      </a>
      <nuxt-link class="navbar-item" :to="{ name: 'user-wishlist' }">{{ wishlistLabel }}</nuxt-link>
      <nuxt-link class="navbar-item" :to="{ name: 'user-achats-achats' }">{{ purchasedLabel }}</nuxt-link>
      <nuxt-link class="navbar-item" :to="{ name: 'user-ventes-ventes' }">{{ soldLabel }}</nuxt-link>


      <hr class="navbar-divider" />
      <a class="navbar-item" @click="logout">{{ logoutLabel }}</a>
    </div>
  </div>
</template>

<script>
export default {

	
	name: 'VmMenu',
	data () {
		return {
			Shoppinglist: 'Shopping List',
			wishlistLabel: 'Wishlist',
			purchasedLabel: 'Purchased' ,
			soldLabel: 'Sold' ,
			logoutLabel: 'Log out',
			loginLabel: 'Log in',
			signupLabel: 'Sign up'
		}
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


<style>
.fa {
  color: orange;
}
.fa-heart {
  color: red;
}
.fa-heart-o {
  color: red;
}
.fa-star {
  color: yellow;

}
.btn {
  border-radius: 10px;
}
@media (max-width: 600px) {
  .control {
    margin: auto;
  }
}
.navbar-item {
  color: #448aff;
  line-height: 1.5;
  padding: 0.2rem 0.75rem;
  position: relative;
}

.navbar-item:hover a {
  background-color: none;

  text-decoration: none;
}

.navbaruser {
  margin-bottom: 30px;
  display: flex;
}
@media (max-width:600px) {
	.control{
		margin:auto;
	}
}
.navbar-link{
	color: white !important;
	background:transparent !important;
}
</style>