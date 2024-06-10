import { AdCard, Navbar } from "../../Components";
import "./CategoryList.scss";
import { useState } from "react";

function CategoryList() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubOpen, setIsSubOpen] = useState(false);
  const [isSellerOpen, setIsSellerOpen] = useState(false);
  const [isConditionOpen, setIsConditionOpen] = useState(false);
  const [isLocationOpen, setIsLocationOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
    setIsSubOpen(false);
    setIsSellerOpen(false);
    setIsConditionOpen(false);
    setIsLocationOpen(false);
  };
  const toggleOpenSub = () => {
    setIsSubOpen(!isSubOpen);
  };
  const toggleOpenSeller = () => {
    setIsSellerOpen(!isSellerOpen);
    setIsSubOpen(false);
    setIsOpen(false);
    setIsConditionOpen(false);
    setIsLocationOpen(false);
  };
  const toggleOpenCondition = () => {
    setIsConditionOpen(!isConditionOpen);
    setIsSubOpen(false);
    setIsOpen(false);
    setIsSellerOpen(false);
    setIsLocationOpen(false);
  };
  const toggleOpenLocation = () => {
    setIsLocationOpen(!isLocationOpen);
    setIsConditionOpen(false);
    setIsSubOpen(false);
    setIsOpen(false);
    setIsSellerOpen(false);
  };
  return (
    <div>
      <div className="__navbar-top __main_x">
        <Navbar />
        {/* Sub main */}
        <div
          className="pt-8 pb-16 px-4 flex justify-center items-center flex-col gap-3"
          style={{
            backgroundColor: "#5E3C20",
          }}
        >
          <h1 className="text-lg text-white">Emmanuel Lones</h1>
          <p
            className="__v_text text-center"
            style={{ fontSize: "12px", color: "grey" }}
          >
            Home / Ads List / Mobile / Vivo / Other Models / Vivo21 48MP OIS
            Slefie /<span className="text-bold text-white">Seller Profile</span>
          </p>
        </div>

        {/* Search category section */}
        <div
          className="__search_category __main mt-1 flex items-center justify-between p-2 rounded-lg"
          style={{ border: "1px solid #EBEEF7" }}
        >
          <div className="__search_left flex items-stretch justify-start">
            <div className="__elem_st py-2 pl-6 pr-2">
              <input
                type="text"
                placeholder="Search by craft tittle, keyword..."
                style={{ fontSize: "16px", borderRight: "1px solid #EBEEF7" }}
                className="w-full h-full outline-none"
              />
            </div>
            <div className="__elem_ py-2 pl-6 pr-2">
              <input
                type="text"
                placeholder="Locations"
                style={{ fontSize: "16px", borderRight: "1px solid #EBEEF7" }}
                className="w-full h-full outline-none"
              />
            </div>
            <div className="__elem_ py-2 pl-6 pr-2">
              <select
                id="countries"
                style={{
                  border: "none",
                  backgroundColor: "transparent",
                  fontSize: "16px",
                  color: "#939AAD",
                }}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full outline-none"
              >
                <option selected>Choose a country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>
          </div>
          <div className="__search_right"></div>
        </div>
        {/* Result founds */}
        <div className="__result_founds __main flex items-center justify-between py-4">
          <div>
            <h1 style={{ fontSize: "20px", color: "black" }}>
              574,395
              <span style={{ color: "#939AAD" }}> Results Founds</span>
            </h1>
          </div>
          <div className="__result_right flex items-center gap-2 justify-end">
            <select
              id="countries"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5"
              style={{ backgroundColor: "transparent", color: "#464D61" }}
            >
              <option selected>Latest</option>
            </select>
            <select
              id="countries"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5"
              style={{ backgroundColor: "transparent", color: "#464D61" }}
            >
              <option selected>21 per page</option>
            </select>
          </div>
        </div>
        <hr />
        <main className="__main mt-1 flex gap-4">
          <div className="__main_left">
            <div className="accordion">
              {/* Category */}
              <div className="accordion-item">
                <div className="accordion-header" onClick={toggleOpen}>
                  <h3>CATEGORY</h3>
                  <div className={`icon ${isOpen ? "open" : ""}`}>
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
                </div>
                {isOpen && (
                  <div>
                    <div className="accordion-content">
                      <div className="accordion-header" onClick={toggleOpenSub}>
                        <div className="flex gap-2 items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-phone"
                            viewBox="0 0 16 16"
                          >
                            <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                            <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                          </svg>
                          <span>Shoes</span>
                        </div>
                        <div className={`icon ${isOpen ? "open" : ""}`}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-plus-lg"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
                            />
                          </svg>
                        </div>
                      </div>
                      {isSubOpen && (
                        <div className="flex flex-col justify-start pb-2">
                          <div className="accordion-contentx">
                            <div className="flex items-center px-5">
                              <input
                                id="default-checkbox"
                                type="checkbox"
                                value=""
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
                              />
                              <label
                                htmlFor="default-checkbox"
                                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                style={{ color: "#464D61" }}
                              >
                                Loafers
                              </label>
                            </div>
                          </div>
                          <div className="accordion-contentx">
                            <div className="flex items-center px-5">
                              <input
                                id="default-checkbox"
                                type="checkbox"
                                value=""
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
                              />
                              <label
                                htmlFor="default-checkbox"
                                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                style={{ color: "#464D61" }}
                              >
                                Boots
                              </label>
                            </div>
                          </div>
                        </div>
                      )}
                      <hr />
                    </div>
                    <div className="accordion-content">
                      <div className="accordion-header" onClick={toggleOpenSub}>
                        <div className="flex gap-2 items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-phone"
                            viewBox="0 0 16 16"
                          >
                            <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                            <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                          </svg>
                          <span>Shoes</span>
                        </div>
                        <div className={`icon ${isOpen ? "open" : ""}`}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-plus-lg"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
                            />
                          </svg>
                        </div>
                      </div>
                      {isSubOpen && (
                        <div className="flex flex-col justify-start pb-2">
                          <div className="accordion-contentx">
                            <div className="flex items-center px-5">
                              <input
                                id="default-checkbox"
                                type="checkbox"
                                value=""
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
                              />
                              <label
                                htmlFor="default-checkbox"
                                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                style={{ color: "#464D61" }}
                              >
                                Loafers
                              </label>
                            </div>
                          </div>
                          <div className="accordion-contentx">
                            <div className="flex items-center px-5">
                              <input
                                id="default-checkbox"
                                type="checkbox"
                                value=""
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
                              />
                              <label
                                htmlFor="default-checkbox"
                                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                style={{ color: "#464D61" }}
                              >
                                Boots
                              </label>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
              <hr />
              {/* Seller Tyoe */}
              <div className="accordion-item">
                <div className="accordion-header" onClick={toggleOpenSeller}>
                  <h3>SELLER TYPE</h3>
                  <div className={`icon ${isOpen ? "open" : ""}`}>
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
                </div>
                {isSellerOpen && (
                  <div>
                    <div className="flex justify-start gap-1 mb-4 px-5 flex-col">
                      <div>
                        <input
                          id="default-radio-1"
                          type="radio"
                          value=""
                          name="default-radio"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                        />
                        <label
                          htmlFor="default-radio-1"
                          className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          style={{ color: "#464D61", fontSize: "14px" }}
                        >
                          Non Member
                        </label>
                      </div>
                      <div>
                        <input
                          id="default-radio-1"
                          type="radio"
                          value=""
                          name="default-radio"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                        />
                        <label
                          htmlFor="default-radio-1"
                          className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          style={{ color: "#464D61", fontSize: "14px" }}
                        >
                          Verified Seller
                        </label>
                      </div>
                      <div>
                        <input
                          id="default-radio-1"
                          type="radio"
                          value=""
                          name="default-radio"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                        />
                        <label
                          htmlFor="default-radio-1"
                          className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          style={{ color: "#464D61", fontSize: "14px" }}
                        >
                          Urgents
                        </label>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <hr />
              {/* Condition */}
              <div className="accordion-item">
                <div className="accordion-header" onClick={toggleOpenCondition}>
                  <h3>CONDITIONS</h3>
                  <div className={`icon ${isOpen ? "open" : ""}`}>
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
                </div>
                {isConditionOpen && (
                  <div>
                    <div className="flex justify-start gap-1 mb-4 px-5 flex-col">
                      <div>
                        <input
                          id="default-radio-1"
                          type="radio"
                          value=""
                          name="default-radio"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                        />
                        <label
                          htmlFor="default-radio-1"
                          className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          style={{ color: "#464D61", fontSize: "14px" }}
                        >
                          Any
                        </label>
                      </div>
                      <div>
                        <input
                          id="default-radio-1"
                          type="radio"
                          value=""
                          name="default-radio"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                        />
                        <label
                          htmlFor="default-radio-1"
                          className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          style={{ color: "#464D61", fontSize: "14px" }}
                        >
                          New
                        </label>
                      </div>
                      <div>
                        <input
                          id="default-radio-1"
                          type="radio"
                          value=""
                          name="default-radio"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                        />
                        <label
                          htmlFor="default-radio-1"
                          className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          style={{ color: "#464D61", fontSize: "14px" }}
                        >
                          Custom
                        </label>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <hr />
              {/* Top location */}
              <div className="accordion-item">
                <div className="accordion-header" onClick={toggleOpenLocation}>
                  <h3>TOP LOCATION</h3>
                  <div className={`icon ${isOpen ? "open" : ""}`}>
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
                </div>
                {isLocationOpen && (
                  <div>
                    <div className="flex justify-start gap-1 mb-4 px-5 flex-col">
                      <div>
                        <input
                          type="text"
                          id="first_name"
                          className="bg-gray-50 mb-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Cities, states & country name"
                          required
                        />
                      </div>
                      <div className="flex items-center">
                        <input
                          id="default-checkbox"
                          type="checkbox"
                          value=""
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
                        />
                        <label
                          htmlFor="default-checkbox"
                          className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          style={{ color: "#464D61" }}
                        >
                          Lagos
                        </label>
                      </div>

                      <div className="flex items-center">
                        <input
                          id="default-checkbox"
                          type="checkbox"
                          value=""
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
                        />
                        <label
                          htmlFor="default-checkbox"
                          className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          style={{ color: "#464D61" }}
                        >
                          Kaduna
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="default-checkbox"
                          type="checkbox"
                          value=""
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
                        />
                        <label
                          htmlFor="default-checkbox"
                          className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          style={{ color: "#464D61" }}
                        >
                          Ogun
                        </label>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="__main_right">
            <div className="flex items-stretch justify-start gap-4 shrink-0 flex-wrap">
              {[1, 2, 3, 7, 8, 9].map((x) => (
                <div className="__adcard">
                  <AdCard />
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default CategoryList;
