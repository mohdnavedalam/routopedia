import ReactDOM from 'react-dom/client';
import Header from './Components/Layout/Header';
import Footer from './Components/Layout/Footer';
import Navbar from './Components/Navigation/Navbar';
import Dropdown from './Components/Dropdowns/DropdownButton';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <div>
    <BrowserRouter>
      <Header />
      <Navbar />
      <Footer />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/About' element={<About />}></Route>
      </Routes>
    </BrowserRouter>
  </div>
);

// componentDidMount method was being called multiple times. hence replaced React.StrictMode with div
