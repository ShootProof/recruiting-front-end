import React from 'react';
import {NodeModel} from "../../models";
import "./node-component.scss"

type StateTypes = {
    open: boolean;
    hidden: boolean;
}

class NodeComponent extends React.Component<NodeModel,StateTypes>{

    constructor(props: NodeModel){
        super(props);
        this.state = {open: false, hidden: !!props.parent};

        this.toggleOpen = this.toggleOpen.bind(this);
    }

    toggleOpen(){
        this.setState({open: !this.state.open});
    }

    render(){
        // create the list of next-level children
        let childrenList = this.props.children && this.state.open ? this.props.children.map((child: NodeModel) => {
            return <NodeComponent key={child.id} {...child}  children={child.children}/>
        }) : '';
        // add dynamic classes based on parent and child status as well as if the node is open
        let additionalNodeClass = this.props.parent ? 'child' : '';
        let additionalCardClass = (this.props.children && this.props.children.length >= 0) ? 'pointer' : '';
        let iconClass = (!this.props.children || this.props.children.length === 0) ? 'hidden' : '';
        iconClass += this.state.open ? ' rot-90-cw' : '';

        return (
            <div className={'node no-select ' + additionalNodeClass}>
                <div onClick={this.toggleOpen} className={'card ' + additionalCardClass}>
                    <div className='content inline'>
                        <span data-tooltip={this.props.thumbnail.description} data-tooltip-location="right">
	                        <img src={this.props.thumbnail.href} alt={this.props.thumbnail.description} />
                        </span>
                    </div>
                    <div className='title inline vertical-center'>
                        {this.props.name}
                    </div>
                    <img className={'expander vertical-center ' + iconClass} src="https://img.icons8.com/windows/32/000000/play.png" alt='arrow icon indicating open or not' />
                </div>
                {childrenList}
            </div>
        )
    }

}export default NodeComponent
