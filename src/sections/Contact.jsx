// React and icon imports
import { useState, useEffect } from "react";
import {
  FaUser,
  FaEnvelope,
  FaRegCommentDots,
  FaPhone,
  FaRegFileAlt,
} from "react-icons/fa";
import emailjs from "emailjs-com";
import "../styles/Contact.css";

// Initial form and error states
const initialState = {
  name: "",
  email: "",
  subject: "",
  phone: "",
  message: "",
};

const initialErrors = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

// Field validation logic
const validate = (field, value) => {
  switch (field) {
    case "name":
      return value.trim().length < 2
        ? "Name must be at least 2 characters."
        : "";
    case "email":
      return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(value)
        ? ""
        : "Enter a valid email address.";
    case "subject":
      return value.trim() === "" ? "Subject is required." : "";
    case "message":
      return value.trim().length < 10
        ? "Message must be at least 10 characters."
        : "";
    default:
      return "";
  }
};

const Contact = () => {
  // State management for form, errors, touched fields, loading, success, and theme
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState(initialErrors);
  const [touched, setTouched] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [theme, setTheme] = useState(
    document.body.classList.contains("light-theme") ? "light" : "dark"
  );

  // Listen for theme changes to update colors dynamically
  useEffect(() => {
    const handleThemeChange = () => {
      setTheme(
        document.body.classList.contains("light-theme") ? "light" : "dark"
      );
    };
    window.addEventListener("themechange", handleThemeChange);
    return () => window.removeEventListener("themechange", handleThemeChange);
  }, []);

  // Handle input changes and validate fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: validate(name, value) }));
  };

  // Mark field as touched and validate on blur
  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: validate(name, form[name]) }));
  };

  // Check if form is valid for submission
  const isValid =
    Object.values(errors).every((err) => err === "") &&
    form.name &&
    form.email &&
    form.subject &&
    form.message;

  // Handle form submission and send email via EmailJS
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    if (!isValid) {
      setLoading(false);
      return;
    }

    try {
      await emailjs.send(
        "service_tj5m947",
        "template_r14x9xb",
        form,
        "I89Qo2el_H01M216N"
      );
      setForm(initialState);
      setTouched({});
      setSuccess("Message sent successfully!");
    } catch (err) {
      setSuccess("Failed to send message. Please try again later.");
      console.error(err);
    }
    setLoading(false);
  };

  // Render contact form UI
  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-title">Contact Me</h2>
      <form className="contact-form" onSubmit={handleSubmit} autoComplete="off">
        {/* Name & Email fields */}
        <div className="input-row">
          <div className="input-group">
            <FaUser className="icon" />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.name && touched.name ? "input-error" : ""}
            />
            {errors.name && touched.name && (
              <span className="error-message">{errors.name}</span>
            )}
          </div>
          <div className="input-group">
            <FaEnvelope className="icon" />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.email && touched.email ? "input-error" : ""}
            />
            {errors.email && touched.email && (
              <span className="error-message">{errors.email}</span>
            )}
          </div>
        </div>

        {/* Subject & Phone fields */}
        <div className="input-row">
          <div className="input-group">
            <FaRegFileAlt className="icon" />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={form.subject}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.subject && touched.subject ? "input-error" : ""}
            />
            {errors.subject && touched.subject && (
              <span className="error-message">{errors.subject}</span>
            )}
          </div>
          <div className="input-group">
            <FaPhone className="icon" />
            <input
              type="tel"
              name="phone"
              placeholder="Phone (optional)"
              value={form.phone}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Message field */}
        <div className="input-group message-group">
          <FaRegCommentDots className="icon" />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.message && touched.message ? "input-error" : ""}
            rows={5}
          />
          {errors.message && touched.message && (
            <span className="error-message">{errors.message}</span>
          )}
        </div>

        {/* Submit button */}
        <button type="submit" disabled={!isValid || loading}>
          {loading ? "Sending..." : "Send Message"}
        </button>

        {/* Success or error message */}
        {success && <div className="form-success">{success}</div>}
      </form>
    </section>
  );
};

export default Contact;
