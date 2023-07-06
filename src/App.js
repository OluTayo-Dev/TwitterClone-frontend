import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hom from './component/Hom';
import Homepage from './component/Homepage';
import Home from './component/Home';
import Counter from './component/Counter';
import Parent from './Responsive/Parent';


function App() {
  return (
   <BrowserRouter>
   <Routes>
            <Route path="Homepage" element={< Homepage />} />
            <Route path="Home" element={<Home />} />
            <Route path="Hom" element={<Hom />} />
            <Route path="Counter" element={<Counter />} />
            <Route path="Parent" element={<Parent />} />
   </Routes>

   </BrowserRouter>
  );
}

export default App;
