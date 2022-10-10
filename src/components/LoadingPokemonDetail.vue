<template>
  <tbody class="divide-y divide-neutral-400">
    <tr>
      <th>No</th>
      <th>
        <div class="w-90 h-4 bg-neutral-300/50 rounded-md animate-pulse"></div>
      </th>
    </tr>
    <tr>
      <th>Type</th>
      <th>
        <div class="w-90 h-4 bg-neutral-300/50 rounded-md animate-pulse"></div>
      </th>
    </tr>
    <tr>
      <th>Height</th>
      <th>
        <div class="w-90 h-4 bg-neutral-300/50 rounded-md animate-pulse"></div>
      </th>
    </tr>
    <tr>
      <th>Weight</th>
      <th>
        <div class="w-90 h-4 bg-neutral-300/50 rounded-md animate-pulse"></div>
      </th>
    </tr>
    <tr>
      <th>Abilities</th>
      <th>
        <div class="w-90 h-12 my-3 bg-neutral-300/50 rounded-md animate-pulse"></div>
      </th>
    </tr>
  </tbody>
</template>

<script>
  export default {};
</script>

<style lang="scss" scoped>
  th {
    margin: 10px 0;
    height: 3rem;

    &:first-of-type {
      font-weight: 600;
    }

    &:last-of-type {
      width: 70%;
    }
  }
</style>
