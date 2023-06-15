import './App.css';

import About from './components/about';
import ContactPage from './components/contactPage';
import Experience from './components/experience';
import Home from './components/home';
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
      <NavBar/>
      <Home/>
      <About/>
      <Experience/>
      <Technologies/>
      <ContactPage/>
     {/*  <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
            <Route path='/projects' element={<Technologies/>}/>
            <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </BrowserRouter> */}
       
    </div>
  );
}

export default App;
