import React from 'react';
import renderer from 'react-test-renderer';
import { cleanup, fireEvent, render } from 'react-testing-library';
import { MemoryRouter } from 'react-router-dom';
import AnswerOptions from '../../src/components/question/answer/AnswerOptions';
import data from '../utilities/data';

afterEach(cleanup);
describe('AnswerOptions component', () => {
  test('Test that the AnswerOptions displays', () => {
    const component = renderer.create(
      <AnswerOptions answer={data.answer} index={12}/>
    );
    expect(component).toMatchSnapshot();
  });

  test('should handle click for upvoting answer', () => {
    const handleClick = jest.fn();
    const { getByTestId } = render(
      <MemoryRouter>
        <AnswerOptions
          answer={data.answer}
          index={12}
          handleVoting={jest.fn()} />
      </MemoryRouter>
    );
    const upvoteBtn = getByTestId('upvote');
    upvoteBtn.onclick = handleClick;
    fireEvent.click(upvoteBtn);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
