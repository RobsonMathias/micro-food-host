import React from 'react';
import {registerApplication} from 'single-spa'

function getLifeCycles(path: string) {
  return () => window.System.import(path);
}

export class CartResumeApplication extends React.Component {

  componentDidMount() {
    registerApplication({
      name: 'cart',
      app: getLifeCycles(`/cart/resume.js`),
      activeWhen: () => true,
      customProps: {},
    });
  }
  componentDidUpdate() {
  }

  render() {
    return (
      <div data-app={'cart-resume'}/>
    );
  }
}
