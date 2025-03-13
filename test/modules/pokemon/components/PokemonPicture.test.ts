import PokemonPicture from '@/modules/pokemon/components/PokemonPicture.vue';
import { mount } from '@vue/test-utils';

describe('<Name of the group />', () => {
  test('Should render the hidden image when showPokemon props is false', async () => {
    const pokemonId = 25;

    const wrapper = mount(PokemonPicture, {
      props: {
        pokemonId,
        showPokemon: false,
      },
    });

    const imageSource = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`;

    //Para saber como luce el componente hacemos uso de de .html()
    console.log(wrapper.html());

    const image = wrapper.find('img');

    expect(wrapper.find('img')).toBeTruthy();
    const attributes = image.attributes();

    //.attributes me trae todo los atributos del componente
    //console.log(image.attributes());
    //expect(image.attributes('src')).toBe(imageSource);
    expect(attributes).toEqual(
      expect.objectContaining({
        class: 'brightness-0 h-[200px]',
        src: imageSource,
      }),
    );
  });

  test('Should rende the hidden image when showPokemon props is true', async () => {
    const pokemonId = 25;

    const wrapper = mount(PokemonPicture, {
      props: {
        pokemonId,
        showPokemon: true,
      },
    });

    const imageSource = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`;

    const image = wrapper.find('img');

    expect(wrapper.find('img')).toBeTruthy();
    const attributes = image.attributes();

    expect(attributes).toEqual(
      expect.objectContaining({
        alt: 'pokemon image',
        class: 'fade-in h-[200px]',
        src: imageSource,
      }),
    );
  });
});
