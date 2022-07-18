<script>
import { RouterView } from "vue-router";
import Home from './views/Home.vue'
import login from './views/login.vue'
import profile from './views/profile.vue'
import signup from './views/signup.vue'

export default{
  views: {
    Home,
    login,
    profile,
    signup
  }
}
</script>

<template>
  <RouterView />
</template>