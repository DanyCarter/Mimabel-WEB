<script setup>
import { ref, computed, onMounted, defineProps } from 'vue';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { useProductsStore } from '../stores/products';
import Link from './Link.vue';
import Logo from './Logo.vue';
import { RouterLink } from 'vue-router';

const props = defineProps({
  showButtons: {
    type: Boolean,
    default: true,
  },
  hideHamburger: {
    type: Boolean,
    default: false,
  },
});

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

// Computed para manejar la visibilidad de los botones basado en la resolución
const showButtons = computed(() => {
  return props.showButtons && window.innerWidth >= 1400;
});

// Manejo del redimensionamiento de la ventana
const handleResize = () => {
  // Aquí podrías añadir lógica si deseas hacer algo al redimensionar la ventana.
};

window.addEventListener('resize', handleResize);
onMounted(handleResize);

// Estado del menú hamburguesa
const menuOpen = ref(false);
</script>

<template>
  <header
    class="px-10 py-5 bg-gray-700 flex flex-col lg:flex-row gap-5 lg:items-center lg:justify-between absolute top-0 w-full z-10"
  >
    <div class="flex items-center gap-5">
      <RouterLink to="/">
        <Logo />
      </RouterLink>

      <!-- Botón de menú hamburguesa -->
      <div v-if="!props.hideHamburger && !showButtons" class="movil lg:hidden">
        <input type="checkbox" id="btn_menu" v-model="menuOpen" class="menu-checkbox hidden">
        <label for="btn_menu" class="menu-btn">
          <span class="menu-btn__line"></span>
          <span class="menu-btn__line"></span>
          <span class="menu-btn__line"></span>
        </label>
      </div>

      <!-- Botones de categorías y otros botones -->
      <div v-if="showButtons" class="hidden-below-1400 lg:flex gap-5 text-white items-center">
        <div class="flex items-center gap-4">
          <RouterLink to="/">
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
          </RouterLink>
        </div>
        <RouterLink to="/conocenos">
          <button
            class="py-2 px-4 rounded bg-green-500 text-white hover:bg-green-400 transition-colors mx-2"
          >
            Conócenos
          </button>
        </RouterLink>
      </div>
    </div>

    <!-- Menú desplegable para móviles -->
    <div v-if="menuOpen" class="container_flex lg:hidden bg-indigo-600">
      <nav>
        <ul class="container_menu flex_column">
          <li v-for="category in products.categories" :key="category.id">
            <button
              @click="selectCategory(category.id); menuOpen = false"
              class="menu-link"
            >
              {{ category.name }}
            </button>
          </li>
          <li>
            <RouterLink to="/conocenos" class="menu-link" @click="menuOpen = false">
              Conócenos
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/register" class="menu-link" @click="menuOpen = false">
              Register
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/login" class="menu-link" @click="menuOpen = false">
              Login
            </RouterLink>
          </li>
          <li v-if="isAdmin">
            <RouterLink to="/admin/productos" class="menu-link" @click="menuOpen = false">
              Administrar
            </RouterLink>
          </li>
          <li v-if="authState">
            <button @click="logout" class="menu-link bg-red-500 text-white">
              Log out
            </button>
          </li>
        </ul>
      </nav>
    </div>

    <nav v-if="showButtons" class="hidden-below-1400 lg:flex items-center gap-4">
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

<style src="../assets/styles/MainNav.css" scoped></style>
