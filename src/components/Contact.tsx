import React, { useState } from 'react';
import { Mail, Phone, Github, Linkedin, MapPin, Send, MessageCircle, Copy, Check, Sparkles, ExternalLink } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface ContactProps {
  darkMode: boolean;
}

const Contact: React.FC<ContactProps> = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('muhammadali.chd12@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const userId = import.meta.env.VITE_EMAILJS_USER_ID;
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

      if (!userId || !serviceId || !templateId) {
        // Mock success fallback for development / missing keys
        console.warn('EmailJS keys not detected. Simulating successful send.');
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitStatus('idle'), 4000);
        return;
      }

      emailjs.init(userId);

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'muhammadali.chd12@gmail.com',
      };

      await emailjs.send(serviceId, templateId, templateParams);

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitStatus('idle'), 4000);
    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 4000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Initiate Collaboration</span>
          </div>
          <h2 className="section-title text-slate-900 dark:text-white">
            Let's Build <span className="gradient-text-primary">Together</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base">
            Have an exciting mobile application idea, a full-stack project, an automation system, or an engineering role open? Feel free to reach out directly.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10">
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-4">
              {/* 1-Click Copy Email Card */}
              <div className="glass-card-hover rounded-3xl p-5 border border-slate-200/80 dark:border-white/10 flex items-center justify-between gap-4 group">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      Email Address
                    </p>
                    <a
                      href="mailto:muhammadali.chd12@gmail.com"
                      className="text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-emerald-500 truncate block"
                    >
                      muhammadali.chd12@gmail.com
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  aria-label="Copy email address"
                  className="p-2.5 rounded-xl border border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-emerald-500 transition-colors"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* WhatsApp Direct Chat */}
              <a
                href="https://wa.me/923184439061"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card-hover rounded-3xl p-5 border border-slate-200/80 dark:border-white/10 flex items-center justify-between gap-4 group block"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      WhatsApp Chat
                    </p>
                    <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-emerald-500 transition-colors">
                      +92 318 4439061
                    </p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-emerald-500 group-hover:translate-x-0.5 transition-all" />
              </a>

              {/* Phone Direct */}
              <a
                href="tel:+923184439061"
                className="glass-card-hover rounded-3xl p-5 border border-slate-200/80 dark:border-white/10 flex items-center justify-between gap-4 group block"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-teal-500/10 text-teal-600 dark:text-teal-400 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      Direct Phone
                    </p>
                    <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-teal-500 transition-colors">
                      +92 318 4439061
                    </p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-teal-500 group-hover:translate-x-0.5 transition-all" />
              </a>

              {/* LinkedIn & GitHub Grid */}
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://www.linkedin.com/in/muhammad-ali-a5367b204"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card-hover rounded-3xl p-5 border border-slate-200/80 dark:border-white/10 flex items-center gap-3 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-600/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center flex-shrink-0">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-xs font-semibold text-slate-800 dark:text-slate-200 group-hover:text-emerald-500">
                      LinkedIn
                    </p>
                    <p className="text-[11px] text-slate-400">Connect</p>
                  </div>
                </a>

                <a
                  href="https://github.com/Muhammad-ali234"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card-hover rounded-3xl p-5 border border-slate-200/80 dark:border-white/10 flex items-center gap-3 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-slate-900/10 dark:bg-white/10 text-slate-900 dark:text-white flex items-center justify-center flex-shrink-0">
                    <Github className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-xs font-semibold text-slate-800 dark:text-slate-200 group-hover:text-emerald-500">
                      GitHub
                    </p>
                    <p className="text-[11px] text-slate-400">Codebases</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Location & Remote Badge */}
            <div className="glass-card rounded-3xl p-6 border border-slate-200/80 dark:border-white/10 space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-heading font-bold text-slate-900 dark:text-white">
                    Peshawar, KP, Pakistan
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Available for full-time remote or on-site roles
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Message Form */}
          <div className="lg:col-span-7">
            <div className="glass-card-hover rounded-3xl p-6 sm:p-10 border border-slate-200/80 dark:border-white/10 space-y-6">
              <div>
                <h3 className="font-heading font-bold text-2xl text-slate-900 dark:text-white">
                  Send a Direct Message
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                  Drop your details and message below. I usually respond within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-white/10 bg-white/70 dark:bg-slate-900/80 text-slate-900 dark:text-white placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-white/10 bg-white/70 dark:bg-slate-900/80 text-slate-900 dark:text-white placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="subject" className="text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    placeholder="Project Inquiry / Job Opportunity"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-white/10 bg-white/70 dark:bg-slate-900/80 text-slate-900 dark:text-white placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    placeholder="Tell me about your mobile app project, goals, or timeline..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-white/10 bg-white/70 dark:bg-slate-900/80 text-slate-900 dark:text-white placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-xl font-semibold text-white bg-gradient-to-r from-emerald-600 via-teal-600 to-amber-500 hover:from-emerald-500 hover:via-teal-500 hover:to-amber-400 shadow-lg shadow-emerald-600/25 transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Transmitting Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message to Muhammad Ali</span>
                    </>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-sm flex items-center gap-2 animate-in fade-in">
                    <Check className="w-5 h-5 flex-shrink-0 text-emerald-500" />
                    <span>Message received successfully! I will get back to you shortly.</span>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-700 dark:text-rose-400 text-sm animate-in fade-in">
                    An error occurred sending the message. Please feel free to email me directly at{' '}
                    <a href="mailto:muhammadali.chd12@gmail.com" className="underline font-semibold">
                      muhammadali.chd12@gmail.com
                    </a>.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;