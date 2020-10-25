import React from 'react';
import {registerApplication} from 'single-spa'

function getLifeCycles(path: string) {
  return () => window.System.import(path);
}

export class CatalogApplication extends React.Component {

  componentDidMount() {
    registerApplication({
      name: 'catalog',
      app: getLifeCycles(`/catalog/index.js`),
      activeWhen: () => true,
      customProps: {},
    });
  }
  componentDidUpdate() {
  }

  render() {
    return (
      <div data-app={'catalog'}/>
    );
  }
}
