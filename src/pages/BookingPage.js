import React, { useState } from "react";

export function BookingPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    date: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Booking submitted! We’ll get back to you shortly.");
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Book a Service</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="block w-full p-2 border rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="block w-full p-2 border rounded"
          required
        />
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="block w-full p-2 border rounded"
          required
        >
          <option value="">Select a Service</option>
          <option value="Residential Window Cleaning">
            Residential Window Cleaning
          </option>
          <option value="Commercial Window Cleaning">
            Commercial Window Cleaning
          </option>
          <option value="Gutter Cleaning">Gutter Cleaning</option>
          <option value="Pressure Washing">Pressure Washing</option>
        </select>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="block w-full p-2 border rounded"
          required
        />
        <textarea
          name="message"
          placeholder="Additional Notes"
          value={formData.message}
          onChange={handleChange}
          className="block w-full p-2 border rounded"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
        >
          Submit Booking
        </button>
      </form>
    </div>
  );
}
