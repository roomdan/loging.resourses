import './App.css';
import { Provider } from 'react-redux';
import { store } from './REDUX/store/store';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import { lazy, Suspense } from 'react';
import Loader from "./components/loaders/loader"

function App() {

  const InitPage = lazy(()=>import("./views/singUp"))
  const Profile = lazy(()=>import('./views/Sesion.view/profile'))

  return <Provider store={store}>
    <Router>
      <Switch>
          <Suspense fallback={<Loader/>}>
              <Route exact path='/' component={InitPage}/>
              <Route  path='/profile' component={Profile} />
          </Suspense>
      </Switch>
    </Router>
  </Provider>
}

export default App;
