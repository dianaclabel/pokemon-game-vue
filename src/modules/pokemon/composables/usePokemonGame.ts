import { computed, onMounted, ref } from 'vue';
import { GameRoundStatus, type Pokemon, type PokemonListResponse } from '../interfaces';
import { pokemonApi } from '../api/pokemonApi';
import confetti from 'canvas-confetti';

export const usePokemonGame = () => {
  const gameRoundStatus = ref<GameRoundStatus>(GameRoundStatus.Playing);
  const pokemons = ref<Pokemon[]>([]);
  const pokemonOptions = ref<Pokemon[]>([]);
  const livesPokemon = ref<number>(3);
  const scorePokemon = ref<number>(0);

  // obtenemos un pokemon aleatorio de los 4
  const randomPokemon = computed(
    () => pokemonOptions.value[Math.floor(Math.random() * pokemonOptions.value.length)],
  );
  const isLoading = computed(() => pokemons.value.length === 0);

  const getPokemons = async (): Promise<Pokemon[]> => {
    const response = await pokemonApi.get<PokemonListResponse>('/?limit=151');

    const pokemonsArray = response.data.results.map((pokemon) => {
      const urlParts = pokemon.url.split('/');

      const id = urlParts[urlParts.length - 2] ?? 0;

      return {
        name: pokemon.name,
        id: +id,
      };
    });

    //Desordena los elementos del array
    return pokemonsArray.sort(() => Math.random() - 0.5);
  };

  const getNextRound = (howMany: number = 4) => {
    gameRoundStatus.value = GameRoundStatus.Playing;
    //Almacena 4 pokemones
    pokemonOptions.value = pokemons.value.slice(0, howMany);
    //Almacena todos los pokemone execptos los 4, el metodo corta de 4 para arriba
    pokemons.value = pokemons.value.slice(howMany);
  };

  const checkAnswer = (id: number) => {
    const hasWon = randomPokemon.value.id === id;

    if (hasWon) {
      gameRoundStatus.value = GameRoundStatus.Won;
      confetti({
        particleCount: 300,
        spread: 150,
        origin: { y: 0.6 },
      });

      scorePokemon.value += 1;
      return;
    }

    gameRoundStatus.value = GameRoundStatus.Lost;
    livesPokemon.value -= 1;
    if (livesPokemon.value === 0) {
      gameRoundStatus.value = GameRoundStatus.GameOver;
    }
  };

  const newGame = () => {
    livesPokemon.value = 3;
    scorePokemon.value = 0;
    getNextRound();
  };

  onMounted(async () => {
    //con esta línea se visualiza el loading.
    //await new Promise((r) => setTimeout(r, 1000));

    pokemons.value = await getPokemons();
    getNextRound();

    console.log(pokemonOptions.value);

    //console.log({ pokemons });
  });

  return {
    gameRoundStatus,
    isLoading,
    pokemonOptions,
    randomPokemon,
    //Methods
    getNextRound,
    checkAnswer,
    newGame,
    livesPokemon,
    scorePokemon,
  };
};
