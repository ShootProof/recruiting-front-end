import initStoryshots from '@storybook/addon-storyshots';
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer';

initStoryshots({ suite: 'image', test: imageSnapshot({ storybookUrl: 'http://localhost:9009' }) })