<template>
  <div class="row">
    <h1 class="text-center my-3 text-capitalize">{{ currentPokemon.name }}</h1>
    <div class="col-md-6">
      <img :src="`https://img.pokemondb.net/artwork/large/${currentPokemon.name}.jpg`"
           class="card-img-top w-100 pokemon-img"
           :alt="`Image of ${currentPokemon.name}`" loading="lazy">
    </div>
    <div class="col-md-6">
      <h2>PokeDex Data</h2>
      <table class="table w-100">
        <tbody>
        <tr>
          <th>No.</th>
          <th class="fw-normal">{{ currentPokemon.order }}</th>
        </tr>
        <tr>
          <th>Type</th>
          <th class="fw-normal">
            <TypeIcon v-for="(type,i) in pokemonTypes" :key="i" :type="type.type"></TypeIcon>
          </th>
        </tr>
        <tr>
          <th>Height</th>
          <th class="fw-normal">{{ currentPokemon.height / 10 }} m ({{ heightInImperial }})</th>
        </tr>
        <tr>
          <th>Weight</th>
          <th class="fw-normal">{{ currentPokemon.weight }} kg ({{ weightInImperial }}lb)</th>
        </tr>
        <tr>
          <th>Abilities</th>
          <th class="fw-normal">
            <p v-for="(ability,i) in currentPokemon.abilities" :key="`abilityId${i}`" class="mb-0">
              <a :href="ability.ability.url"
                 class="text-capitalize text-decoration-none link-primary">{{ ability.ability.name }}</a>
              <span class="mx-2 text-secondary" v-if="ability.is_hidden">(Hidden Ability)</span>
            </p>
          </th>
        </tr>
        </tbody>
      </table>
    </div>

  </div>
  <div class="row">
    <div class="col-3">
      <!--      <img :src="`https://img.pokemondb.net/artwork/large/${evolutionChain.chain.species.name}.jpg`" alt="">-->
      <h3>{{ evolutionChain?.chain.species.name }}</h3>
    </div>
    <div class="col-3">
      <!--      <img :src="`https://img.pokemondb.net/artwork/large/${evolutionChain.chain.evolves_to[0].species.name}.jpg`"-->
      alt="">
    </div>
    <div class="col-3">
      <!--      <img-->
      <!--          :src="`https://img.pokemondb.net/artwork/large/${evolutionChain.chain.evolves_to[0].evolves_to[0].species.name}.jpg`"-->
      <!--          alt="">-->
    </div>
  </div>
</template>

<script>
import axios from "axios";
import TypeIcon from "../components/TypeIcon.vue";

export default {
  name: "PokemonDetailOption",
  data() {
    return {
      currentPokemon: [],
      evolutionChain: []
    }
  },
  components: {
    TypeIcon,
  },
  computed: {
    pokemonTypes() {
      return this.currentPokemon.types;
    },
    heightInImperial() {
      let inTotalInch = this.currentPokemon.height * 3.9370;
      let inFeet = Math.floor(inTotalInch / 12)
      let inRemainInch = Math.floor(inTotalInch % 12)
      return inFeet === 0 ? `${this.addZeroAtFront(inRemainInch)}''` : `${inFeet}'${this.addZeroAtFront(inRemainInch)}''`;
    },
    weightInImperial() {
      return (this.currentPokemon.weight * 0.22046).toFixed(2);
    }
  },
  methods: {
    addZeroAtFront(number) {
      return number < 10 ? `0${number}` : number;
    },
    async fetchPokemonApi() {
      let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${route.params.pokemon}`);
      return response.data;
    },
    async fetchEvolutionChain() {
      let getSpecies = await axios.get(this.currentPokemon.value.species.url)
      let getEvolutionChain = await axios.get(getSpecies.data.evolution_chain.url)
      return getEvolutionChain.data;
    }
  },
  async created() {
    this.currentPokemon.value = await this.fetchPokemonApi();
    this.evolutionChain.value = await this.fetchEvolutionChain()
    console.log("Createdj")
  }
}
</script>

<style scoped>
.table-borderless > tbody > tr > td,
.table-borderless > tbody > tr > th,
.table-borderless > tfoot > tr > td,
.table-borderless > tfoot > tr > th,
.table-borderless > thead > tr > td,
.table-borderless > thead > tr > th {
  border: none;
}

.pokemon-img {
  height: 300px;
  object-fit: contain;
}
</style>