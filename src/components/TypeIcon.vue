<template>
  <button class="type-icon border rounded text-white text-capitalize" :class="[`type-${type.name}`]">{{ type.name }}</button>
</template>

<script>
export default {
  name: "TypeIcon",
  props: {
    type: Object
  }
}
</script>

<style>
.type-icon {
  width: 66px;
  display: inline-block;
  border: none;
}

.type-normal {
  background-color: #aaaa99;
}

.type-fire {
  background-color: #ff4422;
}

.type-water {
  background-color: #3399ff;
}

.type-electric {
  background-color: #ffcc33;
}

.type-grass {
  background-color: #77cc55;
}

.type-ice {
  background-color: #66ccff;
}

.type-fighting {
  background-color: #bb5544;
}

.type-poison {
  background-color: #aa5599;
}

.type-ground {
  background-color: #db5;
}

.type-flying {
  background-color: #8899ff;
}

.type-psychic {
  background-color: #ff5599;
}

.type-bug {
  background-color: #aabb22;
}

.type-rock {
  background-color: #bbaa66;
}

.type-ghost {
  background-color: #6666bb;
}

.type-dragon {
  background-color: #7766ee;
}

.type-dark {
  background-color: #775544;
}

.type-steel {
  background-color: #aaaabb;
}

.type-fairy {
  background-color: #ee99ee;
}
</style>