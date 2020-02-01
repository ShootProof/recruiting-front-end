/* Node Module */
import React from 'react';
import { render, cleanup } from '@testing-library/react';
/* Component Content */
import App from './AppContainer';

afterEach(cleanup);

describe('<AppView />', () => {
  test('renders App View', () => {
    const { getByTestId, getAllByTestId, getByText } = render(<App />);
    expect(getByTestId('app-view')).toBeTruthy();
    expect(getByText(/Anselm's Node Navigation/)).toBeTruthy();
    expect(getAllByTestId('nav-root-container')).toBeTruthy();
  });
});
