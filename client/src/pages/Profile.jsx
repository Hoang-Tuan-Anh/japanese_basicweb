import React from 'react';
import Auth from '../utils/auth';

import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';
import { AiOutlineLoading } from 'react-icons/ai';

const Profile = () => {
  // If the user is not logged in, redirect to the login page
  if (!Auth.loggedIn()) {
    return <Navigate to="/login" />;
  }

  // get the user's data from the server
  const { data, loading } = useQuery(QUERY_ME);
  // set the user's data to a variable
  const user = data?.me || {};

  // get the first letter of the user's username
  const firstLetter = user.username?.charAt(0).toUpperCase();

  return (
    <section
      id="profile"
      className="w-full min-h-screen p-4 md:p-8"
    >
      {/* Page Heading */}
      <h1 className="mb-8 h1-style">Trang cá nhân</h1>
      {/* Loading Spinner */}
      {loading && <AiOutlineLoading className="w-12 h-12 mx-auto animate-spin" />}
      {/* Profile Info */}
      <div className="flex flex-col items-center gap-4 mb-8 box-container-style sm:flex-row">
        <div className="flex items-center justify-center w-32 h-32 text-6xl font-bold text-white uppercase rounded-full bg-primary">
          {firstLetter}
        </div>
        <div className="flex flex-col gap-2 text-center sm:text-left">
          <h2 className="text-2xl font-bold">{user.username}</h2>
          <p className="text-gray-500 dark:text-gray-400">{`Joined ${user.createdAt}`}</p>
        </div>
      </div>
      {/* Profile Statistics */}
      <div className="flex flex-col gap-4 mb-8 box-container-style">
        <h3 className="text-xl font-bold">Thống kê</h3>
        <div>
          <h4 className="text-gray-500 dark:text-gray-400">Total XP:</h4>
          <h2 className="text-2xl font-bold">{user.experience}</h2>
        </div>
      </div>
    </section>
  );
};

export default Profile;
