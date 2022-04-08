import {createStore} from "vuex"
import axios from "axios";

export default createStore({
    state: {
        pokemonList: [],
        nextLink: String
    },
    getters: {},
    mutations: {
        SET_POKEMON(state, data) {
            state.pokemonList.push(...data.results)
            state.nextLink = data.next
        }
    },
    actions: {
        fetchPokemonApi({commit}, link) {
            axios.get(link).then(response => {
                commit("SET_POKEMON", response.data)
            })
        }
    },
    modules: {}
})