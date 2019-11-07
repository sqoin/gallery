<template>
  <div>
    <VmHeader></VmHeader>
    <main>
    
      <nuxt/>
      
      <VmLoginModal></VmLoginModal>
      <VmRegistrationModal></VmRegistrationModal>
      <VmCheckoutModal></VmCheckoutModal>
      
    </main>
     
   <VmFooter></VmFooter>
  </div>
</template>

<script>
import VmHeader from '@/components/header/Header';
import VmFooter from '@/components/footer/Footer';
import VmLoginModal from '@/components/modal/Login';
import VmRegistrationModal from '@/components/modal/Registration';
import VmCheckoutModal from '@/components/modal/Checkout';
import VmProductsList from '@/components/products_list/ProductsListContainer';

export default {
  components: {
    VmHeader,
    VmFooter,
    VmLoginModal,
    VmProductsList,
    VmRegistrationModal,
    VmCheckoutModal
  }
}
</script>

<style>
  main{
    padding-bottom: 200px;
  }
</style>