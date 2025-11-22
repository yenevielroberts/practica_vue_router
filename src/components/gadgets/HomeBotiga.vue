<script setup>
import Cart from './Cart.vue';
import CategoryList from './CategoryList.vue';
import {provide,ref } from 'vue';

const productos=ref([
    {id:1, name:"Headphones",price:50,"cantidad":1},
    {id:2, name:"SmarthWatch",price:80,"cantidad":1},
    {id:3, name:"Iphone",price:200,"cantidad":1}
])

/*Siguiendo la explicación del profesor he echo otro array que inicialmente esta vacio. 
Aquí guardaré los items que el usuario agregue al carrito*/
const carret=ref([])//array para guardar los productos selecionados por el usuario en el carrito

provide ('productos', productos)
provide('cart',carret)

</script>

<template>

    <h1>Botiga de Gadgets</h1>
    <div id="componente">
        <section class="sectLista">
              <CategoryList />
        </section>
     
    <section class="sectCarret">
         <Cart />
    </section> 
    </div>
</template>

<style scoped>

#componente{
    display: flex;
    justify-content: space-around;
}
.sectLista{
    width: 50%;
}
.sectCarret{
     width: 50%;
}

</style>