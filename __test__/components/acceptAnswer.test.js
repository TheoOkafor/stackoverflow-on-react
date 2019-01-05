import React from 'react';
import renderer from 'react-test-renderer';
import { cleanup, fireEvent, render } from 'react-testing-library';
import { MemoryRouter } from 'react-router-dom';
import AcceptAnswer from '../../src/components/question/answer/AcceptAnswer';
import data from '../utilities/data';

afterEach(cleanup);
localStorage.setItem('username', 'teddy01');
describe('AcceptAnswer component', () => {
  test('Test that the AcceptAnswer displays', () => {
    const component = renderer.create(
      <AcceptAnswer answer={data.answer} index={12}/>
    );
    expect(component).toMatchSnapshot();
  });

  test('should handle click for accept answer', () => {
    const handleClick = jest.fn();
    const { getByTestId } = render(
      <MemoryRouter>
        <AcceptAnswer
          answer={data.answer}
          index={12}
          username="teddy01"
          handleAccept={jest.fn()} />
      </MemoryRouter>
    );
    const acceptBtn = getByTestId('accept');
    acceptBtn.onclick = handleClick;
    fireEvent.click(acceptBtn);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
