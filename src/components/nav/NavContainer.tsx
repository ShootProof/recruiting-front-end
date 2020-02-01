/* Node Module */
import React from 'react';
/* Component Content */
import NavState from './Nav.state';
import { TNavProps, TNavState } from './Nav.type';
import NavView from './NavView';
/* Type */
import { TJsonObject } from '../../types/general.type';

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

  renderChildren = (el: TJsonObject) => (
    el.child.map((obj: any): JSX.Element => (
      <div className="nav-sub-container" key={obj.id}>
        <NavContainer navContent={obj} subNav={true} />
      </div>
    ))
  );

  render() {
    const { expand } = this.state;
    const { navContent, subNav } = this.props;
    return (
      <>
        {!subNav && (
          <div className="nav-root-container" data-testid="nav-root-container" key={navContent.id}>
            <NavView navContent={navContent} isExpand={expand} toggleExpandFn={this.toggleExpand} />
            {navContent.child && this.renderChildren(navContent)}
          </div>
        )}

        {subNav && (
          <>
            <NavView navContent={navContent} isExpand={expand} toggleExpandFn={this.toggleExpand} />
            {navContent.child && this.renderChildren(navContent)}
          </>
        )}
      </>
    );
  }
}

export default NavContainer;
