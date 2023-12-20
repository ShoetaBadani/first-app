import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { Projects } from './components/Projects';
import { BuyerReview, SellerReview } from './components/Reviews';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Header />
      <Footer />
      <HeroSection/>
      <Projects/>
      <BuyerReview/>
      <SellerReview/>
      <Contact/>
    
      
    </div>
  );
}

export default App;
