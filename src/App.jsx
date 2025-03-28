import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cover from "./pages/cover";
import Asian from "./pages/asian";
import African from "./pages/african";
import European from "./pages/european";
import SouthAmerica from "./pages/southamerican";
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
        <Cover/>
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
</Routes>
</BrowserRouter>  )
}

export default App
