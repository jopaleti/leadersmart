import { VendorDash } from "../../Components";
import { useState } from "react";
import "./PostJob.scss";
import ReactFlagsSelect from "react-flags-select";
import { useNavigate } from "react-router-dom";

function PostJob() {
  const [dropDown, setDropDown] = useState(false);
    const [selected, setSelected] = useState("US");
    const navigate = useNavigate();

  const handleDropdown = () => {
    setDropDown((prevState) => !prevState);
  };
  return (
    <VendorDash>
      <div className="__post_job">
        {/* Form container */}
        <form>
          <div className="mt-4 grid gap-6 mb-6 md:grid-cols-2">
            {/* Country select code */}
            <div className="__c_select w-full">
              <label
                htmlFor="first_name"
                className="block mb-2 text-sm  text-gray-900 "
              >
                Phone Number
              </label>

              <div className="flex flex-row items-stretch justify-start w-full">
                <ReactFlagsSelect
                  className="__flag"
                  countries={["US", "GB", "NG"]}
                  customLabels={{
                    US: { secondary: "+1" },
                    GB: { secondary: "+44" },
                    NG: { secondary: "+234" },
                  }}
                  selected={selected}
                  onSelect={(code: any) => setSelected(code)}
                />
                <div className="__c_sel">
                  <input
                    type="tel"
                    id="phoneNumber"
                    className="h-full border-gray-300 border w-full text-gray-900 text-sm pe-5 rounded-lg border-l-0 __country_select"
                    placeholder="Phone"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="__c_select w-full">
              <label
                htmlFor="first_name"
                className="block mb-2 text-sm  text-gray-900 "
              >
                Backup Phone Number{" "}
                <span style={{ color: "#939AAD" }}>(Optional)</span>
              </label>

              <div className="flex flex-row items-stretch justify-start w-full">
                <ReactFlagsSelect
                  className="__flag"
                  countries={["US", "GB", "NG"]}
                  customLabels={{
                    US: { secondary: "+1" },
                    GB: { secondary: "+44" },
                    NG: { secondary: "+234" },
                  }}
                  selected={selected}
                  onSelect={(code: any) => setSelected(code)}
                />
                <div className="__c_sel">
                  <input
                    type="tel"
                    id="phoneNumber"
                    className="h-full border-gray-300 border w-full text-gray-900 text-sm pe-5 rounded-lg border-l-0 __country_select"
                    placeholder="Phone"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm  text-black"
                style={{ color: "#191F33" }}
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="border-gray-300 border w-full text-gray-900 text-sm rounded-lg px-5 py-3"
                placeholder="Email address"
                required
              />
            </div>
            {/* Website URL */}
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm  text-black"
                style={{ color: "#191F33" }}
              >
                Website Link{" "}
                <span style={{ color: "#939AAD" }}>(Optional)</span>
              </label>
              <input
                type="email"
                id="email"
                className="border-gray-300 border w-full text-gray-900 text-sm rounded-lg px-5 py-3"
                placeholder="your website url"
                required
              />
            </div>
          </div>
          {/* Country */}
          <div className="mt-4 grid gap-6  md:grid-cols-2">
            {/* country */}
            <div>
              <label
                htmlFor="first_name"
                className="block mb-2 text-sm  text-gray-900 "
              >
                Country
              </label>
              <select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   "
              >
                <option selected>Select</option>
                <option value="US">United States</option>
              </select>
            </div>

            {/* city & state */}
            <div className="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="first_name"
                  className="block mb-2 text-sm  text-gray-900 "
                >
                  City
                </label>
                <select
                  id="countries"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   "
                >
                  <option selected>Select</option>
                  <option value="US">United States</option>
                </select>
              </div>

              {/* state */}
              <div>
                <label
                  htmlFor="first_name"
                  className="block mb-2 text-sm  text-gray-900 "
                >
                  State <span style={{ color: "#939AAD" }}>(Optional)</span>
                </label>
                <select
                  id="countries"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   "
                >
                  <option selected>Select</option>
                  <option value="US">United States</option>
                </select>
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm  text-black"
                style={{ color: "#191F33" }}
              >
                Location
              </label>
              <input
                type="email"
                id="email"
                className="border-gray-300 border w-full text-gray-900 text-sm rounded-lg px-5 py-3"
                placeholder="Your location"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm  text-black"
                style={{ color: "#191F33" }}
              >
                Map Location{" "}
                <span style={{ color: "#939AAD" }}>(Optional)</span>
              </label>
              <input
                type="email"
                id="email"
                className="border-gray-300 border w-full text-gray-900 text-sm rounded-lg px-5 py-3"
                placeholder="Map location"
                required
              />
            </div>
          </div>

          {/* Bottom submission of the form */}
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div className="flex items-center mb-4">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
              />
              <label
                htmlFor="default-checkbox"
                className="__checkbox_label ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Save my contact information for faster posting
              </label>
            </div>

            {/* Next btn flex */}
            <div className="flex justify-start md:justify-end items-center gap-4">
              <button
                type="button"
                className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100  "
                style={{ color: "#002233" }}
              >
                previous
              </button>
              <button
                type="button"
                className="flex items-center gap-2 py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100  "
                style={{ color: "#fff", backgroundColor: "#00AAFF" }}
                onClick={() => navigate("/success")}
              >
                Post Ads
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
          </div>
        </form>
      </div>
    </VendorDash>
  );
}

export default PostJob;
