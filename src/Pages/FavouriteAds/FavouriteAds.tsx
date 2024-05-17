import "./Favourite.scss";
import { VendorDashTemplate } from "../../Components";
import { car } from "../../assets";

function FavouriteAds() {
  return (
    <VendorDashTemplate
      breadcrumb="Home / Dashboard "
      breadcrumbheader="My Ads"
      myAds={true}
      background="#191F33"
    >
      <div className="__myAds">
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
                      stroke="#00AAFF"
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
                      Bajaj Pulsar NS.DUAL.DISK.FRESH
                      <br /> 2020
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
                  <div
                    className="flex items-center justify-center rounded-lg py-3 px-1"
                    style={{ backgroundColor: "#E8F7FF" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#00AAFF"
                      className="bi bi-heart-fill"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
                      />
                    </svg>
                  </div>
                </td>
              </tr>
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
                      Bajaj Pulsar NS.DUAL.DISK.FRESH
                      <br /> 2020
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
                      fill="#FF4F4F"
                      className="bi bi-x"
                      viewBox="0 0 16 16"
                    >
                      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                    </svg>
                    <p style={{ fontSize: "12px", color: "#FF4F4F" }}>Expire</p>
                  </div>
                </td>
                <td className="px-6 py-4 relative">
                  <div
                    className="flex items-center justify-center rounded-lg py-3 px-1"
                    style={{ backgroundColor: "#E8F7FF" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#00AAFF"
                      className="bi bi-heart-fill"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
                      />
                    </svg>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </VendorDashTemplate>
  );
}

export default FavouriteAds