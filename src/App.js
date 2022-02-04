import './App.css';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
// import  About from  './components/About';
import Footer from './components/Footer';
import Home from './components/Home';

function App() {
  return (
    <>
      <Navbar />
      <Home/>
      <Contact/>
      {/* <About/>*/}
      
      <Footer /> 
    </>
  );
}

export default App;
