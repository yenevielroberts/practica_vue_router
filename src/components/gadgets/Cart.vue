<script setup>
import { inject, computed } from 'vue';

const productos=inject('cart');//injecto el array con los productos a mostrar en el carrito

const totalPrecio=computed(()=>{
    let total=0

    for(let producto of productos.value){
        total+=producto.price*producto.cantidad
    }

    return total
})

</script>

<template>
<div id="carret">
    <h2>Carret</h2>
    <div v-for="producto in productos" :key="producto.id">
        <p>{{ producto.name }}</p>
        <p>{{ producto.price }}</p>
        <p v-if="!producto.cantidad">Cantidad:{{ 1 }}</p>
        <p v-else>Cantidad:{{ producto.cantidad }}</p>
    </div>
    <p>Total:{{  totalPrecio}}</p>
</div>

</template>



<style scoped>

#carret{
    border: solid black;
}
</style>