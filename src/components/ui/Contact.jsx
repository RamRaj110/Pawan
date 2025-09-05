import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: 'easeOut'
    }
  })
};

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState({
    loading: false,
    error: null,
    success: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, error: null, success: false });

    const formDataToSend = {
      access_key: '21232d55-2a17-4fac-bdab-c8ac1915426e',
      subject: 'New Contact Form Submission',
      from_name: formData.name,
      name: formData.name,
      email: formData.email,
      message: formData.message,
      botcheck: '',
      'h-captcha-response': ''
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formDataToSend)
      });

      const data = await response.json();

      if (data.success) {
        setStatus({ loading: false, error: null, success: true });
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => {
          setStatus(prev => ({ ...prev, success: false }));
        }, 3000);
      } else {
        throw new Error(data.message || 'Something went wrong!');
      }
    } catch (error) {
      setStatus({
        loading: false,
        error: error.message || 'Failed to send message. Please try again.',
        success: false
      });
    }
  };

  return (
    <div>
      <section className="min-h-[85vh] w-sm lg:w-full md:w-full lg:min-h-screen md:min-h-screen flex items-center justify-center bg-gray-900 " id="contact">
        <NeonGradientCard  >
          <div className="  lg:max-w-10xl md:max-w-10xl mx-auto pt-4">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="text-3xl  md:text-4xl font-bold text-white text-center md:mb-16"
            >
              Get In Touch
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-4">
              {/* Contact Info */}
              <div className="space-y-8">
                {[
                  { Icon: Phone, title: "Phone", detail: "+91 7972866251" },
                  { Icon: Mail, title: "Email", detail: "pawansham578@gmail.com" },
                  { Icon: MapPin, title: "Location", detail: "Patna, Bihar" },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    custom={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="flex items-center space-x-4"
                  >
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-600 flex items-center justify-center">
                      <item.Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">{item.title}</h3>
                      <p className="text-gray-400">{item.detail}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="checkbox"
                  name="botcheck"
                  className="hidden"
                  style={{ display: 'none' }}
                />

                <motion.div
                  custom={0}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                >
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-2 text-white rounded-lg bg-gray-700 border border-gray-600 outline-none transition-colors"
                  />
                </motion.div>

                <motion.div
                  custom={1}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                >
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    className="w-full px-4 py-2 text-white rounded-lg bg-gray-700 border border-gray-600 outline-none transition-colors"
                  />
                </motion.div>

                <motion.div
                  custom={2}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                >
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    required
                    rows={4}
                    className="w-full h-[150px] px-4 py-2 text-white rounded-lg bg-gray-700 border border-gray-600 outline-none transition-colors"
                  />
                </motion.div>

                {status.error && (
                  <div className="text-red-500 text-sm">{status.error}</div>
                )}
                {status.success && (
                  <div className="text-green-500 text-sm">Message sent successfully!</div>
                )}

                <motion.div
                  custom={3}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                >
                  <button
                    type="submit"
                    disabled={status.loading}
                    className={`w-full bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2 ${status.loading ? 'opacity-70 cursor-not-allowed' : ''
                      }`}
                  >
                    <Send className="w-5 h-5" />
                    <span>{status.loading ? 'Sending...' : 'Send Message'}</span>
                  </button>
                </motion.div>
              </form>
            </div>
          </div>
        </NeonGradientCard>
      </section>
    </div>
  );
}

export { Contact };
