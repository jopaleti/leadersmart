import { prof } from "../../assets";
import "./message.scss";
import { useState } from "react";

function MessageList() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="__message_list">
      <div className="__message_container_ shadow-2xl">
        <div
          className="flex items-center justify-between pt-2 px-4 pb-4 accordion-header bg-white"
          onClick={toggleOpen}
        >
          <div className="flex items-center gap-3">
            <img
              className="w-10 h-10 rounded-full"
              src={prof}
              alt="Rounded avatar"
            />
            <h3 style={{ fontSize: "16px" }} className="font-semibold">
              Messaging
            </h3>
          </div>
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
          <div className="__accordion_main overflow-y-auto">
            <div className="__search_bar px-4 py-2 bg-white">
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
                      border: "1px solid #898989",
                    }}
                    placeholder="Search"
                    required
                  />
                </div>
              </form>
            </div>

            {/* Chat list item1 */}
            <div>
              <div className="__chat_item px-4 pb-2 pt-3 bg-[#F1F1F1]">
                <div className="flex items-start gap-2">
                  <img
                    className="w-10 h-10 rounded-full"
                    src={prof}
                    alt="Rounded avatar"
                  />
                  <div style={{ width: "70%" }}>
                    <div>
                      <h1
                        style={{ fontSize: "16px" }}
                        className="flex items-center"
                      >
                        Daniel
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-dot mx-2"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                        </svg>
                        Admin
                        <span className="inline-flex items-center justify-center w-4 h-4 ms-4 text-xs font-semibold text-white bg-[#FF0000] rounded-full">
                          2
                        </span>
                      </h1>
                      <p style={{ fontSize: "12px" }}>
                        This is the preview of this message from the admin this
                        message could be viewed..
                      </p>
                    </div>
                  </div>
                  <p className="ms-auto" style={{ fontSize: "12px" }}>
                    2:13 PM
                  </p>
                </div>
              </div>
              <hr />
            </div>
            {/* Chat list item2 */}
            <div>
              <div className="__chat_item px-4 pb-2 pt-3 bg-[#F1F1F1]">
                <div className="flex items-start gap-2">
                  <img
                    className="w-10 h-10 rounded-full"
                    src={prof}
                    alt="Rounded avatar"
                  />
                  <div style={{ width: "70%" }}>
                    <div>
                      <h1
                        style={{ fontSize: "16px" }}
                        className="flex items-center"
                      >
                        Daniel
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-dot mx-2"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                        </svg>
                        Admin
                        <span className="inline-flex items-center justify-center w-4 h-4 ms-4 text-xs font-semibold text-white bg-[#FF0000] rounded-full">
                          2
                        </span>
                      </h1>
                      <p style={{ fontSize: "12px" }}>
                        This is the preview of this message from the admin this
                        message could be viewed..
                      </p>
                    </div>
                  </div>
                  <p className="ms-auto" style={{ fontSize: "12px" }}>
                    2:13 PM
                  </p>
                </div>
              </div>
              <hr />
            </div>
            {/* Chat list item2 without profile image */}
            <div>
              <div className="__chat_item px-4 pb-2 pt-3 bg-white">
                <div className="flex items-start gap-2">
                  <div style={{ width: "70%" }}>
                    <div>
                      <h1
                        style={{ fontSize: "16px" }}
                        className="flex items-center"
                      >
                        Daniel
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-dot mx-2"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                        </svg>
                        Admin
                      </h1>
                      <p style={{ fontSize: "12px" }}>
                        This is the preview of this message from the admin this
                        message could be viewed..
                      </p>
                    </div>
                  </div>
                  <p className="ms-auto" style={{ fontSize: "12px" }}>
                    Oct 24
                  </p>
                </div>
              </div>
              <hr />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default MessageList;
