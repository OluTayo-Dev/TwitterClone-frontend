import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hom from './component/Hom';
import Homepage from './component/Homepage';
import Home from './component/Home';


function App() {
  return (
   <BrowserRouter>
   <Routes>
            <Route path="Homepage" element={< Homepage />} />
            <Route path="Hom" element={<Hom />} />
            <Route path="Home" element={<Home />} />
   </Routes>
   </BrowserRouter>
  );
}

export default App;
