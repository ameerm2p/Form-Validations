import { useState } from "react";
import "./App.css";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
    gender: "",
    agreeTerms: false,
    favoriteColor: "",
    password: "",
    company: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
    gender: "",
    agreeTerms: "",
    favoriteColor: "",
    password: "",
    company: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear the error when the user starts typing or interacting with the checkbox
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form data
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      console.error("Form validation failed");
      alert("Invalid");
      return;
    }

    // Proceed with form submission or other actions
    console.log("Form submitted:", formData);
  };
  const validateForm = (data) => {
    let errors = {};

    // Validate name
    if (!data.firstName.trim()) {
      errors.firstName = "First name is required";
    }
    if (!data.lastName.trim()) {
      errors.lastName = "Last name is required";
    }
    if (!data.message.trim()) {
      errors.message = "Message is required";
    }

    if (!data.company.trim()) {
      errors.company = "Company is required";
    }

    if (data.phoneNumber.length != 10) {
      errors.phoneNumber = "Phone number must 10 digits";
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email.trim()) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(data.email)) {
      errors.email = "Invalid email format";
    }

    // Validate password
    if (data.password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
    }

    // Validate gender
    if (!data.gender) {
      errors.gender = "Please select a gender";
    }

    // Validate agreement to terms
    if (!data.agreeTerms) {
      errors.agreeTerms = "You must agree to the terms and conditions";
    }

    // Validate favorite color
    if (!data.favoriteColor) {
      errors.favoriteColor = "Please select a favorite color";
    }

    return errors;
  };
  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Form Validation
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Validation in react
        </p>
      </div>
      <form className="mx-auto mt-16 max-w-xl sm:mt-20" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              First name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="firstName"
                id="first-name"
                autoComplete="given-name"
                value={formData.firstName}
                onChange={handleChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            <label className="block text-sm font-semibold leading-6 text-gray-900 error">
              {errors.firstName}
            </label>
          </div>
          <div>
            <label
              htmlFor="last-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Last name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="lastName"
                id="last-name"
                autoComplete="family-name"
                value={formData.lastName}
                onChange={handleChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            <label className="block text-sm font-semibold leading-6 text-gray-900 error">
              {errors.lastName}
            </label>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="company"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Company
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="company"
                id="company"
                autoComplete="organization"
                value={formData.company}
                onChange={handleChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            <label className="block text-sm font-semibold leading-6 text-gray-900 error">
              {errors.company}
            </label>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            <label className="block text-sm font-semibold leading-6 text-gray-900 error">
              {errors.email}
            </label>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="password"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Password
            </label>
            <div className="mt-2.5">
              <input
                type="password"
                name="password"
                id="password"
                autoComplete="password"
                value={formData.password}
                onChange={handleChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            <label className="block text-sm font-semibold leading-6 text-gray-900 error">
              {errors.password}
            </label>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="phone-number"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Phone number
            </label>
            <div className="relative mt-2.5">
              <div className="absolute inset-y-0 left-0 flex items-center">
                <label htmlFor="country" className="sr-only">
                  Country
                </label>
                <select
                  id="country"
                  name="country"
                  className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                >
                  <option>US</option>
                  <option>IN</option>
                  <option>EU</option>
                </select>
                <ChevronDownIcon
                  className="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400"
                  aria-hidden="true"
                />
              </div>
              <input
                type="text"
                name="phoneNumber"
                id="phone-number"
                autoComplete="tel"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            <label className="block text-sm font-semibold leading-6 text-gray-900 error">
              {errors.phoneNumber}
            </label>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="favoriteColor"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Favorite Color
            </label>
            <div className="mt-2.5  inset-y-0 left-0 flex items-center">
              <select
                className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded leading-tight focus:outline-none focus:shadow-outline"
                id="favoriteColor"
                name="favoriteColor"
                value={formData.favoriteColor}
                onChange={handleChange}
              >
                <option value="">Select a color</option>
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="green">Green</option>
              </select>
            </div>
            <label className="block text-sm font-semibold leading-6 text-gray-900 error">
              {errors.favoriteColor}
            </label>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={""}
              />
            </div>
            <label className="block text-sm font-semibold leading-6 text-gray-900 error">
              {errors.message}
            </label>
          </div>
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="gender"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            Gender
          </label>
          <div className="mt-2.5">
            <div className="flex items-center mb-4">
              <input
                type="radio"
                className="form-radio text-indigo-600 h-5 w-5 mr-2"
                checked={formData.gender === "male"}
                name="gender"
                value="male"
                onChange={handleChange}
              />
              <label className="text-sm">Male</label>
            </div>

            <div className="flex items-center mb-4">
              <input
                type="radio"
                className="form-radio text-indigo-600 h-5 w-5 mr-2"
                name="gender"
                checked={formData.gender === "female"}
                value="female"
                onChange={handleChange}
              />
              <label className="text-sm">Female</label>
            </div>
          </div>
          <label className="block text-sm font-semibold leading-6 text-gray-900 error">
            {errors.gender}
          </label>
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="agreeTerms"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            Agree Terms
          </label>
          <div className="mt-2.5">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-indigo-600 transition duration-150 ease-in-out"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleChange}
              />
              <span className="ml-2 text-gray-700">
                I agree to the terms and conditions
              </span>
            </label>
          </div>
          <label className="block text-sm font-semibold leading-6 text-gray-900 error">
            {errors.agreeTerms}
          </label>
        </div>

        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
