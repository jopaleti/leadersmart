import "./Navbar.scss";
function Navbar() {
  return (
    // <div className="bg-white flex justify-start px-8 py-4 items-center gap-10 md:gap-20 shadow-lg __nav">
    //   <div className="flex justify-center items-center gap-5 nav--top">
    //     <div>
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         width="18"
    //         height="18"
    //         fill="black"
    //         className="bi bi-list"
    //         viewBox="0 0 16 16"
    //       >
    //         <path
    //           fill-rule="evenodd"
    //           d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
    //         />
    //       </svg>
    //     </div>
    //     <h1 className="text-lg">Leathers’ Mart</h1>
    //   </div>
    //   <div className="__search_bar">
    //     <form className="mx-auto">
    //       {/* <label
    //         htmlFor="default-search"
    //         className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
    //       >
    //         Search
    //       </label> */}
    //       <div className="relative w-full">
    //         <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
    //           <svg
    //             className="w-4 h-4 text-gray-500 dark:text-gray-400"
    //             aria-hidden="true"
    //             xmlns="http://www.w3.org/2000/svg"
    //             fill="none"
    //             viewBox="0 0 20 20"
    //           >
    //             <path
    //               stroke="currentColor"
    //               stroke-linecap="round"
    //               stroke-linejoin="round"
    //               stroke-width="2"
    //               d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
    //             />
    //           </svg>
    //         </div>
    //         <input
    //           type="search"
    //           id="default-search"
    //           className="block w-full p-2 ps-10 text-sm text-gray-900 border focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    //           style={{ backgroundColor: "#F1F1F1", color: "black" }}
    //           placeholder="Search"
    //           required
    //         />
    //       </div>
    //     </form>
    //   </div>
    // </div>
    <div className="flex items-center justify-between">
      <div>
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
      </div>

      <div className="flex items-center gap-8">
        {/* Search bar */}
        <div className="__search_bar">
          <form className="mx-auto">
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
                className="block w-full p-3 rounded-lg ps-10 text-sm text-gray-900"
                style={{
                  backgroundColor: "#F1F1F1",
                  color: "black",
                  border: "5px solid #EBEEF7",
                }}
                placeholder="Search"
                required
              />
            </div>
          </form>
        </div>
        <div className="__cart_container flex items-center gap-3">
          {/* Signin Button */}
          <div>
            <button
              type="button"
              className="py-3 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200"
              style={{
                border: "1px solid #814631",
                color: "#814631",
                backgroundColor: "#F1F1F1",
              }}
            >
              Sign in / Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
