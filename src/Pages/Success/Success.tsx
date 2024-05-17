import { ver } from "../../assets";
import { VendorDashTemplate } from "../../Components";
import "./Success.scss";

function Success() {
  return (
    <VendorDashTemplate>
      <div className="__success w-full flex flex-col justify-center items-center p-10 shadow-xl bg-white">
        <img src={ver} alt="ver.png" />
        <h1 className="text-lg font-semibold mt-4 text-center">
          Your ad is successfully publish
        </h1>
        <p className="mt-4 text-center" style={{ fontSize: "12px" }}>
          Proin placerat risus non justo faucibus commodo. Nunc non neque sit
          amet magna aliquam condimentum.
        </p>
        <div className="mt-4 flex items-center gap-2">
          <button
            className="py-3 px-5 rounded-lg bg-white"
            style={{ fontSize: "12px", color: "#00AAFF", border: "1px solid #00AAFF" }}
          >
            Go back
          </button>
          <button
            className="py-3 px-5 rounded-lg flex items-center gap-2"
                      style={{
                fontSize: "12px",
              color: "white",
              backgroundColor: "#00AAFF",
              border: "1px solid #00AAFF",
            }}
          >
            View Ads
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
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
    </VendorDashTemplate>
  );
}

export default Success;
