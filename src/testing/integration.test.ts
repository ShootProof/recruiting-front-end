import initStoryshots from '@storybook/addon-storyshots';
import { puppeteerTest } from '@storybook/addon-storyshots-puppeteer';

initStoryshots({ suite: 'Puppeteer test', test: puppeteerTest({ storybookUrl: 'http://localhost:9009' }) })