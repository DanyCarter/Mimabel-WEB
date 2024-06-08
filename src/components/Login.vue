<template>
  <MainNav :showButtons="false" :hideHamburger="true" />
  <div class="screen">
    <section class="container">
      <div class="login-container">
        <div class="circle circle-one"></div>
        <div class="circle circle-two"></div>
        <div class="form-container">
          <img src="https://raw.githubusercontent.com/hicodersofficial/glassmorphism-login-form/master/assets/illustration.png" alt="illustration" class="illustration" />
          <h1 class="login-title">LOGIN</h1>
          <div class="google">
            <div class="google-button" @click="socialLogin"></div>
          </div>
          <form @submit.prevent="login">
            <input type="email" placeholder="Email address..." v-model="email" />
            <input type="password" placeholder="Password..." v-model="password" />
            <button type="submit">Login</button>
            <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
          </form>
          <div class="register-forget opacity">
            <router-link to="/register" class="register">REGISTER</router-link>
            <button @click="goBack" class="back">VOLVER</button>
          </div>
        </div>
      </div>
      <div class="theme-btn-container"></div>
    <Footer />
    </section>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import MainNav from './MainNav.vue'; 
import Footer from './Footer.vue';

export default {
  components: {
    MainNav,
    Footer,
  },
  setup() {
    const email = ref('');
    const password = ref('');
    const errorMessage = ref('');
    const auth = getAuth();
    const db = getFirestore();
    const router = useRouter();

    const login = async () => {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email.value, password.value);
        const user = userCredential.user;
        const docSnap = await getDoc(doc(db, 'users', user.uid));
        if (docSnap.exists()) {
          const userData = docSnap.data();
          if (userData.role === 'admin') {
            router.push('/admin/productos');
          } else {
            router.push('/');
          }
        } else {
          errorMessage.value = 'No se encontraron datos de usuario';
        }
      } catch (error) {
        errorMessage.value = error.message;
      }
    };

    const socialLogin = async () => {
      const provider = new GoogleAuthProvider();
      try {
        const userCredential = await signInWithPopup(auth, provider);
        const user = userCredential.user;
        const docSnap = await getDoc(doc(db, 'users', user.uid));
        if (docSnap.exists()) {
          const userData = docSnap.data();
          if (userData.role === 'admin') {
            router.push('/admin/productos');
          } else {
            router.push('/');
          }
        } else {
          errorMessage.value = 'No se encontraron datos de usuario';
        }
      } catch (error) {
        errorMessage.value = 'Oops. ' + error.message;
      }
    };

    const goBack = () => {
      router.push('/');
    };

    return {
      email,
      password,
      errorMessage,
      login,
      socialLogin,
      goBack
    };
  }
};
</script>

<style src="../assets/styles/Login.css" scoped></style> 