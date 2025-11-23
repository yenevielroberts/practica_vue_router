<script setup>
</script>

<template>
    <div id="mainContainer">
        <h1> Food explorer</h1>
        <p>Encuentra recetas deliciosas y fáciles de preparar. Inspírate con nuestros platos y aprende paso a paso a crear comidas que encanten a todos.</p>
        <router-link to="/receptes" class="enlace">Explorar</router-link>
        <img src="https://spanishsabores.com/wp-content/uploads/2023/08/Crema-Catalana-Featured.jpg"/>
        
    </div>
    
</template>

<style scoped>
h1{
    color:green;
}
#mainContainer{
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

img{
    width: 500px;
    border-radius: 10px;
}
.enlace{
 margin:20px;
 color:white;
 text-decoration: none;
 font-size: large;
 font-weight: bold;
 background-color: #2A9D8F;
 border-radius: 10px;
 padding:5px;
}

.enlace:hover{
  color: #D97B49;
}




</style>