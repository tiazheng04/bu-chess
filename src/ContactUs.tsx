// Contact Us page with contact form
import { useState } from "react";
import ShrinkOnScroll from "./components/ShrinkOnScroll";
import terrier from "./assets/bu-chess-logo.png";

function ContactUs() {
  // ADDED: your Formspree form ID
  const FORMSPREE_ID = "xyznjknn"; // e.g., "f/mnqrdlka"

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(null);

  // ADDED: basic client-side validation helper (optional)
  const isValid = () =>
    formData.name.trim() &&
    /\S+@\S+\.\S+/.test(formData.email) &&
    formData.subject.trim() &&
    formData.message.trim();

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // CHANGED: submit to Formspree via fetch
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    if (!isValid()) {
      setIsSubmitting(false);
      setSubmitStatus("error");
      return;
    }
    
    try {
      // Build FormData that Formspree expects
      const payload = new FormData();
      payload.append("name", formData.name);
      payload.append("email", formData.email); 
      payload.append("subject", formData.subject);
      payload.append("message", formData.message);

      payload.append("_subject", `[BU Chess] ${formData.subject}`); // ADDED
      payload.append("_gotcha", ""); // ADDED

      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: payload,
        headers: { Accept: "application/json" } // ADDED: ensures JSON response
      });

      if (res.ok) {
        // Reset the form on success
        setFormData({ name: "", email: "", subject: "", message: "" });
        setSubmitStatus("success");
      } else {
        // Formspree returns 422 for validation errors, surface message if present
        try {
          const data = await res.json();
          console.error("Formspree error:", data);
        } catch {}
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <ShrinkOnScroll
        threshold={300}
        largeSize="350px"
        smallSize="100px"
        className="d-flex flex-row justify-content-end"
        shrink={false}
      >
        <img src={terrier} alt="logo" style={{ height: "50%" }} />
        <span style={{ fontSize: "30%" }}>BU CHESS</span>
      </ShrinkOnScroll>
      
      <div style={{ 
        display: "flex", 
        flexDirection: "column", 
        alignItems: "center",
        padding: "3rem 1rem",
        maxWidth: "100vw"
      }}>
        
        <div style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          maxWidth: "800px",
          gap: "3rem"
        }}>
          {/* Contact form section */}
          <div style={{
            width: "100%",
            padding: "2rem",
            backgroundColor: "#f8f8f8",
            borderRadius: "10px",
            boxShadow: "0 2px 12px rgba(0,0,0,0.08)"
          }}>
            <h2 style={{ marginBottom: "1.5rem" }}>Send us a message</h2>
            
            {submitStatus === "success" && (
              <div style={{ 
                padding: "1rem", 
                backgroundColor: "#d4edda",
                color: "#155724",
                borderRadius: "5px",
                marginBottom: "1rem"
              }}>
                Thank you for your message! We'll get back to you soon.
              </div>
            )}
            
            {submitStatus === "error" && (
              <div style={{ 
                padding: "1rem", 
                backgroundColor: "#f8d7da",
                color: "#721c24",
                borderRadius: "5px",
                marginBottom: "1rem"
              }}>
                There was an error sending your message. Please try again later.
              </div>
            )}
            
            <form onSubmit={handleSubmit} style={{ width: "100%" }}>
              <div style={{ 
                display: "flex", 
                flexWrap: "wrap", 
                gap: "1rem",
                marginBottom: "1rem" 
              }}>
                <div style={{ flex: "1 1 300px" }}>
                  <label htmlFor="name" style={{ display: "block", marginBottom: "0.5rem" }}>Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    autoComplete="name" // ADDED
                    style={{
                      width: "100%",
                      padding: "0.75rem",
                      borderRadius: "5px",
                      border: "1px solid #ddd",
                      fontSize: "1rem"
                    }}
                  />
                </div>
                
                <div style={{ flex: "1 1 300px" }}>
                  <label htmlFor="email" style={{ display: "block", marginBottom: "0.5rem" }}>Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    autoComplete="email" // ADDED
                    style={{
                      width: "100%",
                      padding: "0.75rem",
                      borderRadius: "5px",
                      border: "1px solid #ddd",
                      fontSize: "1rem"
                    }}
                  />
                </div>
              </div>
              
              <div style={{ marginBottom: "1rem" }}>
                <label htmlFor="subject" style={{ display: "block", marginBottom: "0.5rem" }}>Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  style={{
                    width: "100%",
                    padding: "0.75rem",
                    borderRadius: "5px",
                    border: "1px solid #ddd",
                    fontSize: "1rem"
                  }}
                />
              </div>
              
              <div style={{ marginBottom: "1.5rem" }}>
                <label htmlFor="message" style={{ display: "block", marginBottom: "0.5rem" }}>Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  style={{
                    width: "100%",
                    padding: "0.75rem",
                    borderRadius: "5px",
                    border: "1px solid #ddd",
                    fontSize: "1rem",
                    resize: "vertical"
                  }}
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  padding: "0.75rem 2rem",
                  backgroundColor: "#ffcccc",
                  border: "none",
                  borderRadius: "5px",
                  fontSize: "1rem",
                  cursor: isSubmitting ? "not-allowed" : "pointer",
                  opacity: isSubmitting ? 0.7 : 1,
                  transition: "opacity 0.2s",
                  color: "#333",
                  fontWeight: "bold"
                }}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
