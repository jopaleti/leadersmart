import { bag, coll, flash, frame, prof } from "../../assets";
import {
  Card,
  LoginModal,
  MessageList,
  Navbar,
  Reel,
  ShoeCard,
  VendorSignUp,
  UserSignUp,
  ForgotPassword,
} from "../../Components";
import "./Homepage.scss";
import { useState, useRef } from "react";
import { useEffect } from "react";
import VendorFooter from "../../Components/VendorFooter/VendorFooter";

import { useContext } from "react";
import { MyContext } from "../../Context";

function Homepage() {
  const userContext: any = useContext(MyContext);
  const { value, setValue } = userContext;

  const [openSignUp, setOpenSignUp] = useState(false);
  const [openSignin, setOpenSignIn] = useState(false);
  const [openSignUpX, setOpenSignUpX] = useState(false);
  const [openSigninX, setOpenSignInX] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [UserSignUpX, setUserSignUpX] = useState(false);
  const modalRef1: any = useRef();
  const modalRef2: any = useRef();
  const modalRef3: any = useRef();
  const modalRef4: any = useRef();
  const modalRef5: any = useRef();
  const modalRef6: any = useRef();
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
      if (modalRef5.current && !modalRef5.current.contains(event.target)) {
        setUserSignUpX(false);
      }
      if (modalRef6.current && !modalRef6.current.contains(event.target)) {
        setValue(false);
      }
    };

    if (openSignUpX || openSigninX || openSignin || openSignUp || UserSignUpX || value) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openSigninX, openSignUpX, openSignUp, openSignin, UserSignUpX, value]);
  return (
    <div style={{ backgroundColor: "#F1F1F1" }} className="relative">
      <div className="__chat_list fixed overflow-y-auto">
        <MessageList />
      </div>
      {/* Navbar Start */}
      <Navbar />
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
        {!value && openSignin && (
          <div ref={modalRef4}>
            <LoginModal />
            {/* <ForgotPassword /> */}
          </div>
        )}
        {value && (
          <div ref={modalRef6}>
            <ForgotPassword />
          </div>
        )}
        {UserSignUpX && (
          <div ref={modalRef5}>
            <UserSignUp />
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
            <div className="flex justify-between items-center">
              <div className="flex justify-start gap-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-camera-reels-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M6 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                  <path d="M9 6a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                  <path d="M9 6h.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 7.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 16H2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" />
                </svg>
                <h2 className="text-sm">Reels</h2>
              </div>
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
            <div className="flex justify-between items-center">
              <div className="flex justify-start gap-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-gear-wide"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.932.727c-.243-.97-1.62-.97-1.864 0l-.071.286a.96.96 0 0 1-1.622.434l-.205-.211c-.695-.719-1.888-.03-1.613.931l.08.284a.96.96 0 0 1-1.186 1.187l-.284-.081c-.96-.275-1.65.918-.931 1.613l.211.205a.96.96 0 0 1-.434 1.622l-.286.071c-.97.243-.97 1.62 0 1.864l.286.071a.96.96 0 0 1 .434 1.622l-.211.205c-.719.695-.03 1.888.931 1.613l.284-.08a.96.96 0 0 1 1.187 1.187l-.081.283c-.275.96.918 1.65 1.613.931l.205-.211a.96.96 0 0 1 1.622.434l.071.286c.243.97 1.62.97 1.864 0l.071-.286a.96.96 0 0 1 1.622-.434l.205.211c.695.719 1.888.03 1.613-.931l-.08-.284a.96.96 0 0 1 1.187-1.187l.283.081c.96.275 1.65-.918.931-1.613l-.211-.205a.96.96 0 0 1 .434-1.622l.286-.071c.97-.243.97-1.62 0-1.864l-.286-.071a.96.96 0 0 1-.434-1.622l.211-.205c.719-.695.03-1.888-.931-1.613l-.284.08a.96.96 0 0 1-1.187-1.186l.081-.284c.275-.96-.918-1.65-1.613-.931l-.205.211a.96.96 0 0 1-1.622-.434zM8 12.997a4.998 4.998 0 1 1 0-9.995 4.998 4.998 0 0 1 0 9.996z" />
                </svg>
                <h2 className="text-sm">Bespoke</h2>
              </div>
              <h2 className="text-sm">10</h2>
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
            <img src={flash} alt="" className="w-full h-full" />
          </div>
          {/* Filter divider */}
          <div className="flex gap-4 my-4 items-center justify-between">
            <div style={{ width: "88%", background: "transparent" }}>
              <div className="__search_bar">
                <form className="mx-auto">
                  <div className="w-full">
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
                      className="block outline-none w-full p-2 rounded-lg ps-10 text-sm text-gray-900"
                      style={{
                        backgroundColor: "#F1F1F1",
                        color: "black",
                        border: "1px solid #814631",
                      }}
                      placeholder="Search"
                      required
                    />
                  </div>
                </form>
              </div>
            </div>
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
              <h1 className="font-bold">Welcome to Leather's Mart !</h1>
              <button
                className="w-full px-4 py-2 text-sm rounded-sm __sign_btn"
                onClick={() => setUserSignUpX((prevState) => !prevState)}
              >
                Create user account
              </button>

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

      {/* Footer */}
      <div className="__footer">
        <VendorFooter />
      </div>
    </div>
  );
}

export default Homepage;
