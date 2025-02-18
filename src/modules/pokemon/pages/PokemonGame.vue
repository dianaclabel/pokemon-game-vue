<template>
  <section
    v-if="isLoading || randomPokemon.id === null"
    class="flex flex-col justify-center items-cente h-screen"
  >
    <h1 class="text-3xl">Espere por favor</h1>
    <h3 class="animate-pulse">cargando pokemons</h3>
  </section>

  <section v-else class="w-screen">
    <div class="flex flex-col justify-center items-center align-center h-screen">
      <h1 class="m-2 font-bold text-3xl">¿Quién es este pokemon?</h1>

      <PokemonFlashMessage :gameRoundStatus="gameRoundStatus" />

      <!-- pokemon picture -->
      <PokemonPicture
        :pokemon-id="randomPokemon.id"
        :show-pokemon="gameRoundStatus !== GameRoundStatus.Playing"
      />

      <!-- pokemon opcions -->
      <PokemonOptions
        :options="options"
        :block-selection="gameRoundStatus != GameRoundStatus.Playing"
        :correct-answer="randomPokemon.id"
        @selected-option="checkAnswer"
      />

      <div class="h-15 w-full flex justify-center">
        <button
          v-if="gameRoundStatus !== GameRoundStatus.Playing"
          class="bg-green-400 mt-4 shadow-md rounded-lg p-2 m-1 cursor-pointer text-center transition-all hover:bg-green-700 text-white font-bold w-[20%]"
          @click="getNextRound()"
        >
          Nuevo juego
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import PokemonOptions from '../components/PokemonOptions.vue';
import PokemonPicture from '../components/PokemonPicture.vue';
import { usePokemonGame } from '../composables/usePokemonGame';
import { GameRoundStatus } from '../interfaces';
import PokemonFlashMessage from '../components/PokemonFlashMessage.vue';
const {
  randomPokemon,
  isLoading,
  gameRoundStatus,
  pokemonOptions: options,
  getNextRound,
  checkAnswer,
} = usePokemonGame();

// const onSelectedOption = (value: number) => {
//   console.log({ value });
// };
</script>
