import PokemonOptions from '@/modules/pokemon/components/PokemonOptions.vue';
import { mount } from '@vue/test-utils';

const options = [
  { id: 1, name: 'Bulbasaur' },
  { id: 2, name: 'Ivyasur' },
  { id: 3, name: 'Venusaur' },
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

    const [b1, b2, b3] = wrapper.findAll('button');

    await b1.trigger('click');
    await b2.trigger('click');
    await b3.trigger('click');

    // console.log(wrapper.emitted('selectedOption'));

    expect(wrapper.emitted().selectedOption).toBeTruthy();
    expect(wrapper.emitted().selectedOption[0]).toEqual([1]);
    expect(wrapper.emitted().selectedOption[1]).toEqual([2]);
    expect(wrapper.emitted().selectedOption[2]).toEqual([3]);
  });

  test('Should disabled buttons when blockSelection prop is true', () => {
    const wrapper = mount(PokemonOptions, {
      props: { options, blockSelection: true, correctAnswer: 1 },
    });

    const buttons = wrapper.findAll('button');

    buttons.forEach((button) => {
      const attributes = Object.keys(button.attributes());
      expect(attributes).toContain('disabled');
    });
  });

  test('Should apply correct styling to buttons based on correct/incorrect answer', async () => {
    const correctAnswer = 2;
    const wrapper = mount(PokemonOptions, {
      props: { options, blockSelection: true, correctAnswer },
    });

    const buttons = wrapper.findAll('button');

    buttons.forEach((button, index) => {
      if (options[index].id === correctAnswer) {
        console.log(button.classes());
        expect((button.classes())).toContain("correct");
      }else{

        expect((button.classes())).toContain("Incorrect");

      }
        // expect(button.attributes('class')).toContain('bg-green-500');

    });
  });
});
