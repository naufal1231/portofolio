import { useState, useRef } from 'react';
import { profile } from '../../data/profile';
import RevealWrapper from '../ui/RevealWrapper';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

/**
 * ContactSection — Contact form + contact info
 * Converted from Blade #contact with Livewire wire:submit
 * - Form submission: local state (shows success message, no backend)
 * - Copy to clipboard: native API (replaces copyText() from app.blade.php)
 *
 * NOTE: To connect to real backend, change handleSubmit to POST to your API.
 * Alternatively, use Formspree (formspree.io) or EmailJS for free email sending.
 */
export default function ContactSection() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const toastRef = useRef<HTMLDivElement>(null);

  const validate = (): boolean => {
    const newErrors: Partial<FormState> = {};
    if (!form.name || form.name.length < 2) newErrors.name = 'Nama minimal 2 karakter.';
    if (!form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = 'Email tidak valid.';
    if (!form.message || form.message.length < 10)
      newErrors.message = 'Pesan minimal 10 karakter.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSending(true);
    // ── Simulate async send (replace with real API call) ──
    // Example with Formspree:
    // await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(form),
    // });
    await new Promise((r) => setTimeout(r, 1200));
    setSending(false);
    setSent(true);
    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSent(false), 5000);
  };

  const copyText = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      const toast = toastRef.current;
      if (!toast) return;
      toast.classList.add('show');
      setTimeout(() => toast.classList.remove('show'), 2500);
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <>
      <section id="contact" className="py-24 bg-pg-bg-card border-t border-pg-border">
        <RevealWrapper className="max-w-7xl mx-auto px-6 grid lg:grid-cols-5 gap-16">
          {/* Left: Info */}
          <div className="lg:col-span-2">
            <h2 className="text-4xl font-extrabold tracking-tight text-pg-black mb-6">
              Mari Berdiskusi
            </h2>
            <p className="text-pg-text-sec leading-relaxed mb-10">
              Punya proyek digital atau butuh solusi pengembangan software? Kirim pesan Anda dan mari ciptakan sesuatu yang luar biasa.
            </p>

            <div className="space-y-4">
              {/* WhatsApp */}
              <a
                href={`https://wa.me/${profile.whatsapp}?text=Hello%20Guntur...`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 p-5 pg-card-interactive group"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shrink-0"
                  style={{ background: '#E8FFD1' }}
                >
                  <span className="material-symbols-outlined" style={{ color: '#7AC500' }}>
                    chat
                  </span>
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-pg-text-sec mb-0.5">
                    WhatsApp
                  </p>
                  <p className="font-bold text-pg-black">{profile.phone}</p>
                </div>
              </a>

              {/* Email (copy to clipboard) */}
              <button
                type="button"
                onClick={() => copyText(profile.email)}
                className="w-full flex items-center gap-5 p-5 pg-card-interactive group text-left"
                id="copy-email-btn"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shrink-0"
                  style={{ background: '#E8FFD1' }}
                >
                  <span className="material-symbols-outlined" style={{ color: '#7AC500' }}>
                    mail
                  </span>
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-pg-text-sec mb-0.5">
                    Email
                  </p>
                  <p className="font-bold text-pg-black">{profile.email}</p>
                </div>
              </button>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-3 pg-card p-10">
            <form
              id="contact-form"
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {/* Name */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-semibold uppercase tracking-wider text-pg-text-sec">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="e.g. Guntur Naufal"
                  className="form-input"
                  id="contact-name"
                />
                {errors.name && (
                  <span className="text-xs text-pg-error mt-1 block">{errors.name}</span>
                )}
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-semibold uppercase tracking-wider text-pg-text-sec">
                  Alamat Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="e.g. email@example.com"
                  className="form-input"
                  id="contact-email"
                />
                {errors.email && (
                  <span className="text-xs text-pg-error mt-1 block">{errors.email}</span>
                )}
              </div>

              {/* Subject */}
              <div className="md:col-span-2 space-y-1.5">
                <label className="text-[11px] font-semibold uppercase tracking-wider text-pg-text-sec">
                  Subjek Pesan
                </label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="e.g. Partnership Request"
                  className="form-input"
                  id="contact-subject"
                />
              </div>

              {/* Message */}
              <div className="md:col-span-2 space-y-1.5">
                <label className="text-[11px] font-semibold uppercase tracking-wider text-pg-text-sec">
                  Pesan Anda
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tulis pesan Anda..."
                  className="form-input resize-none"
                  id="contact-message"
                />
                {errors.message && (
                  <span className="text-xs text-pg-error mt-1 block">{errors.message}</span>
                )}
              </div>

              {/* Submit */}
              <div className="md:col-span-2 pt-2">
                <button
                  type="submit"
                  disabled={sending}
                  className="btn-primary w-full justify-center text-base py-4 disabled:opacity-70 disabled:cursor-not-allowed"
                  id="contact-submit-btn"
                >
                  {sending ? (
                    <span className="flex items-center gap-2">
                      <span>Mengirim...</span>
                      <span className="material-symbols-outlined text-[18px] animate-spin">
                        refresh
                      </span>
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <span>Kirim Pesan</span>
                      <span className="material-symbols-outlined text-[18px]">send</span>
                    </span>
                  )}
                </button>
              </div>
            </form>

            {/* Success message */}
            {sent && (
              <div
                className="mt-4 p-4 rounded-xl text-center text-sm font-bold border transition-all"
                style={{
                  background: '#E8FFD1',
                  color: '#7AC500',
                  borderColor: '#B6FF3C',
                }}
              >
                ✓ Pesan berhasil dikirim! Saya akan membalas secepatnya.
              </div>
            )}
          </div>
        </RevealWrapper>
      </section>

      {/* Copy to clipboard toast */}
      <div ref={toastRef} className="copy-toast">
        Disalin ke papan klip ✓
      </div>
    </>
  );
}
