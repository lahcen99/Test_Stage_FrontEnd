import FilmsList from './Componenets/FilmsList';
import './App.css';
import {BrowserRouter as Router ,Route , Switch} from 'react-router-dom';
import Filmdetails from './Componenets/Filmdetails';

function App() {
  return (
   <Router>
     <Switch>
       <Route exact path='/' component={FilmsList} />
       <Route exact path='/filmdt' component={Filmdetails} />
     </Switch>
   </Router>
    
  );
}

export default App;
