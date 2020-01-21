//import { url } from '@/assets/img';

export const state = () => ({
  products: [
    {
      id: 1,
      title: 'Picture 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      image: require ('@/static/photo1.jpeg'),
      price: 15,
      ratings: 3,
      reviews: 5,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      isPurchased: false,
      owner: 'David'
      
    },
    {
      id: 2,
      title: 'Picture 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      image: require ('@/static/photo2.jpg'),
      price: 10,
      ratings: 5,
      reviews: 10,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      isPurchased: false,
      owner: 'David'

    },
    {
      id: 3,
      title: 'Picture 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      image: require ('@/static/photo3.jpeg'),
      price: 1,
      ratings: 2,
      reviews: 3,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      isPurchased: false,
      quantity: 1,
      owner: 'Lisa'
    },
    {
      id: 4,
     title: 'Picture 4',
     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
     image: require ('@/static/photo4.jpg'),
      price: 50,
      ratings: 1,
      reviews: 0,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      isPurchased: false,
      quantity: 1,
      owner: 'Marc'
    },
    {
      id: 5,
      title: 'Picture 5',
     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
     image: require ('@/static/photo5.jpeg'),
      price: 16,
      ratings: 4,
      reviews: 2,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      isPurchased: false,
      quantity: 1,
      owner: 'David'
    },
    {
      id: 6,
      title: 'Picture 6',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      image: require ('@/static/photo6.jpg'),
      price: 18,
      ratings: 1,
      reviews: 1,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      isPurchased: false,
      quantity: 1,
      owner: 'David'
    },
    {
      id: 7,
      title: 'Picture 7',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      image: require ('@/static/photo7.jpg'),
      price: 14,
      ratings: 5,
      reviews: 7,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      isPurchased: false,
      quantity: 1,
      owner: 'Lisa'
    },
    
    {
      id: 8,
      title: 'Picture 8',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      image: require ('@/static/photo8.jpeg'),
      price: 9,
      ratings: 3,
      reviews: 0,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      isPurchased: false,
      quantity: 1,
      owner: 'David'
    },
    {
      id: 9,
      title: 'Picture 9',
     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
     image: require ('@/static/photo9.jpg'),
      price: 110,
      ratings: 4,
      reviews: 2,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      isPurchased: false,
      quantity: 1,
      owner: 'David'
    },
    {
      id: 10,
      title: 'Picture 10',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      image: require ('@/static/photo10.jpeg'),
      price: 11,
      ratings: 3,
      reviews: 0,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      isPurchased: false,
      quantity: 1,
      owner: 'David'
    },
    {
      id: 11,
      title: 'Picture 11',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      image: require ('@/static/photo11.jpeg'),
      price: 18,
      ratings: 3,
      reviews: 0,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      isPurchased: false,
      quantity: 1,
      owner: 'Marc'
    },
    {
      id: 12,
      title: 'Picture 12',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      image: require ('@/static/photo12.jpg'),
      price: 17,
      ratings: 3,
      reviews: 0,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      isPurchased: false,
      quantity: 1,
      owner: 'Marc'
    },
    {
      id: 13,
      title: 'Picture 13',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      image: require ('@/static/photo13.jpg'),
      price: 22,
      ratings: 3,
      reviews: 0,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      isPurchased: false,
      quantity: 1,
      owner:'Lisa'
    },
    
    {
      id: 14,
      title: 'Picture 14',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      image: require ('@/static/photo14.jpg'),
      price: 15,
      ratings: 3,
      reviews: 0,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      isPurchased: false,
      quantity: 1,
      owner: 'David'
    },
    {
      id: 15,
      title: 'Picture 15',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      image: require ('@/static/photo15.jpeg'),
      price: 13,
      ratings: 3,
      reviews: 0,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      isPurchased: false,
      quantity: 1,
      owner: 'David'
    },
    {
      id: 16,
      title: 'Picture 16',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      image: require ('@/static/photo16.jpg'),
      price: 14,
      ratings: 3,
      reviews: 0,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      isPurchased: false,
      isBuyed:false,
      quantity: 1,
      owner: 'David'
    },
    {
      id: 17,
      title: 'Picture 17',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      image: require ('@/static/photo17.jpeg'),
      price: 12,
      ratings: 3,
      reviews: 0,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      isPurchased: false,
      isBuyed:false,
      quantity: 1,
      owner: 'David'
    },
    {
      id: 18,
      title: 'Picture 18',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      image: require ('@/static/photo18.jpeg'),
      price: 20,
      ratings: 3,
      reviews: 0,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      isPurchased: false,
      isBuyed:false,
      quantity: 1,
      owner: 'David'
    },{
      id: 19,
      title: 'Picture 19',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      image: require ('@/static/photo19.jpg'),
      price: 12,
      ratings: 3,
      reviews: 0,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      isPurchased: false,
      isBuyed:false,
      quantity: 1,
      owner: 'David'
    }
  ],
  users: [
    {
      id: 1,
      name: 'Kirito',
      username: 'kirito',
      email: 'gahlouzi.saif.93@gmail.com',
      password: '123',
    },
    {
      id: 2,
      name: 'Walid',
      username: 'walid',
      email: 'walid@gmail.com',
      password: '123',
    },
    {
      id: 3,
      name: 'Dhoha',
      username: 'dhoha',
      email: 'dhoha@gmail.com',
      password: '123',

    }
  ],
  achats: [
    {
      id: 1,
      idUser: 1,
      idImage: 2
    },
    {
      id: 2,
      idUser: 1,
      idImage: 3
    },
    {
      id: 3,
      idUser: 2,
      idImage: 2
    }
  ],
  userInfo: {
    isLoggedIn: false,
    isSignedUp: false,
    hasSearched: false,
    name: '',

    productTitleSearched: '',
    photo:'https://images.pexels.com/users/avatars/197616/javon-swaby-495.jpeg?w=256&h=256&fit=crop&crop=faces',
   

    id: null,
  

  },
  systemInfo: {
    openLoginModal: false,
    openSignupModal: false,
    openCheckoutModal: false
  }
})

