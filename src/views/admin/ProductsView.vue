<script setup>
import { computed } from 'vue';
import Link from '@/components/Link.vue';
import Product from '../../components/Product.vue';
import { useProductsStore } from '../../stores/products'
const products = useProductsStore()


const search_text = defineModel({ default: "" })

const searched_products = computed(() => {
  let array = []
  for (const product of products.productsCollection) {
    if(search_text.value == "" || product.name.toLowerCase().includes(search_text.value.toLowerCase())) {
      array.push(product);
    }
  } 
  return array;
})

</script>


<template>
    <div>
        <Link
            to="new-product"
            >
                Nuevo Producto
        </Link>
        <h1 class="text-4xl font-black my-10">Productos</h1>

        <p v-if="products.noResults">No hay resultados</p>

        <div v-else>
            <input class="search-bar" type="text" placeholder="Buscar" v-model="search_text">
            <ul role="list" class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-5">

                <Product
                    v-for="product in searched_products"
                    :key="product.id"
                    :product="product"
                />
            </ul>
        </div>
    </div>
</template>


<style scoped>
.search-bar {
  width: 100%;
  margin-bottom: 1.6rem;
}
</style>