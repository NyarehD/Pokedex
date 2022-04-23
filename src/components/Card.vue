<template>
  <div class="col-sm-6 col-lg-4 col-xl-3 p-sm-3 py-1 px-0">
    <div class="card shadow-sm " @click="$router.push({name:'PokemonDetail',params:{pokemon:pokemonName.name}})">
      <img :src="`https://img.pokemondb.net/artwork/large/${pokemonName.name}.jpg`" class="card-img-top w-100"
           :alt="`Image of ${pokemonName.name}`" loading="lazy">
      <div class="card-body">
        <h5 class="card-title text-capitalize text-center">{{ pokemonName.name }}</h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    pokemonName: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  transition: all 0.3s;

  .card-img-top {
    height: 17rem;
    object-fit: contain;
    object-position: center;
  }

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
}
</style>