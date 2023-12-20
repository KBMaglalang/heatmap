'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-hot-toast';

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  message: Yup.string().required('Required'),
});

function HomepageContactForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema,

    onSubmit: async (values) => {
      setLoading(true);

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (response.status === 200) {
        toast.success('Message sent successfully');
        formik.resetForm();
        setLoading(false);
        router.replace('/');
      } else {
        toast.error('Failed to send message');
        setLoading(false);
      }
    },
  });

  return (
    <section className="body-font relative text-brand-black">
      <div className="container mx-auto px-5 py-24">
        <div className="mb-12 flex w-full flex-col text-center">
          <h1 className="title-font mb-4 font-brand-roboto text-2xl font-medium text-brand-black sm:text-3xl">
            Contact Us
          </h1>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div className="mx-auto md:w-2/3 lg:w-1/2">
            <div className="-m-2 flex flex-wrap">
              {/* name */}
              <div className="w-1/2 p-2">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="font-brand-montserrat text-sm font-light leading-7 text-brand-black"
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
                    className="font-regular w-full rounded border border-gray-300 bg-gray-100 bg-opacity-50 px-3 py-1 font-brand-montserrat text-base leading-8 text-brand-black outline-none transition-colors duration-200 ease-in-out focus:border-brand-interface focus:bg-white focus:ring-2 focus:ring-indigo-200"
                  />
                </div>

                {formik.touched.name && formik.errors.name ? (
                  <div className="font-regular font-brand-montserrat text-red-500">
                    {formik.errors.name}
                  </div>
                ) : null}
              </div>

              {/* email */}
              <div className="w-1/2 p-2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="font-brand-montserrat text-sm font-light leading-7 text-brand-black"
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
                    className="font-regular w-full rounded border border-gray-300 bg-gray-100 bg-opacity-50 px-3 py-1 font-brand-montserrat text-base leading-8 text-brand-black outline-none transition-colors duration-200 ease-in-out focus:border-brand-interface focus:bg-white focus:ring-2 focus:ring-indigo-200"
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <div className="font-regular font-brand-montserrat text-red-500">
                      {formik.errors.email}
                    </div>
                  ) : null}
                </div>
              </div>

              {/* message */}
              <div className="w-full p-2">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="font-brand-montserrat text-sm font-light leading-7 text-brand-black"
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
                    className="font-regular h-32 w-full resize-none rounded border border-gray-300 bg-gray-100 bg-opacity-50 px-3 py-1 font-brand-montserrat text-base leading-6 text-brand-black outline-none transition-colors duration-200 ease-in-out focus:border-brand-interface focus:bg-white focus:ring-2 focus:ring-indigo-200"
                  />
                  {formik.touched.message && formik.errors.message ? (
                    <div className="font-regular font-brand-montserrat text-red-500">
                      {formik.errors.message}
                    </div>
                  ) : null}
                </div>
              </div>

              {/* submit button */}
              <div className="w-full p-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="mx-auto flex rounded border-0 bg-brand-interface px-8 py-2 text-lg text-white hover:bg-indigo-600 focus:outline-none"
                >
                  {loading ? 'Sending...' : 'Send Message'}
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
