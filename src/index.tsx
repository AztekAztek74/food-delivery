import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { BasketState } from './context/basket/BasketState'
//information pages
import { App } from './pages/informationPages/App/App'
import { Home } from './pages/informationPages/Home/Home'
import { Contacts } from './pages/informationPages/Contacts/Contacts'
import { Basket } from './pages/informationPages/Basket/Basket'
import { Checkout } from './pages/informationPages/Checkout/Checkout'

//food pages

import { PastaPage } from './pages/foodPages/PastaPage/PastaPage'
import { PizzaPage } from './pages/foodPages/PizzaPage/PizzaPage'
import { SoupsPage } from './pages/foodPages/SoupsPage/SoupsPage'

ReactDOM.render(
  <BasketState>
    <BrowserRouter>
      <App>
        <Switch>
          <Route exact component={Home} path='/food-delivery' />
          <Route component={Contacts} path='/food-delivery/contacts' />
          <Route component={Basket} path='/food-delivery/basket' />
          <Route component={Checkout} path='/food-delivery/checkout' />
          <Route component={PastaPage} path='/food-delivery/food/pasta' />
          <Route component={PizzaPage} path='/food-delivery/food/pizza' />
          <Route component={SoupsPage} path='/food-delivery/food/soup' />
        </Switch>
      </App>
    </BrowserRouter>
  </BasketState>
  ,document.getElementById('root')
)

serviceWorker.unregister()
