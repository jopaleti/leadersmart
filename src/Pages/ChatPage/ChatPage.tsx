import { chatavar } from "../../assets";
import { VendorDashTemplate } from "../../Components";
import "./chat.scss";

function ChatPage() {
  const active = false;
  return (
    <VendorDashTemplate
      breadcrumb="Home / Dashboard "
      breadcrumbheader="Message"
      myAds={true}
      background="#191F33"
    >
      <div className="flex items-stretch h-full __chat_container shadow-xl">
        <div className="__chat_left pt-6">
          <div className="px-4">
            <h3 style={{ fontSize: "20px", color: "#191F33" }}>Message</h3>
            {/* Search bar */}
            <div className="__search_bar mt-4">
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
                      backgroundColor: "transparent",
                      color: "black",
                      border: "1px solid #EDEFF5",
                    }}
                    placeholder="Search"
                    required
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="__friend_list">
            {[1, 2, 34, 5, 6, 7].map((x, idx) => (
              <div
                key={idx}
                className={`px-4 mt-3 flex items-start justify-between ${
                  active ? "bg-[#F5F7FA]" : "bg-white"
                }`}
              >
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <img
                      className="w-10 h-10 rounded-full"
                      src={chatavar}
                      alt="avatar.png"
                    />
                    <span className="bottom-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
                  </div>
                  <div>
                    <h3 style={{ fontSize: "14px", color: "#191F33" }}>
                      Esther Howard
                    </h3>
                    <p style={{ fontSize: "12px", color: "#767E94" }}>
                      Microsoft
                    </p>
                  </div>
                </div>
                <div>
                  {active && (
                    <span className="inline-flex items-center justify-center w-4 h-4 ms-2 text-xs font-semibold text-white bg-[#00AAFF] rounded-full">
                      2
                    </span>
                  )}
                  <p
                    className="text-end"
                    style={{ color: "#767E94", fontSize: "12px" }}
                  >
                    1m
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="__chat_right h-full relative">
          <div className="__right_top flex px-4 py-4 justify-between items-center">
            <div className="px-4 mt-3 flex items-start justify-between bg-white">
              <div className="flex items-center gap-2">
                <img
                  className="w-10 h-10 rounded-full"
                  src={chatavar}
                  alt="avatar.png"
                />
                <div>
                  <h3 style={{ fontSize: "14px", color: "#191F33" }}>
                    Esther Howard
                  </h3>
                  <p style={{ fontSize: "12px", color: "#767E94" }}>
                    <span className=" w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full me-2" />
                    Microsoft
                  </p>
                </div>
              </div>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-trash"
                viewBox="0 0 16 16"
              >
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
              </svg>
            </div>
          </div>

          {/* Middle container */}
          <div className="__middle_container">
            <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6 dark:text-neutral-500 dark:before:border-neutral-600 dark:after:border-neutral-600">
              Today
            </div>
            {/* Chat */}
            <div className="px-4 mt-3 ">
              <div className="flex items-center gap-2">
                <img
                  className="w-10 h-10 rounded-full"
                  src={chatavar}
                  alt="avatar.png"
                />
                <div>
                  <h3
                    className="flex items-center"
                    style={{ fontSize: "14px", color: "#191F33" }}
                  >
                    Esther Howard
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-dot"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                    </svg>
                    <span style={{ color: "#767E94" }}>3:15PM</span>
                  </h3>
                  <p style={{ fontSize: "12px", color: "#767E94" }}>
                    Okay Wilson. i’m okay with price. can you tell me about your
                    phone specification and warrenty
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Bottom send search bar */}
          <div className="__chat_bottom absolute">
            <div className="relative w-full">
              <input
                type="search"
                id="search-dropdown"
                className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg rounded-s-gray-100 rounded-s-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                placeholder="Type your message..."
                required
              />
              <button
                type="submit"
                className="absolute top-0 end-0 p-2.5 h-full text-sm font-medium text-white bg-[#00AAFF] rounded-e-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="white"
                  className="bi bi-send"
                  viewBox="0 0 16 16"
                >
                  <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </VendorDashTemplate>
  );
}

export default ChatPage;
