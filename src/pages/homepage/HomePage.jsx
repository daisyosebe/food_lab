import Login from "../../components/login/Login.jsx"
import Nav from "../../components/nav/Nav.jsx"

export default function Homepage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-orange-50">
        <h1 className="text-3xl font-bold mb-6">Food Lab 🍽️</h1>
        <Login />
        <Nav/>
      </div>
    )
  }
  