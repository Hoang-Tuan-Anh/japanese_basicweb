import { HiOutlineHome, HiOutlineUserCircle } from 'react-icons/hi';
import { IoLanguage } from 'react-icons/io5';
import { MdOutlineLeaderboard } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa';

const sidebarNavItems = [
  {
    title: 'Trang chủ',
    path: '/dashboard',
    icon: <HiOutlineHome className="sidebar-btn-icon" />,
  },
  {
    title: 'Bảng chữ cái',
    path: '/characters',
    icon: <IoLanguage className="sidebar-btn-icon" />,
  },
  {
    title: 'Bảng xếp hạng',
    path: '/leaderboards',
    icon: <MdOutlineLeaderboard className="sidebar-btn-icon" />,
  },
  {
    title: 'Trang cá nhân',
    path: '/profile',
    icon: <HiOutlineUserCircle className="sidebar-btn-icon" />,
  },
];

const socialLinks = [
  {
    title: 'Github',
    url: 'https://github.com/kt946/japanese-quiz-mern-app',
    icon: <FaGithub className="social-link" />,
  },
];

const charBannerText = {
  Hiragana: 'Master Japanese with the basics',
  Katakana: 'Practice essential characters for loanwords',
  Kanji: 'Take your mastery to the next level',
};

export { sidebarNavItems, socialLinks, charBannerText };
