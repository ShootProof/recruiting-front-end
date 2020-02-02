/* Node Module */
import React from 'react';
/* Component Content */
import { TNavProps, TNavViewProps } from './Nav.type';
import './Nav.style.scss';

const getExpandClass = (isExpand: boolean) => (
  isExpand ? 'is-expand' : 'not-expand'
);

const Nav = (props: TNavProps) => {
  const { navContent } = props;
  return (
    <div className="nav-container" data-testid={navContent.id}>
      <img
        src={navContent.thumbnail.href}
        title={navContent.thumbnail.description}
        alt={navContent.thumbnail.description}
        className="nav-thumbnail"
      />
      <div>{navContent.name}</div>
      {navContent.child && <div className="caret" data-testid={`${navContent.id}-nav-caret`}></div>}
    </div>
  );
};

const NavView = (props: TNavViewProps) => {
  const { navContent, isExpand, toggleExpandFn } = props;
  return (
    <>
      {navContent.child && (
        <div
          data-testid={`${navContent.id}-button`}
          className={`div-button ${getExpandClass(isExpand)}`}
          role="button"
          onClick={() => toggleExpandFn()}
        >
          <Nav navContent={navContent} />
        </div>
      )}

      {!navContent.child && (
        <Nav navContent={navContent} />
      )}
    </>
  );
};

export default NavView;
