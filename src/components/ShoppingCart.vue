<script setup>
import ShoppingCartItem from './ShoppingCartItem.vue'
import Amount from './Anount.vue';
import CouponForm from './CouponForm.vue';
import { useCartStore } from '../stores/cart';
import { formatCurrency } from '@/helpers';

const cart = useCartStore();
</script>

<template>
  <p v-if="cart.isEmpty" class="text-xl text-center text-gray-900">El carrito esta vacio</p>

  <div v-else>
    <p class="text-4xl font-bold text-gray-900">Resumen de Venta</p>

    <ul
        role="list"
        class="mt-6 divide-y divide-gray-200 border-t"
    >
        <ShoppingCartItem 
            v-for="item in cart.items"
            :key="item.id"
            :item="item"
        />
    </ul>

    <dl class="space-y-6 border-t border-gray-200 pt-6 text-sm font-medium text-gray-500">
        <Amount>  
            <template #label>Subtotal:</template>
            {{ formatCurrency(cart.subtotal) }}
        </Amount>

        <Amount>  
            <template #label>Impuestos:</template>
            {{ formatCurrency(cart.taxes) }}
        </Amount>

        <Amount>  
            <template #label>Total a pagar:</template>
            {{ formatCurrency(cart.total) }}
        </Amount>

    </dl>

    <CouponForm />
  </div>
</template>
