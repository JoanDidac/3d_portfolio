import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components';

const App = () => {

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
       <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center xl:bg-[length:100%_100%] md:bg-[length:100%_100%] xs:bg-[length:1025px_932px]"> {/*xl:bg-[length:100%_100%] md:bg-[length:100%_100%] xs:bg-[length:952px_932px] */}
        <Navbar />
        <Hero />
        </div>
        <div className="xl:translate-x-[-10px]   mx-[20px] z-0 bg-primary ">
        <About />
        <Experience />
        <div className="pl-[2em] xl:ml-[3em]">
        <Tech />
        </div>
        <div className="w-full  bg-primary  xl:ml-[4em]">
        <Works />
        </div>
        <div className="pl-3 xl:translate-x-[.9em]  ">
        <Feedbacks />
        </div>
        </div>
        <div className=" w-full h-full xl:pl-[8em] -mt-16 relative z-0 "> 
        <Contact />
        <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
