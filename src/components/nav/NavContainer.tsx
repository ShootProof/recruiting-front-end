/* Node Module */
import React from 'react';
/* Component Content */
import NavState from './Nav.state';
import { TNavProps, TNavState } from './Nav.type';
import NavView from './NavView';

class NavContainer extends React.Component<TNavProps, TNavState> {
  state = NavState;

  componentDidMount() {
    const { navContent } = this.props;
    if (navContent.child && navContent.parent !== null) {
      this.toggleExpand();
    }
  }

  toggleExpand = () => {
    const { expand } = this.state;
    this.setState({
      expand: !expand,
    });
  }

  render() {
    const { expand } = this.state;
    const { navContent } = this.props;
    return <NavView navContent={navContent} isExpand={expand} toggleExpandFn={this.toggleExpand} />;
  }
}

export default NavContainer;
