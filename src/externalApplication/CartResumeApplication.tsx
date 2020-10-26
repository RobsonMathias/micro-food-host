import React from 'react';
import {getAppStatus, MOUNTED, registerApplication, unregisterApplication} from 'single-spa'

function getLifeCycles(path: string) {
  return () => window.System.import(path);
}

const name = 'cart-resume';

export class CartResumeApplication extends React.Component {

  componentDidMount() {
    registerApplication({
      name,
      app: getLifeCycles(`/cart-app/resume.js`),
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
