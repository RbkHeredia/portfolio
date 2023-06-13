import './App.css';

import About from './components/about';
import Contact from './components/contact';
import NavBar from './components/nav-bar';
import Technologies from './components/technologies';
import {
  Route,
  BrowserRouter,
  Routes
} from "react-router-dom";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<About/>}/>
            <Route path='/projects' element={<Technologies/>}/>
            <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
       
    </div>
  );
}

export default App;
