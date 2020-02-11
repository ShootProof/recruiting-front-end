import React from 'react';
import './TreeNav.css';
import TreeNode from './TreeNode';
import { parseData, jsonToNodes } from './TreeUtilies';
import { INodeData } from './TreeInterfaces';

export interface ITreeNavProps {
    data: string;
}

export default class TreeNav extends React.Component<ITreeNavProps>{
    data = this.props.data;
    render() {
        const parsedData = jsonToNodes(this.data);
        const {parentNodes, dict} = parseData(parsedData);
        return (
            <div className="node-holder">
                {parentNodes.map(function(pNode: INodeData){
                    return (
                    <TreeNode key={pNode.name} id={pNode.id} title={pNode.name} thumbnail={pNode.thumbnail} childNodes={dict[pNode.id]} dict={dict}/>
                    )
                })}
            </div>
        )
    }
}