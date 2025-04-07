import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage.jsx";
import Asian from "./pages/asian/Asian.jsx";
import African from "./pages/african/African.jsx";
import European from "./pages/european/European.jsx";
import SouthAmerica from "./pages/southamerican/SouthAmerica.jsx";
import MyKitchen from "./pages/mykitchen/MyKitchen.jsx";
import Cooked from "./pages/cooked/Cooked.jsx";
import Favorite from "./pages/favorite/Favorite.jsx";
import Pantry from "./pages/pantry/Shelf.jsx";
import Cart from "./pages/cart/Cart.jsx";
import ProtectedRoute from "./context/ProtectedRoute.jsx";

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

export default function App(){
  return (
<BrowserRouter basename="/">
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
        <ProtectedRoute>
          <MyKitchen/>
        </ProtectedRoute>
      }
    />

<Route
      path="/Cooked"
      element={
        <ProtectedRoute>
          <Cooked/>
        </ProtectedRoute>
      }
    />  

<Route
      path="/Favorite"
      element={
        <ProtectedRoute>
          <Favorite/>
        </ProtectedRoute>      }
    />

<Route
      path="/Pantry"
      element={
        <ProtectedRoute>
          <Pantry/>
        </ProtectedRoute>      }
    />

<Route
      path="/Cart"
      element={
        <ProtectedRoute>
          <Cart/>
        </ProtectedRoute>      }
    />  
</Routes>



</BrowserRouter>  )
}

