<template>
  <div id="app">
      <nav class="navbar is-light" role="navigation" aria-label="dropdown navigation">
      <div class="navbar-brand">
            <!-- <router-link class="navbar-item home-icon" to="/">
              <img src="" width="28" height="28">
            </router-link> -->
            <router-link class="navbar-item is-uppercase" to="/">Wakaba Kendo Club</router-link>
            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" @click="showNav = !showNav" :class="{'is-active': showNav}">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
          </a>
      </div>
      <div class="navbar-menu" :class="{ 'is-active' : showNav}">
        <div class="navbar-start">
            <router-link to="/introduction" class="navbar-item">Introduction</router-link>
            <router-link to="/starting-kendo" class="navbar-item">Starting Kendo</router-link>
            <router-link to="/gallery" class="navbar-item">Gallery</router-link>
            <router-link to="/equipment-price" class="navbar-item">Equipment Price</router-link>
            <router-link to="/fee-structure" class="navbar-item">Fee Structure</router-link>
            <router-link to="/parental-support" class="navbar-item">Parental Support</router-link>
            <router-link to="/health-and-safety" class="navbar-item">Health And Saftey</router-link>
        </div>
      <div class="navbar-end">
        <router-link to="/contact" class="navbar-item">Contact</router-link>
        <router-link to="/visit-us" class="navbar-item">Visit Us</router-link>
        </div>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
   export default {
     name: 'App',
        data(){
          return{
            showNav: false,
          }
        },
}
</script>

<style lang="scss">
@import 'bulma';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;

}
.navbar{
  min-height: 10vh;
  margin-top: -0.1vh;
  width: 100%;
}
</style>
