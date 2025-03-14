import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  // Fetch product data from the backend
  useEffect(() => {
    axios.get(`https://api.example.com/products/${id}`)
      .then(response => setProduct(response.data))
      .catch(error => console.error(error));
  }, [id]);

  // Add the product to the cart in localStorage
  const handleAddToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || []; // Get the existing cart or an empty array
    cart.push(product); // Add the product to the cart
    localStorage.setItem('cart', JSON.stringify(cart)); // Save the updated cart in localStorage
    alert("Product added to cart!"); // Optional: Display an alert or confirmation message
  };

  // If the product is still loading, show a loading message
  if (!product) return <p>Loading...</p>;

  return (
    <div className="product-detail">
      <img src={product.imageUrl} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>${product.price}</p>
      {/* Add to Cart button */}
      <button onClick={() => handleAddToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetailPage;

