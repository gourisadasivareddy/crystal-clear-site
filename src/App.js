import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { BookingPage } from "./pages/BookingPage";
import { HomePage } from "./pages/HomePage";
import { ServicesPage } from "./pages/ServicesPage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";

export default function App() {
  return (
    <Router>
      <div className="bg-gray-50 min-h-screen">
        <header className="bg-blue-600 text-white p-4 shadow-md">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">Crystal Clear Professionals</h1>
            <nav>
              <ul className="flex space-x-4">
                <li><Link to="/" className="hover:underline">Home</Link></li>
                <li><Link to="/services" className="hover:underline">Services</Link></li>
                <li><Link to="/booking" className="hover:underline">Book Now</Link></li>
                <li><Link to="/about" className="hover:underline">About Us</Link></li>
                <li><Link to="/contact" className="hover:underline">Contact</Link></li>
              </ul>
            </nav>
          </div>
        </header>

        <main className="container mx-auto py-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        <footer className="bg-gray-800 text-white p-4 mt-8">
          <div className="container mx-auto text-center">
            <p>&copy; 2025 Crystal Clear Professionals. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

// HomePage Component
export function HomePage() {
  return (
    <div className="text-center">
      <h2 className="text-4xl font-bold mb-4">Welcome to Crystal Clear Professionals</h2>
      <p className="mb-6 text-lg">Your trusted partner for residential and commercial window cleaning services.</p>
      <Link to="/booking">
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">Book a Cleaning Now</button>
      </Link>
    </div>
  );
}

// ServicesPage Component
export function ServicesPage() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Our Services</h2>
      <ul className="list-disc pl-5 space-y-2">
        <li>Residential Window Cleaning</li>
        <li>Commercial Window Cleaning</li>
        <li>Gutter Cleaning</li>
        <li>Pressure Washing</li>
      </ul>
    </div>
  );
}

// AboutPage Component
export function AboutPage() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">About Us</h2>
      <p>We are a professional window cleaning company with over 10 years of experience in providing top-notch services to our customers. Our mission is to ensure your windows sparkle and shine with our expert cleaning techniques.</p>
    </div>
  );
}

// ContactPage Component
export function ContactPage() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
      <p>Have any questions or need assistance? Get in touch with us:</p>
      <ul className="list-none space-y-2">
        <li><strong>Email:</strong> info@crystalclearprofessionals.co.uk</li>
        <li><strong>Phone:</strong> +44 123 456 7890</li>
        <li><strong>Address:</strong> 123 Cleaning Lane, London, UK</li>
      </ul>
    </div>
  );
}
