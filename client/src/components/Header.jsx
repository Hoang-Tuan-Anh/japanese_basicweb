import React from 'react';
import { Link } from 'react-router-dom';
// import useSelector and useDispatch hooks from react-redux to access state and dispatch actions
import { useSelector, useDispatch } from 'react-redux';
// import darkmode action
import { TOGGLE_DARKMODE } from '../features/darkMode/darkModeSlice';

import logo from '../assets/AENihongoLogo.svg';
import logoText from '../assets/SakuraStudyTextBlack.svg';
import logoTextDarkMode from '../assets/SakuraStudyTextWhite.svg';
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi';

const Header = () => {
  // get darkmode state from store
  const darkMode = useSelector((state) => state.darkMode.value);
  // get dispatch function from useDispatch hook
  const dispatch = useDispatch();

  return (
    <header className="z-50 bg-white border-b border-gray-100 dark:bg-slate-800 dark:border-gray-900">
      <nav className="flex items-center justify-between p-4 mx-auto max-w-7xl lg:px-8">
        {/* Logo image */}
        <Link
          to="/"
          className="flex items-center gap-3 hover:opacity-70 custom-transition"
        >
          <img
            src={logo}
            alt="Logo"
            className="w-10 h-10"
          />
          {/* Show dark mode logo if dark mode is enabled */}
          {darkMode ? (
            <img
              src={logoTextDarkMode}
              alt="Sakura Study Text Logo"
              className="hidden w-auto h-6 sm:inline-block"
            />
          ) : (
            <img
              src={logoText}
              alt="Sakura Study Text Logo"
              className="hidden w-auto h-6 sm:inline-block"
            />
          )}
        </Link>
        {/* Log in and Sign Up Links and Dark Mode Toggle */}
        <div className="flex items-center gap-2 font-bold sm:gap-4">
          {/* Toggle dark mode */}
          <button
            type="button"
            className="hover:opacity-70"
            onClick={() => dispatch(TOGGLE_DARKMODE())}
          >
            {darkMode ? (
              <HiOutlineSun
                className="w-6 h-6"
              />
            ) : (
              <HiOutlineMoon
                className="w-6 h-6"
              />
            )}
          </button>
          <Link
            to="/login"
            className="px-4 py-2 hover:text-primary-shade"
          >
            Đăng nhập
          </Link>
          <Link
            to="/signup"
            className="px-4 py-2 text-white bg-primary hover:bg-primary-shade rounded-xl"
          >
            Đăng ký
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
