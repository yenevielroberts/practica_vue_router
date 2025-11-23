<script setup>
import Home from './views/food/Home.vue'
import Receptes from './views/food/Receptes.vue'
</script>

<template>
  <header>
    <h1>FoodExplorer</h1>
    <nav>
      <RouterLink to="/" class="enlaces">Home</RouterLink>
      <RouterLink to="/receptes" class="enlaces">Receptes</RouterLink>
      <RouterLink to="/botigaGadgets" class="enlaces">Provide & Inject (Botiga Gadgets)</RouterLink>
    </nav>
  </header>

<RouterView />

</template>

<style scoped>
header{
  display:flex;
  background-color: lightblue;
  height: 70px;
  padding:5px;
  align-items: center;
}
nav{
  display: flex;
  flex-direction: row;
  align-items:center;
}
h1{
  margin-right:20px;
}
.enlaces{
 margin-right:20px;
}
</style>
