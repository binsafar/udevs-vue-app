<script>
import {useStore} from "vuex";
import "./assets/css/app.css";

export default {
  data() {
    return {
      text: "",
    }
  },
  methods: {
    showing: function (region) {
      this.$store.commit("getLat", region)
    },
    search: function () {
      console.log(this.text)
      this.$store.commit("getLat", this.text)
    }
  },
  setup() {
    const store = useStore();
    const {state} = store;
    store.commit("getLat", "Tashkent")
    return {state}
  },
}
</script>

<template>
  <main class="main">
    <article class="left">
      <div v-if="state.weather!=null"
           class="left-wrapper">
        <p class="temp">{{ ~~(state.weather.main.temp - 273.15) }} &deg;</p>
        <p class="city">{{ state.weather.name }}</p>

        <div class="icon-wrapper">
          <img v-if="state.weather.weather[0].description.includes('clear')"
               class="left-icon"
               src="./assets/icons/sun-solid.svg"
               alt="weather image">
          <img v-if="state.weather.weather[0].description.includes('clouds')
                || state.weather.weather[0].description.includes('smoke')"
               class="left-icon"
               src="./assets/icons/cloud-solid.svg"
               alt="weather image">
          <img v-if="state.weather.weather[0].description.includes('rain')"
               class="left-icon"
               src="./assets/icons/cloud-rain-solid.svg"
               alt="weather image">
          <p class="typeof">{{ state.weather.weather[0].description }}</p>
        </div>
      </div>
    </article>

    <article class="right">
      <div class="header-search">
        <input type="text"
               class="search-input"
               placeholder="Another location"
               @keyup.enter="search"
               v-model="text"/>
        <button @click="search"><img class="search-icon"
                                     src="./assets/img/search_icon.png" alt=""></button>
      </div>

      <div class="regions"
           v-for="(region, index) in state.regions"
           v-bind:key="index">
        <p class="regions-sample"
           @click="showing(region)"
        >{{ region }}</p>
      </div>

      <div class="bottom-line"></div>

      <div class="more-info" v-if="state.weather!=null">
        <p class="title">Weather Details</p>

        <div class="more-det">
          <p>Cloudy</p>
          <p class="info-value">{{ state.weather.clouds.all }}%</p>
        </div>

        <div class="more-det">
          <p>Humidity</p>
          <p class="info-value">{{ state.weather.main.humidity }}%</p>
        </div>

        <div class="more-det">
          <p>Wind</p>
          <p class="info-value">{{ state.weather.wind.speed }}km/h</p>
        </div>

        <div class="more-det">
          <p>Rain</p>
          <p class="info-value">{{ state.weather.cod }}mm</p>
        </div>
      </div>

      <div class="bottom-line"></div>
    </article>
  </main>
</template>
