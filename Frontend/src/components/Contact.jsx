import React from 'react'
import { useState } from 'react'
import emailjs from '@emailjs/browser';


export default function Contact() {

  const SERVICE_KEY = "service_d11juuj";
  const PUBLIC_KEY = "UtIIgyx9joJ6rFbwM";
  const TEMPLATE_KEY = "template_3hp69po";

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    subject: "",
    message: ""
  })

  const [error, seterror] = useState("")
  const [success, setSuccess] = useState(false)

  const submithandler = async (e) => {
    e.preventDefault();
   
      seterror("");
  setSuccess(false);

    try {
      await emailjs.send(
        SERVICE_KEY,
        TEMPLATE_KEY,
        formData,
        PUBLIC_KEY
      );



      setSuccess(true);

      setFormData({
        fullname: "",
        email: "",
        subject: "",
        message: ""

      } )
      
    } catch (err) {
        seterror("✕ Failed to send message. Please try again later.")
      }
    };

    const ChangeHandler = (e) => {
      setFormData({
        ...formData, [e.target.name]: e.target.value
      });

    }


    return (
      <div>

        <section
          id="contact"
          className="min-h-screen bg-gradient-to-br from-black via-[#020617] to-[#07122a] text-white px-6 sm:px-10 lg:px-20 py-24 relative overflow-hidden"
        >
          {/* Background Glow */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-indigo-500/10 blur-[130px] rounded-full"></div>

          {/* Heading */}
          <div className="text-center mb-16 relative z-10">
            <p className="text-yellow-400 uppercase tracking-[7px] text-sm mb-3 font-semibold">
              GET IN TOUCH
            </p>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Contact <span className="text-yellow-400">Me</span>
            </h2>

            <div className="w-24 h-1 bg-yellow-400 mx-auto mt-5 rounded-full"></div>
          </div>

          {/* Grid */}
          <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto relative z-10">

            {/* Left Card */}
            <div className="bg-white/[0.04] border border-white/10 rounded-3xl p-8 backdrop-blur-2xl">
              <h3 className="text-3xl font-bold mb-6">Let's Talk</h3>

              <p className="text-gray-400 leading-7 mb-8">
                Open for freelance work, internships and collaborations.
                Send me a message anytime.
              </p>

              <div className="space-y-5">
                <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-4">
                  <p className="text-yellow-400 text-sm mb-1">Email</p>
                  <p className="text-gray-300"> contact@chandankoranga.in</p>
                </div>

                <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-4">
                  <p className="text-yellow-400 text-sm mb-1">Alterntive Email</p>
                  <p className="text-gray-300"> contact@appnests.in</p>
                </div>

                <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-4">
                  <p className="text-yellow-400 text-sm mb-1">Location</p>
                  <p className="text-gray-300">India</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={submithandler} className="bg-white/[0.04] border border-white/10 rounded-3xl p-8 backdrop-blur-2xl space-y-6">

              <input
                type="text"
                name='fullname'
                placeholder="Your Name"
                value={formData.fullname}
                onChange={ChangeHandler}
                className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-yellow-400"
              />

              <input
                type="email"
                name='email'
                value={formData.email}
                placeholder="Your Email"
                onChange={ChangeHandler}
                className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-yellow-400"
              />

              <input
                type="text"
                name='subject'
                placeholder="Subject"
                value={formData.subject}
                onChange={ChangeHandler}
                className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-yellow-400"
              />

              <textarea
                rows="5"
                name='message'
                placeholder="Your Message"
                value={formData.message}
                onChange={ChangeHandler}
                className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-yellow-400 resize-none"
              ></textarea>

              {/* Button */}
              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-yellow-400 text-black font-semibold hover:scale-[1.02] transition"
              >
                Send Message
              </button>

              {/* Success Message UI */}
              {success ? (<div className=" bg-green-500/10 border border-green-500/30 rounded-xl px-4 py-3">
                <p className="text-green-400 text-sm font-medium">
                  ✓ Message sent successfully. I’ll get back to you soon.
                </p>
              </div>) : null}


              {/* Error Message UI */}
              {error ? (
                <div className="bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-3">
                  <p className="text-red-400 text-sm font-medium">
                    {error}
                  </p>
                </div>
              ) : null}

            </form>

          </div>
        </section>

      </div>
    )
  }
