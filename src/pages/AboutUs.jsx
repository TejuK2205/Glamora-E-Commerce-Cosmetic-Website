import { FaLeaf, FaRegGem} from 'react-icons/fa';
import { BiCheckShield } from 'react-icons/bi';

export default function AboutUs() {
  return (
    <div className="about-page">
      
      {/* Hero Section */}
      <div className="bg-light py-5">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-4" style={{ color: '#8A2BE2' }}>Our Beauty Story</h1>
              <p className="lead mb-4">
              Beauty is the quiet grace of a sunrise painting the sky in soft hues, the resilience of a flower pushing through cracked pavement, and the warmth of a smile shared between strangers. It lives in the symmetry of nature, the imperfection of art, and the courage found in vulnerability. Beauty is not confined to what the eye can see—it resonates in the kindness of actions, the depth of emotions, and the stories etched into every scar. It whispers through music, lingers in laughter, and rests gently in the moments we often overlook. In its truest form, beauty is everywhere—waiting not to be seen, but to be felt.
              </p>
            </div>
            <div className="col-lg-6">
              <img 
                src="https://media.istockphoto.com/id/625741228/photo/exchanging-ideas-in-the-boardroom.jpg?s=612x612&w=0&k=20&c=_rF9PqS_sggjBVxKLtGk-Hv8_x4GrmWj3HX6VzqcqV8=" 
                alt="Our Team" 
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Mission Section */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-6">
              <h2 className="fw-bold mb-4" style={{ color: '#8A2BE2' }}>Our Mission</h2>
              <p className="mb-4">
                Founded in 2023, Glamora set out to revolutionize the beauty industry by combining 
                high-performance formulas with clean ingredients. We're committed to cruelty-free, 
                sustainable beauty without compromise.
              </p>
              <div className="d-flex align-items-center mb-3">
                <BiCheckShield className="text-primary me-3" size={24} />
                <span>100% Cruelty Free</span>
              </div>
              <div className="d-flex align-items-center mb-3">
                <FaLeaf className="text-primary me-3" size={20} />
                <span>Clean Ingredients</span>
              </div>
              <div className="d-flex align-items-center">
                <FaRegGem className="text-primary me-3" size={20} />
                <span>Luxury Formulas</span>
              </div>
            </div>
            <div className="col-md-6">
              <img 
                src="https://media.istockphoto.com/id/823928832/photo/businessman-shows-the-word-mission.jpg?s=612x612&w=0&k=20&c=1hmJC8oDYIifhdUqzQUWNS6-NVhMwgpjo-fZYkWo0BI=" 
                alt="Our Mission" 
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center fw-bold mb-5" style={{ color: '#8A2BE2' }}>Our Core Values</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm p-4 text-center">
                <h4 className="mb-3">Passion</h4>
                <p>
                  We're beauty enthusiasts first, creating products we love and use daily.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm p-4 text-center">
                <h4 className="mb-3">Sustainability</h4>
                <p>
                  Committed to eco-friendly packaging and responsible sourcing.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm p-4 text-center">
                <h4 className="mb-3">Transparency</h4>
                <p>
                  Full ingredient disclosure - no hidden nasties in our formulas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-5" style={{ color: '#8A2BE2' }}>Meet The Founders</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card border-0 text-center">
                <img 
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLYwZiwpP9ke9w9vyuMQx24PZm8f7rdAbAog&s" 
                  className="card-img-top rounded-circle w-75 mx-auto mt-3" 
                  alt="Founder 1" 
                />
                <div className="card-body">
                  <h5 className="card-title">Sophia Chen</h5>
                  <p className="text-muted">CEO & Formulator</p>
                  <p className="card-text">
                    With 15 years in cosmetic chemistry, Sophia creates our innovative formulas.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 text-center">
                <img 
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPjU2vVrWuBGY8SFPYhZd642VzI8iXQzB2ZQ&s" 
                  className="card-img-top rounded-circle w-75 mx-auto mt-3" 
                  alt="Founder 2" 
                />
                <div className="card-body">
                  <h5 className="card-title">Aisha Johnson</h5>
                  <p className="text-muted">Creative Director</p>
                  <p className="card-text">
                    Aisha brings luxury aesthetics and inclusive beauty to our brand.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 text-center">
                <img 
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRONq8Eg_d7TEVICgBLnRBGvFmnLF0E9JRWwQ&s" 
                  className="card-img-top rounded-circle w-75 mx-auto mt-3" 
                  alt="Founder 3" 
                />
                <div className="card-body">
                  <h5 className="card-title">Elena Rodriguez</h5>
                  <p className="text-muted">Sustainability Lead</p>
                  <p className="card-text">
                    Elena ensures our environmental commitments are met at every step.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-5 bs-body-color text-white">
        <div className="container text-center py-4">
          <h2 className="fw-bold mb-3" style={{ color: '#8A2BE2' }}>Ready to Experience Glamora?</h2>
          <p className="lead mb-4" style={{ color: '#8A2BE2' }}>Discover beauty that's good for you and the planet.</p>
          <a 
            href="/products" 
            className="btn btn-dark btn-lg px-4 py-2 fw-bold" 
            style={{ color: 'white' }}
          >
            Shop Our Collection
          </a>
        </div>
      </section>

    </div>
  );
}