export const getters = {
  productsAdded: state => {
    return state.products.filter(el => {
      return el.isAddedToCart;
    });
  },
  productsSold: state => {
    return state.products.filter(function(element) {
      return (element.owner === state.userInfo.id);
    });
  },
  productsPurchased: state => {
    return state.products.filter(el => {
      return (el.isPurchased);
    });
  },
  productsAddedToFavourite: state => {
    return state.products.filter(el => {
      return el.isFavourite;
    });
  },
  productsBuyed: state =>{
    return state.products.filter(el => {
      return el.isBuyed;
    })
  },
  getProductById: state => id => {
    return state.products.find(product => product.id == id);
  },
  isUserLoggedIn: state => {
    return state.userInfo.isLoggedIn;
  },
  isUserSignedUp: state => {
    return state.userInfo.isSignedUp;
  },
  getUserName: state => {
    return state.userInfo.name;
  },

  isLoginModalOpen: state => {
    return state.systemInfo.openLoginModal;
  },
  isSignupModalOpen: state => {
    return state.systemInfo.openSignupModal;
  },
  isCheckoutModalOpen: state => {
    return state.systemInfo.openCheckoutModal;
  },
  quantity: state => {
    return state.products.quantity;
  }
}

export const mutations = {
  checkUser: (state, authUser) => {
    state.users.forEach(el => {
      if (authUser.email === el.email && authUser.password === el.password) {
        var info ={name:el.name, id:el.id};
        localStorage.setItem("info", JSON.stringify(info));
        state.userInfo.isLoggedIn=true;
        state.userInfo.name=el.name;
        state.userInfo.id=el.id;
      }
    });
  },
  logout(state) {
    state.userInfo.isLoggedIn = false;
    state.userInfo.name = '';
    state.userInfo.id = null;
    localStorage.removeItem("info");
  },
  addToCart: (state, id) => {
    state.products.forEach(el => {
      if (id === el.id) {
        el.isAddedToCart = true;
      }
    });
  },
  purchase: (state, id) => {
    state.products.forEach(el => {
      if (id === el.id) {
        el.isPurchased = true;
      }
    });
  },
  addToShoppingList: (state, id) => {
    state.products.forEach(el => {
      if (id === el.id) {
        el.isBuyed = true;
      }
    });
  },
  setAddedBtn: (state, data) => {
    state.products.forEach(el => {
      if (data.id === el.id) {
        el.isAddedBtn = data.status;
      }
    });
  },
  deleteFromCart: (state)=>{
    state.products.forEach(el =>{
      el.isAddedToCart = false;
    }

    )

  },
  removeFromCart: (state, id) => {
    state.products.forEach(el => {
      if (id === el.id) {
        el.isAddedToCart = false;
      }
    });
  },
  removeProductsFromFavourite: state => {
    state.products.filter(el => {
      el.isFavourite = false;
    });
  },
  isUserLoggedIn: (state, isUserLoggedIn) => {
    state.userInfo.isLoggedIn = isUserLoggedIn;
  },
  isUserSignedUp: (state, isSignedUp) => {
    state.userInfo.isSignedUp = isSignedUp;
  },
  setHasUserSearched: (state, hasSearched) => {
    state.userInfo.hasSearched = hasSearched;
  },
  setUserName: (state, name) => {
    state.userInfo.name = name;
  },
  setProductTitleSearched: (state, titleSearched) => {
    state.userInfo.productTitleSearched = titleSearched;
  },
  showLoginModal: (state, show) => {
    state.systemInfo.openLoginModal = show;
  },
  showSignupModal: (state, show) => {
    state.systemInfo.openSignupModal = show;
  },
  showCheckoutModal: (state, show) => {
    state.systemInfo.openCheckoutModal = show;
  },
  addToFavourite: (state, id) => {
    state.products.forEach(el => {
      if (id === el.id) {
        el.isFavourite = true;
      }
    });
  },
  removeFromFavourite: (state, id) => {
    state.products.forEach(el => {
      if (id === el.id) {
        el.isFavourite = false;
      }
    });
  },
  quantity: (state, data) => {
    state.products.forEach(el => {
      if (data.id === el.id) {
        el.quantity = data.quantity;
      }
    });
  },
  SET_USER(state, authUser) {
    state.authUser = authUser
  },
  setLoginDataFromLocalStorage: (state, authUser) => {
    state.userInfo.isLoggedIn = true;
    state.userInfo.name=authUser.name;
    state.userInfo.id=authUser.id;
  }
}
/* 
export const actions = {
  async nuxtServerInit({ commit }) {
    const res = await this.$axios.get("/api/current_user")
    commit("SET_USER", res.data)
  },

  async logout({ commit }) {
    const { data } = await this.$axios.get("/api/logout")
    if (data.ok) commit("SET_USER", null)
  },

  async handleToken({ commit }, token) {
    const res = await this.$axios.post("/api/stripe", token)
    commit("SET_USER", res.data)
  }
} */
