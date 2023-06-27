<template>
  <q-layout view="lHh lpr lFf">
    <q-header
      class="q-py-sm"
      style="background-color: #5b5048"
      :style="'border-bottom: 2px solid ' + theme_color"
    >
      <q-toolbar>
        <span
          :style="'font-size: 35px;color:' + theme_color"
          class="my-font text-h6 q-mr-md"
          >Observatorio Vivienda y Urbanismo</span
        >
        <q-space></q-space>
        <q-tabs v-model="selected_tab" shrink>
          <q-tab
            :style="[
              selected_tab == 't_1' ? { backgroundColor: theme_color } : {},
            ]"
            class="q-mr-sm q-py-xs custom_tab"
            @click="goTo('#/')"
            style="width: 120px; min-height: auto !important; color: white"
            label="INICIO"
          />
          <q-tab
            :style="[
              selected_tab == 't_2' ? { backgroundColor: theme_color } : {},
            ]"
            class="q-mr-sm q-py-xs custom_tab"
            @click="scrollToElement('id_services')"
            style="width: 120px; min-height: auto !important; color: white"
            label="INSTITUCIONAL"
          />
          <q-tab
            :style="[
              selected_tab == 't_3' ? { backgroundColor: theme_color } : {},
            ]"
            class="q-mr-sm q-py-xs custom_tab"
            @click="scrollToElement('programa')"
            style="min-height: auto !important; color: white"
            label="PROGRAMA"
          />
          <q-tab
            :style="[
              selected_tab == 't_4' ? { backgroundColor: theme_color } : {},
            ]"
            class="q-mr-sm q-py-xs custom_tab"
            @click="scrollToElement('mapa')"
            style="width: 120px; min-height: auto !important; color: white"
            label="MAPA"
          />
          <q-tab
            :style="[
              selected_tab == 't_5' ? { backgroundColor: theme_color } : {},
            ]"
            class="q-mr-sm q-py-xs custom_tab"
            @click="goTo('https://iprodha.misiones.gob.ar/novedades/')"
            style="width: 120px; min-height: auto !important; color: white"
            label="NOVEDADES"
          />
          <q-tab
            :style="[
              selected_tab == 't_6' ? { backgroundColor: theme_color } : {},
            ]"
            class="q-mr-sm q-py-xs custom_tab"
            @click="goTo('https://iprodha.misiones.gob.ar/contacto/')"
            style="width: 120px; min-height: auto !important; color: white"
            label="CONTACTO"
          />
          <a
            style="font-size: 25px"
            class="float-right q-mr-sm"
            @click="heartClick"
            target="_blank"
            title="Donate"
            ><i class="fas fa-heart" style="color: #eb5daa"></i
          ></a>
        </q-tabs>
      </q-toolbar>
    </q-header>
    <q-page-container style="padding-top: 0%">
      <q-page>
        <q-carousel
          animated
          v-model="slide"
          arrows
          swipeable
          navigation
          infinite
          autoplay
          control-color="black"
          transition-prev="slide-right"
          transition-next="slide-left"
          height="700px"
        >
          <template v-slot:navigation-icon="{ active, btnProps, onClick }">
            <q-btn
              v-if="active"
              size="lg"
              icon="home"
              color="red"
              flat
              round
              dense
              @click="onClick"
            />
            <q-btn
              v-else
              size="sm"
              :icon="btnProps.icon"
              color="black"
              flat
              round
              dense
              @click="onClick"
            />
          </template>
          <q-carousel-slide
            class="q-pa-none"
            :name="1"
            img-src="../assets/Fondo2.png"
          >
          </q-carousel-slide>
          <q-carousel-slide
            class="q-pa-none"
            :name="2"
            img-src="../assets/MISIONES_ORIGINAL.png"
          >
          </q-carousel-slide>
          <q-carousel-slide class="column no-wrap" :name="3">
            <div
              class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"
            >
              <q-img
                class="rounded-borders col-6 full-height"
                src="../assets/jag.jpg"
              ></q-img>
              <q-img
                class="rounded-borders col-6 full-height"
                src="../assets/70.jpg"
              ></q-img>
            </div>
          </q-carousel-slide>
        </q-carousel>
        <div class="row" id="programa">
          <card-hover
            initialIcon="fa-solid fa-bullseye"
            hoverIcon="fa-solid fa-bullseye fa-beat"
            theme_color="rgb(255, 60, 50)"
            cardName="OBJETIVO"
            cardContent="Educación y Sensibilización. Educar al público sobre los problemas de la vivienda y el urbanismo en Argentina y sensibilizar sobre la importancia de las políticas de vivienda y urbanismo justas y sostenibles."
          />
          <card-hover
            initialIcon="fa-solid fa-eye"
            hoverIcon="fa-solid fa-eye fa-shake"
            theme_color="rgb(255, 60, 50)"
            cardName="PROGRAMA"
            cardContent="Informes y Publicaciones. Asesoramiento de Políticas. Colaboración y Asociación. Proporcionar asesoramiento basado en la evidencia a los responsables de la toma de decisiones sobre las políticas de vivienda y urbanismo, y promover políticas que mejoren la equidad, la sostenibilidad y la calidad de vida en las ciudades y pueblos de Argentina."
          />

          <card-hover
            initialIcon="fa-solid fa-list-check"
            hoverIcon="fa-solid fa-list-check fa-flip"
            theme_color="rgb(255, 60, 50)"
            cardName="ESTRATEGIA"
            cardContent="Recopilación de Datos. Análisis de Datos. Investigación. Analizar los datos recopilados para evaluar el rendimiento en cada indicador. Esto podría implicar la comparación de los datos actuales con los datos históricos, la comparación entre diferentes regiones o grupos demográficos, y la identificación de tendencias y patrones."
          />

          <card-hover
            initialIcon="fa-solid fa-lightbulb"
            hoverIcon="fa-solid fa-lightbulb fa-fade"
            theme_color="rgb(255, 60, 50)"
            cardName="INNOVACION"
            cardContent="Evaluación y Mejora Continua. La evaluación y mejora continua son componentes clave para el desarrollo y la implementación de políticas de vivienda y urbanismo efectivas."
          />
        </div>
        <div class="quote" id="mapa">
          <div
            class="q-pt-xl full-width full-height flex flex-center"
            style="background-color: #000000ad !important"
          >
            <h3 class="text-white text-center">
              "Ideando las viviendas del futuro."
              <br />
              <br />
              <q-btn
                type="a"
                href="https://espaciocompartido.com.ar/mapaventalotes"
                size="lg"
                icon="map"
                :style="'background:' + theme_color + '; color: white'"
                label="POSADAS MISIONES - Itaembé Guazú MAPA"
              />
            </h3>
          </div>
        </div>
        <br />
        <br />
        <div class="row" id="id_about_us"></div>
        <div class="row text-center flex flex-center">
          <div
            class="col-md-12 col-lg-12 col-sx-12 col-sm-12 q-gutter-md flex flex-center"
          >
            <div class="col-md-4 col-lg-4 col-sx-12 col-sm-12">
              <q-card
                @mouseover="hoverOver(1)"
                @mouseout="hoverOutTimeout(1)"
                style="border: none"
                class="card-1 text-center box-shadow"
                flat
                bordered
                @click="goTo('#/crono')"
              >
                <q-img src="../assets/logoevento2.png" />

                <q-card-section>
                  <div class="text-overline text-orange-9">
                    99ª Asamblea del Consejo Nacional de la Vivienda
                  </div>
                  <div
                    :class="about_heading_1"
                    :style="'color: ' + about_heading_color_1"
                    class="about_heading_1 text-h6 q-mt-sm q-mb-xs"
                  >
                    CRONOGRAMA
                  </div>
                  <div class="text-caption text-grey-9">
                    Cabe destacar que, a lo largo de la asamblea, se programan
                    momentos de networking, exhibiciones y espacios para el
                    intercambio informal de ideas. Estos momentos son
                    fundamentales para establecer contactos, fortalecer alianzas
                    y generar sinergias entre los diferentes actores
                    involucrados en el sector de la vivienda.
                  </div>
                </q-card-section>
              </q-card>
            </div>
            <div class="col-md-4 col-lg-4 col-sx-12 col-sm-12">
              <q-card
                @mouseover="hoverOver(2)"
                @mouseout="hoverOutTimeout(2)"
                :style="'color: ' + about_heading_color_2"
                style="border: none"
                class="card-1 text-center box-shadow"
                flat
                bordered
                @click="goTo('https://misiones.tur.ar/')"
              >
                <q-img src="../assets/original.jpg" />

                <q-card-section>
                  <div class="text-overline text-orange-9">Hoteles</div>
                  <div
                    :class="about_heading_2"
                    :style="'color: ' + about_heading_color_2"
                    class="text-h6 q-mt-sm q-mb-xs"
                  >
                    RECREACION Y TURISMO
                  </div>
                  <div class="text-caption text-grey-9">
                    Misiones, Argentina, es un destino fascinante que combina
                    impresionantes bellezas naturales, patrimonio cultural y
                    oportunidades de turismo rural y aventura. Ya sea admirando
                    las Cataratas del Iguazú, explorando las ruinas de las
                    misiones jesuíticas o disfrutando de la hospitalidad de las
                    estancias rurales, Misiones ofrece una experiencia única
                    para los visitantes.
                  </div>
                </q-card-section>
              </q-card>
            </div>
            <div class="col-md-4 col-lg-4 col-sx-12 col-sm-12">
              <q-card
                @mouseover="hoverOver(3)"
                @mouseout="hoverOutTimeout(3)"
                style="border: none"
                class="card-1 text-center box-shadow"
                flat
                bordered
                @click="goTo('https://misiones.gob.ar/')"
              >
                <q-img src="../assets/MAPA_M_01.png" />

                <q-card-section>
                  <div class="text-overline text-orange-9">MISIONES</div>
                  <div
                    :class="about_heading_3"
                    :style="'color: ' + about_heading_color_3"
                    class="text-h6 q-mt-sm q-mb-xs"
                  >
                    MISIONES PROVINCIA
                  </div>
                  <div class="text-caption text-grey-9">
                    Con una rica historia y una biodiversidad impresionante,
                    Misiones ofrece una experiencia inigualable.
                  </div>
                </q-card-section>
              </q-card>
            </div>
          </div>
        </div>
        <br />
        <br />
        <h3>Centro del Conocimiento:</h3>
        <div
          style="height: 400px; top: 0; bottom: 0; width: 100%"
          id="map"
        ></div>
        <q-page-container
          style="background: #628ad9"
          class="fit row wrap justify-center items-start content-start"
        >
          <div
            @click="goTo('https://iprodha.misiones.gob.ar/')"
            class="col-grow self-center"
            style="cursor: pointer"
          >
            <q-img src="../assets/IPRODHA.png" />
          </div>
          <div class="col-grow self-center">
            <div class="text-center">
              <a class="middle" href="https://iprodha.misiones.gob.ar/"
                >IPRODHA</a
              >
            </div>
            <br />
          </div>
        </q-page-container>
        <q-toolbar
          class="flex flex-center text-white"
          style="background-color: #5b5048"
          :style="'border-top: 2px solid ' + theme_color"
        >
          <div class="q-pa-sm q-gutter-sm">
            <q-btn
              round
              type="a"
              href="https://www.facebook.com/iprodha/"
              :style="
                'background:' + theme_color + '; color: white !important;'
              "
              icon="fa-brands fa-facebook"
            />
            <q-btn
              round
              type="a"
              href="https://www.instagram.com/iprodha"
              :style="
                'background:' + theme_color + '; color: white !important;'
              "
              icon="fa-brands fa-instagram"
            />
            <q-btn
              round
              type="a"
              href="https://www.youtube.com/c/iprodha2021/"
              :style="
                'background:' + theme_color + '; color: white !important;'
              "
              icon="fa-brands fa-youtube"
            />
          </div>
        </q-toolbar>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { scroll } from 'quasar';
