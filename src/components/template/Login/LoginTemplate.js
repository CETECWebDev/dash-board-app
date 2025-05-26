import Link from "next/link";
import React, { useState } from "react";
import { RiUser3Line, RiLock2Line, RiEyeLine, RiEyeOffLine } from "react-icons/ri";

function LoginTemplate() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // ✅ نمایش دیتا در کنسول
    console.log("Form Submitted:", formData);
    // اینجا می‌تونی ارسال به API رو هم اضافه کنی
  };

  return (
    <div className="  fixed inset-0 flex items-center justify-center bg-[var(--colBg)]">
      <form
        onSubmit={handleSubmit}
        className=" shadow-lg  bg-white p-8 rounded-2xl backdrop-blur-md w-[90%] max-w-md"
      >
        <h1 className="text-center text-2xl md:text-3xl font-medium text-[var(--colTextA)] mb-8">
          Login
        </h1>

        {/* Email Field */}
        <div className="mb-6 border-b  flex items-center gap-3">
          <RiUser3Line className="text-[var(--colTextA)] text-xl" />
          <div className="relative w-full">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Email"
              className="peer w-full bg-transparent text-[var(--colTextA)] py-3 placeholder:text-[var(--colTextA)] focus:outline-none"
            />
          
          </div>
        </div>

        {/* Password Field */}
        <div className="mb-6 border-b  flex items-center gap-3 relative">
          <RiLock2Line className="text-[var(--colTextA)] text-xl" />
          <div className="relative w-full">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Password "
              className="peer w-full placeholder:text-[var(--colTextA)] bg-transparent text-[var(--colTextA)] py-3 pr-7 focus:outline-none"
            />
            

            <button
              type="button"
              onClick={togglePassword}
              className="absolute right-0 top-3 text-[var(--colTextA)] cursor-pointer text-xl"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <RiEyeOffLine /> : <RiEyeLine />}
            </button>
          </div>
        </div>

        {/* Remember Me & Forgot */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6 text-sm text-[var(--colTextA)]">
          <div className="flex items-center gap-2">
            <input
              id="login-check"
              name="remember"
              type="checkbox"
              checked={formData.remember}
              onChange={handleChange}
              className="w-4 h-4"
            />
            <label htmlFor="login-check">Remember me</label>
          </div>
          <Link href="#" className="hover:underline">
            Forgot Password?
          </Link>
        </div>

        <button
          type="submit"
          className="w-full bg-[var(--colBg)] text-[var(--colTextA)] font-medium py-3 rounded-lg mb-6 hover:text-[var(--textHover)] border hover:border-[var(--textHover)] transition"
        >
          Login
        </button>

        <p className="text-center text-sm text-[var(--colTextA)]">
          Don't have an account?{" "}
          <Link href="#" className="font-medium hover:underline">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}

export default LoginTemplate;
