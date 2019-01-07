import React from 'react';
import { Provider } from 'react-redux';
import { cleanup, fireEvent, render } from 'react-testing-library';
import renderer from 'react-test-renderer';
import CommentForm from '../../src/components/question/answer/CommentForm';
import data from '../utilities/data';
import store from '../../src/store';

afterEach(cleanup);
describe('AnswerOptions component', () => {
  test('Test that the CommentForm displays', () => {
    const component = renderer.create(
      <Provider store={store}>
        <CommentForm answer={data.answer} index={12}/>
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });

  test('should handle commenting', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <CommentForm
          answer={data.answer}
          index={12}
          postComment={jest.fn()} />
      </Provider>
    );
    const commentArea = getByTestId('commentArea');
    const commentBtn = getByTestId('commentBtn');

    fireEvent.change(commentArea, { target: { value: 'teho@yahoo.com' }, });
    fireEvent.click(commentBtn);
  });
});
