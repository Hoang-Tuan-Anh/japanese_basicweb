import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import Auth from '../utils/auth';

import { HiraganaChart, KatakanaChart, KanjiChart } from '../components';
import { charBannerText } from '../constants/constants';

const Characters = () => {
  // If the user is not logged in, redirect to the login page
  if (!Auth.loggedIn()) {
    return <Navigate to="/login" />;
  }

  const tabs = ['Hiragana', 'Katakana', 'Kanji'];
  const [activeTab, setActiveTab] = useState('Hiragana');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const chartComponent = {
    Hiragana: <HiraganaChart />,
    Katakana: <KatakanaChart />,
    Kanji: <KanjiChart />,
  };

  return (
    <section
      id="characters"
      className="w-full min-h-screen p-4 md:p-8"
    >
      <div className="mb-8">
        {/* Page Heading */}
        <h1 className="mb-8 h1-style">Bảng chữ cái</h1>

        {/* Tabs */}
        <div className="flex justify-center mb-8 border-b-2 border-b-gray-300 dark:border-gray-700 sm:justify-start">
          <div className="grid w-full grid-cols-3 font-bold text-center sm:max-w-md sm:text-lg">
            {tabs.map((tab) => (
              <button
                key={`id-${tab}`}
                type="button"
                className={`tab-style ${activeTab === tab ? 'tab-active-style' : ''}`}
                onClick={() => handleTabClick(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Banner */}
        <div className="text-white banner-container-style text-shadow bg-gradient-to-r from-teal-400 to-teal-600">
          <div className="relative z-10 p-8">
            <h2 className="mb-3 banner-heading">Let's learn {activeTab}!</h2>
            <p className="text-lg">{charBannerText[activeTab]}</p>
          </div>
          <div className="banner-bg-style bg-clouds" />
        </div>
      </div>

      {/* Content */}
      <div>
        {/* Start Quiz Button for Hiragana and Katakana */}
        {(activeTab === 'Hiragana' || activeTab === 'Katakana') && (
          <div className="flex justify-center mb-8 sm:justify-start">
            <Link
              to={`/quiz/${activeTab.toLowerCase()}`}
              className="w-full px-8 py-4 text-lg font-bold text-center text-white bg-blue-500 sm:w-fit dark:text-slate-800 hover:bg-blue-600 dark:bg-sky-400 dark:hover:bg-sky-500 rounded-xl"
            >
              Start {activeTab} Quiz
            </Link>
          </div>
        )}

        <div>{chartComponent[activeTab]}</div>
      </div>
    </section>
  );
};

export default Characters;
