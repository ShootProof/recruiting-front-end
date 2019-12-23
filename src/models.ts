export class NodeTreeModel{
    nodes: Array<NodeModel> = [];

    constructor(tree: Array<Object>){
        tree.map((item) => this.nodes.push(item as NodeModel));
        this.nodes = this.nodes.sort((first: NodeModel, second: NodeModel) => first.id > second.id ? 1 : 0);
        this.findChildren()
    }

    findChildren(){
        this.nodes.map((node) => {
            if(node.parent){
                if(!this.nodes[node.parent].children){
                    this.nodes[node.parent].children = []
                }
                this.nodes[node.parent].children.push(node)
                delete this.nodes[this.nodes.indexOf(node)];
            }
            return true;
        });
        console.error(this.nodes)
    }
}

export class NodeModel {
    thumbnail!: ThumbnailModel;
    id!: number;
    parent!: number;
    name!: string;
    children: Array<NodeModel> = []
}

export class ThumbnailModel{
    href!: string;
    description!: string;
}
