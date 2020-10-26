import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import {CheckoutPage} from './CheckoutPage';
import {CatalogPage} from './CatalogPage';
import {CartPage} from './CartPage';

const Routes = ({children}: any) => {
  return (
    <BrowserRouter>
      {children}
      <Switch>
        <Route component={CatalogPage} exact path={'/'} />
        <Route component={CheckoutPage} exact path={'/checkout'} />
        <Route component={CartPage} exact path={'/cart'} />
      </Switch>
    </BrowserRouter>
  )
}

export { Routes }
