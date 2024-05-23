import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { query, collection, where } from 'firebase/firestore'
import { useFirestore, useCollection } from 'vuefire'

export const useSalesStore = defineStore('sales', () => {

    const date = ref('')
    const db = useFirestore()

    const salesSource = computed(() => {
        if(date.value) {
            return query(
                collection(db, 'sales'),
                where('date', '==', date.value)
            )
        }
        return null // Asegúrate de devolver null cuando no haya fecha seleccionada
    })

    const salesCollection = useCollection(salesSource)

    const isDateSelected = computed(() => !!date.value)
    const noSales = computed(() => salesCollection.value?.length === 0 && !!date.value)

    const totalSalesOfDay = computed(() => {
        return salesCollection.value ? salesCollection.value.reduce((total, sale) => total + sale.total, 0) : 0
    })

    return {
        date,
        isDateSelected,
        salesCollection,
        noSales,
        totalSalesOfDay
    }
})
