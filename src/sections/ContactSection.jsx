import { useState } from 'react'
import ChromeText from '../components/ChromeText/ChromeText'

const SERVICE_ID = 'service_18o8mc8'
const TEMPLATE_ID = 'template_dkpyk39'

function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [success, setSuccess] = useState('')

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.id]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSuccess('')

    if (!window.emailjs) {
      setSuccess('EmailJS not loaded. Please try again.')
      return
    }

    window.emailjs
      .send(SERVICE_ID, TEMPLATE_ID, form)
      .then(() => {
        setSuccess('Message sent successfully!')
        setForm({ name: '', email: '', subject: '', message: '' })
      })
      .catch((err) => {
        console.error('EmailJS error:', err)
        setSuccess('Failed to send message.')
      })
  }

  return (
    <section id="contact" className="contact-section">
      <ChromeText as="h2" className="contact-title">
        Contact Me
      </ChromeText>

      <p>
        Have a project in mind? Let's work together to bring your ideas to life.
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          id="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          id="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          id="subject"
          placeholder="Subject"
          value={form.subject}
          onChange={handleChange}
          required
        />
        <textarea
          id="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
        />
        <button type="submit" className="contact-btn">
          Send Message
        </button>
      </form>

      {success && <p className="contact-success">{success}</p>}
    </section>
  )
}

export default ContactSection
