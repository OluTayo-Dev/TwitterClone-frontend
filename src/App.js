import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hom from './component/Hom';
import Homepage from './component/Homepage';
import Home from './component/Home';
import Counter from './component/Counter';
import Parent from './Responsive/Parent';
import Navbar from "./Navbar/Navbar";
import About from "./component/About";
import Skills from "./component/Skills";
import Contact from "./component/Contact";

import ConditionalRenderingForm from './component/ConditionalRenderingForm';


function App() {
  return (
   <BrowserRouter>
   <Routes>
            <Route path="Homepage" element={< Homepage />} />
            <Route path="/about"   element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="contact" element={<Contact />} />
            <Route path="Home" element={<Home />} />
            <Route path="Hom" element={<Hom />} />
            <Route path="Counter" element={<Counter />} />
            <Route path="Parent" element={<Parent />} />
            <Route path="Navbar" element={<Navbar />} />
            <Route path="ConditionalRenderingForm" element={<ConditionalRenderingForm />} />
   </Routes>

   </BrowserRouter>
  );
}

export default App;
