import React from 'react';
import { List } from './list';
import defaultProps from '../../testing/data/thumbnail_props';
import { Page } from 'puppeteer';

export default {
  title: 'List',
  component: List,
};

export const withOneItem = () => (
  <List items={[{
    name: 'Item',
    thumbnail: defaultProps,
  }]} />
);

export const withNestedItemCollapsed = () => (
  <List items={[
    {
      name: 'Parent',
      thumbnail: defaultProps,
      children: [
        {
          name: 'Child',
          thumbnail: defaultProps,
        },
      ],
    },
  ]} />
);

export const withNestedItemExpanded = () => (
  <List items={[
    {
      name: 'Parent',
      thumbnail: defaultProps,
      testOnly_initialState: {
        expanded: true,
      },
      children: [
        {
          name: 'Child',
          thumbnail: defaultProps,
        },
      ],
    },
  ]} />
);
withNestedItemExpanded.story = {
  parameters: {
    async puppeteerTest(page: Page) {
      // Parent nodes have a pointer cursor.
      const parentCursorStyle = await page.evaluate(() => {
        const nodes = document.getElementsByClassName('content parent');
        return getComputedStyle(nodes[0]).getPropertyValue('cursor');
      });
      expect(parentCursorStyle).toBe('pointer');

      // Leaf nodes have a default cursor
      const leafCursorStyle = await page.evaluate(() => {
        const nodes = document.getElementsByClassName('content leaf');
        return getComputedStyle(nodes[0]).getPropertyValue('cursor');
      });
      expect(leafCursorStyle).toBe('auto');
    },
  }
};

export const withMultipleNestedItems = () => (
  <List items={[
    {
      name: 'Parent',
      thumbnail: defaultProps,
      testOnly_initialState: {
        expanded: true,
      },
      children: [
        {
          name: 'ChildWithChildren',
          thumbnail: defaultProps,
          testOnly_initialState: {
            expanded: true,
          },
          children: [
            {
              name: 'Grandchild',
              thumbnail: defaultProps,
            },
          ]
        },
        {
          name: 'Child',
          thumbnail: defaultProps,
        },
      ],
    },
  ]} />
);

export const withThreeItems = () => (
  <List items={[
    {
      name: 'Item 1',
      thumbnail: defaultProps,
    },
    {
      name: 'Item 2',
      thumbnail: defaultProps,
    },
    {
      name: 'Item 3',
      thumbnail: defaultProps,
    },
  ]} />
);

export const withoutThumb = () => (
  <List items={[
    { name: 'Item' },
  ]} />
);