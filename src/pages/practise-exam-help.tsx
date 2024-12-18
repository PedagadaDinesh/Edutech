import { AdminLayout } from "@/layouts";
import { useState } from "react";

const practiseExam = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    let isValid = true;
    const newErrors = { name: "", email: "", message: "" };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
      isValid = false;
    } else if (formData.name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters.";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
      isValid = false;
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email.trim())
    ) {
      newErrors.email = "Invalid email address.";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleInputChange = (e:any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();

    if (validate()) {
      console.log("Form Data Submitted:", formData);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" }); // Reset form
      setErrors({ name: "", email: "", message: "" }); // Reset errors
    } else {
      setIsSubmitted(false);
    }
  };

  return (
    <AdminLayout>
      <div className="mx-2 md:mx-4 lg:mx-5 2xl:mx-6 flex justify-center">
        <div className="p-8 bg-white rounded-lg shadow-xl w-[60%]">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
            Practise-Exam Assistance Request
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your name"
                className={`mt-1 px-4 py-2 border ${
                  errors.name ? "border-red-500" : "border-gray-300"
                } rounded-lg w-full`}
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                className={`mt-1 px-4 py-2 border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } rounded-lg w-full`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your message"
                className={`mt-1 px-4 py-2 border ${
                  errors.message ? "border-red-500" : "border-gray-300"
                } rounded-lg w-full h-32 resize-none`}
              />
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="px-6 py-2 bg-gray-600 w-full text-white font-semibold rounded-lg hover:bg-gray-800 transition"
            >
              Submit
            </button>
          </form>

          {isSubmitted && (
            <div className="mt-4 text-green-600 font-semibold">
              Your message has been successfully submitted!
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  );
};

export default practiseExam;
