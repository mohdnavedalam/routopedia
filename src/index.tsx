import ReactDOM from 'react-dom/client';
import Header from './Components/Layout/Header';
import Footer from './Components/Layout/Footer';
import Navbar from './Components/Navigation/Navbar';
import Dropdown from './Components/Dropdowns/DropdownButton';


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <div>
    <Header />
    <Navbar />
    <Footer />
  </div>
);

// componentDidMount method was being called multiple times. hence replaced React.StrictMode with div
