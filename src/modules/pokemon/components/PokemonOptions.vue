<template>
  <section class="mt-5">
    <ul>
      <li :class="liClasses">Pokemon 1</li>
      <li :class="liClasses">Pokemon 2</li>
      <li :class="liClasses">Pokemon 3</li>
      <li :class="liClasses">Pokemon 4</li>
    </ul>
  </section>
</template>

<script setup lang="ts">
const liClasses =
  'bg-white shadow-md rounded-lg p-3 m-2 cursor-pointer w-40 text-center transition-all hover:bg-gray-100';
</script>
