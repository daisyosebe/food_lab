// import Login from "../../components/login/Login.jsx";
import Nav from "../../components/nav/Nav.jsx";
import Cover from "../../assets/cover.jpg";

const HomePage = () => {
  return (
   <div className="min-h-screen bg-orange-50 flex flex-col">
      {/* Navbar */}

      {/* Container wrapping image and form */}
      <div className="flex flex-row flex-1 items-center justify-center px-4 py-8 gap-8">


        {/* Image Section */}
        <div className="w-1/2 relative flex justify-center item-center">
          <img
            src={Cover}
            alt="Cookbook"
            className="max-w-full h-auto rounded-lg shadow-lg"
          />
      <Nav />
        </div>

        {/* Form Section */}
        <div className="w-1/2">
          {/* <Login /> */}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
