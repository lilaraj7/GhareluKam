import './App.css';
import Navbar from './Component/Navbar';
import Home from './Pages/Home';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Property from './Pages/Property';
import Services from './Pages/Services';
import Blogs from './Pages/Blogs';
import Contact from './Pages/Contact';
import Register from './Pages/Register';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //    <Navbar/>
    //   </header>
    //   <div className='main-home'>
    //   {/* <Home/> */}
      
    //   </div>
     
    // </div>
    <BrowserRouter>
    <header className="App-header">
    <Navbar/>
    </header>
    <div className='main-home'>
    <Routes>
   
      <Route path='/' element={<Home/>}/>
      <Route path='Property' element={<Property/>}/>
      <Route path='Services' element={<Services/>}/>
      <Route path='Blogs' element={<Blogs/>}/>
      <Route path='Contact' element={<Contact/>}/>
      <Route path='Register' element={<Register/>}/>
    
    </Routes>
    </div>
    </BrowserRouter>



  );
}

export default App;
