import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Layouts/Navbar";
import Add from "./Components/Pages/Add";
import Show from "./Components/Pages/Show";
import Update from "./Components/Pages/Update";
import Delete from "./Components/Pages/Delete";


function App() {
  return (
 <>
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/create" element = {<Add />}/>
      <Route path="/show" element = {<Show />}/>
      <Route path="/update/:userId" element = {<Update/>}/>
      <Route path="/delete/:userId" element = {<Delete/>}/>
    </Routes>
  </BrowserRouter>
 </>
  );
}

export default App;
