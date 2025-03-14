import ProductCard from "../components/ProductCard";

const HomePage = () => {
  // For example, products could be fetched from an API or use static data
  const products = [
    { id: 1, name: "Product 1", description: "Description", price: 100, imageUrl: "image.jpg" },
    // More products...
  ];

  return (
    <div>
      <h1>Home Page</h1>
      <div className="product-list">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
export default HomePage;
