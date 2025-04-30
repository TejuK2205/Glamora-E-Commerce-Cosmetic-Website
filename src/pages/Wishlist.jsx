import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Wishlist() {
  const [wishlistItems, setWishlistItems] = useState([]);

  // Load wishlist from localStorage on mount
  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    setWishlistItems(storedWishlist);
  }, []);

  const saveWishlist = (items) => {
    setWishlistItems(items);
    localStorage.setItem('wishlist', JSON.stringify(items));
  };

  const removeFromWishlist = (id) => {
    const updated = wishlistItems.filter(item => item.id !== id);
    saveWishlist(updated);
  };

  const moveToCart = (id) => {
    const product = wishlistItems.find(item => item.id === id);
    if (!product) return;

    // Add to cart
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));

    // Remove from wishlist
    removeFromWishlist(id);
    alert('Moved to cart!');
  };

  if (wishlistItems.length === 0) {
    return (
      <div className="container py-5 text-center">
        <h2 className="mb-3">Your wishlist is empty</h2>
        <Link to="/products" className="btn btn-primary">Browse Products</Link>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <h2 className="fw-bold mb-4">Your Wishlist</h2>
      <div className="row g-4">
        {wishlistItems.map(product => (
          <div key={product.id} className="col-md-4 col-lg-3">
            <div className="card h-100 border-0 shadow-sm product-card">
              <img 
                src={product.image} 
                alt={product.name} 
                className="card-img-top object-fit-cover" 
                style={{ height: '250px' }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.name}</h5>
                <p className="text-primary fw-bold">${product.price.toFixed(2)}</p>
                <div className="mt-auto d-grid gap-2">
                  <button className="btn btn-outline-primary" onClick={() => moveToCart(product.id)}>
                    Move to Cart
                  </button>
                  <button className="btn btn-outline-danger" onClick={() => removeFromWishlist(product.id)}>
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
