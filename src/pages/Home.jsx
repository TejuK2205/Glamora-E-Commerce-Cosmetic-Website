import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setFeaturedProducts([
        { id: 1, name: 'Luxury Matte Lipstick Set', price: 34.99, image: 'data:image/jpeg;base64,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', category: 'makeup' },
        { id: 2, name: 'Hydrating Night Serum', price: 49.99, image: 'https://dr.rashel.in/cdn/shop/files/Vitamincserum-01_1_11zon_1080x.jpg?v=1722516132', category: 'skincare' },
        { id: 3, name: 'Floral Eau de Parfum', price: 59.99, image: 'data:image/jpeg;base64,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', category: 'fragrance' },
      ]);
      
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="home-page" style={{backgroundColor:'#E6E6FA'}}>
      
      {/* Hero Banner */}
      <div className="hero-banner position-relative overflow-hidden" style={{ height: '700px' }}>
        <div className="h-100 w-100 position-absolute" style={{
          background: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3))',
          zIndex: 1
        }}></div>
        <img 
          src="https://static.vecteezy.com/system/resources/thumbnails/039/191/895/small_2x/ai-generated-makeup-brushes-and-cosmetic-powders-arranged-neatly-on-a-clean-white-background-copy-space-banner-photo.jpg" 
          alt="Beauty Products" 
          className="h-100 w-100 object-fit-cover position-absolute"
        />
        <div className="container h-100 position-relative d-flex align-items-center" style={{ zIndex: 2 }}>
          <div className="text-white align-center" style={{ maxWidth: '500px' }}>
            <h1 className="display-4 fw-bold mb-5">Discover Your Glow</h1>
            <p className="lead mb-3">Premium cosmetics carefully crafted for your unique beauty</p>
            <Link to="/products" className="btn btn-primary btn-lg px-4 py-2" style={{ backgroundColor: '#8A2BE2', border: 'none' }}>
              Shop Now
            </Link>
          </div>
        </div>
      </div>
      
      {/* Featured Categories */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4">
              <Link to="/products?category=makeup" className="category-card position-relative d-block overflow-hidden rounded" style={{ height: '250px' }}>
                <img 
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWUQ7nGQV_Pkh-mJW8NWkRBuKRVfaUsKRxrw&s" 
                  alt="Makeup" 
                  className="h-100 w-100 object-fit-cover"
                />
                <div className="position-absolute bottom-0 start-0 p-3">
                  <h3 className="text-dark fw-bold">Makeup</h3>
                  <button className="btn btn-sm text-white" style={{ backgroundColor: 'rgba(138, 43, 226, 0.8)' }}>
                    Shop Collection
                  </button>
                </div>
              </Link>
            </div>
            <div className="col-md-4">
              <Link to="/products?category=skincare" className="category-card position-relative d-block overflow-hidden rounded" style={{ height: '250px' }}>
                <img 
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShvxKGTXzpv6gOaXYkG3XcsgvVG6AuptSKwQ&s" 
                  alt="Skincare" 
                  className="h-100 w-100 object-fit-cover"
                />
                <div className="position-absolute bottom-0 start-0 p-3">
                  <h3 className="text-dark fw-bold">Skincare</h3>
                  <button className="btn btn-sm text-white" style={{ backgroundColor: 'rgba(138, 43, 226, 0.8)' }}>
                    Shop Collection
                  </button>
                </div>
              </Link>
            </div>
            <div className="col-md-4">
              <Link to="/products?category=fragrance" className="category-card position-relative d-block overflow-hidden rounded" style={{ height: '250px' }}>
                <img 
                  src="data:image/jpeg;base64,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" 
                  alt="Fragrance" 
                  className="h-100 w-100 object-fit-cover"
                />
                <div className="position-absolute bottom-0 start-0 p-3">
                  <h3 className="text-dark fw-bold">Fragrance</h3>
                  <button className="btn btn-sm text-white" style={{ backgroundColor: 'rgba(138, 43, 226, 0.8)' }}>
                    Shop Collection
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Products */}
      <section className="py-5">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="fw-bold">Featured Products</h2>
            <Link to="/products" className="text-decoration-none" style={{ color: '#8A2BE2' }}>
              View All →
            </Link>
          </div>
          
          {loading ? (
            <div className="text-center py-5">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            <div className="row g-4">
              {featuredProducts.map(product => (
                <div key={product.id} className="col-md-4 col-lg-3">
                  <div className="card h-100 border-0 shadow-sm product-card">
                    <div className="position-relative">
                      <img 
                        src={product.image} 
                        className="card-img-top object-fit-cover" 
                        alt={product.name}
                        style={{ height: '250px' }}
                      />
                      <button className="btn btn-sm position-absolute top-0 end-0 m-2 bg-white rounded-circle" style={{ width: '36px', height: '36px' }}>
                        <i className="bi bi-heart text-danger"></i>
                      </button>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">{product.name}</h5>
                      <p className="card-text text-dark fw-bold">${product.price.toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
      
      {/* Video Banner */}
      <section className="py-5">
        <div className="container text-center">
          <h2 className="mb-4 fw-bold">Our Beauty Philosophy</h2>
          <div className="ratio ratio-16x9 rounded overflow-hidden shadow-sm">
            <iframe 
              src="https://www.youtube.com/embed/otej7WLdPh0?si=JWsQay0MD03hlZxW" 
              title="Brand Story" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="py-5 text-dark">
        <div className="container" >
          <div className="row justify-content-center">
            <div className="col-md-8 text-center">
              <h2 className="fw-bold mb-3">Join Our Beauty Community</h2>
              <p className="mb-4">Subscribe to get 15% off your first order and exclusive access to new launches</p>
              <form className="d-flex">
                <input 
                  type="email" 
                  className="form-control form-control-lg rounded-0" 
                  placeholder="Your email address" 
                />
                <button 
                  className="btn btn-dark rounded-0 px-4" 
                  type="submit"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}