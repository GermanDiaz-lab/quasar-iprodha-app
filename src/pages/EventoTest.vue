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
          >Observatorio</span
        >
        <q-space></q-space>
        <q-tabs v-model="selected_tab" shrink>
          <q-tab
            :style="[
              selected_tab == 't_1' ? { backgroundColor: theme_color } : {},
            ]"
            class="q-mr-sm q-py-xs custom_tab"
            @click="scrollToElement('id_about_us')"
            style="width: 120px; min-height: auto !important; color: white"
            label="Lorem ipsum"
          />
          <q-tab
            :style="[
              selected_tab == 't_2' ? { backgroundColor: theme_color } : {},
            ]"
            class="q-mr-sm q-py-xs custom_tab"
            @click="scrollToElement('id_services')"
            style="width: 120px; min-height: auto !important; color: white"
            label="Lorem ipsum"
          />
          <q-tab
            :style="[
              selected_tab == 't_3' ? { backgroundColor: theme_color } : {},
            ]"
            class="q-mr-sm q-py-xs custom_tab"
            @click="scrollToElement('id_testimonial')"
            style="min-height: auto !important; color: white"
            label="Lorem ipsum"
          />
          <q-tab
            :style="[
              selected_tab == 't_6' ? { backgroundColor: theme_color } : {},
            ]"
            class="q-mr-sm q-py-xs custom_tab"
            @click="scrollToElement('id_news')"
            style="width: 120px; min-height: auto !important; color: white"
            label="Lorem ipsum"
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
            <div class="absolute-bottom custom-caption">
              <div class="text-h2">Primero</div>
              <div class="text-subtitle1">Caption</div>
            </div>
          </q-carousel-slide>
          <q-carousel-slide
            class="q-pa-none"
            :name="2"
            img-src="../assets/MISIONES_ORIGINAL.png"
          >
            <div class="absolute-bottom custom-caption">
              <div class="text-h2">Segundo</div>
              <div class="text-subtitle1">Caption</div>
            </div>
          </q-carousel-slide>
          <q-carousel-slide class="column no-wrap" :name="3">
            <div
              class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"
            >
              <q-img
                class="rounded-borders col-6 full-height"
                src="../assets/jag.jpg"
                ><div class="absolute-bottom text-subtitle1 text-center">
                  Caption
                </div></q-img
              >
              <q-img
                class="rounded-borders col-6 full-height"
                src="../assets/70.jpg"
                ><div class="absolute-bottom text-subtitle2 flex flex-center">
                  Caption
                </div></q-img
              >
            </div>
          </q-carousel-slide>
        </q-carousel>
        <div class="row">
          <div class="col-md-3 col-lg-3 col-xs-12 col-sm-12">
            <q-card
              class="q-pa-sm flex flex-center text-center box-shadow"
              style="margin: 40px"
            >
              <q-card-section>
                <q-icon
                  size="110px"
                  name="ballot"
                  :style="'color:' + theme_color"
                />
                <div class="text-h6">Lorem &nbsp;ipsum</div>
              </q-card-section>

              <q-card-section class="q-pt-none">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </q-card-section>
            </q-card>
          </div>
          <div class="col-md-3 col-lg-3 col-xs-12 col-sm-12">
            <q-card
              class="q-pa-sm flex flex-center text-center box-shadow"
              style="margin: 40px"
            >
              <q-card-section>
                <q-icon
                  size="110px"
                  name="view_comfy"
                  :style="'color:' + theme_color"
                />
                <div class="text-h6">Lorem ipsum</div>
              </q-card-section>

              <q-card-section class="q-pt-none">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </q-card-section>
            </q-card>
          </div>
          <div class="col-md-3 col-lg-3 col-xs-12 col-sm-12">
            <q-card
              class="q-pa-sm flex flex-center text-center box-shadow"
              style="margin: 40px"
            >
              <q-card-section>
                <q-icon
                  size="110px"
                  name="people"
                  :style="'color:' + theme_color"
                />
                <div class="text-h6">Lorem ipsum</div>
              </q-card-section>

              <q-card-section class="q-pt-none">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </q-card-section>
            </q-card>
          </div>

          <div class="col-md-3 col-lg-3 col-xs-12 col-sm-12">
            <q-card
              class="q-pa-sm flex flex-center text-center box-shadow"
              style="margin: 40px"
            >
              <q-card-section>
                <q-icon
                  size="110px"
                  name="people"
                  :style="'color:' + theme_color"
                />
                <div class="text-h6">Lorem ipsum</div>
              </q-card-section>

              <q-card-section class="q-pt-none">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </q-card-section>
            </q-card>
          </div>
        </div>
        <div class="quote">
          <div
            class="q-pt-xl full-width full-height flex flex-center"
            style="background-color: #000000ad !important"
          >
            <h3 class="text-white text-center">
              Lorem ipsum dolor sit amet, consectetur <br />adipiscing elit, sed
              do eiusmod tempor incididunt ut <br />
              labore et dolore magna aliqua.
              <br />
              <br />
              <q-btn
                type="a"
                href="https://espaciocompartido.com.ar/mapaventalotes"
                size="lg"
                :style="'background:' + theme_color + '; color: white'"
                label="Lorem ipsum"
              />
            </h3>
          </div>
        </div>
        <div class="row" id="id_about_us">
          <div class="col-md-12 col-lg-12 col-xs-12 col-sm-12">
            <h5 class="text-center">
              Lorem ipsum
              <br />
              <span class="text-center text-grey text-h6"
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span
              >
            </h5>
          </div>
        </div>
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
              >
                <q-img src="../assets/logoevento2.png" />

                <q-card-section>
                  <div class="text-overline text-orange-9">Lorem ipsum</div>
                  <div
                    :class="about_heading_1"
                    :style="'color: ' + about_heading_color_1"
                    class="about_heading_1 text-h6 q-mt-sm q-mb-xs"
                  >
                    Lorem ipsum
                  </div>
                  <div class="text-caption text-grey-9">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
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
              >
                <q-img src="../assets/original.jpg" />

                <q-card-section>
                  <div class="text-overline text-orange-9">Lorem ipsum</div>
                  <div
                    :class="about_heading_2"
                    :style="'color: ' + about_heading_color_2"
                    class="text-h6 q-mt-sm q-mb-xs"
                  >
                    Lorem ipsum
                  </div>
                  <div class="text-caption text-grey-9">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
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
              >
                <q-img src="../assets/MAPA_M_01.png" />

                <q-card-section>
                  <div class="text-overline text-orange-9">Lorem ipsum</div>
                  <div
                    :class="about_heading_3"
                    :style="'color: ' + about_heading_color_3"
                    class="text-h6 q-mt-sm q-mb-xs"
                  >
                    Lorem ipsum
                  </div>
                  <div class="text-caption text-grey-9">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </div>
                </q-card-section>
              </q-card>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div style="background: #f7f7f7" id="id_services">
          <div class="row">
            <div class="col-md-12 col-lg-12 col-xs-12 col-sm-12">
              <h5 class="text-center">
                Lorem ipsum
                <br />
                <span class="text-center text-grey text-h6"
                  >Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit.</span
                >
              </h5>
            </div>
          </div>
          <div class="q-pa-xl">
            <div class="row q-col-gutter-sm">
              <div class="col-md-4 col-lg-4 col-sm-12 col-xs-12">
                <q-item class="box-shadow q-pa-none q-ml-xs">
                  <q-item-section
                    side
                    :style="'background-color:' + theme_color"
                    class="q-pa-sm q-mr-none text-white"
                  >
                    <q-icon name="compare_arrows" size="65px"></q-icon>
                  </q-item-section>
                  <q-item-section class="q-pa-md q-ml-none">
                    <q-item-label class="text-h6 text-grey-9 text-uppercase"
                      >Lorem ipsum</q-item-label
                    >
                    <q-item-label class="text-grey-8"
                      >Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit.</q-item-label
                    >
                  </q-item-section>
                </q-item>
              </div>
              <div class="col-md-4 col-lg-4 col-sm-12 col-xs-12">
                <q-item class="box-shadow q-pa-none q-ml-xs">
                  <q-item-section
                    side
                    :style="'background-color:' + theme_color"
                    class="q-pa-sm q-mr-none text-white"
                  >
                    <q-icon name="web" size="65px"></q-icon>
                  </q-item-section>
                  <q-item-section class="q-pa-md q-ml-none">
                    <q-item-label class="text-h6 text-grey-9 text-uppercase"
                      >Lorem ipsum</q-item-label
                    >
                    <q-item-label class="text-grey-8"
                      >Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit.</q-item-label
                    >
                  </q-item-section>
                </q-item>
              </div>
              <div class="col-md-4 col-lg-4 col-sm-12 col-xs-12">
                <q-item class="box-shadow q-pa-none q-ml-xs q-mr-xs">
                  <q-item-section
                    side
                    :style="'background-color:' + theme_color"
                    class="q-pa-sm q-mr-none text-white"
                  >
                    <q-icon name="fab fa-wordpress" size="65px"></q-icon>
                  </q-item-section>
                  <q-item-section class="q-pa-md q-ml-none">
                    <q-item-label class="text-h6 text-grey-9 text-uppercase"
                      >Lorem ipsum</q-item-label
                    >
                    <q-item-label class="text-grey-8"
                      >Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit.</q-item-label
                    >
                  </q-item-section>
                </q-item>
              </div>
            </div>
            <div class="row q-col-gutter-sm q-mt-lg">
              <div class="col-md-4 col-lg-4 col-sm-12 col-xs-12">
                <q-item class="box-shadow q-pa-none q-ml-xs">
                  <q-item-section
                    side
                    :style="'background-color:' + theme_color"
                    class="q-pa-sm q-mr-none text-white"
                  >
                    <q-icon name="settings" size="65px"></q-icon>
                  </q-item-section>
                  <q-item-section class="q-pa-md q-ml-none">
                    <q-item-label class="text-h6 text-grey-9 text-uppercase"
                      >Lorem ipsum</q-item-label
                    >
                    <q-item-label class="text-grey-8"
                      >Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit.</q-item-label
                    >
                  </q-item-section>
                </q-item>
              </div>
              <div class="col-md-4 col-lg-4 col-sm-12 col-xs-12">
                <q-item class="box-shadow q-pa-none q-ml-xs">
                  <q-item-section
                    side
                    :style="'background-color:' + theme_color"
                    class="q-pa-sm q-mr-none text-white"
                  >
                    <q-icon name="fas fa-database" size="65px"></q-icon>
                  </q-item-section>
                  <q-item-section class="q-pa-md q-ml-none">
                    <q-item-label class="text-h6 text-grey-9 text-uppercase"
                      >Lorem ipsum</q-item-label
                    >
                    <q-item-label class="text-grey-8"
                      >Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit.</q-item-label
                    >
                  </q-item-section>
                </q-item>
              </div>
              <div class="col-md-4 col-lg-4 col-sm-12 col-xs-12">
                <q-item class="box-shadow q-pa-none q-ml-xs q-mr-xs">
                  <q-item-section
                    side
                    :style="'background-color:' + theme_color"
                    class="q-pa-sm q-mr-none text-white"
                  >
                    <q-icon name="dynamic_feed" size="65px"></q-icon>
                  </q-item-section>
                  <q-item-section class="q-pa-md q-ml-none">
                    <q-item-label class="text-h6 text-grey-9 text-uppercase"
                      >Lorem ipsum</q-item-label
                    >
                    <q-item-label class="text-grey-8"
                      >Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit.</q-item-label
                    >
                  </q-item-section>
                </q-item>
              </div>
            </div>
          </div>
        </div>
        <div class="quote" id="id_testimonial">
          <div style="background-color: #000000ad !important">
            <q-carousel
              v-model="slide"
              swipeable
              animated
              infinite
              autoplay
              arrows
              navigation
              padding
              navigation-position="bottom"
              class="text-white full-height bg-transparent q-mx-xl"
            >
              <q-carousel-slide
                style="padding-bottom: 140px"
                name="style"
                class="column no-wrap flex-center"
              >
                <img
                  :style="
                    'margin-top:100px;border-radius:5px;border: 4px solid ' +
                    theme_color
                  "
                  src="../statics/images/team_1.jpg"
                  width="150"
                  height="150"
                />
                <div class="q-mt-md text-h6 text-center">
                  <span :style="'color:' + theme_color">Lorem ipsum</span
                  ><br /><span class="text-overline">Lorem ipsum</span>
                </div>
                <div class="q-mt-md text-h6 text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut<br />
                  labore et dolore magna aliqua.
                </div>
              </q-carousel-slide>
              <q-carousel-slide
                style="padding-bottom: 140px"
                name="tv"
                class="column no-wrap flex-center"
              >
                <img
                  :style="
                    'margin-top:100px;border-radius:5px;border: 4px solid ' +
                    theme_color
                  "
                  src="../statics/images/team_2.jpg"
                  width="150"
                  height="150"
                />
                <div class="q-mt-md text-h6 text-center">
                  <span :style="'color:' + theme_color">Lorem ipsum</span
                  ><br /><span class="text-overline">Lorem ipsum</span>
                </div>
                <div class="q-mt-md text-h6 text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut<br />
                  labore et dolore magna aliqua.
                </div>
              </q-carousel-slide>
              <q-carousel-slide
                style="padding-bottom: 140px"
                name="layers"
                class="column no-wrap flex-center"
              >
                <img
                  :style="
                    'margin-top:100px;border-radius:5px;border: 4px solid ' +
                    theme_color
                  "
                  src="../statics/images/team_3.jpg"
                  width="150"
                  height="150"
                />
                <div class="q-mt-md text-h6 text-center">
                  <span :style="'color:' + theme_color">Lorem ipsum</span
                  ><br /><span class="text-overline">Lorem ipsum</span>
                </div>
                <div class="q-mt-md text-h6 text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut<br />
                  labore et dolore magna aliqua.
                </div>
              </q-carousel-slide>
            </q-carousel>
          </div>
        </div>

        <div class="row" id="id_news">
          <div class="col-md-12 col-lg-12 col-xs-12 col-sm-12">
            <h5 class="text-center">
              Lorem ipsum
              <br />
              <span class="text-center text-grey text-h6"
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span
              >
            </h5>
          </div>
        </div>
        <div class="row text-center flex flex-center">
          <div
            class="col-md-12 col-lg-12 col-sx-12 col-sm-12 q-gutter-md flex flex-center"
          >
            <div class="col-md-4 col-lg-4 col-sx-12 col-sm-12">
              <q-card
                @mouseover="hoverOver(1)"
                @mouseout="hoverOutTimeout(1)"
                style="border: none"
                class="my-card text-center box-shadow"
                flat
                bordered
              >
                <q-img src="../statics/images/about_1.jpg" />

                <q-card-section class="text-left">
                  <div
                    :class="about_heading_1"
                    :style="'color: ' + about_heading_color_1"
                    class="about_heading_1 text-h6 q-mt-sm q-mb-xs"
                  >
                    Lorem ipsum
                  </div>
                  <div class="text-caption text-grey-9 q-mt-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </div>
                  <div>
                    <br />
                    <q-btn
                      size="sm"
                      :style="'background:' + theme_color + '; color: white'"
                      label="READ MORE"
                    />
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
                class="my-card text-center box-shadow"
                flat
                bordered
              >
                <q-img src="../statics/images/about_2.jpg" />

                <q-card-section class="text-left">
                  <div
                    :class="about_heading_2"
                    :style="'color: ' + about_heading_color_2"
                    class="text-h6 q-mt-sm q-mb-xs"
                  >
                    Lorem ipsum
                  </div>
                  <div class="text-caption text-grey-9 q-mt-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </div>
                  <div>
                    <br />
                    <q-btn
                      size="sm"
                      :style="'background:' + theme_color + '; color: white'"
                      label="READ MORE"
                    />
                  </div>
                </q-card-section>
              </q-card>
            </div>
            <div class="col-md-4 col-lg-4 col-sx-12 col-sm-12">
              <q-card
                @mouseover="hoverOver(3)"
                @mouseout="hoverOutTimeout(3)"
                style="border: none"
                class="my-card text-center box-shadow"
                flat
                bordered
              >
                <q-img src="../statics/images/about_3.jpg" />

                <q-card-section class="text-left">
                  <div
                    :class="about_heading_3"
                    :style="'color: ' + about_heading_color_3"
                    class="text-h6 q-mt-sm q-mb-xs"
                  >
                    Lorem ipsum
                  </div>
                  <div class="text-caption text-grey-9 q-mt-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </div>
                  <div>
                    <br />
                    <q-btn
                      size="sm"
                      :style="'background:' + theme_color + '; color: white'"
                      label="READ MORE"
                    />
                  </div>
                </q-card-section>
              </q-card>
            </div>
          </div>
        </div>
        <br />
        <br />
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
import { scroll } from 'quasar';
const { getScrollTarget, setVerticalScrollPosition } = scroll;

export default {
  components: {},
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
    };
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
