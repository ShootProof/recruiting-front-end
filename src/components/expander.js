import React from 'react';
import Thumbnail from './Thumbnail.js';
import './Expander.css';

class Expander extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            childrenVisible: true
        }
        this.onClickHandler = this.onClickHandler.bind(this);
    }

    onClickHandler = (item) => {
        if(item.children.length > 0){
            this.setState({
                childrenVisible: !this.state.childrenVisible
            });
        }
    };

    render() {
        let styles = {
            'marginLeft': this.props.level * 40
        };

        return this.props.data.map(item => {
            let renderableChildren = null;
            let renderArrow = null;

            if(item.children.length > 0 && this.state.childrenVisible){
                // if there are children to render, we will render them recursively
                renderableChildren = <Expander key={item.id + item.parent} data={item.children} level={this.props.level + 1}/>;
                renderArrow = <i className="material-icons">arrow_drop_down</i>;
                styles = Object.assign({}, styles, { 'cursor': 'pointer'});
            } else if(item.children.length > 0 && !this.state.childrenVisible){
                renderArrow = <i className="material-icons">arrow_right</i>;
            }

            return (
                <React.Fragment key={item.id + 'fragment'}>
                    <div
                        key={`${item.id}_parent`}
                        className='expander'
                        style={styles}
                        onClick={() => this.onClickHandler(item)}
                    >
                        <Thumbnail
                            alt={item.thumbnail.description}
                            src={item.thumbnail.href}
                        />
                        {item.name}
                        {renderArrow}
                    </div>
                    {renderableChildren}
                </React.Fragment>
            );
        });
    }  
}

export default Expander;