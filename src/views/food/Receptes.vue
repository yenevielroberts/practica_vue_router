<script setup>
import{ref} from 'vue'
import { RouterLink } from 'vue-router';
import data from'../../db/receptes.json/'

const receptes=ref(data.receptes)

</script>

<template>
    <h1>Receptes</h1>
    <div id="container">
        <div v-for="recepte in receptes" :key="recepte.id" class="containerIndi">
            <h2>{{ recepte.name }}</h2>
            <img :src="recepte.image"/>
            <RouterLink :to="`/receptes/${recepte.id}`" class="btn">Ver Detalle</RouterLink> 
        </div>
    </div>
</template>

<style scoped>
h1{
    display: flex;
    justify-content: center;
    color: #073B4C;
}
#container{
        display:flex;
        flex-direction:row;
        flex-wrap: wrap;
        justify-content: space-around;
}

.containerIndi{
    display:flex;
    flex-direction:column;
    border: solid black;
    border-radius: 10px;
    padding:5px;
    width: 300px;
    height: 300px;
    margin: 10px;
    align-items: center;
    background-color: #FFF5E6;
    
}

img{
    width: 200px;
    height: 200px;
    border-radius: 5px;
}

.btn{
    margin: 10px;
    padding: 5px;
    border-radius: 10px;
    background-color:#2A9D8F;
    color: white;
    font-weight: bold;
    text-decoration: none;
}
.btn:hover{
  color: #D97B49;
}
</style>