<template>
  <ol-map
    :loadTilesWhileAnimating="true"
    :loadTilesWhileInteracting="true"
    style="height: 100vh"
  >
    <ol-view
      ref="view"
      :center="center"
      :rotation="rotation"
      :zoom="zoom"
      :projection="projection"
    />
    <ol-zoom-control />

    <ol-tile-layer :zIndex="1000">
      <ol-source-osm />
    </ol-tile-layer>

    <ol-tile-layer :zIndex="1001">
      <ol-source-tile-wms
        layer-name="Parcelas"
        :opacity="0.7"
        :crossOrigin="null"
        url="https://idecor-ws.mapascordoba.gob.ar/geoserver/idecor/parcelas/wms"
        layers="parcelas"
      />
    </ol-tile-layer>
  </ol-map>
</template>

<script setup>
import { ref } from 'vue';

const zoom = ref(14);
const rotation = ref(0);
const center = ref([-64.2071193, -31.4133892]);
const projection = ref('EPSG:4326');
</script>
