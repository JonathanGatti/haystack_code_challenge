import React from 'react';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { token } from './config';
import { ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://staging-graphql.haystackapp.io/',
  cache: new InMemoryCache(),
  headers: {
    authorization: `Bearer ${token}`,
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
