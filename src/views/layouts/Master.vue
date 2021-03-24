<template>
  <div class="dashboard">
    <a-layout id="components-layout-demo-top-side-2">
    <Header/>
      <a-layout>
        <Sidebar/>
       
        <a-layout style="padding: 0 24px 24px">
          <router-view></router-view>
        <Footer/>
        </a-layout>
      </a-layout>
    </a-layout>
   
  </div>
</template>
<script>
import Header from '../include/Header'
import Sidebar from '../include/Sidebar'
import Footer from '../include/Footer'
export default {
  components:{
    Header,
    Sidebar,
    Footer
  },
  data() {
    return {
      collapsed: false,
    };
  },
};
</script>
<style>
#components-layout-demo-top-side-2 .logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 28px 16px 0;
  float: left;
}
</style>