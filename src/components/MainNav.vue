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
      <div v-if="showButtons" class="movil lg:hidden">
        <input type="checkbox" id="btn_menu" v-model="menuOpen">
        <label for="btn_menu" class="btn_menu flex_column">
          <span id="btn_span_1" class="btn_span"></span>
          <span id="btn_span_2" class="btn_span"></span>
          <span id="btn_span_3" class="btn_span"></span>
        </label>
      </div>

      <!-- Botones de categorías y otros botones -->
      <div v-if="showButtons" class="hidden-below-1400 lg:flex gap-5 text-white items-center">
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
          </li>
          <li>
            <RouterLink to="/conocenos">
              <button class="py-2 px-4 rounded bg-green-500 text-white hover:bg-green-400 transition-colors mx-2">
                Conócenos
              </button>
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/register">
              <button class="py-2 px-4 rounded bg-blue-500 text-white hover:bg-blue-400 transition-colors mx-2">
                Register
              </button>
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/login">
              <button class="py-2 px-4 rounded bg-blue-500 text-white hover:bg-blue-400 transition-colors mx-2">
                Login
              </button>
            </RouterLink>
          </li>
          <li v-if="isAdmin">
            <RouterLink to="/admin/productos">
              <button class="py-2 px-4 rounded bg-yellow-500 text-white hover:bg-yellow-400 transition-colors mx-2">
                Administrar
              </button>
            </RouterLink>
          </li>
          <li v-if="authState">
            <button @click="logout" class="py-2 px-4 rounded bg-red-500 text-white hover:bg-red-400 transition-colors mx-2">
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

<style>
/* Estilos del botón hamburguesa y el menú desplegable */
.movil {
  position: relative;
}

#btn_menu {
  display: none;
}

.btn_menu {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.btn_span {
  width: 25px;
  height: 3px;
  background-color: white;
}

.container_flex {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
  padding: 20px;
}

.container_menu {
  list-style: none;
  padding: 0;

}

.container_menu li {
  margin: 10px 0;
}

.container_menu li a {
  color: white;
  text-decoration: none;
}

.flex_column {
  display: flex;
  flex-direction: column;
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  height: 64px;
  align-items: center;
  max-width: 1200px;
  width: 90%;
  margin: auto;
}

.navbar {
  box-shadow: 0px 5px 10px 0px #aaa;
  position: fixed;
  width: 100%;
  background: #fff;
  color: #000;
  opacity: 0.85;
  height: 64px;
  z-index: 12;
}

/* Mostrar el botón de menú hamburguesa y ocultar los botones de navegación en pantallas pequeñas */
@media (max-width: 1400px) {
  .hidden-below-1400 {
    display: none;
  }

  .movil {
    display: flex;
  }
}

@media (max-width: 768px) {
  .navbar-container {
    display: block;
    position: relative;
    height: 64px;
  }

  #btn_menu {
    position: absolute;
    display: block;
    height: 32px;
    width: 30px;
    top: 20px;
    left: 20px;
    z-index: 5;
    opacity: 0;
  }

  .hamburger-lines {
    display: block;
    height: 23px;
    width: 35px;
    position: absolute;
    top: 17px;
    left: 20px;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .hamburger-lines .line {
    display: block;
    height: 4px;
    width: 100%;
    border-radius: 10px;
    background: #333;
  }

  .hamburger-lines .line1 {
    transform-origin: 0% 0%;
    transition: transform 0.4s ease-in-out;
  }

  .hamburger-lines .line2 {
    transition: transform 0.2s ease-in-out;
  }

  .hamburger-lines .line3 {
    transform-origin: 0% 100%;
    transition: transform 0.4s ease-in-out;
  }

  .menu-items {
    padding-top: 100px;
    background: #fff;
    height: 100vh;
    max-width: 300px;
    transform: translate(-150%);
    display: flex;
    flex-direction: column;
    margin-left: -40px;
    padding-left: 50px;
    transition: transform 0.5s ease-in-out;
    box-shadow: 5px 0px 10px 0px #aaa;
  }

  .menu-items li {
    margin-bottom: 1.5rem;
    font-size: 1.3rem;
    font-weight: 500;
  }

  .navbar-container input[type="checkbox"]:checked ~ .menu-items {
    transform: translateX(0);
  }

  .navbar-container input[type="checkbox"]:checked ~ .hamburger-lines .line1 {
    transform: rotate(35deg);
  }

  .navbar-container input[type="checkbox"]:checked ~ .hamburger-lines .line2 {
    transform: scaleY(0);
  }

  .navbar-container input[type="checkbox"]:checked ~ .hamburger-lines .line3 {
    transform: rotate(-35deg);
  }
}
</style>
