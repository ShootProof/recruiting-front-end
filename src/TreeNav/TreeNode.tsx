import React from 'react';
import './TreeNode.css';
import { IThumbnail, INodeData, INodeDictionary } from './TreeInterfaces';
import { parseData } from './TreeUtilies';

export interface ITreeNodeProps {
    id: number;
    title: string;
    thumbnail: IThumbnail;
    childNodes: INodeData[];
    dict: INodeDictionary;
}

type TreeNodeState = { childrenHidden: boolean };

export default class TreeNode extends React.Component<ITreeNodeProps, TreeNodeState>{
    constructor(props: ITreeNodeProps) {
        super(props);
        this.state = {childrenHidden: false};
    }
    render() {
        const title = this.props.title;
        const id = this.props.id;
        const thumbnail = this.props.thumbnail;
        const childNodes = this.props.childNodes;
        const originalDict = this.props.dict;
        const {parentNodes} = parseData(childNodes, id);

        const hideChildren = () => {
            this.setState({
                childrenHidden: !this.state.childrenHidden
            });
        }

        return (
            <div>
            <div className="node" onClick={hideChildren}>
                <div className="thumbail-holder">
                    <img className="thumbnail" src={thumbnail.href} alt={thumbnail.description}/>
                </div>
                <div className="node-title">
                    {title}
                </div>
                <div className={`${parentNodes.length === 0 ? 'hide-arrow': 'show-arrow'} ${this.state.childrenHidden ? 'arrow-right' : 'arrow-down'} `}/>
            </div>
            <div className={ this.state.childrenHidden ? 'child-node-holder-hidden' : 'child-node-holder'}>
                {parentNodes.map(function(pNode: INodeData) {
                        return (
                        <TreeNode key={pNode.name} id={pNode.id} title={pNode.name} thumbnail={pNode.thumbnail} childNodes={originalDict[pNode.id]} dict={originalDict}/>
                        )
                })}
            </div>
            </div>
        )
    }
}