<template>
  <div>
    <div class="error-message">Error 403: Acceso Prohibido</div>
    <div class="hover">
      <div class="background">
        <div class="door">403</div>
        <div class="rug"></div>
      </div>
      <div class="foreground">
        <div class="bouncer">
          <div class="head">
            <div class="neck"></div>
            <div class="eye left"></div>
            <div class="eye right"></div>
            <div class="ear"></div>
          </div>
          <div class="body"></div>
          <div class="arm"></div>
        </div>
        <div class="poles">
          <div class="pole left"></div>
          <div class="pole right"></div>
          <div class="rope"></div>
        </div>
      </div>
    </div>
    <button class="back-button" @click="goHome">Volver a inicio</button>
  </div>
</template>

<script>
export default {
  methods: {
    goHome() {
      window.location.href = '/';
    }
  }
}
</script>

<style src="../assets/styles/Error403.css" scoped></style>
