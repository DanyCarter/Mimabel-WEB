<template>
    <div id="app">
      <!-- Sección del video fijado en la parte superior -->
      <section class="fixed-video">
        <video autoplay muted loop id="background-video">
          <source src="../../src/assets/videos/villablino.mp4" type="video/mp4" />
          Tu navegador no soporta el video.
        </video>
      </section>
  
      <!-- Sección de "Conócenos" -->
      <section class="about-us">
        <div class="image-container">
          <img src="../../src/assets/img/Mimabel.png" alt="Imagen Mimabel" />
        </div>
        <div class="text-container">
          <h2>¡Bienvenidos a Mimabel!</h2>
          <p>
            Desde hace más de 30 años, Mimabel ha sido un referente en nuestra comunidad como una tienda de confianza, ofreciendo una amplia variedad de ropa de las mejores marcas. Nuestro objetivo siempre ha sido brindar productos de alta calidad para todas las edades y estilos, asegurándonos de que cada visita a nuestra tienda sea una experiencia única y satisfactoria.
          </p>
          <p>
            En Mimabel, creemos que el trato con el cliente es fundamental. Nos enorgullece ofrecer una atención personalizada y cercana, donde cada persona que entra por nuestras puertas es recibida con una sonrisa y la disposición de ayudarle a encontrar exactamente lo que necesita. Estamos aquí para asesorarte y garantizar que te sientas como en casa.
          </p>
          <p>
            La calidad es nuestra prioridad. Seleccionamos cuidadosamente cada artículo que ofrecemos, asegurándonos de que cumpla con nuestros estándares. En Mimabel puedes confiar en que solo encontrarás lo mejor para ti y tus seres queridos.
          </p>
          <p>
            Te invitamos a visitarnos y descubrir todo lo que Mimabel tiene para ofrecer. Estamos seguros de que te encantará la experiencia y te convertirás en parte de nuestra familia.
          </p>
          <p>
            ¡Gracias por confiar en nosotros!
          </p>
        </div>
      </section>
  
    
    </div>
  </template>
  
 
  
  <style scoped>
  body,
  html {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    height: 100%;
    overflow-x: hidden; /* Evita desplazamiento horizontal */
  }
  
  #app {
    width: 100%;
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
    margin-top: 1em; /* Añade margen superior para separación entre párrafos */
    line-height: 1.6; /* Aumenta el espaciado entre líneas */
    color: #555; /* Cambia el color del texto para mayor legibilidad */
    font-size: 1em; /* Ajusta el tamaño de la fuente */
  }
  
  .map-section {
    padding: 40px 20px; /* Añade padding alrededor del mapa */
    background-color: #f4f4f4; /* Fondo para el mapa */
  }
  </style>
  