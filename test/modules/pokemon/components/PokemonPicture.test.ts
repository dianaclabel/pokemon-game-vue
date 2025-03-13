import PokemonPicture from '@/modules/pokemon/components/PokemonPicture.vue';
import { mount } from '@vue/test-utils';

describe('<Name of the group />', () => {
  const imageSource = '';

  test('Should render the hidden image when showPokemon props is false', async () => {
    const wrapper = mount(PokemonPicture, {
      props: {
        pokemonId: 10,
        showPokemon: false,
      },
    });

    console.log(wrapper.html());

    const image = wrapper.find('img');

    expect(wrapper.find('img')).toBeTruthy();
    expect(image.attributes('src')).toBe(imageSource);
  });

  test('Should rende the hidden image when showPokemon props is true', async () => {});
});
