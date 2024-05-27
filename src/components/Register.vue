<template>
  <MainNav :showButtons="false" :hideHamburger="true" />
  <div class="full-page">
    <div class="wrapper">
      <h2 class="register-title">Register</h2>
    
      <form @submit.prevent="register">
        <div class="input-box">
          <input type="text" placeholder="Nombre" v-model="firstName" required />
        </div>
        <div class="input-box">
          <input type="text" placeholder="Apellidos" v-model="lastName" required />
        </div>
        <div class="input-box">
          <input type="email" placeholder="Correo electronico..." v-model="email" required />
        </div>
        <div class="input-box">
          <input type="password" placeholder="Constraseña..." v-model="password" required />
        </div>
        <div class="input-box">
          <input type="text" placeholder="Ubicacion" v-model="location" required />
        </div>
        <div class="input-box button">
          <input type="submit" value="Register" />
        </div>
        <div class="login-forget opacity">
            <router-link to="/login" class="login">LOGIN</router-link>
            <button @click="goBack" class="back">VOLVER</button>
          </div>        
          <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../config/firebase';
import MainNav from './MainNav.vue'; 

export default {
  components: {
    MainNav,
  },
  setup() {
    const firstName = ref('');
    const lastName = ref('');
    const email = ref('');
    const password = ref('');
    const location = ref(''); 
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
          location: location.value, // Añadido la ubicación a los datos del usuario
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
          firstName: '',
          lastName: '',
          email: user.email,
          role: role,
          createdAt: new Date(),
        });

        router.push('/');
      } catch (error) {
        errorMessage.value = 'Oops. ' + error.message;
      }
    };

    const goBack = () => {
      router.push('/');
    };


    return {
      firstName,
      lastName,
      email,
      password,
      location, 
      goBack,
      errorMessage,
      register,
      socialLogin,
    };
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600,700&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}
body {
  background: #ebebec; /* Fondo blanco */
}
.full-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.wrapper {
  position: relative;
  max-width: 430px;
  width: 100%;
  background: #fff;
  padding: 34px;
  border-radius: 6px;
  box-shadow: 0 5px 10px rgba(0,0,0,0.2);
}
.wrapper h2 {
  position: relative;
  font-size: 22px;
  font-weight: 600;
  color: #333;
}
.wrapper h2::before {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  height: 3px;
  width: 28px;
  border-radius: 12px;
  background: #4070f4;
}

.input-box {
  height: 52px;
  margin: 18px 0;
}
.input-box input {
  height: 100%;
  width: 100%;
  outline: none;
  padding: 0 15px;
  font-size: 17px;
  font-weight: 400;
  color: #333;
  border: 1.5px solid #C7BEBE;
  border-bottom-width: 2.5px;
  border-radius: 6px;
  transition: all 0.3s ease;
}
.input-box input:focus,
.input-box input:valid {
  border-color: #4070f4;
}
.input-box.button input {
  color: #fff;
  letter-spacing: 1px;
  border: none;
  background: #4070f4;
  cursor: pointer;
}
.input-box.button input:hover {
  background: #0e4bf1;
}
.error-message {
  color: red;
  font-size: 1em;
  margin-top: 10px;
  text-align: center;
}

.login-forget {
    margin: 1rem 0;
    display: flex;
    justify-content: space-between;
}

.opacity {
    opacity: 0.9;
}

.login{
    background-color: #234ac9;
    color: #ffffff;
    text-align: center;
    padding: 10px 20px;
    border-radius: 5px;
    font-weight: bold;
    letter-spacing: 1px;
    transition: all 0.3s ease-in-out;
    border: none;
    width: 122px;
}

.login:hover {
    background-color: #08335e;
    transform: scale(1.05);
}

.back{
    background-color: #14519b;
    color: #ffff;
    padding: 10px 20px;
    border-radius: 5px;
    font-weight: bold;
    letter-spacing: 1px;
    transition: all 0.3s ease-in-out;
    border: none;
    cursor: pointer;
}

.back:hover {
    background-color: #0e3e6f;
    transform: scale(1.05);
}
</style>
