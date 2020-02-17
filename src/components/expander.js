import React from 'react';

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
            // console.log('this is item: ', item);
            // console.log(`onClick: setting ${item.name} from ${item.childrenVisible} to ${!item.childrenVisible}`);
            this.setState({
                childrenVisible: !this.state.childrenVisible
            });
        }
    };

    render() {
        // console.log('props: ', props.data);
        const styles = {
            'backgroundColor': '#f2f2f2',
            'marginLeft': this.props.level * 40,
            'marginBottom': '5px',
            'height': '25px',
            'borderRadius': '3px',
            'padding': '0 10px',
            'display': 'flex',
            'alignItems': 'center',
            'cursor': 'pointer'
        };

        return this.props.data.map(item => {
            if(item.children.length > 0 && this.state.childrenVisible){
                return (
                    <React.Fragment key={item.id + 'fragment'}>
                        <div key={`${item.id}_parent`} style={styles} onClick={() => this.onClickHandler(item)}>{item.name}</div>
                        <Expander key={item.id + item.parent} data={item.children} level={this.props.level + 1}/>
                    </React.Fragment>
                );
            } else {
                return <div key={`${item.id}_leaf`} style={styles} onClick={() => this.onClickHandler(item)}>{item.name} </div>
            }
        });
    }  
}

export default Expander;