import React from 'react';

import ITreeNodeDatum from './tree-node-datum';

import './tree-node.scss';

interface ITreeNodeParams
{
    datum: ITreeNodeDatum;
}

export default function TreeNode({ datum }: ITreeNodeParams) {
  const clickable = !!datum.childNodeData && datum.childNodeData.length > 0;
  const triggerClassName = 'trigger' + (clickable ? ' clickable' : '');
  const arrowSpan = clickable ? <span className="arrow">▶</span> : null;

  return (
    <li>
      <div className={triggerClassName}>
        <img src={datum.thumbnail.href} alt={datum.thumbnail.description} title={datum.thumbnail.description}></img>
        <span>{datum.name}</span>
        {arrowSpan}
      </div>
    </li>
  );
}
