
// import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router-dom";

import {Route, Routes } from "react-router-dom";
import "./assets/css/munamii.css";
import Header from "./components/header2";
import Home from "./components/home";
import Footer from "./components/footer";
import About from './components/about';
import Contact from './components/contact';
import Products from './components/Products';

// let router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Header/>}>
//       <Route index element={Home}></Route>
//       <Route path="About"> </Route>
//     </Route>
//   )
// )
function App() {

  return (
    <>
    <div className="body_overlay">
      <Header/>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>}/>
          <Route path="/products" element={<Products/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </div>
      <Footer />
    </div>
    </>
  )
}

export default App
