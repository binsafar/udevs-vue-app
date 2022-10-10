<script>
import {mapState} from "vuex";
import "./assets/css/app.css";

export default {
  data() {
    return {
      text: "",
      details: [
        {id: 1, name: "cloudy", val: "12%"}
      ]
    }
  },
  computed: mapState([
    'regions'
  ]),
  setup() {
  },
}
</script>

<template>
  <main class="main">
    <article class="left"></article>

    <article class="right">
      <div class="header-search">
        <input type="text"
               class="search-input"
               placeholder="Another location"
               v-model="text"/>
        <button><img class="search-icon"
                     src="./assets/img/search_icon.png" alt=""></button>
      </div>

      <div class="bottom-line"></div>

      <div class="regions"
           v-for="(region, index) in regions.splice(1,4)"
           v-bind:key="index">
        <p class="regions-sample"
            onclick="text = region">{{ region }}</p>
      </div>

      <div class="more-info">
        <p class="title">Weather Details</p>
        <div v-for="(det, index) in details" v-bind:key="index">
          <p>{{ det.name }}</p>
          <p>{{ det.val }}</p>
        </div>
      </div>

      <div class="bottom-line"></div>
    </article>
  </main>
</template>
