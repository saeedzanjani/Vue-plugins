<template>
<div id="app">
  <navbar-app/>
  <router-view></router-view>
</div>
</template>

<script>
import Navbar from './components/Navbar'
import {provide} from "vue";
import store from "@/store";
export default {
  name: 'App',
  setup(){
    provide('store', store)
  },
  components: {
    'navbar-app': Navbar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-flow: row;
}
</style>
