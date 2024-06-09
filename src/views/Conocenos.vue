<template>
  <div id="app">
    <MainNav />

    <section class="fixed-video">
      <video autoplay muted loop id="background-video">
        <source src="/videos/villablino.mp4" type="video/mp4" />
        Tu navegador no soporta el video.
      </video>
    </section>

    <section class="about-us">
      <div class="image-container">
        <img src="/img/Mimabel.png" alt="Imagen Mimabel" />
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
        <h2 class="text-2xl font-bold text-gray-800 mb-4">Donde Encontrarnos</h2>
        <p>
          Nos encontramos en el corazón de Villablino, en una ubicación privilegiada y de fácil acceso. 
          Ven a visitarnos y descubre nuestra amplia selección de productos ecologicos, con los mejores distribuidores.
          </p>
          <p>
          Destacamos por nuestra preocupacion por el medio hambiente, preocupandonos de encontrar los mejores distribuidores y reduciendo el papel
          </p>
          <p>
            Todos los pedidos seran pagados a contrareembolso!! Facilitando las anulaciones, si deseas anular un pedido contacte con nosotros a traves de nuestras RRSS o tlfn.
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

    <Footer />

  </div>
</template>

<script>
import MainNav from '../components/MainNav.vue';
import Footer from '../components/Footer.vue';
import { GoogleMap, Marker } from 'vue3-google-map';
import iconoMapa from '../../public/img/iconoMapa.png';


const YOUR_GOOGLE_MAPS_API_KEY = 'AIzaSyC7zFGRqI_5QHc11NAxINkz5tp_6Vfo4gs';

export default {
  name: 'Conocenos',
  components: { GoogleMap, Marker, MainNav, Footer }, 
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

<style src="../assets/styles/Conocenos.css" scoped></style>
