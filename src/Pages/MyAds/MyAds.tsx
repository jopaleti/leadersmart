import { car } from "../../assets";
import { VendorDashTemplate } from "../../Components";
import "./MyAds.scss";
import { useState, useRef, useEffect } from "react";
function MyAds() {
  const [isVisible, setIsVisible] = useState(true);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const handleClickOutside = (event: MouseEvent) => {
    if (
      sidebarRef.current &&
      !sidebarRef.current.contains(event.target as Node)
    ) {
      setIsVisible(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <VendorDashTemplate
      breadcrumb="Home / Dashboard "
      breadcrumbheader="My Ads"
      myAds={true}
      background="#191F33"
    >
      <div className="__myAds relative">
        {/* Display none onclicking the outside of the popup */}
        {isVisible && (
          <div ref={sidebarRef}>
            {/* <CartPopup /> */}
            {/* <AddProduct /> */}
          </div>
        )}

        {/* My Adds children */}
        <div className="flex items-center justify-between">
          <div className="__item_left">
            <form className="max-w-md w-full mx-auto">
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 "
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
                  className="block w-full outline-none px-4 py-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
                  placeholder="Ads tittle, keyword..."
                  required
                />
              </div>
            </form>
          </div>
          <div className="__item_right">
            <div className="grid grid-cols-3 gap-4">
              {/* Category dropdown */}
              <div>
                <select
                  id="countries"
                  className="bg-gray-50 border border-gray-300 outline-none text-sm rounded-lg  block w-full p-2.5"
                  style={{ color: "#464D61", fontSize: "13px" }}
                >
                  <option selected>All Category</option>
                  <option value="US">United States</option>
                </select>
              </div>
              {/* Recently added dropdown */}
              <div>
                <select
                  id="countries"
                  className="bg-gray-50 border border-gray-300 outline-none text-sm rounded-lg  block w-full p-2.5"
                  style={{ color: "#464D61", fontSize: "13px" }}
                >
                  <option selected>Recently posted</option>
                  <option value="US">United States</option>
                </select>
              </div>
              {/* All dropdown */}
              <div>
                <select
                  id="countries"
                  className="bg-gray-50 border border-gray-300 outline-none text-sm rounded-lg  block w-full p-2.5"
                  style={{ color: "#464D61", fontSize: "13px" }}
                >
                  <option selected>All</option>
                  <option value="US">United States</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Main Table in the Container */}

        <div className="w-full mt-6 relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead
              className="text-xs text-gray-700 uppercase"
              style={{ borderBottom: "2px solid #F5F7FA" }}
            >
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3"
                  style={{ minWidth: "220px" }}
                >
                  Ads
                </th>
                <th
                  scope="col"
                  className="px-6 py-3"
                  style={{ minWidth: "130px" }}
                >
                  Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Prices
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="w-full">
              <tr className="odd:bg-white  even:bg-gray-50 relative">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium whitespace-nowrap"
                >
                  <div className="flex items-center justify-start gap-2">
                    <img
                      src={car}
                      className="h-14 w-14 rounded-lg object-contain"
                      alt="car.png"
                    />
                    <p style={{ fontSize: "12px", color: "#191F33" }}>
                      Canon EOS Rebel SL3 /<br /> EOS 250D
                    </p>
                  </div>
                </th>
                <td className="px-6 py-4">Jul 13, 2021</td>
                <td className="px-6 py-4">$250.00</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#27C200"
                      className="bi bi-check2"
                      viewBox="0 0 16 16"
                    >
                      <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0" />
                    </svg>
                    <p style={{ fontSize: "12px", color: "#27C200" }}>Active</p>
                  </div>
                </td>
                <td className="px-6 py-4 relative">
                  <div className="flex items-stretch justify-start gap-2 relative">
                    <div
                      className="flex items-center gap-1 px-4 py-2"
                      style={{ backgroundColor: "#F5F7FA" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-pencil"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
                      </svg>
                      <p style={{ fontSize: "12px" }}>Edit</p>
                    </div>
                    <button>
                      <div
                        className="px-2 py-3 relative"
                        style={{ backgroundColor: "#F5F7FA" }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-three-dots"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                        </svg>
                      </div>
                    </button>
                  </div>
                </td>
              </tr>
              <tr className="__action_container">
                {/* <div className="shadow-lg px-3 py-5 flex flex-col gap-3 rounded-xl items-start __action_btn">
                  <div className="flex items-center justify-start gap-4 __action_btn_item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-eye"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                    </svg>
                    <p style={{ fontSize: "14px" }}>View Ads Details</p>
                  </div>
                  <div className="flex items-center justify-start gap-4 __action_btn_item __2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-eye"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                    </svg>
                    <p style={{ fontSize: "14px" }}>View Ads Details</p>
                  </div>
                  <div className="flex items-center justify-start gap-4 __action_btn_item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-eye"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                    </svg>
                    <p style={{ fontSize: "14px" }}>View Ads Details</p>
                  </div>
                </div> */}
              </tr>
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center mt-10">
          <ul className="flex items-center -space-x-px h-10 text-base">
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800"
                style={{ backgroundColor: "#E8F7FF" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#00AAFF"
                  className="bi bi-arrow-left-short"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                1
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                2
              </a>
            </li>
            <li>
              <a
                href="#"
                aria-current="page"
                className="z-10 flex items-center justify-center px-4 h-10 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
              >
                3
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                4
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                5
              </a>
            </li>
            <li>
              <a
                href="#"
                style={{ backgroundColor: "#E8F7FF" }}
                className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg"
              >
                <span className="sr-only">Next</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#00AAFF"
                  className="bi bi-arrow-right-short"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </VendorDashTemplate>
  );
}

export default MyAds;
