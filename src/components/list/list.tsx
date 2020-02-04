import React, { Component } from 'react';
import uuidv1 from 'uuid/v1';
import Thumbnail, { ThumbnailProps } from '../thumbnail/thumbnail';
import './list.css';

export interface ListProps {
  items?: ListItemProps[];
}

export interface ListItemProps {
  name: string;
  thumbnail?: ThumbnailProps;
  children?: ListItemProps[];
  testOnly_initialState?: ListItemState;
}

interface ListItemState {
  expanded: boolean;
}

export class List extends Component<ListProps, {}> {
  render() {
    if (this.props.items) {
      const items = this.props.items.map((item) =>
        <ListItem key={uuidv1()} {...item} />);
      return <ul className='list'>
        {items}
      </ul>;
    }
    return '';
  }
}

class ListItem extends Component<ListItemProps, ListItemState> {
  constructor(props: ListItemProps) {
    super(props);
    this.state = {
      expanded: false,
      ...props.testOnly_initialState,
    };
  }

  handleClick() {
    this.setState({
      expanded: !this.state.expanded,
    });
  }

  render() {
    return <li>
      <div onClick={() => this.handleClick()}
        className={`content ${this.props.children ? 'parent' : 'leaf'} ${this.state.expanded ? 'expanded' : ''}`}>
        {this.props.thumbnail ? <Thumbnail {...this.props.thumbnail} /> : ''}
        <span className='title'>
          {this.props.name}
        </span>
      </div>
      {this.state.expanded ? <List items={this.props.children} /> : ''}
    </li>;
  }
}

export default List;