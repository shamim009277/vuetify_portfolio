<template>
  <v-app id="home">
    <NavBar />
    <v-container fluid>
      <div class="head">
        <v-row>
          <v-col cols="5">
            <div class="mt-16" style="position:relative">
              <h1 class="text-grey">Hello,</h1>
              <h1 class="text-white">I'm Lara Martinaz</h1>
              <span class="text-grey">Web Designer & Developer</span><br>
              <v-btn dark class="mt-8 text-yellow" variant="outlined">Contact Me</v-btn>
            </div>
          </v-col>
          <v-col cols="2">
            <div
              style="position: absolute;z-index: 9999; bottom: 0; margin-left:auto;margin-right:auto;left:0;right:0;text-align: center;">
              <v-icon>fas fa-angle-double-down</v-icon>
            </div>
          </v-col>
          <v-col cols="5">
            <div style="position: relative;z-index: 9999;" class="mt-16">
              <v-img :src="require('/public/i1.png')" contain max-height="300" />
            </div>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </v-app>
</template>

<script>
import { defineComponent } from 'vue';

// Components
import NavBar from '@/components/NavBar.vue'

export default defineComponent({
  name: 'HomeView',

  components: {
    NavBar,
  },
});
</script>

<style>
.v-container {
  padding: 16px 0;
}
.head {
  position: relative;
  padding: 12px;
  text-align: center;
  margin-bottom: 6px;
  color: white;
  height: 400px;
  width: 100%;

}
.head:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 50%;
  background: black;
  transform: skew(0deg, 5deg);
}
.head:after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 50%;
  background: black;
  transform: skew(0deg, -5deg);
}
</style>
