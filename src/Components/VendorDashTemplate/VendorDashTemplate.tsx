import { ReactElement } from "react";
import { prof } from "../../assets";
import VendorFooter from "../VendorFooter/VendorFooter";
import VendorNavbar from "../VendorNavbar/VendorNavbar";
import "./VendorDashTemplate.scss";
import { Link } from "react-router-dom";

function VendorDashTemplate(props: { children: ReactElement, header?: string, breadcrumb?: string, breadcrumbheader?: string, background?: string, myAds?: boolean }) {
  return (
    <div className="__v_dash_t">
      <VendorNavbar />
      {/* Sub main */}
      <div
        className="pt-8 pb-16 px-4 flex justify-center items-center flex-col gap-3"
        style={{
          backgroundColor: `${props.background ? props.background : "#5E3C20"}`,
        }}
      >
        <h1 className="text-lg text-white">
          {props.header ? props.header : "Emmanuel Lones"}
        </h1>
        <p
          className="__v_text text-center"
          style={{ fontSize: "12px", color: "grey" }}
        >
          {props.breadcrumb
            ? props.breadcrumb
            : "Home / Ads List / Mobile / Vivo / Other Models / Vivo21 48MP OIS Slefie / "}
          <span className="text-bold text-white">
            {props.breadcrumbheader ? props.breadcrumbheader : "Seller Profile"}
          </span>
        </p>
      </div>

      {/* VENDORDASHBOARDTEMPLATE DESIGN */}
      <div
        className={`__v_flex flex items-start justify-center gap-3 ${
          props.myAds ? "mt-6" : ""
        }`}
      >
        <div className="__v_left shadow-xl">
          <div className="px-4 pt-4 flex items-center justify-start gap-2">
            <img
              className="w-10 h-10 rounded-full"
              src={prof}
              alt="Rounded avatar"
            />
            <div className="flex flex-col gap-2 items-start justify-start">
              <h3 style={{ fontSize: "13px", fontWeight: "600" }}>
                Jenny Wilson
              </h3>
              <p style={{ fontSize: "12px", color: "#767E94" }}>Member</p>
            </div>
          </div>
          <hr className="h-px mt-4 mb-2 bg-gray-200 border-0 "></hr>

          {/* Other list items */}
          <div>
            <Link to="">
              <div className="px-4 py-2 flex items-center justify-start gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-ui-checks-grid"
                  viewBox="0 0 16 16"
                >
                  <path d="M2 10h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1m9-9h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1m0 9a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1zm0-10a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM2 9a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2zm7 2a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2zM0 2a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm5.354.854a.5.5 0 1 0-.708-.708L3 3.793l-.646-.647a.5.5 0 1 0-.708.708l1 1a.5.5 0 0 0 .708 0z" />
                </svg>
                <p style={{ fontSize: "12px", color: "#767E94" }}>Overview</p>
              </div>
            </Link>
          </div>
          <div className="px-4 py-2 flex items-center justify-start gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-person-circle"
              viewBox="0 0 16 16"
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
              <path
                fill-rule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
              />
            </svg>
            <p style={{ fontSize: "12px", color: "#767E94" }}>
              View Public Profile
            </p>
          </div>
          <div>
            <Link to="/myads">
              <div
                className="px-4 py-2 flex items-center justify-start gap-3"
                style={{ backgroundColor: "#E8F7FF" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="white"
                  className="bi bi-arrow-up-circle"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z"
                  />
                </svg>
                <p style={{ fontSize: "12px", color: "white" }}>Post a Ads</p>
              </div>
            </Link>
          </div>
          <div>
            <Link to="/favouriteads">
              <div className="px-4 py-2 flex items-center justify-start gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-calendar4"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" />
                </svg>
                <p style={{ fontSize: "12px", color: "#767E94" }}>My Ads</p>
              </div>
            </Link>
          </div>

          <button className="block">
            <div className="px-4 py-2 flex items-center justify-start gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-heart"
                viewBox="0 0 16 16"
              >
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
              </svg>
              <p style={{ fontSize: "12px", color: "#767E94" }}>
                Favourite Ads
              </p>
            </div>
          </button>
          {/* Message */}
          <button className="block">
            <div className="px-4 py-2 flex items-center justify-start gap-3">
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
              <p style={{ fontSize: "12px", color: "#767E94" }}>Message</p>
            </div>
          </button>
          {/* Signout */}
          <button>
            <div className="px-4 py-2 flex items-center justify-start gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-box-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"
                />
                <path
                  fill-rule="evenodd"
                  d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"
                />
              </svg>
              <p style={{ fontSize: "12px", color: "#767E94" }}>Sign Out</p>
            </div>
          </button>
          <div>
            <Link to="/planbill">
              <div className="px-4 py-2 flex items-center justify-start gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-calendar4"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" />
                </svg>
                <p style={{ fontSize: "12px", color: "#767E94" }}>
                  Plan Billing
                </p>
              </div>
            </Link>
          </div>
        </div>
        <div className="__v_right">{props.children}</div>
      </div>

      {/* Vendor dash template footer */}
      <div className="__v_footer mt-10">
        <VendorFooter />
      </div>
    </div>
  );
}

export default VendorDashTemplate;
