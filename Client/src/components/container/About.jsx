import React, { forwardRef, useState } from "react";
import axios from 'axios'






const About = () => {

  const [formData, setFormData] = useState({

    firstName: "",
    lastName: "",
    mobileNumber: "",
    email: "",
    dob: "",
    gender: "",
    enrolledCourses: "",
    qualification: "",

  });
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const submitForm = async () => {
    
    try {
      const response = await axios.post('http://3.6.245.85:5001/student/studentRegister', formData);
      console.log(response)
      alert('Form submitted successfully:');
    } catch (error) {
      alert('Error submitting form:', error.message);
    }
  };

  return (
    <div className="bg-default-100 rounded-lg dark:bg-default-50" id="about">
      <div className="p-8">
        <h1 className="text-xl font-medium text-default-950 mb-4 text-center">
          <span
            style={{ color: "black", fontWeight: "bold", marginRight: "8px" }}
          >
            Student
          </span>
          <span style={{ color: "#008080" }}>Registration</span>
        </h1>
        <div className="grid md:grid-cols-2 gap-4">
          {/* Input fields */}
          {[
            "firstName",
            "lastName",
            "mobileNumber",
            "email",
            "dob",
            "qualification",
          ].map((field) => (
            <div key={field} className="space-y-2">
              <label className="text-sm text-default-800" htmlFor={field}>
                {field === "dob"
                  ? "Date of Birth"
                  : field.charAt(0).toUpperCase() + field.slice(1)}
              </label>
              {field === "dob" ? (
                <input
                  id={field}
                  name={field}
                  className="block w-full rounded-md py-2.5 px-4 text-sm text-default-800 focus:ring-transparent border-0 dark:bg-default-100"
                  type="date"
                  placeholder={field === "dob" ? "Date of Birth" : field}
                  value={formData[field]}
                  onChange={handleChange}
                  required
                />
              ) : (
                <input
                  id={field}
                  name={field}
                  className="block w-full rounded-md py-2.5 px-4 text-sm text-default-800 focus:ring-transparent border-0 dark:bg-default-100"
                  type="text"
                  placeholder={field === "dob" ? "Date of Birth" : field}
                  value={formData[field]}
                  onChange={handleChange}
                  required
                />
              )}
            </div>
          ))}

          {/* Gender dropdown */}
          <div className="space-y-2">
            <label className="text-sm text-default-800" htmlFor="gender">
              Gender
            </label>
            <input
              id="gender"
              name="gender"
              className="block w-full rounded-md py-2.5 px-4 text-sm text-default-800 focus:ring-transparent border-0 dark:bg-default-100"
              value={formData.gender}
              onChange={handleChange}
              required
            >
            </input>
          </div>

          {/* Enrolled Courses dropdown */}
          <div className="space-y-2">
            <label
              className="text-sm text-default-800"
              htmlFor="enrolled_courses"
            >
              Enrolled Courses
            </label>
            <select
              id="enrolled_courses"
              name="enrolledCourses"
              className="block w-full rounded-md py-2.5 px-4 text-sm text-default-800 focus:ring-transparent border-0 dark-bg-default-100"
              value={formData.enrolledCourses}
              onChange={handleChange}
              required
            >
              <option value="reactNative">reactNative</option>
              <option value="reactjs">reactjs</option>
              <option value="nodejs">nodejs</option>
              <option value="python">python</option>
              <option value="digitalmarketing">digitalmarketing</option>
              <option value="ui&ux">ui&ux</option>
            </select>
          </div>
        </div>

        <div className="flex justify-center mt-6">
          <button
            onClick={submitForm}
            className="inline-flex items-center justify-center gap-2 px-8 py-2.5 rounded text-sm bg-Teal text-white capitalize transition-all hover:bg-primary-500 hover:text-white"
          >
            Register
            <i className="ph ph-paper-plane-right text-base"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
