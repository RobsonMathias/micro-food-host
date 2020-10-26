import React from 'react';
import {registerApplication, unregisterApplication, getAppStatus, MOUNTED} from 'single-spa'

function getLifeCycles(path: string) {
  return () => window.System.import(path);
}

const name = 'cart-details';

export class CartDetailsApplication extends React.Component {

  componentDidMount() {
    registerApplication({
      name,
      app: getLifeCycles(`/cart/details.js`),
      activeWhen: () => true,
      customProps: {},
    });
  }

  componentWillUnmount(): void {
    if (getAppStatus(name) === MOUNTED) {
      unregisterApplication(name).then(console.log)
    }
  }

  render() {
    return (
      <div data-app={name}/>
    );
  }
}
