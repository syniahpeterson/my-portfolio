import React, { useState, useRef, useEffect } from "react";
import {
  FaUser,
  FaEnvelope,
  FaRegCommentDots,
  FaPhone,
  FaRegFileAlt,
} from "react-icons/fa";
import emailjs from "emailjs-com";
import useScrollAnimation from "../hooks/useScrollAnimation";
import "../styles/contact.css";
const initialState = {
  name: "",
  email: "",
  subject: "",
  phone: "",
  message: "",
};
const initialErrors = { name: "", email: "", subject: "", message: "" };

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
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState(initialErrors);
  const [touched, setTouched] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const sectionRef = useScrollAnimation(0.3);

  useEffect(() => {
    const handleThemeChange = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const inView = rect.top < window.innerHeight && rect.bottom > 0;
        if (inView) {
          sectionRef.current.classList.add("active");
        } else {
          sectionRef.current.classList.remove("active");
        }
      }
    };
    window.addEventListener("themechange", handleThemeChange);
    return () => window.removeEventListener("themechange", handleThemeChange);
  }, [sectionRef]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: validate(name, value) });
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched({ ...touched, [name]: true });
    setErrors({ ...errors, [name]: validate(name, form[name]) });
  };

  const isValid =
    Object.values(errors).every((err) => err === "") &&
    form.name &&
    form.email &&
    form.subject &&
    form.message;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValid) return;
    setLoading(true);
    setSuccess("");
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

  return (
    <section
      ref={sectionRef}
      className="contact-section scroll-section"
      id="contact"
    >
      <h2 className="contact-title">Contact Me</h2>
      <form className="contact-form" onSubmit={handleSubmit} autoComplete="off">
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
              autoComplete="name"
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
              autoComplete="email"
            />
            {errors.email && touched.email && (
              <span className="error-message">{errors.email}</span>
            )}
          </div>
        </div>
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
              autoComplete="off"
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
              autoComplete="tel"
            />
          </div>
        </div>
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
            autoComplete="off"
          />
          {errors.message && touched.message && (
            <span className="error-message">{errors.message}</span>
          )}
        </div>
        <button type="submit" disabled={!isValid || loading}>
          {loading ? "Sending..." : "Send Message"}
        </button>
        {success && <div className="form-success">{success}</div>}
      </form>
    </section>
  );
};

export default Contact;
