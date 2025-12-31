import { useNavigate } from "react-router-dom";

function Card({ product }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/products/${product.id}`)}
      className="bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition cursor-pointer p-4"
    >
      <img
        src={product.image}
        alt={product.title}
        className="h-40 mx-auto object-contain mb-4"
      />
      <h3 className="text-sm font-medium line-clamp-2 text-gray-900 dark:text-gray-100">
        {product.title}
      </h3>
      <p className="text-indigo-600 dark:text-indigo-400 font-semibold mt-2">
        ₹ {product.price*10}
      </p>
    </div>
  );
}

export default Card;
