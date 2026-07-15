import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import CollectionPage from "./Pages/CollectionPage";
import Navbar from "./Components/Navbar";
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  return (
    <div className="min-h-screen text-white w-full bg-gray-950">
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/collection" element={<CollectionPage/>}/>
      </Routes>

    <ToastContainer/>
    </div>
  );
};

export default App;
