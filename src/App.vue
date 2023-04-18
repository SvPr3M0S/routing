<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/Services">Services</router-link> |
    <router-link to="/blog">Blog</router-link> |
    <router-link to="/Contact">Contact</router-link> 
  </nav>
  <router-view/>
</template>

<style lang="scss">
.router-link-exact-active{
  color: rgb(255, 0, 0);
}
</style>