import CardHover from '../components/CardHover.vue';
import Map from 'ol/Map';
import View from 'ol/View';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer';
import { OSM, Vector as VectorSource } from 'ol/source';
import { Icon, Style } from 'ol/style';

const { getScrollTarget, setVerticalScrollPosition } = scroll;

export default {
  components: { CardHover },
  data() {
    return {
      slide: 1,
      review_slide: 'style',
      selected_tab: 't_0',
      team_slide: 1,
      bg_color: 'rgb(91, 80, 72)',
      hover: false,
      active: false,
      theme_color: 'rgb(255, 60, 50)',
      background_style: 'background-color:rgba(0, 163, 82, 0.7);',
      about_heading_1: [],
      about_heading_2: [],
      about_heading_3: [],
      about_heading_color_1: '#424242',
      about_heading_color_2: '#424242',
      about_heading_color_3: '#424242',
      iconName: 'fa-solid fa-eye',
      originalIcon: 'fa-solid fa-eye',
      hoverIcon: 'fa-solid fa-eye fa-shake',
      map: null,
    };
  },
  async mounted() {
    await this.initiateMap();
  },
  computed: {
    style() {
      return {
        width: '340px',
        height: '263px',
        backgroundImage: `url('https://raw.githubusercontent.com/quasarframework/quasar-ui-qflashcard/dev/demo/src/statics/bgimg.jpg')`, // eslint-disable-line
        textAlign: 'center',
        boxShadow: '1px 1px 2px #e6e6e6',
        display: 'inline-block',
      };
    },
    team_style() {
      return {
        width: '260px',
        height: '263px',
        backgroundImage: `url('https://raw.githubusercontent.com/quasarframework/quasar-ui-qflashcard/dev/demo/src/statics/bgimg.jpg')`, // eslint-disable-line
        textAlign: 'center',
        boxShadow: '1px 1px 2px #e6e6e6',
        display: 'inline-block',
      };
    },
  },
  methods: {
    initiateMap() {
      // Create the map
      this.map = new Map({
        target: 'map',
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
        ],
        view: new View({
          projection: 'EPSG:4326',
          center: [-55.96385605722631, -27.395213104259895],
          zoom: 15,
        }),
      });

      // Create the marker
      const marker = new Feature({
        geometry: new Point([-55.96385605722631, -27.395213104259895]),
      });

      // Add a style to the marker
      marker.setStyle(
        new Style({
          image: new Icon({
            color: '#963636',
            crossOrigin: 'anonymous',
            src: require('../assets/location-dot-solid.svg'),
            imgSize: [50, 50],
          }),
        })
      );

      // Create a layer to hold the marker
      const markerLayer = new VectorLayer({
        source: new VectorSource({
          features: [marker],
        }),
      });

      // Add the marker layer to the map
      this.map.addLayer(markerLayer);
    },
    goTo(url) {
      window.location.href = url;
    },
    scrollToElement(id) {
      let el = document.getElementById(id);
      const target = getScrollTarget(el);
      const offset = el.offsetTop + 3;
      const duration = 900;
      setVerticalScrollPosition(target, offset, duration);
    },
    changeBgColor() {
      this.theme_color = this.bg_color;
      this.background_style =
        'background-color:' + this.bg_color.split(')')[0] + ',0.7)';
    },
    hoverOver: function (index) {
      this['about_heading_color_' + index] = this.theme_color;
      this['about_heading_' + index] = ['animated', 'bounceIn'];
    },
    hoverOutTimeout: function (index) {
      this['about_heading_color_' + index] = '#424242';
      setTimeout(() => {
        this['about_heading_' + index] = [];
      }, 1000);
    },
  },
};
</script>

