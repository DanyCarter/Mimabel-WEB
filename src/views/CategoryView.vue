<template>
    <div>
      <h1>Categoría: {{ categoryName }}</h1>
      <p>Productos de la categoría: {{ categoryId }}</p>
      <ul>
        <li v-for="product in filteredProducts" :key="product.id">
          {{ product.name }}
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { computed, watch } from 'vue';
  import { useRoute } from 'vue-router';
  import { useProductsStore } from '../stores/products';
  
  const route = useRoute();
  const store = useProductsStore();
  
  const categoryId = computed(() => parseInt(route.params.id)); // Asegúrate de convertir el id a número si es necesario
  const categoryName = computed(() => {
    const category = store.categories.find(cat => cat.id === categoryId.value);
    return category ? category.name : 'Desconocida';
  });
  
  // Filtrar productos por categoría seleccionada
  const filteredProducts = computed(() => {
    if (!store.productsCollection.value) return [];
    return store.productsCollection.value.filter(product => product.category === categoryId.value);
  });
  
  // Actualizar la categoría seleccionada en el store
  store.selectedCategory = categoryId.value;
  
  // Watch para asegurarse de que la categoría se actualiza correctamente
  watch(categoryId, (newId) => {
    store.selectedCategory = newId;
  });
  </script>
  
  <style scoped>
  /* Agrega estilos específicos para esta vista si es necesario */
  </style>
  