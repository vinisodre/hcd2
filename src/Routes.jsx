import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';

import Home from './Pages/Home/Home';
import Client from './Pages/Client/Client';
import Product from './Pages/Product/Product';

function Routes(){
  return(
    <BrowserRouter>
    <Switch>
      <Route path='/' exact component={Home}/>
      <Route path='/client' exact component={Client} />
      <Route path='/product' exact component={Product}/>
    </Switch>
    </BrowserRouter>

  );
}

export default Routes;