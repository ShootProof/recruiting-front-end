import React from 'react';
import { render } from '@testing-library/react';
import App from './AppContainer';

describe('<AppView />', () => {
  test('renders App View', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('transform the json into a useable navigation', () => {
  });
});
