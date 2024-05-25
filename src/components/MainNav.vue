<script setup>
import { ref } from 'vue';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { useProductsStore } from '../stores/products';
import Link from './Link.vue';
import Logo from './Logo.vue';
import { RouterLink } from 'vue-router'; // Importar RouterLink

// Productos store
const products = useProductsStore();

// Función para seleccionar categoría
const selectCategory = categoryId => {
  products.selectedCategory = categoryId;
};

// Estado de autenticación y correo electrónico
const authState = ref(false);
const email = ref('');
const isAdmin = ref(false);
const auth = getAuth();
const db = getFirestore();

// Escuchar cambios de autenticación
onAuthStateChanged(auth, async user => {
  if (user) {
    authState.value = true;
    email.value = user.email;

    const docSnap = await getDoc(doc(db, 'users', user.uid));
    if (docSnap.exists()) {
      const userData = docSnap.data();
      isAdmin.value = userData.role === 'admin';
    }
  } else {
    authState.value = false;
    email.value = '';
    isAdmin.value = false;
  }
});

// Función de cierre de sesión
const logout = async () => {
  await signOut(auth);
};

// Definir la prop showButtons
const props = defineProps({
  showButtons: {
    type: Boolean,
    default: true,
  },
});
</script>

<template>
  <header
    class="px-10 py-5 bg-gray-700 flex flex-col lg:flex-row gap-5 lg:items-center lg:justify-between absolute top-0 w-full z-10"
  >
    <div class="flex items-center gap-5">
      <RouterLink to="/">
        <Logo />
      </RouterLink>

      <div v-if="showButtons" class="flex gap-5 text-white items-center">
        <div class="flex items-center gap-4">
          <button
            v-for="category in products.categories"
            :key="category.id"
            :class="[
              'py-2 px-4 rounded mx-2',
              products.selectedCategory === category.id
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-200 text-black',
              'hover:bg-indigo-500 transition-colors',
            ]"
            @click="selectCategory(category.id)"
          >
            {{ category.name }}
          </button>
        </div>
        <!-- Botón adicional "Conócenos" -->
        <RouterLink to="/conocenos">
          <button
            class="py-2 px-4 rounded bg-green-500 text-white hover:bg-green-400 transition-colors mx-2"
          >
            Conócenos
          </button>
        </RouterLink>
      </div>
    </div>

    <nav v-if="showButtons" class="flex items-center gap-4">
      <p class="hidden" v-if="authState">{{ email }}</p>
      <RouterLink v-if="!authState" to="/register">
        <button class="py-2 px-4 rounded bg-blue-500 text-white hover:bg-blue-400 transition-colors mx-2">
          Register
        </button>
      </RouterLink>
      <RouterLink v-if="!authState" to="/login">
        <button class="py-2 px-4 rounded bg-blue-500 text-white hover:bg-blue-400 transition-colors mx-2">
          Login
        </button>
      </RouterLink>
      <RouterLink v-if="isAdmin" to="/admin/productos">
        <button class="py-2 px-4 rounded bg-yellow-500 text-white hover:bg-yellow-400 transition-colors mx-2">
          Administrar
        </button>
      </RouterLink>
      <button v-if="authState" @click="logout" class="py-2 px-4 rounded bg-red-500 text-white hover:bg-red-400 transition-colors mx-2">
        Log out
      </button>
    </nav>
  </header>
</template>
