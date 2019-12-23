import React from "react";
import {NodeModel, NodeTreeModel} from "../../models";
import "./node-tree-component.scss"
import NodeComponent from "../node/node-component";
import {DataService} from "../../service/data-service";

type StateTypes = {
    data: NodeTreeModel;
}

class NodeTreeComponent extends React.Component<any,StateTypes>{
    dataService: DataService;

    constructor(props: any){
        super(props);
        this.dataService = new DataService();
        this.state = {data: this.getData()};
    }

    getData(): NodeTreeModel {
        return this.dataService.data
    }

    render(){
        let nodeList = this.state.data.nodes.map((node: NodeModel) => {
            return <NodeComponent key={node.id} {...node}  children={node.children}/>
        });
        return (
            <div className='container'>
                {nodeList}
           </div>
        );
    }
}export default NodeTreeComponent
