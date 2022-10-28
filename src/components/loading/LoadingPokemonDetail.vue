<template>
  <tbody class="divide-y divide-neutral-400">
    <tr>
      <th>No</th>
      <th>
        <div
          class="w-90 h-4 animate-pulse rounded-md bg-neutral-500/50 dark:bg-neutral-300/50"></div>
      </th>
    </tr>
    <tr>
      <th>Type</th>
      <th>
        <div
          class="w-90 h-4 animate-pulse rounded-md bg-neutral-500/50 dark:bg-neutral-300/50"></div>
      </th>
    </tr>
    <tr>
      <th>Height</th>
      <th>
        <div
          class="w-90 h-4 animate-pulse rounded-md bg-neutral-500/50 dark:bg-neutral-300/50"></div>
      </th>
    </tr>
    <tr>
      <th>Weight</th>
      <th>
        <div
          class="w-90 h-4 animate-pulse rounded-md bg-neutral-500/50 dark:bg-neutral-300/50"></div>
      </th>
    </tr>
    <tr>
      <th>Abilities</th>
      <th>
        <div
          class="w-90 my-3 h-12 animate-pulse rounded-md bg-neutral-500/50 dark:bg-neutral-300/50"></div>
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
