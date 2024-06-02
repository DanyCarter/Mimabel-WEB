<template>
  <div id="app">
    <MainNav :showCategories="false" :showConocenosButton="false" />

    <section class="fixed-video">
      <video autoplay muted loop id="background-video">
        <source src="../../src/assets/videos/villablino.mp4" type="video/mp4" />
        Tu navegador no soporta el video.
      </video>
    </section>

    <section class="about-us">
      <div class="image-container">
        <img src="../../src/assets/img/Mimabel.png" alt="Imagen Mimabel" />
      </div>
      <div class="text-container">
        <h2 class="welcome mb-4 text-4xl font-extrabold text-gray-900 dark:text-white md:text-10xl lg:text-7xl">
          <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            ¡Bienvenidos a Mimabel!
          </span>
        </h2>
        <p>
          Desde hace más de 30 años, Mimabel ha sido un referente en nuestra comunidad como una tienda de confianza,
          ofreciendo una amplia variedad de ropa de las mejores marcas. Nuestro objetivo siempre ha sido brindar productos
          de alta calidad para todas las edades y estilos, asegurándonos de que cada visita a nuestra tienda sea una
          experiencia única y satisfactoria.
        </p>
        <p>
          En Mimabel, creemos que el trato con el cliente es fundamental. Nos enorgullece ofrecer una atención personalizada
          y cercana, donde cada persona que entra por nuestras puertas es recibida con una sonrisa y la disposición de
          ayudarle a encontrar exactamente lo que necesita. Estamos aquí para asesorarte y garantizar que te sientas como en
          casa.
        </p>
        <p>
          La calidad es nuestra prioridad. Seleccionamos cuidadosamente cada artículo que ofrecemos, asegurándonos de que
          cumpla con nuestros estándares. En Mimabel puedes confiar en que solo encontrarás lo mejor para ti y tus seres
          queridos.
        </p>
        <p>
          Te invitamos a visitarnos y descubrir todo lo que Mimabel tiene para ofrecer. Estamos seguros de que te encantará
          la experiencia y te convertirás en parte de nuestra familia.
        </p>
        <p>
          ¡Gracias por confiar en nosotros!
        </p>
      </div>
    </section>

    <section class="location-info">
      <div class="location-text">
        <h2>Nuestra Ubicación</h2>
        <p>
          Nos encontramos en el corazón de Villablino, en una ubicación privilegiada y de fácil acceso. 
          Ven a visitarnos y descubre nuestra amplia selección de productos.
        </p>
      </div>
      <div class="map-container">
        <GoogleMap
          :api-key="YOUR_GOOGLE_MAPS_API_KEY"
          style="width: 100%; height: 400px"
          :center="center"
          :zoom="15"
          @map-loaded="onMapLoaded"
        >
          <Marker v-if="markerOptions" :position="center" :options="markerOptions" />
        </GoogleMap>
      </div>
    </section>
  </div>
</template>

<script>
import MainNav from '../components/MainNav.vue';
import { GoogleMap, Marker } from 'vue3-google-map';
import iconoMapa from '../assets/img/iconoMapa.png';

const YOUR_GOOGLE_MAPS_API_KEY = 'AIzaSyC7zFGRqI_5QHc11NAxINkz5tp_6Vfo4gs';

export default {
  name: 'Conocenos',
  components: { GoogleMap, Marker, MainNav },
  data() {
    return {
      center: { lat: 42.939220207845025, lng: -6.322264840303202 },
      markerOptions: null,
      YOUR_GOOGLE_MAPS_API_KEY,
    };
  },
  methods: {
    onMapLoaded() {
      this.markerOptions = {
        icon: {
          url: iconoMapa,
          scaledSize: new google.maps.Size(50, 50),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(25, 50)
        },
        title: 'Mimabel',
      };
    },
  },
};
</script>

<style scoped>
body,
html {
  background-color: #ebebec;
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  height: 100%;
  overflow-x: hidden;
}

#app {
  width: 100%;
}

.bree-serif-regular {
  font-family: "Bree Serif", serif;
  font-weight: 400;
  font-style: normal;
}

.ubuntu-light {
  font-family: "Ubuntu", sans-serif;
  font-weight: 300;
  font-style: normal;
}

.ubuntu-regular {
  font-family: "Ubuntu", sans-serif;
  font-weight: 400;
  font-style: normal;
}

.ubuntu-medium {
  font-family: "Ubuntu", sans-serif;
  font-weight: 500;
  font-style: normal;
}

.welcome {
  font-family: Bree Serif;
  font-weight: 80rem;
}

.fixed-video {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 1;
  overflow: hidden;
}

#background-video {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  object-fit: cover;
  transform: translate(-50%, -50%);
}

.about-us {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  background-color: #f4f4f4;
  position: relative;
  top: 100vh;
  min-height: 100vh;
  z-index: 2;
}

.image-container {
  flex: 1;
  max-width: 45%;
  padding: 10px;
}

.image-container img {
  width: 100%;
  height: auto;
  border-radius: 10px;
}

.text-container {
  flex: 1;
  max-width: 55%;
  padding: 20px;
}

.text-container h2 {
  margin-top: 0;
  font-size: 2em;
  color: #333;
}

.text-container p {
  margin-top: 1em;
  line-height: 1.6;
  color: #000000;
  font-size: 1.3em;
}

.location-info {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: 40px 20px;
  background-color: #ffffff;
  position: relative;
  top: 100vh;
  min-height: 100vh;
  z-index: 2;
}

.location-text {
  flex: 1;
  max-width: 50%;
  padding: 20px;
}

.location-text h2 {
  margin-top: 0;
  font-size: 2em;
  color: #333;
}

.location-text p {
  margin-top: 1em;
  line-height: 1.6;
  color: #000000;
  font-size: 1.3em;
}

.map-container {
  flex: 1;
  max-width: 50%;
  height: 500px;
  z-index: 3;
}

@media (max-width: 768px) {
  .about-us,
  .location-info {
    flex-direction: column;
    padding: 20px 10px;
  }

  .image-container,
  .text-container,
  .location-text,
  .map-container {
    max-width: 100%;
    padding: 10px 0;
  }

  .map-container {
    height: 300px;
    width: 100%;
    margin: 0 auto;
  }

  .location-text {
    order: 1;
  }

  .map-container {
    order: 2;
  }
}

@media (max-width: 480px) {
  .about-us,
  .location-info {
    padding: 5px 5px;
  }

  .text-container,
  .location-text {
    margin-top: 0px;
    padding: 0;
  }

  .text-container h2,
  .location-text h2 {
    font-size: 1.4em;
  }

  .text-container p,
  .location-text p {
    font-size: 1.1em;
  }

  .map-container {
    height: 200px;
    width: 100%;
    margin: 0 auto;
  }

  .location-text {
    order: 1;
  }

  .map-container {
    order: 2;
  }
}
</style>
