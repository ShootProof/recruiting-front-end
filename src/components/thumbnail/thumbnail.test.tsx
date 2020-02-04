import React from 'react';
import { render } from '@testing-library/react';
import Thumbnail from './thumbnail';
import defaultProps from '../../testing/data/thumbnail_props';

function getImage() {
  return (
    render(<Thumbnail {...defaultProps} />).container.firstChild! as
    HTMLImageElement);
}

describe('Thumbnail', () => {
  test('alt text is driven by props', () => {
    expect(getImage().alt).toBe(defaultProps.description);
  });

  test('title is driven by props', () => {
    expect(getImage().title).toBe(defaultProps.description);
  });
});
