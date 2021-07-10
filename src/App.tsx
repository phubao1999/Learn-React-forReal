import { Route, Switch } from 'react-router-dom';
import './App.scss';
import Home from './components/home';
import PageNotFound from './components/PageNotFound/pageNotFound';

function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route component={PageNotFound} />
      </Switch>
    </>
  );
}

export default App;
