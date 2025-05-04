import { useRef, useState } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { motion } from "framer-motion";
import React from 'react';
import ContactSocialButtons from "./ContactSocialButtons";
import StyledWrapper from "./StyledSubmitButton";

function Contact() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [captchaToken, setCaptchaToken] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const successRef = useRef<HTMLParagraphElement>(null);
  const captchaRef = useRef<HCaptcha>(null);

  const handleCaptcha = (token: string) => {
    setCaptchaToken(token);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!captchaToken) {
      alert("Please complete the CAPTCHA.");
      return;
    }

    const formData = new FormData(formRef.current!);
    formData.append("h-captcha-response", captchaToken);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        formRef.current?.reset();
        setCaptchaToken("");

        // Reset the CAPTCHA and scroll to message
        captchaRef.current?.resetCaptcha();
        setTimeout(() => {
          successRef.current?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-20 px-4 bg-white-100"
    >
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
        <p className="mb-6 text-gray-600">
          Want to work together or just say hi? Reach out below.
        </p>

        {status === "success" && (
          <p
            ref={successRef}
            className="mb-4 text-green-600 font-medium scroll-mt-32"
          >
            ✅ Message sent successfully!
          </p>
        )}
        {status === "error" && (
          <p className="mb-4 text-red-600 font-medium">
            ❌ Something went wrong. Please try again.
          </p>
        )}

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
          <input
            type="hidden"
            name="access_key"
            value="ea3b9b96-abde-420a-8ef4-8fb48770d8b2"
          />
          <input
            type="hidden"
            name="subject"
            value="New message from Christian Cho Portfolio"
          />
          <input
            type="hidden"
            name="from_name"
            value="Christian Cho Portfolio"
          />

          <input
            type="text"
            name="name"
            placeholder="Name"
            className="w-full p-3 rounded border"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-3 rounded border"
            required
          />
          <textarea
            name="message"
            rows={5}
            placeholder="Message"
            className="w-full p-3 rounded border"
            required
          ></textarea>

          {/* hCaptcha integration */}
          <HCaptcha
            sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
            onVerify={handleCaptcha}
            reCaptchaCompat={false}
            ref={captchaRef}
          />

          <StyledWrapper>
            <button type="submit" className="button">
              Send Message
            </button>
          </StyledWrapper>
        </form>
      <div className="mt-10">
        <ContactSocialButtons />
      </div>

      </div>
    </motion.section>
  );
}

export default Contact;
