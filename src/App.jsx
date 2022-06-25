import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'
import Home from './pages/Home'
import LogIn from './pages/LogIn'
import SignUp from './pages/SignUp'
import Product from './pages/Product'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

function App() {
  const { authIsReady, user } = useAuthContext()
  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/">
              {!user && <Redirect to="/login" />}
              {user && <Home />}
            </Route>
            <Route path="/product">
              {!user && <Redirect to="/login" />}
              {user && <Product />}
            </Route>
            <Route path="/login">
              {user && <Redirect to="/" />}
              {!user && <LogIn />}
            </Route>
            <Route path="/signup">
              {user && <Redirect to="/" />}
              {!user && <SignUp />}
            </Route>
          </Switch>
          <Footer />
        </BrowserRouter>
      )}
    </div>
  );
}

export default App