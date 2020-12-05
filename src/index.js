import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Okta
import { Security, ImplicitCallback } from '@okta/okta-react';

// Apollo
import { ApolloProvider } from 'react-apollo';
import apolloClient from './apollo/apolloClient';

ReactDOM.render(
  <BrowserRouter>
    <Security
      issuer={`${process.env.REACT_APP_OKTA_ORG_URL}/oauth2/default`}
      redirect_uri={`${window.location.origin}/implicit/callback`}
      client_id={process.env.REACT_APP_OKTA_CLIENT_ID}
    >
      <ApolloProvider client={apolloClient}>
        <Route path="/implicit/callback" component={ImplicitCallback} />
        <Route path="/" component={App} />
      </ApolloProvider>,
    </Security>
  </BrowserRouter>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
