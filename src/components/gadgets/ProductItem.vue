<script setup>

const props=defineProps({
    producto:{}
})

const emit=defineEmits(['agregarProducto'])

const agregarProducto=()=>{
    emit('agregarProducto',props.producto.id)
}
</script>



<template>

    <div class="producto">
        <p>{{ producto.name }}</p>
        <p>{{ producto.price }}</p>
        <button @click="agregarProducto">Add to Cart</button>
    </div>
</template>

<style scoped>

.producto{
    display:flex;
    border-radius: 10px;
    background-color: antiquewhite;
    margin-top: 20px;
    width: 200px;
}

p{
    
    margin-right: 10px;
    padding-left: 5px;
}
</style>