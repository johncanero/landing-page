import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Feature from './components/Feature';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';

function App() {
  return (
    <div>
        <Navbar />
        <Hero />
        <Feature />
        <Testimonials />
        <CallToAction />
    </div>
  );
}

export default App;
