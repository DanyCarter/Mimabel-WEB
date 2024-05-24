<template>
  <div class="login-container">
    <h1 class="login-title">Login</h1>
    <div class="google">
      <div class="google-button" @click="socialLogin">
        <img class="google-icon" src="../../assets/img/MIMABEL.webp" alt="Image alt" />
        <a class="google-word">Continue with Google</a>
      </div>
    </div>
    <p class="or-separator">OR</p>
    <form @submit.prevent="login" class="login-child">
      <input type="email" placeholder="Email address..." v-model="email" />
      <input type="password" placeholder="Password..." v-model="password" />
      <button type="submit">Login</button>
      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

export default {
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

        // Obtener el rol del usuario desde Firestore
        const docSnap = await getDoc(doc(db, 'users', user.uid));
        if (docSnap.exists()) {
          const userData = docSnap.data();
          if (userData.role === 'admin') {
            // Redirigir a la página de administración
            router.push('/admin/productos');
          } else {
            // Redirigir a la página principal
            router.push('/');
          }
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

        // Obtener el rol del usuario desde Firestore
        const docSnap = await getDoc(doc(db, 'users', user.uid));
        if (docSnap.exists()) {
          const userData = docSnap.data();
          if (userData.role === 'admin') {
            // Redirigir a la página de administración
            router.push('/admin/productos');
          } else {
            // Redirigir a la página principal
            router.push('/');
          }
        }
      } catch (error) {
        errorMessage.value = 'Oops. ' + error.message;
      }
    };

    return {
      email,
      password,
      errorMessage,
      login,
      socialLogin
    };
  }
};
</script>

<style scoped>
.login-container {
  max-width: 100%;
  margin-top: 80px;
}
.login-child {
  max-width: 300px;
  display: block;
  margin: 0 auto 0 auto;
}
input {
  width: 200px;
  height: 25px;
  margin-bottom: 10px;
  padding-left: 10px;
}
input:focus {
    outline: none !important;
    border:2px solid #F8874F;
}
button {
  margin-top: 10px;
  width: 216px;
  height: 25px;
  cursor: pointer;
}
.google {
  display: flex;
  justify-content: center;
  cursor: pointer;
}
.google-button {
  height: 30px;
  flex-wrap: wrap;
  border-radius: 5px;
  background-color: #eee;
  display: flex;
  justify-content: flex-start;
  padding-left: 10px;
  width: 207px;
}
.google-icon {
  width: 20px;
  height: 20px;
  border-radius: 30px;
  margin-top: 5px;
}
.google-word {
  margin-left: 12px;
  font-size: 14px;
  font-weight: 700;
  color: #000;
  margin-top: 6px;
}
</style>
