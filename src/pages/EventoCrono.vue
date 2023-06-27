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
        </q-tabs>
      </q-toolbar>
    </q-header>
    <q-page-container style="padding-top: 0%">
      <q-page>
        <iframe
          src="https://drive.google.com/file/d/1xvldyeCDFjToXxlU0FCCR4XrjVjCGtvs/preview"
          width="100%"
          height="1000px"
          allow="autoplay"
        ></iframe>
        <q-page-container
          style="background: #628ad9"
          class="fit row wrap justify-center items-start content-start"
        >
          <div class="col-grow self-center">
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
export default {
  components: {},
  data() {
    return {
      theme_color: 'rgb(255, 60, 50)',
    };
  },

  methods: {
    goTo(url) {
      window.location.href = url;
    },
  },
};
</script>

<style lang="sass" scoped></style>
