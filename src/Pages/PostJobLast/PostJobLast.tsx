import { phone } from "../../assets";
import { VendorDash } from "../../Components";
import { useState } from "react";
import "./PostJobLast.scss";

function PostJobLast() {
  // Handling the file upload state
  const [file, setFile] = useState<string | null>(null);
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(URL.createObjectURL(e.target.files[0]));
    }
  };

  // Remove file from a file list
  const deleteFile = (e: any) => {
    e.preventDefault();
    setFile(null);
  };
  return (
    <VendorDash>
      <div className="__post_job_last">
        <form>
          {/* Description */}
          <div className="mt-6">
            <label
              style={{ color: "#191F33" }}
              htmlFor="message"
              className="block mb-2 text-sm"
            >
              Description
            </label>
            <textarea
              id="message"
              rows={3}
              className="outline-none block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
              placeholder="Ad description"
            ></textarea>
          </div>

          {/* Feature (optional) */}
          <div className="mt-6">
            <label
              style={{ color: "#191F33" }}
              htmlFor="message"
              className="block mb-2 text-sm"
            >
              Feature <span style={{ color: "#939AAD" }}>(optional)</span>
            </label>
            <textarea
              id="message"
              rows={3}
              className="outline-none block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
              placeholder="Write a feature in each line eg. Feature 1 Feature 2"
            ></textarea>
          </div>

          {/* Upload Pictures */}

          <div className="mt-6">
            <h2 style={{ fontSize: "14px" }}>Upload Photos</h2>
            <div className="mt-4 flex flex-wrap shrink-0 gap-4 items-start justify-start border-2 border-gray-300 border-dashed rounded-lg p-4">
              {/* Preview */}
              {file && file.length > 0 ? (
                <div className="__preview h-20 w-20 relative">
                  <img src={file} alt="img.jpg" className="h-full w-full" />
                  <div
                    className="absolute top-0 right-0 h-4 w-4 rounded-full flex justify-center items-center"
                    style={{ backgroundColor: "red" }}
                  >
                    <button onClick={() => deleteFile}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="white"
                        className="bi bi-x"
                        viewBox="0 0 16 16"
                      >
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                      </svg>
                    </button>
                  </div>
                </div>
              ) : (
                <div className="__preview h-20 w-20 relative">
                  <img src={phone} alt="img.jpg" className="h-full w-full" />
                  <div
                    className="absolute top-0 right-0 h-4 w-4 rounded-full flex justify-center items-center"
                    style={{ backgroundColor: "red" }}
                  >
                    <button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="white"
                        className="bi bi-x"
                        viewBox="0 0 16 16"
                      >
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                      </svg>
                    </button>
                  </div>
                </div>
              )}
              {/* <div className="__preview h-20 w-20 relative">
                <img src={phone} alt="img.jpg" className="h-full w-full" />
                <div
                  className="absolute top-0 right-0 h-4 w-4 rounded-full flex justify-center items-center"
                  style={{ backgroundColor: "red" }}
                >
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="white"
                      className="bi bi-x"
                      viewBox="0 0 16 16"
                    >
                      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                    </svg>
                  </button>
                </div>
              </div> */}
              <div className="__upload">
                <label
                  htmlFor="dropzone-file"
                  className="flex items-center justify-center h-20 w-20  rounded-lg cursor-pointer bg-gray-50  hover:bg-gray-100"
                >
                  <div className="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-plus-circle"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                    </svg>
                  </div>
                  <input
                    id="dropzone-file"
                    type="file"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                </label>
              </div>
            </div>
          </div>

          {/* Next btn flex */}
          <div className="mt-10 flex justify-end items-center gap-4">
            <button
              type="button"
              className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100  "
              style={{ color: "#002233" }}
            >
              View posting rules
            </button>
            <button
              type="button"
              className="flex items-center gap-2 py-2.5 px-5 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100  "
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
    </VendorDash>
  );
}

export default PostJobLast;
