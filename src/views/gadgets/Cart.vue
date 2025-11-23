<script setup>
import { inject, computed,ref } from 'vue';
import CarItem from './CartItem.vue';

let productos=inject('cart');//injecto el array con los productos a mostrar en el carrito
const productoSeleccionado = ref(null); // producto a mostrar en CarItem
const totalPrecio=computed(()=>{
    let total=0

    if(productos.value != null){
        for(let producto of productos.value){
        total+=producto.price*producto.cantidad
        }
    }
   
    return total
})

const totalProductos=computed(()=>{
    let total=0

    if(productos.value != null){
        for(let producto of productos.value){
        total+=1
    }
 
}
   
    return total
})

const emit=defineEmits(["vaciarCarret","verProducto"])

const vaciarCarrito=()=>{
   emit("vaciarCarret")
   productoSeleccionado.value = null; // limpia el detalle si vacías
}

const verProucto=(producto)=>{
    
   productoSeleccionado.value = producto;
}


</script>

<template>
<div id="carret">
    <h2>Carret</h2>
    <div v-if="productos.length==0">
       <p>No has añadido productos al carrito</p>
    </div>
    <div v-else>
          <div v-for="producto in productos" :key="producto.id" id="productoCarret">
                <p>{{ producto.name }} {{ producto.price }}€ </p>
                <p v-if="!producto.cantidad">Cantidad:{{ 1 }}</p>
                <p v-else>Cantidad:{{ producto.cantidad }}</p>
                <button @click="verProucto(producto)">Ver detalle</button>
            </div>
    </div>
   
    <p><span>Total:</span>{{  totalPrecio}} <span>Productos:</span>{{ totalProductos }}</p>
    <button v-show="productos.length>0" @click="vaciarCarrito">Vaciar carrito</button>

    <CarItem v-if="productoSeleccionado" :producto="productoSeleccionado" />
</div>

</template>



<style scoped>

#carret{
    border: solid black;
    display: flex;
    flex-direction:column;
    border-radius: 10px;
    padding:5px;
}

h2{
    display: flex;
    justify-content: center;
}
p span{
    font-weight: bold;
}
#productoCarret{
    margin:5px;
    width:1;
    padding:5px;
    border-radius: 10px;
    background-color: white;

}

button{
    width:fit-content;
    border:0px;
    padding:5px;
    color:white;
    font-weight: bold;
    border-radius: 10px;
    background-color: blue;
}

button:hover{
    background-color:red;
}
</style>