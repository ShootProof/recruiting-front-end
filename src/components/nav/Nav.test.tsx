/* Node Module */
import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
/* Component Content */
import NavContainer from './NavContainer';
/* Data */
import testJSON from '../../data/testData.json';
/* Module */
import { transformNavJSON } from '../../modules/helper.module';

const renderContent = () => {
  const navigation = transformNavJSON(testJSON);
  return render(
    navigation.map((el: TJsonObject): JSX.Element => (
      <NavContainer key={el.id} navContent={el} />
    ))
  );
};

afterAll(cleanup);

describe('<NavContainer />', () => {
  test('content is disaplyed correctly', () => {
    const {
      container,
      getByTestId,
      getByText,
      getByAltText,
    } = renderContent();

    // clickable nav has an image, text and caret
    expect(getByText(testJSON[0].name)).toBeTruthy();
    expect(getByTestId('0-nav-caret')).toBeTruthy();
    expect(getByAltText(testJSON[0].thumbnail.description)).toBeTruthy();

    // non-clickable nav has an image, text and no caret
    expect(getByText(testJSON[2].name)).toBeTruthy();
    expect(container.querySelector('[data-testid="2-nav-caret"]')).toBeFalsy();
    expect(getByAltText(testJSON[2].thumbnail.description)).toBeTruthy();

    // nav with children are clickable
    const button0 = getByTestId('0-button');
    expect(button0).toBeTruthy();
    expect(button0.className).toContain('not-expand');
    fireEvent(button0, new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    }));
    expect(button0.className).toContain('is-expand');

    // nav without children are NOT clickable
    expect(container.querySelector('[data-testid="2-button"]')).toBeFalsy();
  });
});
