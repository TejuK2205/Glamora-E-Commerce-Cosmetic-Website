// src/pages/TermsConditions.jsx
import { Accordion } from 'react-bootstrap';

export default function TermsConditions() {
  return (
    <div className="container py-5">
      <h1 className="fw-bold mb-4">Terms and Conditions</h1>

      <Accordion defaultActiveKey="0">
        {/* Introduction */}
        <Accordion.Item eventKey="0">
          <Accordion.Header>1. Introduction</Accordion.Header>
          <Accordion.Body>
            <p>Welcome to our website. These Terms and Conditions govern your use of this website and any associated services. By accessing or using our website, you agree to comply with and be bound by these terms.</p>
          </Accordion.Body>
        </Accordion.Item>

        {/* Use of Website */}
        <Accordion.Item eventKey="1">
          <Accordion.Header>2. Use of Website</Accordion.Header>
          <Accordion.Body>
            <p>You agree to use this website in accordance with applicable laws and regulations. You are prohibited from using the website for any unlawful purposes, including but not limited to illegal content, fraud, and spamming.</p>
          </Accordion.Body>
        </Accordion.Item>

        {/* Product Information */}
        <Accordion.Item eventKey="2">
          <Accordion.Header>3. Product Information</Accordion.Header>
          <Accordion.Body>
            <p>We make every effort to ensure that the products displayed on the website are accurate and up to date. However, we do not guarantee the accuracy, completeness, or reliability of any product descriptions, prices, or availability.</p>
          </Accordion.Body>
        </Accordion.Item>

        {/* Orders and Payment */}
        <Accordion.Item eventKey="3">
          <Accordion.Header>4. Orders and Payment</Accordion.Header>
          <Accordion.Body>
            <p>By placing an order on our website, you agree to pay for the products or services ordered. We accept payment through various methods, including credit cards, debit cards, and other methods as outlined on our website.</p>
          </Accordion.Body>
        </Accordion.Item>

        {/* Returns and Refunds */}
        <Accordion.Item eventKey="4">
          <Accordion.Header>5. Returns and Refunds</Accordion.Header>
          <Accordion.Body>
            <p>Our return and refund policies are outlined in a separate section. Please refer to the return policy for detailed instructions regarding returns and refunds.</p>
          </Accordion.Body>
        </Accordion.Item>

        {/* Limitation of Liability */}
        <Accordion.Item eventKey="5">
          <Accordion.Header>6. Limitation of Liability</Accordion.Header>
          <Accordion.Body>
            <p>We will not be liable for any damages arising out of your use or inability to use the website, including indirect, incidental, or consequential damages. Our liability is limited to the maximum extent permitted by law.</p>
          </Accordion.Body>
        </Accordion.Item>

        {/* Privacy Policy */}
        <Accordion.Item eventKey="6">
          <Accordion.Header>7. Privacy Policy</Accordion.Header>
          <Accordion.Body>
            <p>Your use of the website is also governed by our Privacy Policy, which outlines how we collect, use, and protect your personal information. Please review our Privacy Policy for more information.</p>
          </Accordion.Body>
        </Accordion.Item>

        {/* Modifications */}
        <Accordion.Item eventKey="7">
          <Accordion.Header>8. Modifications</Accordion.Header>
          <Accordion.Body>
            <p>We reserve the right to modify these Terms and Conditions at any time. Any changes will be posted on this page, and the effective date will be updated accordingly. It is your responsibility to review these terms periodically.</p>
          </Accordion.Body>
        </Accordion.Item>

        {/* Contact Us */}
        <Accordion.Item eventKey="8">
          <Accordion.Header>9. Contact Us</Accordion.Header>
          <Accordion.Body>
            <p>If you have any questions or concerns regarding these Terms and Conditions, please contact us at [Insert Contact Information].</p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
