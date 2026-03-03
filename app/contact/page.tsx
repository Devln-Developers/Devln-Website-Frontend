"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const services = [
  "Branding",
  "Graphic Design",
  "UI UX Design",
  "Web Design",
  "Web Development",
  "Mobile App Development",
  "Full Stack Development",
];

const budgetOptions = [
  "$500 - $1,000",
  "$1,000 - $2,000",
  "$2,000 - $5,000",
  "$5,000 - $10,000",
  "$10,000 - $25,000",
  "$25,000 - $50,000",
  "$50,000 - $100,000",
  "$100,000+",
];

type FormData = {
  name: string;
  email: string;
  budget: string;
  message: string;
  services: string[];
};

export default function ContactPage() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [budgetOpen, setBudgetOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      name: "",
      email: "",
      budget: "",
      message: "",
      services: [],
    },
  });

  const selectedBudget = watch("budget");

  const toggleService = (service: string) => {
    const updated = selectedServices.includes(service)
      ? selectedServices.filter((s) => s !== service)
      : [...selectedServices, service];
    setSelectedServices(updated);
    setValue("services", updated, { shouldValidate: true });
  };

  const onSubmit = async (data: FormData) => {
    setSending(true);
    setSendError(null);
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: data.name,
          from_email: data.email,
          budget: data.budget,
          services: data.services.join(", "),
          message: data.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setSubmitted(true);
    } catch {
      setSendError("Something went wrong. Please try again or email us directly.");
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <Navbar />
      <main className="pt-16">
        <section className="app-px py-12 md:py-16">
          {/* Heading */}
          <h1 className="font-[family-name:var(--font-inter)] text-[48px] font-bold italic text-gray-900 mb-8 md:mb-10">
            Contact Us
          </h1>

          {submitted ? (
            <div className="border border-gray-200 rounded-2xl p-12 text-center">
              <p className="text-2xl font-bold text-gray-900 mb-2">
                Thank you!
              </p>
              <p className="text-gray-500 text-sm">
                We&apos;ve received your message and will be in touch shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              {/* Card */}
              <div className="border border-gray-200 rounded-2xl">
                <div className="grid md:grid-cols-2">
                  {/* Left — Services + Illustration */}
                  <div className="p-6 md:p-8 border-b md:border-b-0 md:border-r border-gray-200 flex flex-col gap-6 rounded-tl-2xl rounded-bl-2xl">
                    <div>
                      <p className="font-[family-name:var(--font-inter)] text-[14px] font-normal text-gray-700 mb-3">
                        Services you are interested in...{" "}
                        <span className="text-[#13C4B2]">*</span>
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {services.map((service) => {
                          const active = selectedServices.includes(service);
                          return (
                            <button
                              key={service}
                              type="button"
                              onClick={() => toggleService(service)}
                              className={`px-3 py-1.5 rounded-button text-xs font-medium border transition-colors cursor-pointer ${
                                active
                                  ? "bg-[#13C4B2] text-white border-[#13C4B2]"
                                  : "bg-white text-gray-600 border-gray-300 hover:border-[#13C4B2] hover:text-[#13C4B2]"
                              }`}
                            >
                              {service}
                            </button>
                          );
                        })}
                      </div>
                      {/* Hidden field for services validation */}
                      <input
                        type="hidden"
                        {...register("services", {
                          validate: (value) =>
                            (Array.isArray(value) && value.length > 0) ||
                            "Please select at least one service",
                        })}
                      />
                      {errors.services && (
                        <p className="text-red-500 text-xs mt-2">
                          {errors.services.message}
                        </p>
                      )}
                    </div>

                    {/* Illustration */}
                    <div className="flex-1 flex items-end justify-center pt-4">
                      <Image
                        src="/assets/icons/Contact-Us-Image.svg"
                        alt="Contact us illustration"
                        width={520}
                        height={460}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>

                  {/* Right — Form */}
                  <div className="p-6 md:p-8 flex flex-col gap-6 rounded-tr-2xl rounded-br-2xl">
                    <h2 className="font-[family-name:var(--font-inter)] text-[14px] font-bold text-gray-900">
                      Shoot us a message
                    </h2>

                    <div className="flex flex-col gap-4">
                      {/* Name */}
                      <div className="flex flex-col gap-1.5">
                        <label className="font-[family-name:var(--font-inter)] text-[12px] font-normal text-gray-400">
                          Enter your name
                        </label>
                        <div
                          className={`flex items-center border rounded-button px-3 py-2.5 gap-2 transition-colors ${errors.name ? "border-red-400" : "border-gray-200 focus-within:border-[#13C4B2]"}`}
                        >
                          <input
                            type="text"
                            placeholder="John Doe"
                            {...register("name", {
                              required: "Name is required",
                              minLength: {
                                value: 2,
                                message: "Name must be at least 2 characters",
                              },
                            })}
                            className="flex-1 font-[family-name:var(--font-inter)] text-[14px] font-normal text-gray-900 placeholder-gray-400 outline-none bg-transparent"
                          />
                          <svg
                            className="w-4 h-4 text-gray-400 flex-shrink-0"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                          </svg>
                        </div>
                        {errors.name && (
                          <p className="text-red-500 text-xs">
                            {errors.name.message}
                          </p>
                        )}
                      </div>

                      {/* Email */}
                      <div className="flex flex-col gap-1.5">
                        <label className="font-[family-name:var(--font-inter)] text-[12px] font-normal text-gray-400">
                          Enter your email address
                        </label>
                        <div
                          className={`flex items-center border rounded-button px-3 py-2.5 gap-2 transition-colors ${errors.email ? "border-red-400" : "border-gray-200 focus-within:border-[#13C4B2]"}`}
                        >
                          <input
                            type="email"
                            placeholder="JohnDoe@example.com"
                            {...register("email", {
                              required: "Email is required",
                              pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Enter a valid email address",
                              },
                            })}
                            className="flex-1 font-[family-name:var(--font-inter)] text-[14px] font-normal text-gray-900 placeholder-gray-400 outline-none bg-transparent"
                          />
                          <svg
                            className="w-4 h-4 text-gray-400 flex-shrink-0"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                          </svg>
                        </div>
                        {errors.email && (
                          <p className="text-red-500 text-xs">
                            {errors.email.message}
                          </p>
                        )}
                      </div>

                      {/* Budget — custom dropdown */}
                      <div className="flex flex-col gap-1.5 relative">
                        <label className="font-[family-name:var(--font-inter)] text-[12px] font-normal text-gray-400">
                          Select your budget
                        </label>
                        {/* Hidden field for RHF registration */}
                        <input
                          type="hidden"
                          {...register("budget", {
                            required: "Please select a budget range",
                          })}
                        />
                        <button
                          type="button"
                          onClick={() => setBudgetOpen((o) => !o)}
                          className={`flex items-center justify-between border rounded-button px-3 py-2.5 gap-2 transition-colors cursor-pointer w-full text-left ${
                            errors.budget
                              ? "border-red-400"
                              : budgetOpen
                                ? "border-[#13C4B2]"
                                : "border-gray-200"
                          }`}
                        >
                          <span
                            className={`font-[family-name:var(--font-inter)] text-[14px] font-normal ${selectedBudget ? "text-gray-900" : "text-gray-400"}`}
                          >
                            {selectedBudget || "Select a budget range"}
                          </span>
                          <svg
                            className={`w-4 h-4 text-gray-400 flex-shrink-0 transition-transform ${budgetOpen ? "rotate-180" : ""}`}
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M7 10l5 5 5-5H7z" />
                          </svg>
                        </button>

                        {budgetOpen && (
                          <div className="absolute top-full left-0 right-0 z-20 mt-1 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden">
                            {budgetOptions.map((opt) => (
                              <button
                                key={opt}
                                type="button"
                                onClick={() => {
                                  setValue("budget", opt, {
                                    shouldValidate: true,
                                  });
                                  setBudgetOpen(false);
                                }}
                                className={`w-full text-left px-4 py-2.5 font-[family-name:var(--font-inter)] text-[14px] font-normal transition-colors cursor-pointer ${
                                  selectedBudget === opt
                                    ? "bg-[#13C4B2] text-white"
                                    : "text-gray-700 hover:bg-gray-50"
                                }`}
                              >
                                {opt}
                              </button>
                            ))}
                          </div>
                        )}
                        {errors.budget && (
                          <p className="text-red-500 text-xs">
                            {errors.budget.message}
                          </p>
                        )}
                      </div>

                      {/* Message */}
                      <div className="flex flex-col gap-1.5">
                        <label className="font-[family-name:var(--font-inter)] text-[12px] font-normal text-gray-400">
                          Tell us about your project
                        </label>
                        <textarea
                          rows={4}
                          placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
                          {...register("message", {
                            required: "Please tell us about your project",
                            minLength: {
                              value: 20,
                              message: "Message must be at least 20 characters",
                            },
                          })}
                          className={`border rounded-button px-3 py-2.5 font-[family-name:var(--font-inter)] text-[14px] font-normal text-gray-900 placeholder-gray-400 outline-none resize-none transition-colors ${
                            errors.message
                              ? "border-red-400"
                              : "border-gray-200 focus:border-[#13C4B2]"
                          }`}
                        />
                        {errors.message && (
                          <p className="text-red-500 text-xs">
                            {errors.message.message}
                          </p>
                        )}
                      </div>

                      {/* Submit */}
                      <button
                        type="submit"
                        disabled={sending}
                        className="w-full bg-[#13C4B2] text-white py-3 rounded-button font-[family-name:var(--font-inter)] text-[16px] font-semibold hover:bg-[#0fb3a3] transition-colors cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {sending ? "Sending…" : "Get a Quote"}
                      </button>
                      {sendError && (
                        <p className="text-red-500 text-xs text-center">{sendError}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </form>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
