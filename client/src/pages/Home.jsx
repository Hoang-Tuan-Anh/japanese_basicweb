import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import countryLogo from '../assets/JapanCountryLogo.png';
import Auth from '../utils/auth';

const Home = () => {
  const loggedIn = Auth.loggedIn();
  if (loggedIn) {
    return <Navigate to="/dashboard" />;
  }

  return (
    // Hero Section with Logo and Call to Action
    <section
      id="hero"
      className="w-full min-h-[calc(100vh-72px)] py-14 hero-bg"
    >
      <div className="flex flex-col items-center justify-between gap-8 px-4 mx-auto max-w-7xl lg:px-8 lg:flex-row">
        {/* Call to Action */}
        <div className="flex flex-col items-center order-last gap-8 font-bold text-center lg:items-start lg:text-left lg:order-first">
          <h1 className="text-xl uppercase md:text-2xl lg:text-3xl">
            Lựa chọn hàng đầu cho việc học <br /> <br />
            
            <span className="text-5xl text-primary md:text-6xl lg:text-7xl">Tiếng Nhật</span>
          </h1>
          <p className="max-w-md text-gray-500 md:text-xl dark:text-gray-400">
            Làm quen với từ và cụm từ tiếng Nhật thông qua các bài học hấp dẫn của chúng tôi.
          </p>
          <div className="flex flex-col gap-4 text-center w-72">
            {/* Sign Up Button */}
            <Link
              to="/signup"
              className="px-3 py-3 text-white shadow-xl bg-primary hover:bg-primary-shade rounded-xl"
            >
              Bắt đầu khóa học
            </Link>
            {/* Login Button */}
            <Link
              to="/login"
              className="px-3 py-3 bg-white border-2 shadow-xl text-primary dark:text-gray-300 border-primary dark:border-gray-300 dark:bg-slate-900 dark:hover:bg-gray-100/10 hover:bg-gray-300 rounded-xl"
            >
              Đã có tài khoản ?
            </Link>
          </div>
        </div>
        {/* Country Logo */}
        <img
          src={countryLogo}
          alt="Japan Country Logo"
          className="w-48 h-48 md:w-80 md:h-80 lg:w-[480px] lg:h-[480px] transition-all duration-300 ease-in-out"
        />
      </div>
    </section>
  );
};

export default Home;
