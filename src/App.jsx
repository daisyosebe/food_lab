import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage";
import Asian from "./pages/asian";
import African from "./pages/african";
import European from "./pages/european";
import SouthAmerica from "./pages/southamerican";
import MyKitchen from "./pages/mykitchen";
import Cooked from "./pages/cooked";
import Favorite from "./pages/favorite";
import Pantry from "./pages/pantry";
import Cart from "./pages/cart";

import './App.css'



// import viteLogo from '/vite.svg'

// function App() {

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         </div>
//     </>
//   )
// }

function App(){
  return (
<BrowserRouter basename="/food_lab">
<Routes>
    <Route
      path="/"
      element={
        <HomePage/>
      }
    />

<Route
      path="/African"
      element={
        <African/>
      }
    />

<Route
      path="/Asian"
      element={
        <Asian/>
      }
    />

<Route
      path="/European"
      element={
        <European/>
      }
    />

<Route
      path="/SouthAmerican"
      element={
        <SouthAmerica/>
      }
    />

<Route
      path="/MyKitchen"
      element={
        <MyKitchen/>
      }
    />

<Route
      path="/Cooked"
      element={
        <Cooked/>
      }
    />  

<Route
      path="/Favorite"
      element={
        <Favorite/>
      }
    />

<Route
      path="/Pantry"
      element={
        <Pantry/>
      }
    />

<Route
      path="/Cart"
      element={
        <Cart/>
      }
    />  
</Routes>



</BrowserRouter>  )
}

export default App
