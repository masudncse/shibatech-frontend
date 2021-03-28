<template>
  <div class="dashboard">
    <a-layout id="components-layout-demo-top-side-2">
      <TheHeader />
      <a-layout>
        <TheSidebar />

        <a-layout style="padding: 0 24px 24px">
          <router-view></router-view>
          <TheFooter />
        </a-layout>
      </a-layout>
    </a-layout>
  </div>
</template>
<script>
import TheHeader from "../../components/TheHeader";
import TheSidebar from "../../components/TheSidebar";
import TheFooter from "../../components/TheFooter";

export default {
  components: {
    TheHeader,
    TheSidebar,
    TheFooter,
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