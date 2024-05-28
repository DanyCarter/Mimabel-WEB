<template>
  <div id="app">
    <MainNav />

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

    <GoogleMap
      :api-key="YOUR_GOOGLE_MAPS_API_KEY"
      style="width: 100%; height: 500px"
      :center="center"
      :zoom="15"
    >
      <Marker :position="center" />
    </GoogleMap>
  </div>
</template>

<script>
import MainNav from '../components/MainNav.vue';
import { GoogleMap, Marker } from 'vue3-google-map';

const YOUR_GOOGLE_MAPS_API_KEY = 'AIzaSyC7zFGRqI_5QHc11NAxINkz5tp_6Vfo4gs';

export default {
  name: 'Conocenos',
  components: { GoogleMap, Marker, MainNav },
  data() {
    return {
      center: { lat: 42.9362, lng: -6.3202 },
      YOUR_GOOGLE_MAPS_API_KEY,
    };
  },
};
</script>

<style scoped>
/* Agrega tus estilos aquí */
</style>

<!-- <style scoped>
body,
html {
  background-color: #ebebec;
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  height: 100%;
  overflow-x: hidden; /* Evita desplazamiento horizontal */
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
  position: fixed; /* Fija el video en la parte superior */
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh; /* Ocupa toda la pantalla */
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
  flex-direction: row; /* Asegura que la imagen y el texto estén uno al lado del otro */
  align-items: center;
  justify-content: center;
  padding: 40px 20px; /* Aumenta el padding para más espacio */
  background-color: #f4f4f4;
  position: relative;
  top: 100vh; /* Posiciona esta sección justo después del video */
  min-height: 100vh; /* Asegura que ocupe toda la pantalla */
  z-index: 2;
}

.image-container {
  flex: 1;
  max-width: 45%; /* Ajusta el ancho máximo para dar más espacio al texto */
  padding: 10px; /* Añade padding para separación */
}

.image-container img {
  width: 100%;
  height: auto;
  border-radius: 10px; /* Añade bordes redondeados a la imagen */
}

.text-container {
  flex: 1;
  max-width: 55%; /* Ajusta el ancho máximo para dar más espacio al texto */
  padding: 20px;
}

.text-container h2 {
  margin-top: 0;
  font-size: 2em; /* Ajusta el tamaño de la fuente */
  color: #333; /* Cambia el color del texto */
}

.text-container p {
  font-family: bold;
  margin-top: 1em; /* Añade margen superior para separación entre párrafos */
  line-height: 1.6; /* Aumenta el espaciado entre líneas */
  color: #000000; /* Cambia el color del texto para mayor legibilidad */
  font-size: 1.3em; /* Ajusta el tamaño de la fuente */
}


/* Media Queries para Responsividad */
@media (max-width: 768px) {
  .about-us {
    flex-direction: column; /* Cambia a columna en pantallas pequeñas */
    padding: 20px 10px; /* Reduce el padding */
  }

  .image-container,
  .text-container {
    max-width: 100%; /* Ancho completo */
    padding: 10px 0; /* Reduce el padding */
    margin: 2em;
  }

  .text-container {
    margin-top: 10px; /* Reduce la distancia entre la imagen y el texto */
  }

  .text-container h2 {
    font-size: 2em; /* Reduce el tamaño de la fuente */
  }

  .text-container p {
    font-size: 1.1em; /* Reduce el tamaño de la fuente */
  }

  .welcome {
    display: flex;
    justify-content: center; /* Centra horizontalmente */
    align-items: center; /* Centra verticalmente */
    margin-top: 10px; /* Reduce el margen superior */
  }
}

@media (max-width: 480px) {
  .about-us {
    padding: 5px 5px; /* Reduce el padding aún más */
  }

  .text-container {
    margin-top: 0px; /* Reduce la distancia entre la imagen y el texto aún más */
    padding: 0 0 0;
    margin: 1em;
  }

  .text-container h2 {
    font-size: 1.4em; /* Reduce el tamaño de la fuente */
    margin: 2em;
    margin-bottom: 1em;

  }

  .text-container p {
    margin: 2em;
    margin-top: 1em;
    font-size: 1.3em; /* Ajusta el tamaño de la fuente */
  }

  .image-container{
    margin-bottom: 1em;

  }
    
  .welcome {
    margin-top: 5px; /* Reduce el margen superior aún más */
  }
}

</style>
 -->