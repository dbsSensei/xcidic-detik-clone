import { useState } from 'react';
// import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import landingPage from './json/landingPage.json';

// import AuthPage from './pages/Auth';
// import BookingsPage from './pages/Bookings';
// import EventsPage from './pages/Events';
import MainNavigation from './components/Navigation/MainNavigation';
import Header from './components/Header/Header';
import AuthContext from './context/auth-context';

import './App.css';
import { AuthType } from './types';
import Content from './components/Content/Content';
import Ads2 from './components/Ads2/Ads2';
import Footer from './components/Footer/Footer';

const initialState: AuthType = {
  token: '',
  userId: '',
  tokenExpiration: 0,
};

function App(): JSX.Element {
  const [state, setState] = useState(initialState);

  const login = ({ token, userId, tokenExpiration }: AuthType) => {
    setState({ ...state, token, userId, tokenExpiration });
  };

  const logout = () => {
    setState({ ...state, token: '', userId: '', tokenExpiration: 0 });
  };

  return (
    <BrowserRouter>
      <AuthContext.Provider value={{ ...state, login, logout }}>
        <MainNavigation />
        <Ads2 />
        <Header data={landingPage} />

        <Content />
        <Footer />
        {/* <main className="main-content">
          <Switch>
            {!state.token && <Redirect path="/" to="/auth" exact />}
            {!state.token && <Redirect path="/bookings" to="/auth" exact />}
            
            {state.token && <Redirect path="/" to="/events" exact />}
            {state.token && <Redirect path="/auth" to="/events" />}

            <Route path="/auth">
              <AuthPage />
            </Route>
            <Route path="/events">
              <EventsPage />
            </Route>
            <Route path="/bookings">
              <BookingsPage />
            </Route>
          </Switch>
        </main> */}
      </AuthContext.Provider>
    </BrowserRouter>
  );
}

export default App;
