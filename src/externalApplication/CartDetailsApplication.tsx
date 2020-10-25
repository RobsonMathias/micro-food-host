import React from 'react';
import {registerApplication} from 'single-spa'

function getLifeCycles(path: string) {
  return () => window.System.import(path);
}

export class CartDetailsApplication extends React.Component {

  componentDidMount() {
    registerApplication({
      name: 'cart-details',
      app: getLifeCycles(`/cart/details.js`),
      activeWhen: () => true,
      customProps: {},
    });
  }
  componentDidUpdate() {
  }

  render() {
    return (
      <div data-app={'cart-details'}/>
    );
  }
}
