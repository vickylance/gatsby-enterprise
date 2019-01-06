import { configure, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { checkA11y } from '@storybook/addon-a11y';
import centered from '@storybook/addon-centered';
import { withInfo } from "@storybook/addon-info";
import { withOptions } from '@storybook/addon-options';

global.___loader = {
  enqueue: () => {},
  hovering: () => {},
};

global.__PATH_PREFIX__ = '';
window.___navigate = (pathname) => {
  action('NavigateTo:')(pathname);
};

const req = require.context('../src/components', true, /\.stories\.(js|jsx)$/);

// Option defaults:
addDecorator(checkA11y);
addDecorator(withInfo);
addDecorator(centered);
addDecorator(
  withOptions({
    name: 'Enterprise',
    url: 'https://www.google.com',
    goFullScreen: false,
    showStoriesPanel: true,
    showAddonPanel: true,
    addonPanelInRight: true,
    sidebarAnimations: true,
  })
);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
