import React from 'react';

const Register = () => {
  return (
    <div className="flex h-screen bg-white">
      {/* Left Side: Image */}
      <div className="hidden md:flex flex-1 items-center justify-center ">
        <img
          src="./teacher1.png"
          alt="Registration Illustration"
          className="max-w-full max-h-full object-cover"
        />
      </div>

      {/* Right Side: Form */}
      <div className="flex flex-col flex-1 items-center justify-center p-6">
        <form className="bg-white p-6 rounded shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-green-200"
              placeholder="Enter your email"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-green-200"
              placeholder="Enter your password"
            />
          </div>

          {/* Confirm Password */}
          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-green-200"
              placeholder="Confirm your password"
            />
          </div>

          {/* Select Role */}
<div className="mb-6">
  <label className="block text-sm font-medium mb-2">Select Role</label>
  <div className="flex items-center space-x-4">
    <label className="flex items-center">
      <input
        type="radio"
        name="role"
        value="teacher"
        className="mr-2 border-gray-300 rounded"
      />
      Teacher
    </label>
    <label className="flex items-center">
      <input
        type="radio"
        name="role"
        value="student"
        className="mr-2 border-gray-300 rounded"
      />
      Student
    </label>
  </div>
</div>


          {/* Submit Button */}
          <button className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 focus:ring focus:ring-green-200 focus:outline-none">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
