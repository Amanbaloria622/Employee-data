import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Nav } from "./assets/nav";
import { Data } from "./assets/data";
import { About } from "./assets/About";
import { Contact } from "./assets/Contact";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Nav></Nav>
        <Routes>
          <Route path="/" element={<Data></Data>}></Route>
          <Route path="/About" element={<About></About>}></Route>
          <Route path="/Contact" element={<Contact></Contact>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
