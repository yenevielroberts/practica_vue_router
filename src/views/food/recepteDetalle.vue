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
    
    <h1>{{ recepte.name }}</h1>
    <!--Tengo que poner los :antes del atributo porque le asigno el valor de una variable-->
    <div id="detalleContainer">

    <img :src="recepte.image" />
    <p>{{ recepte.description }}</p>
    <div id="sections">
        <section>
            <h2>Ingredientes</h2>
            <ul v-for="ingrediente in recepte.ingredients">
                <li>{{ ingrediente }}</li>
            </ul>
        </section>
        <section>
            <h2>Paso a paso</h2>
            <ul v-for="paso in recepte.steps">
                <li>{{ paso }}</li>
            </ul> 
        </section> 
    </div>
 
     
    </div>
  
</template>

<style scoped>

h1{
    display: flex;
    justify-content: center;
}

#detalleContainer{
    display: flex;
    flex-direction: column;
    align-items: center;
    
}
img{
    width: 400px;
    border-radius: 10px;
}

#sections{
   
    display: flex;
    flex-direction: row; 
    justify-content: center;
}

section{
    margin: 20px;
}
</style>