import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import AppRoutes from './Routes/AppRoutes';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
function App() {
  return (
    <div className="App">
      <Header />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;
