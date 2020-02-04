import React from 'react';
import { addDecorator } from '@storybook/react';

addDecorator(storyFn => (
  <div style={{ fontFamily: 'sans-serif', width: '400px' }}>
    {storyFn()}
  </div >
));