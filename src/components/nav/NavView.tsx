/* Node Module */
import React from 'react';
/* Component Content */
import { TNavProps, TNavViewProps } from './Nav.type';
import NavContainer from './NavContainer';

const Nav = (props: TNavProps) => {
  const { navContent } = props;
  return (
    <div>
      <img src={navContent.thumbnail.href} alt={navContent.thumbnail.description} />
      <div>{navContent.name}</div>
    </div>
  );
};

const NavView = (props: TNavViewProps) => {
  const { navContent, isExpand, toggleExpandFn } = props;
  return (
    <>
      {navContent.child && (
        <div role="button" onClick={() => toggleExpandFn()}>
          <Nav navContent={navContent} />
        </div>
      )}

      {isExpand && navContent.child && navContent.child.map((el): JSX.Element => (
        <NavContainer key={el.id} navContent={el} />
      ))}

      {!navContent.child && (
        <Nav navContent={navContent} />
      )}
    </>
  );
};

export default NavView;
