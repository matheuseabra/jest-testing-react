import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('title to contain React Jest Testing 101', () => {
  const element = renderer.create(<h3>
    React Jest Testing 101
  </h3>);

  expect(element).toMatchSnapshot();
});


