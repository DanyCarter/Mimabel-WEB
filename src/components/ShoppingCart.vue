<template>
    <div>
      <p v-if="cart.items.length === 0">El carrito está vacío</p>
      <ul v-else>
        <li v-for="item in cart.items" :key="item.id">{{ item.name }}</li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { useCartStore } from '../stores/cart'
  
  const cart = useCartStore()
  

  
  </script>
  