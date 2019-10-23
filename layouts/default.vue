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

export default {
  components: {
    VmHeader,
    VmFooter,
    VmLoginModal,
    VmRegistrationModal,
    VmCheckoutModal
  }
}
</script>

<style>
  .el-header, .el-footer {
    background-color: #ffffff;
    color: black;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #ffffff;
    color: #fab915;
    text-align: center;
    line-height: 150px;
  }
  
  .el-main {
    background-color: #ffffff;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 30px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>