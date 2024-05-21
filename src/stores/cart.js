import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', () => {

    const items = ref([])

    const MAX_PRODUCTS = 5

    function addItem(item) {
        items.value.push(item)
    }

    const isEmpty = computed(() => items.value.length === 0)

    const checkProductAvailability = computed(() => {
        return (product) => product.availability < MAX_PRODUCTS ? product.availability : MAX_PRODUCTS
    })

    return {
        items,
        addItem,
        isEmpty,
        checkProductAvailability
    }
})