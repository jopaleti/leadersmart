import { bag, coll, flash, frame, prof} from "../../assets";
import {
  Card,
  LoginModal,
  Reel,
  ShoeCard,
  VendorSignUp,
} from "../../Components";
import "./Homepage.scss";
import { useState, useRef } from "react";
import { useEffect } from "react";

function Homepage() {
  const [openSignUp, setOpenSignUp] = useState(false);
  const [openSignin, setOpenSignIn] = useState(false);
  const [openSignUpX, setOpenSignUpX] = useState(false);
  const [openSigninX, setOpenSignInX] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const modalRef1: any = useRef();
  const modalRef2: any = useRef();
  const modalRef3: any = useRef();
  const modalRef4: any = useRef();
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (modalRef1.current && !modalRef1.current.contains(event.target)) {
        setOpenSignUpX(false);
      }
      if (modalRef2.current && !modalRef2.current.contains(event.target)) {
        setOpenSignInX(false);
      }
      if (modalRef3.current && !modalRef3.current.contains(event.target)) {
        setOpenSignUp(false);
      }
      if (modalRef4.current && !modalRef4.current.contains(event.target)) {
        setOpenSignIn(false);
      }
    };

    if (openSignUpX || openSigninX || openSignin || openSignUp) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openSigninX, openSignUpX, openSignUp, openSignin]);
  return (
    <div style={{ backgroundColor: "#F1F1F1" }}>
      {/* Navbar Start */}
      <div className="bg-white flex justify-start px-8 py-4 items-center gap-10 md:gap-20 shadow-lg __nav">
        <div className="flex justify-center items-center gap-5 nav--top">
          <div>
            <button onClick={() => setOpenModal(true)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="black"
                className="bi bi-list"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                />
              </svg>
            </button>
          </div>
          <h1 className="text-lg">Leathers’ Mart</h1>
        </div>
        <div className="__search_bar">
          <form className="mx-auto">
            {/* <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label> */}
            <div className="relative w-full">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-2 ps-10 text-sm text-gray-900 border focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                style={{ backgroundColor: "#F1F1F1", color: "black" }}
                placeholder="Search"
                required
              />
            </div>
          </form>
        </div>
      </div>
      {/* <Navbar /> */}
      {/* Login modal */}
      <div
        className="__log__modal fixed"
        style={{
          top: "10%",
          minWidth: "350px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        {openSignUp && (
          <div ref={modalRef3}>
            <VendorSignUp />
          </div>
        )}
        {openSignin && (
          <div ref={modalRef4}>
            <LoginModal />
          </div>
        )}
        {/* <LoginModal /> */}
      </div>
      <div className="__home_page pt-3 flex justify-between items-start">
        <div className="template_left">
          <div className="flex flex-col gap-3 shadow-xl bg-white">
            <div className="text-center flex flex-col gap-3 shadow-lg p-6 justify-center items-center rounded-lg">
              <h1 className="font-bold">Hi Michael, </h1>
              <p className="text-sm">
                Let’s know what exactly you’ll
                <br /> love to wear
              </p>
              <button className="px-4 py-2 text-sm rounded-lg __post_btn">
                Post a request
              </button>
            </div>
          </div>

          {/* Profile information */}
          <div className="bg-white flex flex-col gap-3 py-2 px-3 shadow-xl rounded-lg mt-4">
            {/* Icon flex list */}
            <div className="flex gap-2 justify-start items-center">
              <img
                className="w-6 h-6 rounded-full"
                src={prof}
                alt="Rounded avatar"
              />
              <h2 className="text-sm">My Profile</h2>
            </div>
            <div className="flex gap-2 justify-start items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-wallet2"
                viewBox="0 0 16 16"
              >
                <path d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5z" />
              </svg>
              <h2 className="text-sm">Wallet</h2>
            </div>
            <div className="flex gap-2 justify-start items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-file-earmark-ppt"
                viewBox="0 0 16 16"
              >
                <path d="M7 5.5a1 1 0 0 0-1 1V13a.5.5 0 0 0 1 0v-2h1.188a2.75 2.75 0 0 0 0-5.5zM8.188 10H7V6.5h1.188a1.75 1.75 0 1 1 0 3.5" />
                <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5z" />
              </svg>
              <h2 className="text-sm">Orders . Disputes</h2>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex justify-start gap-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-cart"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                </svg>
                <h2 className="text-sm">Cart</h2>
              </div>
              <h2 className="text-sm">10</h2>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex justify-start gap-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-gift"
                  viewBox="0 0 16 16"
                >
                  <path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 14.5V7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A3 3 0 0 1 3 2.506zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43zM9 3h2.932l.023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0zM1 4v2h6V4zm8 0v2h6V4zm5 3H9v8h4.5a.5.5 0 0 0 .5-.5zm-7 8V7H2v7.5a.5.5 0 0 0 .5.5z" />
                </svg>
                <h2 className="text-sm">Reward Center</h2>
              </div>
              <h2 className="text-sm">6</h2>
            </div>
            <div className="flex gap-2 justify-start items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-fire"
                viewBox="0 0 16 16"
              >
                <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16m0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15" />
              </svg>
              <h2 className="text-sm">Hot</h2>
            </div>

            <div className="flex gap-2 justify-start items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-menu-button-wide-fill"
                viewBox="0 0 16 16"
              >
                <path d="M1.5 0A1.5 1.5 0 0 0 0 1.5v2A1.5 1.5 0 0 0 1.5 5h13A1.5 1.5 0 0 0 16 3.5v-2A1.5 1.5 0 0 0 14.5 0zm1 2h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1m9.927.427A.25.25 0 0 1 12.604 2h.792a.25.25 0 0 1 .177.427l-.396.396a.25.25 0 0 1-.354 0zM0 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm1 3v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2zm14-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2zM2 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5" />
              </svg>
              <h2 className="text-sm">Category</h2>
            </div>
          </div>
        </div>
        <div className="template_middle">
          <div className="__carousel_container">
            {/* Carousel goes here... */}
            <img src={flash} alt="" className="w-full" />
          </div>
          {/* Filter divider */}
          <div className="flex gap-4 my-4 items-center justify-between">
            <span
              style={{ width: "88%", height: "2px", background: "#898989" }}
            ></span>
            <h3 className="text-sm">
              Filter: <span className="font-bold">Top</span>
            </h3>
          </div>

          {/* Trusted Vendor card */}
          <div className="bg-white trusted rounded-lg shadow-lg py-6 px-5">
            <h1 className="text-xl text-center font-bold mb-4">
              TRUSTED VENDORS
            </h1>
            <div className="flex gap-2 items-start flex-wrap shrink-0">
              {/* Card */}
              <Card />
              <Card />
              <Card />
            </div>
            {/* More */}
            <div className="grid grid-cols-3 gap-4 mt-2">
              <div className="col-start-2 flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-chevron-down"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                  />
                </svg>
              </div>
              <div className="flex justify-end">
                <h1>+ more</h1>
              </div>
            </div>
          </div>

          {/* Reels */}
          <div className="bg-white mt-3 py-6 px-4 rounded-lg overflow-hidden shadow-lg">
            <h1 className="text-center font-bold text-xl">REELS</h1>

            <div className="mt-3 flex gap-2 justify-start items-start flex-wrap shrink-0">
              {/* Reel_card */}
              <Reel />
              <Reel />
              <Reel />
              <Reel />
            </div>

            <div className="mt-3 flex justify-center items-center">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-chevron-down"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* shoes */}
          <div className="bg-white __shoes_collection mt-3 py-6 px-4 rounded-lg overflow-hidden shadow-lg">
            <h1 className="text-center font-bold text-lg">MEN’S SHOES</h1>
            <div className="mt-4 flex flex-wrap gap-2 md:gap-3 items-start justify-start">
              {/* Shoe card */}
              <ShoeCard discount="true" discountprice="" percent="8%" />
              <ShoeCard discount="true" discountprice="" percent="8%" />
              <ShoeCard discount="true" discountprice="" percent="8%" />
            </div>
            <div className="mt-3 flex justify-center items-center">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-chevron-down"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="template_right">
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <div className="flex flex-col gap-4">
              <h1 className="font-bold">Welcome to Cobbs’ Mart !</h1>
              <button
                className="w-full px-4 py-2 text-sm rounded-sm __sign_btn"
                onClick={() => setOpenSignUp((prevState) => !prevState)}
              >
                Sign up with phone or email
              </button>
              <div className="flex justify-between items-center w-full">
                <span
                  className="w-1/2"
                  style={{ backgroundColor: "#EBEEF7", height: "2px" }}
                ></span>
                <h1 style={{ color: "#EBEEF7" }} className="px-2">
                  or
                </h1>
                <span
                  className="w-1/2"
                  style={{ backgroundColor: "#EBEEF7", height: "2px" }}
                ></span>
              </div>

              <div className="mt-2">
                <button className="w-full px-4 py-2 text-sm rounded-sm __sign_btn2">
                  Continue with Google
                </button>
              </div>
              <div className="mt-2">
                <button className="w-full px-4 py-2 text-sm rounded-sm __sign_btn2">
                  Continue with Apple
                </button>
              </div>
              <div className="mt-2">
                <button
                  onClick={() => setOpenSignIn((prevState) => !prevState)}
                >
                  <h3 className="text-sm">
                    Already registered?{" "}
                    <span
                      style={{ color: "#814631" }}
                      className="font-bold text-sm"
                    >
                      Log In
                    </span>
                  </h3>
                </button>
                <div>
                  <button
                    onClick={() => setOpenSignUp((prevState) => !prevState)}
                  >
                    <h3
                      className="mt-3 font-bold text-sm"
                      style={{ color: "#814631" }}
                    >
                      Sign up for a vendor’s account
                    </h3>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center flex-col gap-2 mt-4 shadow-lg">
            <div className="__right_img_container">
              <img className="w-full h-auto" src={frame} alt="" />
            </div>
          </div>

          <div className="flex justify-center items-center flex-col gap-2 mt-4 shadow-lg">
            <div className="__right_img_container">
              <img className="w-full h-auto" src={coll} alt="" />
            </div>
          </div>

          <div className="flex justify-center items-center flex-col gap-2 mt-4 shadow-lg">
            <div className="__right_img_container">
              <img className="w-full h-auto" src={bag} alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar for small screen */}
      {openModal && (
        <aside
          className="absolute inset-0 w-full h-full __aside"
          style={{ top: "0px", backgroundColor: "#F1F1F1" }}
        >
          {openSignUpX && (
            <div className="mb-3" ref={modalRef1}>
              <VendorSignUp />
            </div>
          )}
          {openSigninX && (
            <div className="mb-3" ref={modalRef1}>
              <LoginModal />
            </div>
          )}
          <div className="flex flex-col gap-3 shadow-xl bg-white">
            <div className="text-center flex flex-col gap-3 shadow-lg p-6 justify-center items-center rounded-lg">
              <div className="text-left">
                <button onClick={() => setOpenModal(false)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="red"
                    className="bi bi-x-octagon"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4.54.146A.5.5 0 0 1 4.893 0h6.214a.5.5 0 0 1 .353.146l4.394 4.394a.5.5 0 0 1 .146.353v6.214a.5.5 0 0 1-.146.353l-4.394 4.394a.5.5 0 0 1-.353.146H4.893a.5.5 0 0 1-.353-.146L.146 11.46A.5.5 0 0 1 0 11.107V4.893a.5.5 0 0 1 .146-.353zM5.1 1 1 5.1v5.8L5.1 15h5.8l4.1-4.1V5.1L10.9 1z" />
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                  </svg>
                </button>
              </div>
              <h1 className="font-bold">Hi Michael, </h1>
              <p className="text-sm">
                Let’s know what exactly you’ll
                <br /> love to wear
              </p>
              <button className="px-4 py-2 text-sm rounded-lg __post_btn">
                Post a request
              </button>
            </div>
          </div>

          <div className="bg-white shadow-lg p-6 rounded-lg mt-4">
            <div className="flex flex-col gap-4">
              <h1 className="font-bold text-center">
                Welcome to Cobbs’ Mart !
              </h1>
              <button
                className="w-full px-4 py-2 text-sm rounded-sm __sign_btn"
                onClick={() => setOpenSignUpX((prevState) => !prevState)}
              >
                Sign up with phone or email
              </button>
              <div className="flex justify-between items-center w-full">
                <span
                  className="w-1/2"
                  style={{ backgroundColor: "#EBEEF7", height: "2px" }}
                ></span>
                <h1 style={{ color: "#EBEEF7" }} className="px-2">
                  or
                </h1>
                <span
                  className="w-1/2"
                  style={{ backgroundColor: "#EBEEF7", height: "2px" }}
                ></span>
              </div>

              <div className="mt-2">
                <button className="w-full px-4 py-2 text-sm rounded-sm __sign_btn2">
                  Continue with Google
                </button>
              </div>
              <div className="mt-2">
                <button className="w-full px-4 py-2 text-sm rounded-sm __sign_btn2">
                  Continue with Apple
                </button>
              </div>
              <div className="mt-2">
                <button
                  onClick={() => setOpenSignInX((prevState) => !prevState)}
                >
                  <h3 className="text-sm text-center">
                    Already registered?{" "}
                    <span
                      style={{ color: "#814631" }}
                      className="font-bold text-sm"
                    >
                      Log In
                    </span>
                  </h3>
                </button>
                <div>
                  <button
                    onClick={() => setOpenSignUpX((prevState) => !prevState)}
                  >
                    <h3
                      className="mt-3 font-bold text-sm text-center"
                      style={{ color: "#814631" }}
                    >
                      Sign up for a vendor’s account
                    </h3>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white flex flex-col gap-3 py-2 px-3 shadow-xl rounded-lg mt-4">
            {/* Icon flex list */}
            <div className="flex gap-2 justify-start items-center">
              <img
                className="w-6 h-6 rounded-full"
                src={prof}
                alt="Rounded avatar"
              />
              <h2 className="text-sm">My Profile</h2>
            </div>
            <div className="flex gap-2 justify-start items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-wallet2"
                viewBox="0 0 16 16"
              >
                <path d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5z" />
              </svg>
              <h2 className="text-sm">Wallet</h2>
            </div>
            <div className="flex gap-2 justify-start items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-file-earmark-ppt"
                viewBox="0 0 16 16"
              >
                <path d="M7 5.5a1 1 0 0 0-1 1V13a.5.5 0 0 0 1 0v-2h1.188a2.75 2.75 0 0 0 0-5.5zM8.188 10H7V6.5h1.188a1.75 1.75 0 1 1 0 3.5" />
                <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5z" />
              </svg>
              <h2 className="text-sm">Orders . Disputes</h2>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex justify-start gap-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-cart"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                </svg>
                <h2 className="text-sm">Cart</h2>
              </div>
              <h2 className="text-sm">10</h2>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex justify-start gap-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-gift"
                  viewBox="0 0 16 16"
                >
                  <path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 14.5V7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A3 3 0 0 1 3 2.506zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43zM9 3h2.932l.023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0zM1 4v2h6V4zm8 0v2h6V4zm5 3H9v8h4.5a.5.5 0 0 0 .5-.5zm-7 8V7H2v7.5a.5.5 0 0 0 .5.5z" />
                </svg>
                <h2 className="text-sm">Reward Center</h2>
              </div>
              <h2 className="text-sm">6</h2>
            </div>
            <div className="flex gap-2 justify-start items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-fire"
                viewBox="0 0 16 16"
              >
                <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16m0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15" />
              </svg>
              <h2 className="text-sm">Hot</h2>
            </div>

            <div className="flex gap-2 justify-start items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-menu-button-wide-fill"
                viewBox="0 0 16 16"
              >
                <path d="M1.5 0A1.5 1.5 0 0 0 0 1.5v2A1.5 1.5 0 0 0 1.5 5h13A1.5 1.5 0 0 0 16 3.5v-2A1.5 1.5 0 0 0 14.5 0zm1 2h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1m9.927.427A.25.25 0 0 1 12.604 2h.792a.25.25 0 0 1 .177.427l-.396.396a.25.25 0 0 1-.354 0zM0 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm1 3v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2zm14-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2zM2 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5" />
              </svg>
              <h2 className="text-sm">Category</h2>
            </div>
          </div>
        </aside>
      )}
    </div>
  );
}

export default Homepage;
