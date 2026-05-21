
"use client"; 
import HeroNavbar from "@/components/HeroNavba";
import Footer from "@/components/Footer";

import React from 'react'


import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { useState } from "react";
// import emailjs from "@emailjs/browser";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "pedro@example.com",
    href: "mailto:pedro@example.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "San Francisco, CA",
    href: "#",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({
    type: null,
    message: "",
  });

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setIsLoading(true);
    setSubmitStatus({
      type: null,
      message: "",
    });

    try {
      const serviceId =
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;

      const templateId =
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;

      const publicKey =
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

      // await emailjs.send(
      //   serviceId,
      //   templateId,
      //   {
      //     name: formData.name,
      //     email: formData.email,
          message: formData.message,
        // },
        publicKey
    //   );

      setSubmitStatus({
        type: "success",
        message:
          "Message sent successfully! I'll get back to you soon.",
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error(error);

      setSubmitStatus({
        type: "error",
        message:
          "Failed to send message. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
     <HeroNavbar /> 
    <section
      id="contact"
      className="relative py-24 bg-black text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-100 h-100 bg-cyan-500/10 rounded-full blur-3xl" />

        <div className="absolute bottom-1/4 right-1/4 w-75 h-75 bg-cyan-400/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-cyan-400 uppercase tracking-[0.25em] text-sm font-semibold">
            Get In Touch
          </span>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-5 leading-tight">
            Let's build
            <span className="block text-cyan-400 italic font-light mt-2">
              something great.
            </span>
          </h2>

          <p className="text-gray-400 mt-6 text-base sm:text-lg leading-relaxed">
            Have a project in mind? I'd love to hear about it.
            Send me a message and let's discuss how we can work
            together.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 shadow-2xl">
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* Name */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Name
                </label>

                <input
                  type="text"
                  required
                  placeholder="Your name..."
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      name: e.target.value,
                    })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-cyan-400 transition"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Email
                </label>

                <input
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      email: e.target.value,
                    })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-cyan-400 transition"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Message
                </label>

                <textarea
                  rows={5}
                  required
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      message: e.target.value,
                    })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-cyan-400 transition resize-none"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex items-center justify-center gap-3 bg-cyan-400 hover:bg-cyan-300 text-black font-semibold py-4 rounded-xl transition duration-300"
              >
                {isLoading ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>

              {/* Success/Error */}
              {submitStatus.type && (
                <div
                  className={`flex items-center gap-3 p-4 rounded-xl ${
                    submitStatus.type === "success"
                      ? "bg-green-500/10 border border-green-500/20 text-green-400"
                      : "bg-red-500/10 border border-red-500/20 text-red-400"
                  }`}
                >
                  {submitStatus.type === "success" ? (
                    <CheckCircle className="w-5 h-5 shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 shrink-0" />
                  )}

                  <p className="text-sm">
                    {submitStatus.message}
                  </p>
                </div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Contact Card */}
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8">
              <h3 className="text-2xl font-semibold mb-8">
                Contact Information
              </h3>

              <div className="space-y-5">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="flex items-center gap-4 p-4 rounded-2xl hover:bg-white/5 transition duration-300 group"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-cyan-400/10 flex items-center justify-center group-hover:bg-cyan-400/20 transition">
                      <item.icon className="w-6 h-6 text-cyan-400" />
                    </div>

                    <div>
                      <p className="text-sm text-gray-400">
                        {item.label}
                      </p>

                      <h4 className="font-medium">
                        {item.value}
                      </h4>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Card */}
            <div className="bg-white/5 backdrop-blur-lg border border-cyan-400/20 rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />

                <span className="font-semibold">
                  Currently Available
                </span>
              </div>

              <p className="text-gray-400 leading-relaxed">
                I'm currently open to new opportunities and
                exciting projects. Whether you need a full-time
                engineer or a freelance consultant, let's talk!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
     <Footer /> 
     </div>
  );
};

export default Contact;

    

   
  
