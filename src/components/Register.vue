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

<style src="../assets/styles/Register.css" scoped></style>
