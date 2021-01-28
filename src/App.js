import './App.css'
import { Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import '../node_modules/materialize-css/dist/css/materialize.min.css'
import '../node_modules/materialize-css/dist/js/materialize.min'
import Navbar from './components/layouts/Navbar'
import Page from './components/layouts/Page'
import Carousel from './components/layouts/Carousel'

function App() {
  return (
    <Router>
        <Fragment>
            <Route exact path='/' component={Navbar}/>
            <Route exact path='/' component={Page}/>
            <Route exact path='/' component={Carousel}/>
        </Fragment>
    </Router>
  );
}

export default App;
