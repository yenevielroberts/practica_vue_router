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
    background-color: #2979FF;
    margin-top: 20px;
    width: fit-content;
    color:white;
}

p{
    
    margin-right: 10px;
    padding-left: 5px;
}

button{
    margin: 10px;
    border-style: none;
    background-color: #2979FF;
    font-weight: bold;
}

button:hover{
    color: #8E44AD;
}
</style>