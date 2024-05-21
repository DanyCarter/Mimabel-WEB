import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCouponStore = defineStore('coupon', () => {
    const couponInput = ref('10DESCUENTO')

    const VALID_COUPONS = [
        { name: '10DESCUENTO', discount: .10 },
        { name: '20DESCUENTO', discount: .20 },
    ]

    function applyCoupon() {
        if (VALID_COUPONS.some(coupon => coupon.name === couponInput.value)) {
            console.log('Si existe ese cupón')
        } else {
            console.log('No existe ese cupón')
        }
    }

    return {
        couponInput,
        applyCoupon
    }
})
