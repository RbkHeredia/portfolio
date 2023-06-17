import './App.css';
import Projects from './page/projects';
import NavBar from './components/nav-bar';
import {
  Route,
  BrowserRouter,
  Routes
} from "react-router-dom";
import Page from './page/page';



function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Page/>}/>
          <Route path='/project/:id' element={<Projects/>} />
        </Routes>
      </BrowserRouter>
       
    </div>
  );
}

export default App;
