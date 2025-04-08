import Login from "../../components/login/Login.jsx";
import Nav from "../../components/nav/Nav.jsx";
import Cover from "../../assets/cover.jpg";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-orange-50 flex flex-col">
      {/* Navbar */}
      <Nav />

      {/* Container wrapping image and form */}
      <div className="flex flex-row flex-1 items-center justify-center px-4 py-8 gap-8 border-[5px] border-black">
        {/* Image Section */}
        <div className="w-1/2 flex justify-center border-[5px] border-black">
          <img
            src={Cover}
            alt="Cookbook"
            className="max-w-full h-auto border-[5px] border-black"
          />
        </div>

        {/* Form Section */}
        <div className="w-1/2 border-[5px] border-black">
          <Login />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
