import React from "react";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <ul>
        <li>
           <Link to="/">صفحه‌ی اصلی</Link>
        </li>
        <li>
           <Link to="/login">ورود</Link>
        </li>
        <li>
           <Link to="/about">درباره‌ی ما</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;