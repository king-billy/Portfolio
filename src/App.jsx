import { BrowserRouter } from 'react-router-dom';
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Projects,
  Tech,
} from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0">
        <div>
          <Navbar />
          <Hero />
        </div>

        <div className="bg-about bg-cover bg-center bg-no-repeat">
          <About />
        </div>

        <div
          className="bg-experienceLight bg-cover bg-center bg-no-repeat 
            ">
          <div
            className="bg-experienceLight bg-cover bg-center 
            bg-no-repeat">
            <Experience />
          </div>
        </div>
        <Projects />
        
        <div className="relative z-0">
          <Contact />
        </div>
      </div>
      
    </BrowserRouter>
  );
};

export default App;
