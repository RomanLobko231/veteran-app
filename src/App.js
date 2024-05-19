import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './pages/AppRouter';
import Navbar from './UI/navbar/Navbar';
import Footer from './UI/footer/Footer';
import ScrollToTop from './pages/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop>
    <Navbar/>
    <div style={{minHeight: '100vh', marginTop: '90px', width: '95%'}}>
          <AppRouter/>
    </div>
    <Footer/>
    </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
