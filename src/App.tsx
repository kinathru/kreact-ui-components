import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.tsx";
import StepperForms from "./pages/StepperForms.tsx";

function App() {

  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/stepper-forms" element={<StepperForms/>}/>
    </Routes>
  )
}

export default App
