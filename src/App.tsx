import { Route, Switch } from 'react-router-dom';
import './App.scss';
import About from './components/about/about';
import Home from './components/home';
import PageNotFound from './components/PageNotFound/pageNotFound';

function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route component={PageNotFound} />
      </Switch>
    </>
  );
}

export default App;
