import logo from './logo.svg';
import './App.css';

import {BrowserRouter,Routes,Route} from "react-router-dom" 
import Home from './components/Home';



function App() {
  return (
    <div className="App">
      <BrowserRouter className="bro">
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
      </BrowserRouter>
     
      
    </div>
  );
}

export default App;