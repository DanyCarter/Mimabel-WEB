<template>
    <div>
      <div id="map" class="map"></div>
    </div>
  </template>
  
  <script>
  export default {
    name: "MapComponent",
    mounted() {
      this.loadGoogleMaps();
    },
    methods: {
      loadGoogleMaps() {
        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyC7zFGRqI_5QHc11NAxINkz5tp_6Vfo4gs&callback=initMap&v=weekly&libraries=places`;
        script.async = true;
        script.defer = true;
        script.setAttribute('loading', 'async');
        window.initMap = this.initMap;
        document.head.appendChild(script);
      },
      initMap() {
        const position = { lat: -25.344, lng: 131.031 };
  
        const map = new google.maps.Map(document.getElementById("map"), {
          zoom: 4,
          center: position
        });
  
        // Uso del marcador estándar
        new google.maps.Marker({
          position: position,
          map: map,
          title: "Uluru"
        });
      }
    }
  };
  </script>
  
  <style scoped>
  .map {
    width: 100%;
    height: 500px;
  }
  </style>
  