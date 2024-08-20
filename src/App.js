
import './App.css';
import {BrowserRouter ,Route ,Routes} from 'react-router-dom';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
         <Route path='/checkout' element={<Checkout />} />
          
          <Route path='/' element={<Home />} />

          <Route path='/login' element={<Login />} />

        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
