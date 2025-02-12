<template>
  <section class="mt-5 flex flex-col">
    <button
      v-for="{ name, id } in options"
      :key="id"
      @click="$emit('selectedOption', id)"
      :class="[
        'capitalize disabled:shadow-none disabled:bg-gray-100',
        btnOptions,
        {
          correct: id === correctAnswer && blockSelection,
          incorrect: id !== correctAnswer && blockSelection,
        },
      ]"
      :disabled="blockSelection"
    >
      {{ name }}
    </button>
  </section>
</template>

<script setup lang="ts">
import type { Pokemon } from '../interfaces';

interface Props {
  options: Pokemon[];
  blockSelection: boolean;
  correctAnswer: number;
}

defineProps<Props>();

defineEmits<{
  selectedOption: [id: number];
}>();

const btnOptions =
  'bg-white shadow-md rounded-lg p-3 m-2 cursor-pointer w-40 text-center transition-all hover:bg-gray-100';
</script>

<style scoped>
@reference "../../../assets/styles.css";

.correct {
  @apply bg-blue-500 text-white;
}

.incorrect {
  @apply bg-red-100 opacity-70;
}
</style>
