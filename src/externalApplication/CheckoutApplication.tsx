import React from 'react';
import {getAppStatus, MOUNTED, registerApplication, unregisterApplication} from 'single-spa'

function getLifeCycles(path: string) {
  return () => window.System.import(path);
}
const name = 'checkout';

export class CheckoutApplication extends React.Component {

  componentDidMount() {
    registerApplication({
      name,
      app: getLifeCycles(`/checkout-app/index.js`),
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
