// import { describe, expect, test } from 'vitest';

import { pokemonApi } from '@/modules/pokemon/api/pokemonApi';

describe('pokemonApi', () => {
  test('should be configured as expected', () => {
    const baseUrl = 'https://pokeapi.co/api/v2/pokemon';

    expect(baseUrl).toBe(pokemonApi.defaults.baseURL);
  });
});
