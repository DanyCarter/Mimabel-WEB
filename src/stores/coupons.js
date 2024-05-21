import { ref, watchEffect } from 'vue'
import { defineStore } from 'pinia'
import { useCartStore } from './cart'

export const useCouponStore = defineStore('coupon', () => {
    const cart = useCartStore()
    const couponInput = ref('10DESCUENTO')
    const couponValidationMessage = ref('')
    const discountPercentage = ref(0)
    const discount = ref(0)

    const VALID_COUPONS = [
        { name: '10DESCUENTO', discount: .10 },
        { name: '20DESCUENTO', discount: .20 },
    ]

    watchEffect(() => {
        discount.value = (cart.total * discountPercentage.value).toFixed(2)
    })

    function applyCoupon() {
        if (VALID_COUPONS.some(coupon => coupon.name === couponInput.value)) {
            couponValidationMessage.value = 'Aplicando cupon...'

            setTimeout(() => {
                discountPercentage.value = VALID_COUPONS.find(coupon => coupon.name === couponInput.value).discount
                couponValidationMessage.value = 'Descuento Aplicado!'
            },3000);

        } else {
            couponValidationMessage.value = 'No existe ese cupon'
        }

        /* Para resetear mensaje despues de (5 seg) */
        setTimeout(() => {
            couponValidationMessage.value = ''
        }, 6000);

    }

    return {
        couponInput,
        applyCoupon,
        discountPercentage,
        discount,
        couponValidationMessage
    }
})
