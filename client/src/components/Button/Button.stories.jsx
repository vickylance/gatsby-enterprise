import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {
  withKnobs, text, boolean, select,
} from '@storybook/addon-knobs';

import Button from './Button';

const stories = storiesOf('Button', module);
stories.addDecorator(withKnobs);

stories.add('button playground', () => {
  // Size knob
  const label = 'Size';
  const options = {
    xs: 'xs',
    sm: 'sm',
    md: 'md',
    lg: 'lg',
    xl: 'xl',
  };
  const defaultValue = 'md';

  return (
    <Button
      text={text('Text', 'Hello Storybook')}
      size={select(label, options, defaultValue)}
      onClick={action('clicked')}
      disabled={boolean('Disabled', false)}
    />
  );
});
