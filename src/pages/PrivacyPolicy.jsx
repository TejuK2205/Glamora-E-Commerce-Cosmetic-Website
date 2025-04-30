// src/pages/PrivacyPolicy.jsx
import { Accordion } from 'react-bootstrap';

export default function PrivacyPolicy() {
  return (
    <div className="container py-5">
      <h1 className="fw-bold mb-4">Privacy Policy</h1>

      <Accordion defaultActiveKey="0">
        {/* Introduction */}
        <Accordion.Item eventKey="0">
          <Accordion.Header>1. Introduction</Accordion.Header>
          <Accordion.Body>
            <p>Welcome to our Privacy Policy. We value your privacy and are committed to protecting your personal information. This policy explains how we collect, use, and protect your information when you visit our website or interact with our services.</p>
          </Accordion.Body>
        </Accordion.Item>

        {/* Information We Collect */}
        <Accordion.Item eventKey="1">
          <Accordion.Header>2. Information We Collect</Accordion.Header>
          <Accordion.Body>
            <p>We collect various types of information to improve our services. This includes personal information you provide when creating an account or making a purchase, as well as technical information such as your browsing activity and device information.</p>
          </Accordion.Body>
        </Accordion.Item>

        {/* How We Use Your Information */}
        <Accordion.Item eventKey="2">
          <Accordion.Header>3. How We Use Your Information</Accordion.Header>
          <Accordion.Body>
            <p>Your personal information may be used for the following purposes:</p>
            <ul>
              <li>To process orders and deliver products or services.</li>
              <li>To improve our website and services.</li>
              <li>To communicate with you, including sending updates and promotions.</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>

        {/* Sharing Your Information */}
        <Accordion.Item eventKey="3">
          <Accordion.Header>4. Sharing Your Information</Accordion.Header>
          <Accordion.Body>
            <p>We do not sell or rent your personal information to third parties. However, we may share your information with trusted service providers who assist in processing orders, payment transactions, and other essential operations.</p>
          </Accordion.Body>
        </Accordion.Item>

        {/* Data Retention */}
        <Accordion.Item eventKey="4">
          <Accordion.Header>5. Data Retention</Accordion.Header>
          <Accordion.Body>
            <p>We retain your personal information only as long as necessary for the purposes outlined in this policy or as required by law. Once your data is no longer needed, we will securely delete or anonymize it.</p>
          </Accordion.Body>
        </Accordion.Item>

        {/* Security of Your Information */}
        <Accordion.Item eventKey="5">
          <Accordion.Header>6. Security of Your Information</Accordion.Header>
          <Accordion.Body>
            <p>We implement various security measures to protect your personal information from unauthorized access, use, or disclosure. These measures include encryption, secure servers, and strict access controls.</p>
          </Accordion.Body>
        </Accordion.Item>

        {/* Your Rights */}
        <Accordion.Item eventKey="6">
          <Accordion.Header>7. Your Rights</Accordion.Header>
          <Accordion.Body>
            <p>You have certain rights regarding your personal information, including:</p>
            <ul>
              <li>The right to access, update, or delete your data.</li>
              <li>The right to opt-out of marketing communications.</li>
              <li>The right to request a copy of your data in a portable format.</li>
            </ul>
            <p>To exercise these rights, please contact us using the details provided below.</p>
          </Accordion.Body>
        </Accordion.Item>

        {/* Cookies */}
        <Accordion.Item eventKey="7">
          <Accordion.Header>8. Cookies</Accordion.Header>
          <Accordion.Body>
            <p>Our website uses cookies to enhance your experience. Cookies are small files stored on your device that allow us to remember your preferences and improve site functionality. You can manage cookie settings in your browser.</p>
          </Accordion.Body>
        </Accordion.Item>

        {/* Changes to This Privacy Policy */}
        <Accordion.Item eventKey="8">
          <Accordion.Header>9. Changes to This Privacy Policy</Accordion.Header>
          <Accordion.Body>
            <p>We reserve the right to update or modify this Privacy Policy at any time. Any changes will be posted on this page with the updated effective date. We encourage you to review this policy periodically to stay informed about how we protect your information.</p>
          </Accordion.Body>
        </Accordion.Item>

        {/* Contact Us */}
        <Accordion.Item eventKey="9">
          <Accordion.Header>10. Contact Us</Accordion.Header>
          <Accordion.Body>
            <p>If you have any questions about this Privacy Policy or would like to exercise your rights, please contact us at [Insert Contact Information].</p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
