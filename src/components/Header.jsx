import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";
import logo from "./../assets/image/main/logo.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="text-sm flex justify-between items-center text-[#403F3C] font-semibold md:text-xl">
      <div className="flex items-center space-x-10">
        <div>
          <img
            src={logo}
            alt="로고 이미지"
            className="w-14 cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>
        <ul className="flex space-x-3 mb-1 cursor-pointer">
          <li onClick={() => navigate("/")}>Home</li>
          <li onClick={() => navigate("/products")}>Products</li>
          <li onClick={() => navigate("/solutions")}>Solutions</li>
        </ul>
      </div>
      <ul className="hidden items-center space-x-5 lg:flex">
        <li>Contact</li>
        <li>
          <a href="mailto:yu_sangil@naver.com" className="font-bold text-xl">
            <AiOutlineMail />
          </a>
        </li>
        <li>
          <a href="tel:010-7184-4833" className="font-bold text-xl">
            <AiOutlinePhone />
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
