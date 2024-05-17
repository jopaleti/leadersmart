import { VendorDashTemplate } from "../../Components";
import "./VendorDash.scss";
import { ReactElement } from "react";
import { Link } from "react-router-dom";

function VendorDash(props: {
  children: ReactElement;
  step1?: boolean;
  step2?: boolean;
  step3?: boolean;
}) {
  return (
    <VendorDashTemplate>
      <div className="__vendor_dash">
        <div className="py-4">
          <div className="px-6 flex items-center justify-between flex-row shrink-0 overflow-auto __check_step">
            <div>
              <Link to="/vendorprofile">
                <div
                  className={`flex gap-4 items-center justify-start __checkout_split pb-5 ${
                    props.step1 && "active"
                  }`}
                >
                  <div
                    className="p-3 rounded-full"
                    style={{ backgroundColor: "#00AAFF" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="white"
                      className="bi bi-stack"
                      viewBox="0 0 16 16"
                    >
                      <path d="m14.12 10.163 1.715.858c.22.11.22.424 0 .534L8.267 15.34a.6.6 0 0 1-.534 0L.165 11.555a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.66zM7.733.063a.6.6 0 0 1 .534 0l7.568 3.784a.3.3 0 0 1 0 .535L8.267 8.165a.6.6 0 0 1-.534 0L.165 4.382a.299.299 0 0 1 0-.535z" />
                      <path d="m14.12 6.576 1.715.858c.22.11.22.424 0 .534l-7.568 3.784a.6.6 0 0 1-.534 0L.165 7.968a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0z" />
                    </svg>
                  </div>
                  <div>
                    <h1 className="text-sm text-black mb-2">Step 01</h1>
                    <p style={{ fontSize: "12px", color: "#767E94" }}>
                      Confirm Order Details
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div>
              <Link to="/postjoblast">
                <div
                  className={`flex gap-4 items-center justify-start __checkout_split pb-5 ${
                    props.step2 && "active"
                  }`}
                >
                  <div
                    className="p-3 rounded-full"
                    style={{ backgroundColor: "#C5C9D6" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="white"
                      className="bi bi-stack"
                      viewBox="0 0 16 16"
                    >
                      <path d="m14.12 10.163 1.715.858c.22.11.22.424 0 .534L8.267 15.34a.6.6 0 0 1-.534 0L.165 11.555a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.66zM7.733.063a.6.6 0 0 1 .534 0l7.568 3.784a.3.3 0 0 1 0 .535L8.267 8.165a.6.6 0 0 1-.534 0L.165 4.382a.299.299 0 0 1 0-.535z" />
                      <path d="m14.12 6.576 1.715.858c.22.11.22.424 0 .534l-7.568 3.784a.6.6 0 0 1-.534 0L.165 7.968a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0z" />
                    </svg>
                  </div>
                  <div>
                    <h1 className="text-sm text-black mb-2">Step 02</h1>
                    <p style={{ fontSize: "12px", color: "#767E94" }}>
                      Choose Payment Method
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div>
              <Link to="/postjob">
                <div
                  className={`flex gap-4 items-center justify-start __checkout_split pb-5 ${
                    props.step3 && "active"
                  }`}
                >
                  <div
                    className="p-3 rounded-full"
                    style={{ backgroundColor: "#C5C9D6" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="white"
                      className="bi bi-stack"
                      viewBox="0 0 16 16"
                    >
                      <path d="m14.12 10.163 1.715.858c.22.11.22.424 0 .534L8.267 15.34a.6.6 0 0 1-.534 0L.165 11.555a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.66zM7.733.063a.6.6 0 0 1 .534 0l7.568 3.784a.3.3 0 0 1 0 .535L8.267 8.165a.6.6 0 0 1-.534 0L.165 4.382a.299.299 0 0 1 0-.535z" />
                      <path d="m14.12 6.576 1.715.858c.22.11.22.424 0 .534l-7.568 3.784a.6.6 0 0 1-.534 0L.165 7.968a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0z" />
                    </svg>
                  </div>
                  <div>
                    <h1 className="text-sm text-black mb-2">Step 03</h1>
                    <p style={{ fontSize: "12px", color: "#767E94" }}>
                      Escrow, Confirm Delivery & Rate
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <hr className="h-px bg-gray-200 border-0" />
        </div>

        {props.children}
      </div>
    </VendorDashTemplate>
  );
}

export default VendorDash;
