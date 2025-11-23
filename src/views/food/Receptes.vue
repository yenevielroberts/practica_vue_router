<script setup>
import { RouterLink } from 'vue-router';
import data from'../../db/receptes.json/'

const receptes=data.receptes

</script>

<template>
    <h1>Receptes</h1>
    <div class="container">
        <div v-for="recepte in receptes" :key="recepte.id">
            <h2>{{ recepte.name }}</h2>
            <RouterLink :to="`/receptes/${recepte.id}`">Ver Detalle</RouterLink> 
        </div>
    </div>
    
</template>