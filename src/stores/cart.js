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
        const index = isItemInCart(item.id)
        /* Primero nos aseguramos que ese item existe en nuestro carrito */
        if(index >= 0 ) {
            /* Si alcanza el limite de items que hay en stock */
            if(isProductAvailable(item, index)) {
                alert('Has alcanzado el limite!')
                return
            }
            /* Actualizamos la cantidad */
            items.value[index].quantity++
             /* Si lo ponemos con .index tratara de entrar como un objeto, [] para que sea la posicion y se inyecte dinamicamente*/
        } else {
            items.value.push({...item, quantity: 1, id: item.id})
        }
    }

    function updateQuantity(id, quantity) {
        items.value = items.value.map( item => item.id === id ? {...item, quantity} : item )
    }

    function removeItem(id) {
        items.value = items.value.filter(item => item.id !== id)
    }

    const isItemInCart = id => items.value.findIndex(item => item.id === id )

    const isProductAvailable = (item, index ) => {
        return items.value[index].quantity >= item.availability || items.value[index].quantity >= MAX_PRODUCTS
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
        removeItem,
        checkProductAvailability
    }
})