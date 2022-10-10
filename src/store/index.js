import {createStore} from 'vuex'
import axios from "axios";

const api_key = "98ebc0fc955ad190342944ce0434103c"

const useStore = createStore({
    state: {
        regions: ["Andijan", "Bukhara", "Jizzakh", "Kashkadarya", "Navoi",
            "Namangan", "Samarkand", "Sirdarya",
            "Surkhandarya", "Tashkent", "Fergana", "Khorezm"],
        weather: null
    },
    getters: {},
    mutations: {
        getLat(state, city) {
            let lat = 0;
            let lon = 0;
            axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${api_key}`).then((res) => {
                lat = res.data[0].lat;
                lon = res.data[0].lon;
            }).catch((err) => console.log(err))
                .finally(() => {
                    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}`).then((res) => {
                        state.weather = res.data
                        console.log(state.weather)
                    }).catch((err) => console.log(err))
                })
        }
    },
    actions: {},
    modules: {}
})
export default useStore;