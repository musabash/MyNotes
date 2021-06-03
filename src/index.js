import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { DataContextProvider } from './data-context'
import Amplify from 'aws-amplify';
import config from './aws-exports';

Amplify.configure(config);

ReactDOM.render(
  <React.StrictMode>
    <DataContextProvider>
      <App />
    </DataContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);