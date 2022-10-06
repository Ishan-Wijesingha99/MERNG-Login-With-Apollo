import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import client from './ApolloClient'
import { ApolloProvider } from '@apollo/react-hooks'
import { BrowserRouter } from 'react-router-dom'

// our react application needs access too...
// client
// Authorization Context
// React Router


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <React.StrictMode>
        <p>Hello</p>
      </React.StrictMode>
    </BrowserRouter>
  </ApolloProvider>
)

