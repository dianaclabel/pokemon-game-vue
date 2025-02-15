<template>
  <section
    v-if="isLoading || randomPokemon.id === null"
    class="flex flex-col justify-center items-cente h-screen"
  >
    <h1 class="text-3xl">Espere por favor</h1>
    <h3 class="animate-pulse">cargando pokemons</h3>
  </section>

  <section v-else class="flex flex-col justify-center items-center w-screen h-screen">
    <h1 class="m-2">¿Quien es este pokemon?</h1>
    <h3 class="capitalize">{{ gameStatus }}</h3>
    <div class="h-20">
      <button
        v-if="gameStatus !== GameStatus.Playing"
        class="bg-green-400 shadow-md rounded-lg p-2 m-1 cursor-pointer w-40 text-center transition-all hover:bg-green-500 text-neutral-700"
        @click="getNextRound()"
      >
        ¿Jugar de nuevo?
      </button>
    </div>

    <!-- pokemon picture -->
    <PokemonPicture
      :pokemon-id="randomPokemon.id"
      :show-pokemon="gameStatus !== GameStatus.Playing"
    />

    <!-- pokemon opcions -->
    <PokemonOptions
      :options="options"
      :block-selection="gameStatus != GameStatus.Playing"
      :correct-answer="randomPokemon.id"
      @selected-option="checkAnswer"
    />
  </section>
</template>

<script setup lang="ts">
import PokemonOptions from '../components/PokemonOptions.vue';
import PokemonPicture from '../components/PokemonPicture.vue';
import { usePokemonGame } from '../composables/usePokemonGame';
import { GameStatus } from '../interfaces';
const {
  randomPokemon,
  isLoading,
  gameStatus,
  pokemonOptions: options,
  getNextRound,
  checkAnswer,
} = usePokemonGame();

// const onSelectedOption = (value: number) => {
//   console.log({ value });
// };
</script>
