<script setup>
import { watch,ref } from 'vue';
import { inject } from 'vue';

const props = defineProps({
  producto: Object,
});

const carrito = inject('cart');

// Si el carrito queda vacío, el detalle desaparece
watch(
  () => carrito.value.length,
  (length) => {
    if (length === 0) props.producto = null;
  }
);

</script>

<template>
    <div>    
        <h2>Details:{{ producto.name }}</h2>
        <p>Precio: {{ producto.price }}</p>
        <p>Descripción: {{ producto.description }}</p>
    </div>
 
</template>