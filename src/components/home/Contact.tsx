import { useState, type FormEvent } from 'react'
import emailjs from '@emailjs/browser'
import { emailjsConfig, profile } from '../../data/profile'

emailjs.init(emailjsConfig.publicKey)

type Status = 'idle' | 'sending' | 'ok' | 'error'

interface FormState {
  name: string
  email: string
  message: string
}

const EMPTY: FormState = { name: '', email: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState<FormState>(EMPTY)
  const [status, setStatus] = useState<Status>('idle')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.id]: e.target.value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    try {
      await emailjs.send(emailjsConfig.serviceId, emailjsConfig.templateId, {
        name: form.name,
        email: form.email,
        subject: 'Portfolio enquiry',
        message: form.message,
      })
      setStatus('ok')
      setForm(EMPTY)
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus('error')
    }
  }

  return (
    <section className="contact container" id="contact">
      <div className="contact__inner">
        <div className="contact__kicker" data-reveal>
          <span className="meta">03 — Contact</span>
          <span className="meta">{profile.availability}</span>
        </div>

        <h2 className="contact__lead" data-reveal>
          Let&rsquo;s work together.
        </h2>

        <a className="contact__email" href={`mailto:${profile.email}`} data-reveal>
          {profile.email}
        </a>

        <div className="contact__grid">
          <div className="contact__facts" data-reveal>
            <div className="contact__fact">
              <span className="meta contact__fact-label">Based in</span>
              <span>{profile.location}</span>
            </div>
            <div className="contact__fact">
              <span className="meta">Phone</span>
              <span>{profile.phone}</span>
            </div>
            <div className="contact__fact">
              <span className="meta">Elsewhere</span>
              <span className="contact__socials">
                {profile.socials.map((s) => (
                  <a
                    key={s.label}
                    className="contact__social"
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {s.label}
                  </a>
                ))}
              </span>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} data-reveal>
            <div className="contact-form__field">
              <label className="meta contact-form__label" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                autoComplete="name"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
              />
            </div>

            <div className="contact-form__field">
              <label className="meta contact-form__label" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                autoComplete="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
              />
            </div>

            <div className="contact-form__field">
              <label className="meta contact-form__label" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                required
                placeholder="Ask me anything…"
                value={form.message}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="contact-form__submit" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending…' : 'Send message'}
            </button>

            {status === 'ok' && (
              <p className="meta contact-form__note" role="status">
                Thank you — message sent.
              </p>
            )}
            {status === 'error' && (
              <p className="meta contact-form__error" role="alert">
                Something went wrong. Please try again or email me directly.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
