import type { Pokemon } from '@/modules/pokemon/interfaces';

describe('Pokemon interface', () => {
  const pokemon: Pokemon = { id: 1, name: 'bulbasaur' };

  test('Should have and id property ', () => {
    expect(pokemon.id).toEqual(expect.any(Number));
  });

  test('Should have a name property of type number ', () => {
    expect(pokemon.name).toEqual(expect.any(String));
  });
});
