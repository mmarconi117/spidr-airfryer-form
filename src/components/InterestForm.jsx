import React, { useState } from "react";
import "./InterestForm.css";

export default function InterestForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    costGuess: "",
    pin: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "pin") {
      const raw = value.replace(/\D/g, "").slice(0, 16);
      const formatted = raw.match(/.{1,4}/g)?.join("-") || "";
      setFormData((prev) => ({ ...prev, [name]: formatted }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    setFormData({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      costGuess: "",
      pin: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="interest-form">
      <h2>Reserve Your Air Fryer</h2>

      <input
        name="firstName"
        placeholder="First Name"
        value={formData.firstName}
        onChange={handleChange}
        required
      />

      <input
        name="lastName"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={handleChange}
        required
      />

      <input
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
        required
      />

      <input
        name="email"
        type="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <input
        name="costGuess"
        type="number"
        placeholder="Guess the cost ($)"
        value={formData.costGuess || ""}
        onChange={handleChange}
        required
      />

      <input
        name="pin"
        placeholder="####-####-####-####"
        value={formData.pin}
        onChange={handleChange}
        required
      />

      <button type="submit">Submit</button>
    </form>
  );
}
