"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-hot-toast";

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  message: Yup.string().required("Required"),
});

function HomepageContactForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema,

    onSubmit: async (values) => {
      setLoading(true);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.status === 200) {
        toast.success("Message sent successfully");
        formik.resetForm();
        setLoading(false);
        router.replace("/");
      } else {
        toast.error("Failed to send message");
        setLoading(false);
      }
    },
  });

  return (
    <section className="text-brand-black body-font relative">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-brand-black font-brand-roboto">
            Contact Us
          </h1>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              {/* name */}
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-brand-black font-brand-montserrat font-light"
                  >
                    Name
                  </label>

                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Full Name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-brand-interface focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-brand-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out font-brand-montserrat font-regular"
                  />
                </div>

                {formik.touched.name && formik.errors.name ? (
                  <div className="text-red-500 font-brand-montserrat font-regular">
                    {formik.errors.name}
                  </div>
                ) : null}
              </div>

              {/* email */}
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-brand-black font-brand-montserrat font-light"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    placeholder="Email"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-brand-interface focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-brand-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out font-brand-montserrat font-regular"
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <div className="text-red-500 font-brand-montserrat font-regular">
                      {formik.errors.email}
                    </div>
                  ) : null}
                </div>
              </div>

              {/* message */}
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-brand-black font-brand-montserrat font-light"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.message}
                    placeholder="Type a message..."
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-brand-interface focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-brand-black py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out font-brand-montserrat font-regular"
                  />
                  {formik.touched.message && formik.errors.message ? (
                    <div className="text-red-500 font-brand-montserrat font-regular">
                      {formik.errors.message}
                    </div>
                  ) : null}
                </div>
              </div>

              {/* submit button */}
              <div className="p-2 w-full">
                <button
                  type="submit"
                  disabled={loading}
                  className="flex mx-auto text-white bg-brand-interface border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default HomepageContactForm;
