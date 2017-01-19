import React from 'react';
import { Route, IndexRoute } from 'react-router'

import App from './containers/App'
import Metage from './containers/Metage'
import MetageIndex from './containers/metage/MetageIndex'
import MetageForm from './containers/metage/MetageForm'
import NotFound from './containers/NotFound'

const routes = (
  <Route path="/" component={App} >
    <IndexRoute component={MetageIndex} />
    <Route path="metage" component={Metage}>
      <IndexRoute component={MetageIndex} />
      <Route path="/metage/index" component={MetageIndex}/>
      <Route path="/metage/form" component={MetageForm}/>
    </Route>
    <Route path="*" component={NotFound} />
  </Route>
)

export default routes
