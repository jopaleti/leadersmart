import VendorFooter from "../../Components/VendorFooter/VendorFooter";
import VendorNavbar from "../../Components/VendorNavbar/VendorNavbar";
import "./Message.scss";

function Message() {
  return (
    <div className="__price_plan">
      <VendorNavbar />
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
          Slefie / Seller Profile {""}
          <span className="text-bold text-white">Seller Profile</span>
        </p>
      </div>

      {/* Main section */}
      <div className="mt-8 __message_container shadow-2xl rounded-lg">
        <div className="__msg_container flex items-stretch justify-start">
          <div className="__message_left flex flex-col gap-4">
            <h1 style={{ fontSize: "32px", color: "#191F33" }}>Contact Info</h1>
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#66CCFF"
                className="bi bi-check2"
                viewBox="0 0 16 16"
              >
                <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0" />
              </svg>
              <p style={{ fontSize: "12px", color: "#464D61" }}>
                (406) 555-0120
              </p>
            </div>
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#66CCFF"
                className="bi bi-check2"
                viewBox="0 0 16 16"
              >
                <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0" />
              </svg>
              <p style={{ fontSize: "12px", color: "#464D61" }}>
                (406) 555-0120
              </p>
            </div>
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#66CCFF"
                className="bi bi-check2"
                viewBox="0 0 16 16"
              >
                <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0" />
              </svg>
              <p style={{ fontSize: "12px", color: "#464D61" }}>
                8502 Preston Rd. Inglewood, Maine
                <br /> 98380
              </p>
            </div>
          </div>
          <div className="__message_right">
            <h1 style={{ fontSize: "32px", color: "#191F33" }}>Send Message</h1>
            <form>
              <div className="grid gap-6 mb-6 md:grid-cols-2 mt-6">
                <div>
                  <input
                    type="text"
                    id="last_name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-4"
                    placeholder="Email adress"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    id="last_name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-4"
                    placeholder="Email adress"
                    required
                  />
                </div>

                <div className=" col-span-2">
                  <input
                    type="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-4 "
                    placeholder="john.doe@company.com"
                    required
                  />
                </div>

                {/* Textarea */}
                <div className="col-span-2">
                  <textarea
                    id="message"
                    rows={4}
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    placeholder="Message"
                  ></textarea>
                </div>
              </div>
              <div className="mt-8">
                <button
                  type="button"
                  className="py-3 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="__map mt-16 w-full">
              <iframe
                  className="w-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126654.49318495434!2d5.113101597035905!3d7.246199485386379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10478f90695c5dfb%3A0xe0a5d2bbf32a9161!2sAkure%2C%20Ondo!5e0!3m2!1sen!2sng!4v1715236738659!5m2!1sen!2sng"
          width="600"
          height="250"
          style={{ border: "0" }}
        ></iframe>
      </div>
      {/* Footer */}
      <div>
        <VendorFooter />
      </div>
    </div>
  );
}

export default Message;
