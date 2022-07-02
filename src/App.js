import  Header  from './components/Header';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Work from './components/Work';
import Technologies from './components/Technologies';
import Contact from './components/Contact';

function App() {
  return (
    <div className=" m-auto flex flex-col justify-around">
      <Navbar/>
       <Header/>
       <About/>
       <Work/>
       <Technologies/>
       <Contact/>
    </div>
  );
}

export default App;
