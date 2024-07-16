import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components';

const App = () => {

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
        </div>
        <div className="   mx-[20px] z-0 bg-primary ">
        <About />
        <Experience />
        <div className="pl-[50px] ">
        <Tech />
        </div>
        <div className="w-full  bg-primary  pl-14 ">
        <Works />
        <Feedbacks />
        </div>
        </div>
        <div className=" w-full h-full  pl-[7%]  -mt-16 relative z-0 "> 
        <Contact />
        <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
