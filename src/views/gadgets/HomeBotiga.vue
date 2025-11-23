<script setup>
import Cart from './Cart.vue';
import CategoryList from './CategoryList.vue';
import {provide,ref } from 'vue';
import data from'../../db/gadgets.json/'

const productos=ref(data.gadgets)

/*Siguiendo la explicación del profesor he echo otro array que inicialmente esta vacio. 
Aquí guardaré los items que el usuario agregue al carrito*/
let carret=ref([])//array para guardar los productos selecionados por el usuario en el carrito

provide ('productos', productos)
provide('cart',carret)

const vaciarCarrito=()=>{
    carret.value=[]
}

</script>

<template>

    <h1>Botiga de Gadgets</h1>
    <div id="componente">
        <section class="sectLista">
              <CategoryList />
        </section>
     
    <section class="sectCarret">
         <Cart @vaciarCarret="vaciarCarrito"/>
    </section> 
    </div>
</template>

<style >

h1{
    display: flex;
    justify-content: center;
}

#componente{
    display: flex;
    justify-content: space-around;
}
.sectLista{
    display: flex;
}
.sectCarret{
    width: 500px;
}

</style>