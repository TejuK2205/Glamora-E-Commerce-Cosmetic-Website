import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and Apple Pay. All payments are processed securely through our encrypted payment gateway."
    },
    {
      question: "How long does shipping take?",
      answer: "Standard shipping typically takes 3-5 business days within the continental US. We also offer expedited shipping options at checkout for faster delivery."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for unopened and unused products. Simply contact our customer service team to initiate a return. Please note that sale items are final and cannot be returned."
    },
    {
      question: "Are your products cruelty-free?",
      answer: "Yes! All Glamora products are 100% cruelty-free and never tested on animals. We're proud to be certified by Leaping Bunny."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Currently, we only ship within the United States. We're working to expand our shipping options in the future."
    },
    {
      question: "How can I track my order?",
      answer: "Once your order ships, you'll receive a confirmation email with tracking information. You can also track your order by logging into your account on our website."
    },
    {
      question: "What ingredients do you avoid in your products?",
      answer: "We formulate without parabens, sulfates, phthalates, formaldehyde, and mineral oil. Our full ingredient lists are available on each product page."
    },
    {
      question: "Can I modify or cancel my order after placing it?",
      answer: "We process orders quickly to ensure fast delivery. If you need to modify or cancel your order, please contact us immediately at support@glamora.com and we'll do our best to accommodate your request."
    }
  ];

  return (
    <div className="faq-page">
      
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h1 className="fw-bold mb-5 text-center" style={{ color: '#8A2BE2' }}>Frequently Asked Questions</h1>
            
            <div className="accordion" id="faqAccordion">
              {faqs.map((faq, index) => (
                <div key={index} className="card border-0 shadow-sm mb-3">
                  <div 
                    className="card-header bg-white p-4 border-0"
                    onClick={() => toggleAccordion(index)}
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="d-flex justify-content-between align-items-center">
                      <h5 className="mb-0 fw-bold">{faq.question}</h5>
                      {activeIndex === index ? (
                        <FaChevronUp className="text-primary" />
                      ) : (
                        <FaChevronDown className="text-primary" />
                      )}
                    </div>
                  </div>
                  <div 
                    className={`collapse ${activeIndex === index ? 'show' : ''}`}
                  >
                    <div className="card-body pt-0 pb-4 px-4">
                      <p className="mb-0">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="card border-0 shadow-sm mt-4">
              <div className="card-body text-center p-4">
                <h5 className="fw-bold mb-3">Still have questions?</h5>
                <p className="mb-4">Our customer care team is available 24/7 to assist you.</p>
                <Link 
                  to="/contact" 
                  className="btn btn-primary px-4 py-2"
                  style={{ backgroundColor: '#8A2BE2', border: 'none' }}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}