import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Navbar from './Components/Navbar/Navbar';
import Products from "./Components/Products/Products";
import SingleRecipe from "./Components/SingleRecipe/SingleRecipe";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/About' element={<About />}></Route>
        <Route path='/Contact' element={<Contact />}></Route>
        <Route path='/Products' element={<Products />}></Route>
        <Route path="/Products/:id" element={<SingleRecipe />} />
      </Routes>
    </div>
  );
}

export default App;