<template >
	<div :class="[ openModal ? 'is-active ' : '', 'modal ' ]">
		<div class="modal-background"></div>
		<div class="modal-card ">
			<header class="modal-card-head">
				<p class="modal-card-title ">{{ modalTitle }}</p>
				<button class="delete" aria-label="close" @click="closeModal(false),deleteFromCart()"></button>
			</header>
			<section class="modal-card-body">
				<div v-if="!isCheckoutSection">
					<div class="box" v-for="product in products" :key="product.id">
				<!--		<button class="is-pulled-right button is-warning is-inverted" @click="removeFromCart(product.id)">{{ removeLabel }}</button> -->
						<p>{{ product.title }} </p>
						<p>{{ product.price }} &euro;</p>
					</div>
				<div v-if="products.length === 0">
						<p>{{ cartEmptyLabel }}</p>
					</div> 
				</div>
					<div v-if="isCheckoutSection">
					<p>You bought it :)</p>
				</div> 
			</section>
			<footer class="modal-card-foot">
				<button v-show="products.length > 0 && !isCheckoutSection" class="button is-success" @click="onNextBtn()">{{ buyLabel }}</button>
				<button v-if="isCheckoutSection" class="button is-success" @click="closeModal(true)">{{ closeLabel }}</button>
			</footer>
		</div>
	</div>
</template>

<script>

export default {
	
	name: 'checkout',
	
    
	data () {
		return {
			modalTitle: 'Checkout',
			removeLabel: 'Remove from cart',
			cartEmptyLabel: 'Your cart is empty',
			closeLabel: 'Close',
			isCheckoutSection: false,
			
		}
	},

	computed: {
			products () {
				return this.$store.getters.productsAdded;
			},
			openModal () {
				if (this.$store.getters.isCheckoutModalOpen) {
					return true;
				} else {
					return false;
				}
				
			},
			buyLabel () {
				let totalProducts = this.products.length,
						productsAdded = this.$store.getters.productsAdded,
						pricesArray = [],
						productLabel = '',
						finalPrice = '',
						quantity = 1;

				productsAdded.forEach(product => {

					if (product.quantity >= 1) {
						quantity = product.quantity;
					}

					pricesArray.push((product.price * quantity)); // get the price of every product added and multiply quantity
				});

				finalPrice = pricesArray.reduce((a, b) => a + b, 0); // sum the prices
				
				if (totalProducts > 1) { // set plural or singular
					productLabel = 'products';
				} else {
					productLabel = 'product';
				}
				return `Buy ${totalProducts} ${productLabel} at ${finalPrice}€`;
				
		},
		isUserLoggedIn () {
			return this.$store.getters.isUserLoggedIn;
		}
	},

	methods: {
		deleteFromCart(){
			this.$store.commit('deleteFromCart');
			   

		},
		closeModal (reloadPage) {

			this.$store.commit('showCheckoutModal', false);
			this.isCheckoutSection = false;
			this.$store.commit('deleteFromCart');
			 

		
		},
		removeFromCart (id) {
			let data = {
					id: id,
					status: false
			}
			this.$storestore.commit('removeFromCart', id);
			this.$store.commit('setAddedBtn', data);
		},
		onNextBtn () {
			if (this.isUserLoggedIn) {

				let totalProducts = this.products.length,
						productsAdded = this.$store.getters.productsAdded;
		productsAdded.forEach(product => {
		console.log("test "+product.price + product.id)
		this.isCheckoutSection = true;
	    this.isAddedToCart= false;
      
		var successUrl =window.location;
		this.$store.commit('purchase', product.id);
		window.open('https://sqoin.exchange/walletd/#/checkout?successUrl='+decodeURIComponent(successUrl)+'&amount='+product.price+'&product='+product.id+'&quantity='+1+'&IPNHandler='+"https://sqoin.exchange/api/handleTransaction");
				
			

		});		
				

			} else {
				this.$store.commit('showCheckoutModal', false);
				this.$store.commit('showLoginModal', true);
			}
		},
		onPrevBtn () {
		this.isCheckoutSection = false;
		},
		addToShoppingList (id) {
      let data = {
        id: id,
        status: true
      }
	  this.$store.commit('addToShoppingList', id);
	 
     
    },
		
	}
}
</script>

