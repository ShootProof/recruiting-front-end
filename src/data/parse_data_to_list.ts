import { ListItemProps } from '../components/list/list';
import { ThumbnailProps } from '../components/thumbnail/thumbnail';

interface ListItemData {
  id: number;
  name: string;
  thumbnail?: ThumbnailProps;
  parent: number | null;
}

export default function (items: ListItemData[]): ListItemProps[] {
  const propsItems: Array<ListItemData & ListItemProps> = items;
  const idToIndex: {
    [key: number]: number;
  } = {};
  for (let i = 0; i < propsItems.length; i++) {
    idToIndex[propsItems[i].id] = i;
  }
  for (const item of propsItems) {
    // Parent can be 0, so a falsey check is not good enough.
    if (item.parent !== null) {
      const parent = propsItems[idToIndex[item.parent]];
      const children: ListItemProps[] = parent.children || [];
      children.push(item);
      parent.children = children;
    }
  }
  // Keep only the top-level items (those with no parent).
  return propsItems.filter((item) => item.parent === null);
}