<style lang="sass" scoped>


.main_line
  font-size: 75px
  letter-spacing: 5px
  line-height: 60px
  font-weight: 600

.custom-caption
  text-align: center
  padding: 12px
  color: white

.animation_1
  -webkit-animation: bounceIn 1s ease-in 800ms both
  animation: bounceIn 1s ease-in 800ms both

.animation_2
  -webkit-animation: flipInX 2s ease-in-out 800ms both
  animation: flipInX 1s ease-in-out 800ms both

.animation_3
  -webkit-animation: lightSpeedIn 1s ease-in 800ms both
  animation: lightSpeedIn 1s ease-in 800ms both

.description
  padding: 10px
  background-color: black
  color: white
  box-shadow: 1px 1px 2px #e6e6e6

.my-header
  width: 200px
  top: 0
  height: 45px
  color: black
  background-color: rgba(255,255,255, 0.8)
  text-transform: uppercase
  text-align: center
  font-size: 17px
  margin: 20px 0 0 68px
  padding: 25px

.my-text
  width: 100%
  top: 0
  height: 90px
  color: white
  text-align: center
  font-size: 15px
  margin: 79px 0 0 0
  padding: 20px
  line-height: normal
  font-family: Georgia, serif
  font-style: italic

.my-button-container
  width: 100%

