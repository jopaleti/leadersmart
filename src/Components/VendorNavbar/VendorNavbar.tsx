import { lelogo, prof } from "../../assets";
import "./Vendor.scss";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import { useEffect } from "react";

function VendorNavbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const mobileRef: any = useRef();

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (mobileRef.current && !mobileRef.current.contains(event.target)) {
        setMobileMenu(false);
      }

      if (mobileMenu) {
        document.addEventListener("mousedown", handleClickOutside);
      } else {
        document.removeEventListener("mousedown", handleClickOutside);
      }

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    };
  }, [mobileMenu]);
  return (
    <div className="__v_navbar py-3">
      {/* Mobile menu dropdown */}
      {mobileMenu && (
        <div className="absolute __mobile_nav">
          <div ref={mobileRef}>
            <div className="flex flex-col items-star gap-5 justify-start">
              <select
                className="__nav_elem_mobile text-white"
                name="nav-select"
                id="nav-select"
              >
                <option value="">Home</option>
                <option value="dog">Dog</option>
              </select>
              <p className="__nav_elem_mobile text-white">Listing</p>
              <select
                className="__nav_elem_mobile"
                name="nav-select"
                id="nav-select"
              >
                <option value="">Home</option>
                <option value="dog">Dog</option>
              </select>
              <div>
                <Link to="/priceplan">
                  <p className="__nav_elem_mobile text-white">Get Membership</p>
                </Link>
              </div>
              <div>
                <Link to="/message">
                  <p className="__nav_elem_mobile text-white">Contact</p>
                </Link>
              </div>
            </div>
          </div>
          {/* <h1 className="text-white">hjgvjvghjv</h1> */}
        </div>
      )}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="__logo flex justify-center items-center gap-3">
            <Link to="/">
              <img src={lelogo} className="h-14" alt="logo.png" />
            </Link>
          </div>
          <div className="flex items-center gap-5 justify-start __v_nav_middle">
            <select className="__nav_elem" name="nav-select" id="nav-select">
              <option value="">Home</option>
              <option value="dog">Dog</option>
            </select>
            <p className="__nav_elem">Listing</p>
            <select className="__nav_elem" name="nav-select" id="nav-select">
              <option value="">Home</option>
              <option value="dog">Dog</option>
            </select>
            <div>
              <Link to="/priceplan">
                <p className="__nav_elem">Get Membership</p>
              </Link>
            </div>
            <div>
              <Link to="/message">
                <p className="__nav_elem">Contact</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-chat-dots"
            viewBox="0 0 16 16"
          >
            <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
            <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9 9 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.4 10.4 0 0 1-.524 2.318l-.003.011a11 11 0 0 1-.244.637c-.079.186.074.394.273.362a22 22 0 0 0 .693-.125m.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6-3.004 6-7 6a8 8 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a11 11 0 0 0 .398-2" />
          </svg>
          <button onClick={() => setMobileMenu((prevState) => !prevState)}>
            <img
              className="w-8 h-8 rounded-full"
              src={prof}
              alt="Rounded avatar"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default VendorNavbar;
