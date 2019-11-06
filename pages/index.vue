<template>
  <div>
   <VmHero></VmHero>
   <VmProductsList></VmProductsList>
    
  </div>
</template>

<script>

import VmHero from '@/components/hero/Hero';
import VmProductsList from '@/components/products_list/ProductsListContainer';
export default {
  name: 'index',
  transition: "bounce",
  components: {

    VmProductsList,
    VmHero
  }
};
</script>
<style>

* {
  box-sizing: border-box;
}
 </style>