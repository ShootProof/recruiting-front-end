import React from 'react';

import TreeNode from './tree/tree-node';
import ITreeNodeDatum from './tree/tree-node-datum';
import testData from './tree/test-data';

import './tree/tree-node.scss';

const treeNodeData = buildTreeNodeData(testData);
const treeNodes = treeNodeData.map(tnd =>
  <TreeNode key={tnd.id} datum={tnd} />
);

export default function App()
{
  return (
    <ul>{treeNodes}</ul>
  );
}

function buildTreeNodeData(nodes: ITreeNodeDatum[], parent: number | null = null): ITreeNodeDatum[]
{
  const parentNode = nodes.find(n => n.id === parent);

  const roots = nodes.filter(n => n.parent === parent);
  for (let root of roots)
  {
    root.parentNodeDatum = parentNode;
    root.childNodeData = buildTreeNodeData(nodes, root.id);
  }

  return roots;
}
