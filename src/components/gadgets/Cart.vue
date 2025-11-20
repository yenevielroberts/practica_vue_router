<script setup>
import { inject, computed } from 'vue';

const productos=inject('cart');//injecto el array con los productos a mostrar en el carrito

const totalPrecio=computed(()=>{
    let total=0

    for(let producto of productos.value){
        total+=producto.price
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
    </div>
    <p>Total:{{  totalPrecio}}</p>
</div>

</template>



<style scoped>

#carret{
    border: solid black;
}
</style>