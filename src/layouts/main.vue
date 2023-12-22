<template>
  <div>
    <Navbar />
    <div class="">
      <div :class="$route.path != '/' ? 'mainCabinet container' : '' ">
        <Sidebar v-if="$route.path != '/'" class="sidebar" />
        <router-view v-if="!loading" :class="$route.path != '/' ? 'router-view' : ''" :style="$route.path != '/' ? 'margin-left: 0;' : ''" />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from '../layouts/components/footer.vue';
import Navbar from '../layouts/components/navbar.vue';
import Sidebar from '../layouts/components/sidebar.vue';
export default {
  components: { Sidebar, Footer, Navbar },
  data() {
    return {
      loading: true,
      isToken: false,
    };
  },
  created() {
    setTimeout(() => (this.loading = false), 600);
    this.isToken = localStorage.getItem("user_info");
    if (this.isToken) {
      // this.Refresh();
    }
  },

};
</script>

<style>

</style>