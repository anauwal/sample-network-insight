<template>
  <div class="height-main">
    <NetworkNavbar></NetworkNavbar>
    <router-view></router-view>
  </div>
</template>
<script>
import NetworkNavbar from '../components/Navbar.vue';
import { U } from "@adc/vigour-ui/lib/spl";
import { getSessionData, processSessionData } from '../views/getSession/session'

export default {
  components: {
    NetworkNavbar
  },
  data() {
    return {
      url: ''
    }
  },
  async mounted() {
    await U.initCsrfToken();
    await this.getCurrentUrl();
    await this.fetchUserData();
  },
  methods: {
    async getCurrentUrl() {
      this.url = window.location.href;
    },
    async fetchUserData() {
      try {
        const sessionData = await getSessionData(this.url.toString());
        console.log('Session data:', sessionData);
        processSessionData(sessionData);
      } catch (error) {
        console.error('Error fetching session data:', error);
      }
    }

  }
}
</script>
<style>
@import '../assets/style/style.css';
</style>