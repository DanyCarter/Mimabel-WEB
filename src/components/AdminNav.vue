<script setup>
import { ref, onMounted } from 'vue';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { useRouter } from 'vue-router';

import Link from './Link.vue';
import Logo from './Logo.vue';

const auth = getAuth();
const db = getFirestore();
const router = useRouter();


const isAdmin = ref(false);

onMounted(async () => {
  onAuthStateChanged(auth, async user => {
    if (user) {
      const docSnap = await getDoc(doc(db, 'users', user.uid));
      if (docSnap.exists()) {
        const userData = docSnap.data();
        isAdmin.value = userData.role === 'admin';
      } else {
        router.push('/login');
      }
    } else {
      router.push('/login');
    }
  });
});
</script>

<template>
  <header class="px-10 py-5 bg-gray-700 flex justify-between absolute top-0 w-full z-10">
    <div>
      <Logo />
    </div>

    <nav class="flex items-center">
  <RouterLink
    v-if="isAdmin"
    :to="{ name: 'products' }"
    class="rounded text-white font-bold p-2 space-x-4"
    :class="{ 'border-b-2 border-white': $route.name === 'products' }"
    style="position: absolute; right: 250px;"
  >
    Productos    
  </RouterLink>
  <RouterLink
    v-if="isAdmin"
    :to="{ name: 'ventas' }"
    class="rounded text-white font-bold p-2 space-x-4"
    :class="{ 'border-b-2 border-white': $route.name === 'ventas' }"
    style="position: absolute; right: 350px;"
  >
    Ventas
  </RouterLink>
  <Link
    to="shop"
    class="rounded text-white font-bold p-2"
    :class="{ 'border-b-2 border-white': $route.name === 'shop' }"
    style="position: absolute; right: 100px;"
  >
    Tienda
  </Link>
</nav>

  </header>
</template>
