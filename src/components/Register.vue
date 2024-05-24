<template>
  <header class="px-10 py-5 bg-gray-700 flex justify-between absolute top-0 w-full z-10"></header>
  <div class="register-container">
    <h1 class="register-title">Register</h1>
    <div class="google">
      <div class="google-button" @click="socialLogin">
        <img class="google-icon" src="../../assets/img/MIMABEL.webp" alt="Image alt" />
        <a class="google-word">Continue with Google</a>
      </div>
    </div>
    <p>OR</p>
    <form @submit.prevent="register" class="register-child">
      <input type="text" placeholder="First Name" v-model="firstName" />
      <input type="text" placeholder="Last Name" v-model="lastName" />
      <input type="email" placeholder="Email address..." v-model="email" />
      <input type="password" placeholder="Password..." v-model="password" />
      <button type="submit">Register</button>
      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../config/firebase'; // Importa auth y db

export default {
  setup() {
    const firstName = ref('');
    const lastName = ref('');
    const email = ref('');
    const password = ref('');
    const errorMessage = ref('');
    const router = useRouter();

    const register = async () => {
      if (password.value.length < 6) {
        errorMessage.value = 'Password should be at least 6 characters.';
        return;
      }

      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value);
        const user = userCredential.user;

        const role = email.value === 'admin@example.com' ? 'admin' : 'user';

        await setDoc(doc(db, 'users', user.uid), {
          firstName: firstName.value,
          lastName: lastName.value,
          email: email.value,
          role: role,
          createdAt: new Date(),
        });

        router.push('/');
      } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
          errorMessage.value = 'Email is already in use.';
        } else {
          errorMessage.value = error.message;
        }
      }
    };

    const socialLogin = async () => {
      const provider = new GoogleAuthProvider();
      try {
        const userCredential = await signInWithPopup(auth, provider);
        const user = userCredential.user;

        const role = user.email === 'admin@example.com' ? 'admin' : 'user';

        await setDoc(doc(db, 'users', user.uid), {
          firstName: '',  // Asigna un valor adecuado si es necesario
          lastName: '',   // Asigna un valor adecuado si es necesario
          email: user.email,
          role: role,
          createdAt: new Date(),
        });

        router.push('/');
      } catch (error) {
        errorMessage.value = 'Oops. ' + error.message;
      }
    };

    return {
      firstName,
      lastName,
      email,
      password,
      errorMessage,
      register,
      socialLogin,
    };
  },
};
</script>


<style scoped>
/* Estilos generales */
body {
  background-color: #f0f0f0; /* Gris claro */
  color: #333; /* Gris oscuro */
  font-family: 'Arial', sans-serif;
}

/* Estilos para el contenedor principal del login */
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f0f0f0; /* Gris claro */
}

/* Título del login */
.login-title {
  font-size: 2em;
  color: #1a73e8; /* Azul */
  margin-bottom: 20px;
}

/* Estilos para el botón de Google */
.google {
  margin-bottom: 20px;
}

.google-button {
  display: flex;
  align-items: center;
  background-color: #4285f4;
  border: none;
  color: white;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.google-button:hover {
  background-color: #357ae8;
}

.google-icon {
  width: 20px;
  margin-right: 10px;
}

.google-word {
  font-size: 1em;
}

/* Separador OR */
.or-separator {
  margin: 20px 0;
  font-size: 1em;
  color: #888;
}

/* Estilos para el formulario de login */
.login-child {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
}

.login-child input {
  margin-bottom: 10px;
  padding: 10px;
  width: 100%;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 1em;
}

.login-child button {
  padding: 10px;
  width: 100%;
  border: none;
  border-radius: 5px;
  background-color: #1a73e8; /* Azul */
  color: white;
  cursor: pointer;
  font-size: 1em;
  transition: background-color 0.3s;
}

.login-child button:hover {
  background-color: #166adf;
}

/* Estilos para los mensajes de error */
.error-message {
  color: red;
  font-size: 1em;
  margin-top: 10px;
}
</style>
