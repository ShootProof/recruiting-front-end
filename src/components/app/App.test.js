/* Node Module */
import React from 'react';
import { render, cleanup } from '@testing-library/react';
/* Component Content */
import App from './AppContainer';

afterEach(cleanup);

describe('<AppView />', () => {
  test('renders App View', () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId('AppView')).toBeTruthy();
  });

  test('transform the json into a useable navigation', () => {
    const results = false;
    expect(results).toBe(true);
  });
});
