<script setup>
import { ref, computed, onMounted, defineProps } from 'vue';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { useProductsStore } from '../stores/products';
import Link from './Link.vue';
import Logo from './Logo.vue';
import { RouterLink, useRouter } from 'vue-router';

const router = useRouter();

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
    class="px-10 bg-gray-700 flex flex-col lg:flex-row gap-5 lg:items-center lg:justify-between absolute top-0 w-full z-10"
  >
    <div class="flex items-center gap-5">
      <RouterLink to="/">
        <Logo />
            </RouterLink>

      <!-- Botón de menú hamburguesa -->
      <div v-if="!props.hideHamburger && !showButtons" class="lg:hidden">
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
            <RouterLink to="/"
              v-for="category in products.categories"
              :key="category.id"
              :class="[
                'nav-bar-button',
                products.selectedCategory === category.id
                  ? 'nav-bar-selected'
                  : '',
                'transition-colors',
              ]"
              @click="selectCategory(category.id)"
            >
              {{ category.name }}
          </RouterLink>
        </div>
        
      </div>
    </div>

    <!-- Menú desplegable para móviles -->
    <div v-if="menuOpen" class="container_flex lg:hidden bg-indigo-600">
      <nav>
        <ul class="container_menu flex_column">
          <li v-for="category in products.categories" :key="category.id">
            <button
              @click="() => { router.push('/'); selectCategory(category.id); menuOpen = false; }"
              class="menu-link"
            >
              {{ category.name }}
            </button>
          </li>
          <li>
            <RouterLink to="/conocenos" class="menu-link menu-link-extra" @click="menuOpen = false">
              Conócenos
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/register" class="menu-link menu-link-extra" @click="menuOpen = false">
              Register
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/login" class="menu-link menu-link-extra" @click="menuOpen = false">
              Login
            </RouterLink>
          </li>
          <li v-if="isAdmin">
            <RouterLink to="/admin/productos" class="menu-link menu-link-extra" @click="menuOpen = false">
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
      <RouterLink to="/conocenos">
        <button class="relative border hover:border-sky-600 duration-500 group cursor-pointer text-sky-50  overflow-hidden h-14 w-56 rounded-md bg-sky-800 p-2 flex justify-center items-center font-extrabold">
          <div class="absolute z-10 w-48 h-48 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-900 delay-150 group-hover:delay-75"></div>
          <div class="absolute z-10 w-40 h-40 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-800 delay-150 group-hover:delay-100"></div>
          <div class="absolute z-10 w-32 h-32 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-700 delay-150 group-hover:delay-150"></div>
          <div class="absolute z-10 w-24 h-24 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-600 delay-150 group-hover:delay-200"></div>
          <div class="absolute z-10 w-16 h-16 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-500 delay-150 group-hover:delay-300"></div>
          <p class="z-10">Conócenos</p>
        </button>
      </RouterLink>
      <RouterLink v-if="!authState" to="/register">
        <button class="nav-bar-button text-white">
          Register
        </button>
      </RouterLink>
      <RouterLink v-if="!authState" to="/login">
        <button class="nav-bar-button text-white">
          Login
        </button>
      </RouterLink>
      <RouterLink v-if="isAdmin" to="/admin/productos">
        <button class="nav-bar-button nav-bar-button-admin text-white">
          Administrar
        </button>
      </RouterLink>
      <button v-if="authState" @click="logout" class="nav-bar-button nav-bar-button-out text-white">
        Log out
      </button>
    </nav>
  </header>
</template>

<style src="../assets/styles/MainNav.css" scoped></style>
