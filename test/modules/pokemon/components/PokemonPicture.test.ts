import PokemonPicture from '@/modules/pokemon/components/PokemonPicture.vue';
import { mount } from '@vue/test-utils';

describe('<Name of the group />', () => {
  test('Should render the hidden image when showPokemon props is false', async () => {
    const wrapper = mount(PokemonPicture, {
      props: {
        pokemonId: 10,
        showPokemon: false,
      },
    });

    expect(wrapper.find('img').classes());
  });

  test('Should rende the hidden image when showPokemon props is true', async () => {});
});
