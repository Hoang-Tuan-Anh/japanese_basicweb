import React from 'react';
import { Navigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth';

import { LessonContainer } from '../components';
import { lessonData } from '../data';

const Dashboard = () => {
  // If the user is not logged in, redirect to the login page
  if (!Auth.loggedIn()) {
    return <Navigate to="/login" />;
  }

  // get the user's data from the server
  const { data } = useQuery(QUERY_ME);
  // set the user's data to a variable
  const user = data?.me || {};

  return (
    <section
      id="dashboard"
      className="w-full min-h-screen p-4 md:p-8"
    >
      <h1 className="mb-8 h1-style">Trang chủ</h1>
      {/* Banner */}
      <div className="mb-8 text-white banner-container-style text-shadow bg-gradient-to-r from-teal-400 to-teal-600">
        <div className="relative z-10 p-8">
          <h2 className="mb-3 banner-heading">Chào mừng {user.username}!</h2>
          <p className="text-lg">học đi đmm</p>
        </div>
        <div className="banner-bg-style bg-parkay-floor" />
      </div>
      <div className="mb-8">
        <p>
        Những bài học và quiz nhằm mục đích hỗ trợ bạn luyện tập những kiến ​​thức đã học trong mỗi bài học của giáo trình{' '}
          <strong>Genki: An Integrated Course in Elementary Japanese textbooks (Third Edition)</strong>.
        </p>
        <br />
        <p>Chọn một bài học để bắt đầu kiểm tra.</p>
      </div>

      <h3 className="mb-4 text-xl font-bold">Lessons</h3>
      {/* Lessons */}
      <div className="flex flex-col gap-4">
        {lessonData.map((lesson) => (
          <LessonContainer
            key={lesson.lessonUrl}
            lesson={lesson}
          />
        ))}
      </div>
    </section>
  );
};

export default Dashboard;
