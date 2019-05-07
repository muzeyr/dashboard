<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <notifications></notifications>

    <side-bar>
      <mobile-menu slot="content"></mobile-menu>
      <sidebar-link v-for="item in filteredActive" :key="item.path" :to="item.path">
        <md-icon>{{item.icon}}</md-icon>
        <p>{{item.name}}</p>
      </sidebar-link>

      <sidebar-link to="/close" class="active-pro">
        <p>Çıkış</p>
      </sidebar-link>
    </side-bar>

    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content></dashboard-content>

      <content-footer v-if="!$route.meta.hideFooter"></content-footer>
    </div>
  </div>
</template>
<style lang="scss"></style>
<script>
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import MobileMenu from "@/pages/Layout/MobileMenu.vue";
import routes from "@/routes/routes";

export default {
  components: {
    TopNavbar,
    DashboardContent,
    ContentFooter,
    MobileMenu
  },
  data() {
    return {
      menu: routes[0].children
    };
  },
  computed: {
    filteredActive() {
      return this.menu.filter(event => event.active);
    }
  }
};
</script>
