<template>
  <WmsMap
    :wms-url="'https://idecor-ws.mapascordoba.gob.ar/geoserver/idecor/parcelas/wms'"
    :wms-params="{ LAYERS: 'parcelas', TILED: true }"
    @map-clicked="onMapClick"
    @pointer-moved="onPointerMove"
  ></WmsMap>
  <DraggableDiv v-if="abierto">
    <template v-slot:header>
      <q-bar dark class="bg-grey-10 text-white">
        <div class="text-weight-bold">INFORMACIÓN</div>
        <q-space />

        <q-btn @click="closeButton" dense flat icon="close"
      /></q-bar>
    </template>
    <template v-slot:main>
      <div class="bg-white column items-center">
        <q-spinner-puff v-if="isLoading" color="secondary" size="5.5em" />
      </div>
      <q-list v-if="isLoading === false">
        <q-expansion-item
          v-for="(feature, index) in features"
          :key="index"
          @before-show="checkIfButtonPress"
          @before-hide="checkIfButtonPress"
          default-opened
          header-class="bg-deep-orange-7 text-white"
        >
          <template v-slot:header>
            <q-item-section> Parcela {{ index + 1 }} </q-item-section>
            <q-space />
            <q-item-section avatar side>
              <q-btn
                @click="buttonKMLDescargar"
                flat
                color="white"
                icon="download"
                label="KMZ"
                ><q-tooltip
                  :delay="400"
                  anchor="top middle"
                  self="center middle"
                  :offset="[10, 10]"
                  class="bg-accent"
                  >Descargar en formato KML</q-tooltip
                ></q-btn
              >
            </q-item-section>
          </template>

          <q-card class="my-card" flat bordered>
            <q-table
              dense
              :rows="loadingRows || rows[index]"
              :columns="columns"
              row-key="name"
            />
          </q-card>
        </q-expansion-item>
      </q-list>
    </template>
    <template v-slot:footer
      ><q-bar dark class="bg-grey-10 text-white"><q-space /></q-bar
    ></template>
  </DraggableDiv>
</template>

<script>
import { ref } from 'vue';
import WmsMap from 'src/components/GisComponent.vue';
import DraggableDiv from 'src/components/TestComponent.vue';
import axios from 'axios';
import { LoadingBar } from 'quasar';

LoadingBar.setDefaults({
  color: 'deep-orange-7',
  size: '5px',
  position: 'bottom',
});

const columns = [
  {
    name: 'name',
    required: true,
    align: 'left',
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: false,
  },
  {
    name: 'value',
    align: 'right',
    field: 'value',
    sortable: false,
  },
];
let loadingRows = ref();
let rows = ref([]);
let features = ref([]);
let isLoading = ref();
let abierto = ref(false);
let featureInfo;
export default {
  components: {
    WmsMap,
    DraggableDiv,
  },
  methods: {
    closeButton() {
      this.abierto = false;
      console.log('click');
    },
    buttonKMLDescargar(event) {
      // Prevents the click event from bubbling up to parent elements
      event.stopPropagation();

      this.buttonPressed = true;

      // Handle the button click
      // ...
      let kmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<kml xmlns="http://www.opengis.net/kml/2.2" xmlns:gx="http://www.google.com/kml/ext/2.2" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.opengis.net/kml/2.2 https://developers.google.com/kml/schema/kml22gx.xsd">
  <Placemark>
    <Style id="PolyStyle">
      <LineStyle>
        <color>ff00ffff</color>
        <width>3</width>
      </LineStyle>
      <PolyStyle>
        <color>ff00ffff</color>
        <fill>0</fill>
        <outline>1</outline>
      </PolyStyle>
    </Style>
    <ExtendedData>`;

      for (let propertyName in featureInfo.features[0].properties) {
        kmlContent += `<Data name="${propertyName}">
    <value>${featureInfo.features[0].properties[propertyName]}</value>
  </Data>`;
      }

      kmlContent += `<Data name="Geometry">
  <value>${JSON.stringify(featureInfo.features[0].geometry)}</value>
</Data>
</ExtendedData>
<MultiGeometry>`;

      for (let polygon of featureInfo.features[0].geometry.coordinates) {
        kmlContent += '<Polygon><outerBoundaryIs><LinearRing><coordinates>';
        for (let point of polygon[0]) {
          // outer ring
          kmlContent += `${point[0]},${point[1]} `;
        }
        kmlContent += '</coordinates></LinearRing></outerBoundaryIs>';

        for (let i = 1; i < polygon.length; i++) {
          // inner rings (if any)
          kmlContent += '<innerBoundaryIs><LinearRing><coordinates>';
          for (let point of polygon[i]) {
            kmlContent += `${point[0]},${point[1]} `;
          }
          kmlContent += '</coordinates></LinearRing></innerBoundaryIs>';
        }
        kmlContent += '</Polygon>';
      }

      kmlContent += `</MultiGeometry>
  </Placemark>
</kml>`;
      console.log(kmlContent);
    },
    checkIfButtonPress(event) {
      if (this.buttonPressed) {
        // Prevents the default action (show or hide)
        event.preventDefault();

        // Reset the buttonPressed flag
        this.buttonPressed = false;
      }
    },
    onMapClick({ url }) {
      this.abierto = true;
      this.isLoading = true;
      document.getElementById('info').innerHTML = '';
      if (url) {
        loadingRows.value = [{ name: 'Cargando', value: '' }];
        rows.value = [];
        axios(url).then(({ data }) => {
          console.log(data);
          featureInfo = data;
          features.value = data.features;
          loadingRows.value = null;
          this.isLoading = false;
          rows.value = data.features.map((feature) =>
            Object.entries(feature.properties).map(([name, value]) => ({
              name,
              value,
            }))
          );
        });
      }
    },
    onPointerMove({ hit, map }) {
      map.getTargetElement().style.cursor = hit ? 'pointer' : '';
    },
    /* ...other methods... */
  },
  setup() {
    return {
      abierto,
      featureInfo,
      columns,
      loadingRows,
      features,
      rows,
      isLoading,
      buttonPressed: false,
    };
  },
};
</script>
