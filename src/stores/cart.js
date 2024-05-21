import { ref, computed, watchEffect } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', () => {

    const items = ref([])
    const subtotal= ref (0)
    const taxes = ref(0)
    const total = ref(0)

    const MAX_PRODUCTS = 5
    const TAX_RATE = .10

    watchEffect(() => {
        subtotal.value = items.value.reduce((total, item) => total + (item.quantity * item.price), 0)
        taxes.value = subtotal.value * TAX_RATE
        total.value = subtotal.value + taxes.value
    })

    function addItem(item) {
        items.value.push({...item, quantity: 1, id: item.id})

        console.log(items.value)
    }

    function updateQuantity(id, quantity) {
        items.value = items.value.map( item => item.id === id ? {...item, quantity} : item )
    }

    const isEmpty = computed(() => items.value.length === 0)

    const checkProductAvailability = computed(() => {
        return (product) => product.availability < MAX_PRODUCTS ? product.availability : MAX_PRODUCTS
    })

    return {
        items,
        subtotal,
        taxes,
        total,
        addItem,
        isEmpty,
        updateQuantity,
        checkProductAvailability
    }
})