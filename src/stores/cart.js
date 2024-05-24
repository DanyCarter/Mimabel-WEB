import { ref, computed, watchEffect } from 'vue'
import { defineStore } from 'pinia'
import { collection, addDoc, runTransaction, doc } from 'firebase/firestore'
import { useFirestore } from 'vuefire'
import { useCouponStore } from './coupons'
import { getCurrentDate } from '../helpers'

export const useCartStore = defineStore('cart', () => {
    const coupon = useCouponStore()
    const db = useFirestore()

    const items = ref([])
    const subtotal = ref(0)
    const taxes = ref(0)
    const total = ref(0)

    const MAX_PRODUCTS = 5
    const TAX_RATE = 0.10

    watchEffect(() => {
        subtotal.value = items.value.reduce((total, item) => total + (item.quantity * item.price), 0)
        taxes.value = subtotal.value * TAX_RATE
        total.value = subtotal.value + taxes.value - parseFloat(coupon.discount)
    });

    function addItem(item) {
        const index = isItemInCart(item.id)
        if (index >= 0) {
            if (isProductAvailable(item, index)) {
                alert('¡Has alcanzado el límite!')
                return;
            }
            items.value[index].quantity++;
        } else {
            items.value.push({ ...item, quantity: 1, id: item.id })
        }
    }

    function updateQuantity(id, quantity) {
        items.value = items.value.map(item => item.id === id ? { ...item, quantity } : item)
    }

    function removeItem(id) {
        items.value = items.value.filter(item => item.id !== id)
    }

    async function checkout() {
        try {
            await addDoc(collection(db, 'sales'), {
                items: items.value,
                subtotal: subtotal.value,
                taxes: taxes.value,
                discount: coupon.discount, 
                total: total.value,
                date: getCurrentDate()
            })

            /* Retiramos cantidad de items vendidos */
            items.value.forEach( async (item) => {
                const productRef = doc(db, 'products', item.id)
                await runTransaction(db, async (transaction) => {
                    const currentProduct = await transaction.get(productRef)
                    const availability = currentProduct.data().availability - item.quantity
                    console.log(availability)
                    transaction.update(productRef, { availability })
                })
            })

            /* Reiniciamos el state */
            $reset()
            coupon.$reset()

        } catch (error) {
            console.error('Error al crear la venta:', error) 
        }
    }

    function $reset() {
        items.value = []
        subtotal.value = 0
        taxes.value = 0
        total.value = 0
    }

    const isItemInCart = id => items.value.findIndex(item => item.id === id)

    const isProductAvailable = (item, index) => {
        return items.value[index].quantity >= item.availability || items.value[index].quantity >= MAX_PRODUCTS;
    };

    const isEmpty = computed(() => items.value.length === 0)

    const checkProductAvailability = computed(() => {
        return (product) => product.availability < MAX_PRODUCTS ? product.availability : MAX_PRODUCTS;
    });

    return {
        items,
        subtotal,
        taxes,
        total,
        addItem,
        updateQuantity,
        removeItem,
        checkout,
        isEmpty,
        checkProductAvailability
    }
})
