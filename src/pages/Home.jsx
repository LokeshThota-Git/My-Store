import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

function Home() {
  const navigate = useNavigate();

  return (
    <div className=" flex items-center justify-center min-h-[80vh]">
       <div className="flex flex-col items-center justify-center py-20 text-center">
      <h2 className="text-3xl font-bold mb-4">
        Welcome to FakeStore
      </h2>
      <p className="text-gray-600 max-w-md mb-6">
        A modern React SPA showcasing products using FakeStoreAPI with clean UI and smooth navigation.
      </p>
      <Button onClick={() => navigate("/products")}>
        Browse Products
      </Button>
    </div> 
    </div>
    
  );
}

export default Home;
