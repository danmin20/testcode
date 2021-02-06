import React from 'react';
import { render } from '@testing-library/react';
import Profile from './Profile';

describe('<Profile />', () => {
  it('matches snapshot', () => {
    const utils = render(<Profile username="danmin" name="이정민" />);
    expect(utils.container).toMatchSnapshot();
  });
  it('shows the props correctly', () => {
    const utils = render(<Profile username="danmin" name="이정민" />);
    utils.getByText('danmin'); // danmin 라는 텍스트를 가진 엘리먼트가 있는지 확인
    utils.getByText('(이정민)'); // (이정민) 이라는 텍스트를 가진 엘리먼트가 있는지 확인
    utils.getByText(/이/); // 정규식 /이/ 을 통과하는 엘리먼트가 있는지 확인
  });
});