.my-button
  text-decoration: none
  text-transform: uppercase
  margin: 0 0 20px 0
  text-align: center
  padding: 7px 14px
  background-color: #000
  color: #fff
  text-transform: uppercase
  box-shadow: 0 0 1px #000
  transition-delay: 0.2s

.my-button:hover
  box-shadow: 0 0 5px #000

.box-shadow:hover
  box-shadow: 0 10px 13px -6px rgba(0, 0, 0, 0.2), 0 20px 31px 3px rgba(0, 0, 0, 0.14), 0 8px 38px 7px rgba(0, 0, 0, 0.12) !important

.my-card
  width: 350px
  max-width: 350px
  margin-top: 10px

.team-header
  width: 100%
  top: 0
  height: 45px
  color: white
  text-transform: uppercase
  text-align: center
  font-size: 17px
  margin: 60px 0 0 0
  padding: 12px

.team-text
  width: 100%
  top: 0
  height: 90px
  color: white
  text-align: center
  font-size: 15px
  margin: 100px 0 0 0
  padding: 20px
  line-height: normal
  font-family: Georgia, serif
  font-style: italic

.quote
  background: url(../assets/Disco_20180527171016-0300.jpg)
  background-size: cover
  background-position: center
  background-attachment: fixed
  background-repeat: no-repeat

.pricing
  background: url(../statics/images/pricing.jpg)
  background-size: cover
  background-position: center
  background-attachment: fixed
  background-repeat: no-repeat

.contact_us
  background: url(../statics/images/contact_us.jpg)
  background-size: cover
  background-position: center
  background-attachment: fixed
  background-repeat: no-repeat

.custom_tab
  width: 130px

.custom-caption
  text-align: center
  padding: 12px
  color: white
  background-color: rgba(0, 0, 0, .3)

.card-1
  width: 100%
  max-width: 250px
</style>
