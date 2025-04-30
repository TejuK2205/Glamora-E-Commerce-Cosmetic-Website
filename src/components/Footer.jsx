import { FaInstagram, FaTwitter, FaFacebookF, FaYoutube } from 'react-icons/fa';
import { BiEnvelope, BiPhone } from 'react-icons/bi';

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row g-4">
          {/* Company Info */}
          <div className="col-md-4">
            <h5 className="text-uppercase mb-4" style={{ color: '#8A2BE2' }}>Glamora</h5>
            <p>Your premier destination for luxury cosmetics and beauty products.</p>
            <div className="mt-4">
              <h6 className="mb-3">Contact Us</h6>
              <p className="mb-1">
                <BiEnvelope className="me-2" />
                support@glamora.com
              </p>
              <p>
                <BiPhone className="me-2" />
                +1 (800) 123-4567
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-md-2">
            <h5 className="text-uppercase mb-4" style={{ color: '#8A2BE2' }}>Shop</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="/products" className="text-white text-decoration-none">All Products</a>
              </li>
              <li className="mb-2">
                <a href="/products?category=makeup" className="text-white text-decoration-none">Makeup</a>
              </li>
              <li className="mb-2">
                <a href="/products?category=skincare" className="text-white text-decoration-none">Skincare</a>
              </li>
              <li className="mb-2">
                <a href="/products?category=fragrance" className="text-white text-decoration-none">Fragrance</a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="col-md-2">
            <h5 className="text-uppercase mb-4" style={{ color: '#8A2BE2' }}>Help</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="/faq" className="text-white text-decoration-none">FAQs</a>
              </li>
              <li className="mb-2">
                <a href="/contact" className="text-white text-decoration-none">Contact</a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="col-md-2">
            <h5 className="text-uppercase mb-4" style={{ color: '#8A2BE2' }}>Legal</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="/privacy" className="text-white text-decoration-none">Privacy Policy</a>
              </li>
              <li className="mb-2">
                <a href="/terms" className="text-white text-decoration-none">Terms & Conditions</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-md-2">
            <h5 className="text-uppercase mb-4" style={{ color: '#8A2BE2' }}>Stay Connected</h5>
            <div className="d-flex mb-4">
              <a href="https://www.instagram.com" className="text-white me-3">
                <FaInstagram size={20} />
              </a>
              <a href="https://twitter.com" className="text-white me-3">
                <FaTwitter size={20} />
              </a>
              <a href="https://www.facebook.com" className="text-white me-3">
                <FaFacebookF size={20} />
              </a>
              <a href="https://www.youtube.com" className="text-white">
                <FaYoutube size={20} />
              </a>
            </div>
            <div>
              <p className="small">Subscribe for 15% off your first order!</p>
              <div className="input-group mb-3">
                <input 
                  type="email" 
                  className="form-control form-control-sm" 
                  placeholder="Your email" 
                />
                <button 
                  className="btn btn-sm text-white" 
                  style={{ backgroundColor: '#8A2BE2' }}
                  type="button"
                >
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>

        <hr className="mt-4 mb-3" style={{ borderColor: 'rgba(255,255,255,0.1)' }} />

        <div className="row">
          <div className="col-md-6 text-center text-md-start">
            <p className="small mb-0">&copy; {new Date().getFullYear()} Glamora. All rights reserved.</p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <p className="small mb-0">
              Payment methods: 
              <span className="ms-2">Visa</span>
              <span className="ms-2">Mastercard</span>
              <span className="ms-2">PayPal</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
