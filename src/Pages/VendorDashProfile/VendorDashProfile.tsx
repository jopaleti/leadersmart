import { VendorDash } from "../../Components";
import "./Vendor.scss";

function VendorDashProfile() {
  return (
    <VendorDash>
      <div>
        <div className="mb-6">
          <form action="">
            <div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm  text-black"
                  style={{ color: "#191F33" }}
                >
                  Add Name
                </label>
                <input
                  type="email"
                  id="email"
                  className="border-gray-300 border w-full text-gray-900 text-sm rounded-lg px-5 py-3"
                  placeholder="john.doe@company.com"
                  required  
                />
              </div>
              <div className="mt-4 grid gap-6 mb-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="first_name"
                    className="block mb-2 text-sm  text-gray-900 "
                  >
                    Category
                  </label>
                  <select
                    id="countries"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  >
                    <option selected>Choose a country</option>
                    <option value="US">United States</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="first_name"
                    className="block mb-2 text-sm  text-gray-900 "
                  >
                    Subcategory
                  </label>
                  <select
                    id="countries"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  >
                    <option selected>Choose a country</option>
                    <option value="US">United States</option>
                  </select>
                </div>

                {/* Brand */}
                <div>
                  <label
                    htmlFor="first_name"
                    className="block mb-2 text-sm  text-gray-900 "
                  >
                    Brand
                  </label>
                  <select
                    id="countries"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   "
                  >
                    <option selected>Select</option>
                    <option value="US">United States</option>
                  </select>
                </div>
                {/* model */}
                <div>
                  <label
                    htmlFor="first_name"
                    className="block mb-2 text-sm  text-gray-900 "
                  >
                    Model
                  </label>
                  <select
                    id="countries"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                  >
                    <option selected>Select</option>
                    <option value="US">United States</option>
                  </select>
                </div>

                {/* Condition */}
                <div>
                  <label
                    htmlFor="first_name"
                    className="block mb-2 text-sm  text-gray-900 "
                  >
                    Condition
                  </label>
                  <select
                    id="countries"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  >
                    <option selected>Select</option>
                    <option value="US">United States</option>
                  </select>
                </div>
                {/* Authenticity */}
                <div>
                  <label
                    htmlFor="first_name"
                    className="block mb-2 text-sm  text-gray-900 "
                  >
                    Authenticity
                  </label>
                  <select
                    id="countries"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  >
                    <option selected>Select</option>
                    <option value="US">United States</option>
                  </select>
                </div>
              </div>
              {/* Tags */}
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm  text-black"
                  style={{ color: "#191F33" }}
                >
                  Tags
                </label>
                <input
                  type="email"
                  id="email"
                  className="border-gray-300 border w-full text-gray-900 text-sm rounded-lg px-5 py-3"
                  placeholder="john.doe@company.com"
                  required
                />
              </div>
              <div className="mt-4 grid gap-6 mb-6 md:grid-cols-2">
                {/* Ad Prices (USD) */}
                <div>
                  <label
                    htmlFor="first_name"
                    className="block mb-2 text-sm  text-gray-900 "
                  >
                    Ad Prices (USD)
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="border-gray-300 border w-full text-gray-900 text-sm rounded-lg px-5 py-3"
                    placeholder="Pick a good price - what would you pay?"
                    required
                  />
                </div>
                {/* Negotiable*/}
                <div>
                  <label
                    htmlFor="first_name"
                    className="block mb-2 text-sm  text-gray-900 "
                  >
                    Negotiable
                  </label>
                  <select
                    id="countries"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  >
                    <option selected>Select</option>
                    <option value="US">United States</option>
                  </select>
                </div>
              </div>
            </div>
            {/* Next btn flex */}
            <div className="flex justify-end items-center gap-4">
              <button
                type="button"
                className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100  "
                style={{ color: "#002233" }}
              >
                View posting rules
              </button>
              <button
                type="button"
                className="flex items-center gap-2 py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100  "
                style={{ color: "#fff", backgroundColor: "#00AAFF" }}
              >
                Next Steps
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="white"
                    className="bi bi-arrow-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </VendorDash>
  );
}

export default VendorDashProfile;
