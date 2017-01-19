import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import injectTapEventPlugin from "react-tap-event-plugin"

import configureStore from './store/configureStore'
import routes from './routes'

injectTapEventPlugin()

let state = {
  metage: {
    segments: [
      {
        id: 1,
        name: 'John Smith',
        domains: [
          'hogehoge.com', 'hogehoge.com', 'hogehoge.com', 'hogehoge.com',
          'hogehoge.com', 'hogehoge.com', 'hogehoge.com', 'hogehoge.com',
          'hogehoge.com', 'hogehoge.com', 'hogehoge.com', 'hogehoge.com',
          'hogehoge.com', 'hogehoge.com', 'hogehoge.com', 'hogehoge.com',
          'hogehoge.com', 'hogehoge.com', 'hogehoge.com', 'hogehoge.com',
        ],
      },
      {
        id: 2,
        name: 'Randal White',
        domains: ['hogehoge.com'],
      },
      {
        id: 3,
        name: 'Stephanie Sanders',
        domains: ['hogehoge.com'],
      },
      {
        id: 4,
        name: 'Steve Brown',
        domains: ['hogehoge.com'],
      },
      {
        id: 5,
        name: 'Joyce Whitten',
        domains: ['hogehoge.com'],
      },
      {
        id: 6,
        name: 'Samuel Roberts',
        domains: ['hogehoge.com'],
      },
      {
        id: 7,
        name: 'Adam Moore',
        domains: ['hogehoge.com'],
      },
    ]
  }
}

const store = configureStore(browserHistory, state)
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById("root")
)
