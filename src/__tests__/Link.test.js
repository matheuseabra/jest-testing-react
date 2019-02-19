import React from 'react';
import renderer from 'react-test-renderer';
import Link from '../components/Link';

it('Link component changes className when hovered', () => {
    const linkComponent = renderer.create(<Link page="https://www.twitter.com">Twitter</Link>);
    let linkTree = linkComponent.toJSON();
    expect(linkTree).toMatchSnapshot();
  
    linkTree.props.onMouseEnter();
    linkTree = linkComponent.toJSON();
  
    linkTree.props.onMouseLeave();
    linkTree = linkComponent.toJSON();
  
    expect(linkTree).toMatchSnapshot();
  });