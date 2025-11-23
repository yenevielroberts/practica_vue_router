<script setup>
import Home from './views/food/Home.vue'
import Receptes from './views/food/Receptes.vue'
</script>

<template>
  <header>
    <h1>FoodExplorer</h1>
    <nav>
      <RouterLink to="/" class="enlaceNav">Home</RouterLink>
      <RouterLink to="/receptes" class="enlaceNav">Receptes</RouterLink>
      <RouterLink to="/botigaGadgets" class="enlaceNav">Provide & Inject (Botiga Gadgets)</RouterLink>
    </nav>
  </header>

<RouterView />

</template>

<style >
header{
  display:flex;
  flex-direction: row;
  height: 70px;
  padding:5px;
  align-items: center;
  background-color: #264653;
  color:white;
  align-items:center;
  
}
nav{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items:center;
}
h1{
  margin-right:20px;
}
.enlaceNav{
 margin-right:20px;
 color:white;
 text-decoration: none;
 font-size: large;
 font-weight: bold;
}

.enlaceNav:hover{
  color: #D97B49;
}

body{
    background-color: #F0F4F8;
    color:#1F3B4D;

}
</style>
