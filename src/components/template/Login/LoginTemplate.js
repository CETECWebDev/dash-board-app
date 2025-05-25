import { translate } from "@/language/language";
import Link from "next/link";
import React, { useState } from "react";
import {
  RiUser3Line,
  RiLock2Line,
  RiEyeLine,
  RiEyeOffLine,
} from "react-icons/ri";

// فرض بر این است که dir یا lang به صورت prop یا context به این کامپوننت داده می‌شود.
// در اینجا به صورت نمونه مقدار "fa" را گذاشتیم.
const dir = "fa";

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
    console.log("Form Submitted:", formData);
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-[var(--colBg)]"
      dir={dir === "fa" ? "rtl" : "ltr"}
    >
      <form
        onSubmit={handleSubmit}
        className="bg-[var(--colCard)] p-8 rounded-2xl backdrop-blur-md w-[90%] max-w-md text-right"
      >
        <h1 className="text-center text-2xl md:text-3xl font-medium text-[var(--colTextA)] mb-8">
          {translate(dir, "loginForm.title")}
        </h1>

        {/* Email Field */}
        <div className="mb-6 border-b flex items-center gap-3 flex-row-reverse">
          <RiUser3Line className="text-[var(--colTextA)] text-xl" />
          <div className="relative w-full">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder={translate(dir, "loginForm.email")}
              className="peer w-full bg-transparent text-[var(--colTextA)] py-3 placeholder:text-[var(--colTextA)] focus:outline-none text-right"
            />
          </div>
        </div>

        {/* Password Field */}
        <div className="mb-6 border-b flex items-center gap-3 relative flex-row-reverse">
          <RiLock2Line className="text-[var(--colTextA)] text-xl" />
          <div className="relative w-full">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder={translate(dir, "loginForm.password")}
              className="peer w-full placeholder:text-[var(--colTextA)] bg-transparent text-[var(--colTextA)] py-3 pr-7 focus:outline-none text-right"
            />
            <button
              type="button"
              onClick={togglePassword}
              className="absolute left-0 top-3 text-[var(--colTextA)] cursor-pointer text-xl"
              aria-label={
                showPassword
                  ? translate(dir, "loginForm.hidePassword") || "پنهان کردن رمز"
                  : translate(dir, "loginForm.showPassword") || "نمایش رمز"
              }
            >
              {showPassword ? <RiEyeOffLine /> : <RiEyeLine />}
            </button>
          </div>
        </div>

        {/* Remember Me & Forgot */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6 text-sm text-[var(--colTextA)]">
          <div className="flex items-center gap-2 flex-row-reverse">
            <input
              id="login-check"
              name="remember"
              type="checkbox"
              checked={formData.remember}
              onChange={handleChange}
              className="w-4 h-4"
            />
            <label htmlFor="login-check">
              {translate(dir, "loginForm.remember") || "مرا به خاطر بسپار"}
            </label>
          </div>
          <Link href="#" className="hover:underline">
            {translate(dir, "loginForm.forgot")}
          </Link>
        </div>

        <button
          type="submit"
          className="w-full bg-[var(--colBg)] text-[var(--colTextA)] font-medium py-3 rounded-lg mb-6 hover:text-[var(--textHover)] border hover:border-[var(--textHover)] transition"
        >
          {translate(dir, "loginForm.logIn")}
        </button>

        <p className="text-center text-sm text-[var(--colTextA)]">
         {translate(dir ,"loginForm.text")}
        </p>
      </form>
    </div>
  );
}

export default LoginTemplate;
