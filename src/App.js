import './App.css';

import {Component, Fragment} from 'react';

// Custom: Cats
import CatsViewer from './Cats/CatsViewer';
import FormCatAdd from './Cats/FormCatAdd';

// Okta
import withAuth from './withAuth';

class App extends Component {
  render() {
    const { auth } = this.props;

    if (auth.loading) 
      return null;
  
    const { user, login, logout } = auth;
  
    return (
      <div className="App">
        { user ? (
          <Fragment>
            <p>Signed in as {user.name}</p>
            <button
              className="m-2"
              color="secondary"
              onClick={() => logout()}
            >
              Sign Out (signed in as {user.name})
            </button>

            <FormCatAdd />
          </Fragment>
        ) : (
          <button
            className="my-2"
            color="primary"
            onClick={() => login()}
          >
            Sign In
          </button>
        )}

        <CatsViewer />
      </div>
    );
  }
}

export default withAuth(App);