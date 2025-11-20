<script setup>
import { inject } from 'vue';
import ProductItem from './ProductItem.vue';


const productos=inject('productos')//injecto los productos a mostrar en la lista
const carret=inject('cart')//Injecto el array para guardar los productos en el carrito

//Función que recibe el id del emit creado en el componente ProductItem
const agregarProducto=(id)=>{

    const producto=productos.value.find(pro=> pro.id===id)
    carret.value.push(producto)
}

</script>




<template>
<h2>Productes</h2>

<div>
    <!--agregarProducto evento creado en el component ProductItem 
    que al hacer click en el boton add to cart envia el id a la función agregarProducto en este componente
    -->
    <ProductItem v-for="producto in productos" :key="producto.id" :producto="producto" @agregarProducto="agregarProducto"/>
</div>
</template>


<style scoped>
</style>