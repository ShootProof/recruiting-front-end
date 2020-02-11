import { INodeData, INodeDictionary } from "./TreeInterfaces";

export function parseData(nodeData: INodeData[], parentId?: number) {
        let parentNodes: INodeData[] = [];
        let dict:  INodeDictionary = {};
        if (nodeData !== undefined) {
            nodeData.forEach(function(node: INodeData) {
                if (node.parent === null || node.parent === parentId) {
                    parentNodes.push(node);
                    if (dict[node.id] === null || dict[node.id] === undefined) {
                        dict[node.id] = []
                    }
                }
                else {
                    if (dict[node.parent] === null || dict[node.parent] === undefined ){
                        dict[node.parent] = [node];
                    }
                    else {
                        dict[node.parent].push(node);
                    }
                }
            });
        }
        return {parentNodes, dict};
}

export function jsonToNodes(data: string) {
    return JSON.parse(data);
}