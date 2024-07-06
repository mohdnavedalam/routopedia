import ReactDOM from 'react-dom/client';
import Header from './Components/Layout/Header';
import Footer from './Components/Layout/Footer';
import Navbar from './Components/Navigation/Navbar';
import Dropdown from './Components/Dropdowns/DropdownButton';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Product from './Pages/Product';
import ProductList from './Pages/ProductList';
import ProductDetails from './Pages/ProductDetails';
import CreateProduct from './Pages/CreateProduct';
import NotFound from './Pages/NotFound';


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <div>
    <BrowserRouter>
      <Header />
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/About' element={<About />}></Route>
        <Route path='Product'>
          <Route path='' element={<Product />}></Route>
          {/* <Route index element={<Product />}></Route> */}
          <Route path='List' element={<ProductList />}></Route>
          <Route path='Details' element={<ProductDetails />}></Route>
          <Route path='Create' element={<CreateProduct />}></Route>
        </Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  </div>
);

// componentDidMount method was being called multiple times. hence replaced React.StrictMode with div
