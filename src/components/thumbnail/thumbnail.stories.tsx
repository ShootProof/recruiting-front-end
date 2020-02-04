import React from 'react';
import { Thumbnail } from './thumbnail';
import defaultProps from '../../testing/data/thumbnail_props';

export default {
  title: 'Thumbnail',
  component: Thumbnail,
};

export const thumbnail = () => (
  <Thumbnail {...defaultProps} />
);