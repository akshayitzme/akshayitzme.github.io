<script setup>
import Hero from '/src/components/Hero.vue'
import Navbar from '/src/components/Navbar.vue'
</script>

<template>
  <div class="lg:m-8 lg:mx-44 lg:my-12">
    <Navbar />
    <RouterView />
  </div>
</template>

<style scoped></style>
