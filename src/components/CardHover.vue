<!-- This is your new Card.vue component -->
<template>
  <div class="col-md-3 col-lg-3 col-xs-12 col-sm-12">
    <q-card
      class="q-pa-sm flex flex-center text-center box-shadow"
      style="margin: 40px"
      v-on:mouseover="changeIcon"
      v-on:mouseout="resetIcon"
    >
      <q-card-section>
        <q-icon size="110px" :name="iconName" :style="'color:' + theme_color" />
        <div class="text-h6">{{ cardName }}</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        {{ cardContent }}
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'CardHover',
  props: ['initialIcon', 'hoverIcon', 'theme_color', 'cardName', 'cardContent'],
  data() {
    return {
      iconName: this.initialIcon,
    };
  },
  methods: {
    changeIcon() {
      this.iconName = this.hoverIcon;
    },
    resetIcon() {
      this.iconName = this.initialIcon;
    },
  },
});
</script>
