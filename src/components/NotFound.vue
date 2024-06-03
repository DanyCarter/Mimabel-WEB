<template>
    <section class="page_404">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 text-center">
            <div class="four_zero_four_bg">
              <h1 class="text-center">404</h1>
            </div>
            <div class="contant_box_404">
              <h3 class="h2">Parece que te has perdido...</h3>
              <p>La página que estás buscando no Existe!</p>
              <router-link to="/" class="link_404">Volver a Inicio</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'NotFound',
  };
  </script>
  
  <style src="/src/assets/styles/Error404.css" scoped></style>
  