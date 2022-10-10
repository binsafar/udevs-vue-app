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
    showing: function () {
      console.log(this.text)
    }
  },
  setup() {
    const store = useStore();
    const {state} = store;
    store.commit("getLat", "London")
    console.log(state.weather)
    return {state}
  },
}
</script>

<template>
  <main class="main">
    <article class="left">
      <img v-if="state.weather!=null"
           src="" alt="weather image">
      <div v-if="state.weather!=null">
        <p class="temp">{{ ~~(state.weather.main.temp - 273.15) }} &deg;</p>
        <p class="city">{{ state.weather.name }}</p>
        <p class="typeof">{{ state.weather.weather[0].description }}</p>
      </div>
    </article>

    <article class="right">
      <div class="header-search">
        <input type="text"
               class="search-input"
               placeholder="Another location"
               v-model="text"/>
        <button><img class="search-icon"
                     src="./assets/img/search_icon.png" alt=""></button>
      </div>

      <div class="regions"
           v-for="(region, index) in state.regions"
           @click="showing"
           v-bind:key="index">
        <p class="regions-sample"
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
