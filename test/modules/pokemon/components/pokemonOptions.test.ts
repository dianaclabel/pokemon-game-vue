import PokemonOptions from '@/modules/pokemon/components/PokemonOptions.vue';
import { mount } from '@vue/test-utils';
import { log } from 'console';

const options = [
  { id: 1, name: 'Bulbasaur' },
  { id: 1, name: 'Ivyasur' },
  { id: 1, name: 'Venusaur' },
];

describe('<PokemonOptions/>', () => {
  test('should render buttons with correct text', () => {
    const wrapper = mount(PokemonOptions, {
      props: { options, blockSelection: false, correctAnswer: 1 },
    });

    console.log(wrapper.html());

    const buttons = wrapper.findAll('button');
    expect(buttons.length).toBe(options.length);

    buttons.forEach((button, index) => {
      expect(button.attributes('class')).toBe(
        'capitalize disabled:shadow-none disabled:bg-gray-100 bg-white shadow-md rounded-lg p-3 m-2 cursor-pointer w-40 text-center transition-all hover:bg-gray-100',
      );

      expect(button.text()).toBe(options[index].name);
    });
  });

  test('Should emit selectedOption event when a button is clicked,', async () => {
    const wrapper = mount(PokemonOptions, {
      props: { options, blockSelection: false, correctAnswer: 1 },
    });

    const buttons = wrapper.findAll('button');

    const [b1, b2, b3] = wrapper.findAll('button');

    await b1.trigger('click');
    await b2.trigger('click');
    await b3.trigger('click');

    // console.log(wrapper.emitted('selectedOption'));

    expect(wrapper.emitted().selectedOptions).toBeTruthy();
    expect(wrapper.emitted().selectedOptions[0]).toEqual([1]);
    expect(wrapper.emitted().selectedOptions[1]).toEqual([2]);
    expect(wrapper.emitted().selectedOptions[2]).toEqual([3]);
  });
});
