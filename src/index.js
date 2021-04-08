import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Grommet } from 'grommet';
import theme from './theme';

ReactDOM.render(
  <React.StrictMode>
    <Grommet full={true} theme={theme}>
      <App />
    </Grommet>
  </React.StrictMode>,
  document.getElementById('root')
);
