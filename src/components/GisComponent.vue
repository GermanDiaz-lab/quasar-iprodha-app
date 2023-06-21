<template>
  <div id="map" class="map"><test-component></test-component></div>
  <div id="info">&nbsp;</div>
</template>

<script>
import { defineComponent } from 'vue';
import TestComponent from 'src/components/TestComponent.vue';
import Map from 'ol/Map.js';
import OSM from 'ol/source/OSM.js';
import TileLayer from 'ol/layer/Tile.js';
import TileWMS from 'ol/source/TileWMS.js';
import View from 'ol/View.js';
export default defineComponent({
  name: 'WmsMap',
  emits: ['map-clicked', 'pointer-moved'],
  components: { TestComponent },
  inheritAttrs: false,
  data() {
    return {
      map: null,
      wmsSource: null,
      wmsUrl:
        'https://idecor-ws.mapascordoba.gob.ar/geoserver/idecor/parcelas/wms',
      wmsParams: { LAYERS: 'parcelas', TILED: true },
    };
  },
  async mounted() {
    await this.initiateMap();
  },
  watch: {
    wmsUrl: {
      handler() {
        this.updateWmsSource();
      },
      immediate: true,
    },
    wmsParams: {
      handler() {
        this.updateWmsSource();
      },
      deep: true, // Make sure we react to changes in the params object's properties
    },
  },
  methods: {
    initiateMap() {
      this.wmsSource = new TileWMS({
        url: this.wmsUrl,
        params: this.wmsParams,
        serverType: 'geoserver',
        crossOrigin: 'anonymous',
      });

      const osm = new TileLayer({
        source: new OSM(),
      });

      const wmsLayer = new TileLayer({
        source: this.wmsSource,
      });

      const view = new View({
        projection: 'EPSG:4326',
        center: [-64.2, -31.4],
        zoom: 14,
      });

      this.map = new Map({
        layers: [osm, wmsLayer],
        target: 'map',
        view: view,
      });

      this.map.on('singleclick', (evt) => {
        const viewResolution = view.getResolution();
        const url = this.wmsSource.getFeatureInfoUrl(
          evt.coordinate,
          viewResolution,
          'EPSG:4326',
          { INFO_FORMAT: 'application/json' }
        );
        this.$emit('map-clicked', { evt, url });
      });

      this.map.on('pointermove', (evt) => {
        if (evt.dragging) {
          return;
        }
        const data = wmsLayer.getData(evt.pixel);
        const hit = data && data[3] > 0;
        this.$emit('pointer-moved', { hit, map: this.map });
      });
    },
    updateWmsSource() {
      if (this.wmsSource) {
        this.wmsSource.setUrl(this.wmsUrl);
        this.wmsSource.updateParams(this.wmsParams);
      }
    },
  },
});
</script>

<style scoped>
.map {
  width: 100%;
  height: 100vh;
}
</style>
