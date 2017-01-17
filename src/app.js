import React from 'react';
import ReactDOM from 'react-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

ReactDOM.render(
  <div>
    <h1>Hello, world</h1>
    <MuiThemeProvider>
      <RaisedButton label="Default" />
    </MuiThemeProvider>
  </div>,
  document.getElementById('content')
);
