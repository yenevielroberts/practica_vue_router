<script setup>
import {watch,ref} from 'vue';
import { useRoute } from 'vue-router';
import data from'../../db/receptes.json/'

const receptes=ref(data.receptes)

const recepte=ref(null)

const route=useRoute();
const recepteId=parseInt(route.params.id)

const cargaRecepte=(id)=>{recepte.value=receptes.value.find( r=>r.id==id)}

cargaRecepte(route.params.id)

watch(
    ()=>route.params.id,
    (newId)=>{
        cargaRecepte(newId)
    }
)

</script>

<template>
    <h1>Recepte Detalle</h1>
    <p>{{ recepte.name }}</p>
    <p>{{ recepte.description }}</p>
</template>