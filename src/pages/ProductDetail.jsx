import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchProductById } from "../services/api";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import Button from "../components/Button";

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchProductById(id)
      .then(setProduct)
      .catch(() => setError("Product not found"));
  }, [id]);

  if (error) return <ErrorMessage message={error} />;
  if (!product) return <Loader />;

  return (
    <div className="max-w-4xl mx-auto p-6 grid md:grid-cols-2 gap-8">
      <img
        src={product.image}
        alt={product.title}
        className="h-80 mx-auto object-contain"
      />

      <div>
        <h2 className="text-2xl font-bold mb-4">
          {product.title}
        </h2>
        <p className="text-gray-600 mb-4">
          {product.description}
        </p>
        <p className="mb-2">
          <strong>Category:</strong> {product.category}
        </p>
        <p className="text-indigo-600 font-bold text-xl mb-6">
          ₹ {product.price*10}
        </p>

        <Button onClick={() => navigate("/products")}>
          Back to Products
        </Button>
      </div>
    </div>
  );
}

export default ProductDetail;
