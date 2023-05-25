import { BrowserRouter } from "react-router-dom"

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, Social } from './components'
import Gg from "./components/Gg"
import Gg2 from "./components/Gg2"
import Gg3 from "./components/Gg3"


const App = () => {
  
  return (
    <BrowserRouter>
      <div className=" relative  z-0 bg-main">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          {/* <Navbar /> */}
          <Hero />

          <Gg/>
          {/* <div className="mt-100"> */}
        {/* <Experience /> */}
        <Gg3/>
          {/* </div> */}
          {/* <Tech/> */}
        <Works/>
        <Contact/>
        <Social/>
      </div>
      </div>
    </BrowserRouter>
  )
}

export default App