import React, { ReactNode } from 'react';

import ITreeNodeDatum from './tree-node-datum';

import './tree-node.scss';

interface ITreeNodeProps
{
    datum: ITreeNodeDatum;
}

interface ITreeNodeState
{
    isExpanded: boolean;
}

export default class TreeNode extends React.Component<ITreeNodeProps, ITreeNodeState>
{
    constructor(props: ITreeNodeProps)
    {
        super(props);
        this.state = { isExpanded: false };
    }

    public render(): ReactNode
    {
        const datum = this.props.datum;
        const isExpanded = this.state.isExpanded;

        const clickable = !!datum.childNodeData && datum.childNodeData.length > 0;
        const arrowSpan = clickable ? <span className="arrow">▶</span> : null;

        let triggerClassName = 'trigger';
        if (clickable)
        {
            triggerClassName += ' clickable';
            if (isExpanded)
            {
                triggerClassName += ' expanded';
            }
        }

        const childNodes = datum.childNodeData && datum.childNodeData.map(tnd =>
            <TreeNode key={tnd.id} datum={tnd} />
        );
        const childTree = childNodes && childNodes.length && <ul>{childNodes}</ul>;

        return (
            <li>
                <div className={triggerClassName}>
                    <img src={datum.thumbnail.href} alt={datum.thumbnail.description} title={datum.thumbnail.description}></img>
                    <span>{datum.name}</span>
                    {arrowSpan}
                </div>
                {childTree}
            </li>
        );
    }
}
