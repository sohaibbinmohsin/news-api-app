import './App.css';
import { BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { Navbar, Home, Section, Footer, Search } from '.'

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/:country" element={<Home />} />
          <Route path="/section/:name/:country" element={<Section />} />
          <Route path='/search/:country' element={<Search />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
