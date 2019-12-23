import * as data from "../data/test-data.json";
import {NodeTreeModel} from "../models";

export class DataService{
    private dataVar: any = (data as any).default = data;
    private tree: NodeTreeModel = new NodeTreeModel(this.dataVar['default']);


    get data(): NodeTreeModel{
        return this.tree
    }
}
