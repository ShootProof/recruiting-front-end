import React from 'react';

import ITreeNodeDatum from './tree-node-datum';

import './tree-node.scss';

interface ITreeNodeParams
{
    datum: ITreeNodeDatum;
}

export default function TreeNode({ datum }: ITreeNodeParams) {
  return (
    <li>
      <button>
        <img src={datum.thumbnail.href} alt={datum.thumbnail.description} title={datum.thumbnail.description}></img>
        <span>{datum.name}</span>
      </button>
    </li>
  );
}
