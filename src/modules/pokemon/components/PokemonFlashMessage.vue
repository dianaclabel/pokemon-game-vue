<template>
  <Transition
    name="mi-transicion"
    class="transition"
    enter-from-class="opacity-0 scale-25 rotate-180"
    enter-active-class="duration-300 ease-in"
    leave-to-class="opacity-0"
    leave-active-class="duration-300"
  >
    <div
      v-if="showFlashMessage"
      class="flex justify-center text-8xl uppercase z-10 align-center top-1/2 -translate-y-1/2 fixed font-semibold"
    >
      <p v-if="gameRoundStatus === GameRoundStatus.Won" class="text-green-500">Ganaste</p>
      <p v-if="gameRoundStatus === GameRoundStatus.Lost" class="text-red-500">Perdiste</p>
    </div>
  </Transition>
</template>
<script setup lang="ts">
import { ref, watch } from 'vue';
import { GameRoundStatus } from '../interfaces';

interface Props {
  gameRoundStatus: GameRoundStatus;
}

const props = defineProps<Props>();

const showFlashMessage = ref(false);

watch(
  () => props.gameRoundStatus,
  (status) => {
    showFlashMessage.value = false;

    if (status !== GameRoundStatus.Playing) {
      showFlashMessage.value = true;
      setTimeout(() => {
        showFlashMessage.value = false;
      }, 1000);
    }
  },
);
</script>
