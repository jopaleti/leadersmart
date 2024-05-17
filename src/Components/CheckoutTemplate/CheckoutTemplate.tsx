import { pay } from "../../assets";
import CheckoutBtn from "../CheckoutBtn/CheckoutBtn";
import Message from "../Message/Message";
import Navbar from "../Navbar/Navbar";
import "./CheckoutTemplate.scss";
import { ReactElement } from "react";
import PaypalBtn from "../PaypalBtn/PaypalBtn";
import CheckoutBtnLast from "../CheckoutBtnLast/CheckoutBtnLast";
import { Link } from "react-router-dom";

function CheckoutTemplate(props: {
  children: ReactElement;
  isDetails?: boolean;
  step1?: boolean;
  step2?: boolean;
  step3?: boolean;
}) {
  return (
    <div className="__checkout_template">
      <Navbar />
      {/* Display flex the checkout main page */}
      <div className="__checkout_main mt-4">
        <div className="flex items-start gap-4 justify-between __checkout_flex">
          <div className="__check_main rounded-lg bg-white">
            <div className="py-4">
              <div className="px-6 flex items-center justify-between flex-row shrink-0 overflow-auto __check_step">
                <div>
                  <Link to="/checkorder">
                    <div
                      className={`flex gap-4 items-center justify-start __checkout_split pb-5 ${
                        props.step1 && "active"
                      }`}
                    >
                      <div
                        className="p-3 rounded-full"
                        style={{ backgroundColor: "#814631" }}
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
                  <Link to="/checkdetails">
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
                  <Link to="/checkcomplete">
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

            {/* Import children */}
            {props.children}
          </div>
          <div className="__check_left">
            <div className="rounded-lg bg-white py-6 px-5">
              <h1 className="text-sm font-semibold mb-3">Price Summary</h1>
              <div className="flex items-center justify-between">
                <p style={{ fontSize: "14px" }}>category cost</p>
                <p style={{ fontSize: "14px" }}>NGN3,000</p>
              </div>
              <div className="flex items-center justify-between mt-1">
                <p style={{ fontSize: "14px" }}>Delivery fee (5%)</p>
                <p style={{ fontSize: "14px" }}>NGN3,000</p>
              </div>
              <div className="flex items-center justify-between mt-1">
                <p style={{ fontSize: "14px" }}>Discount Vouchers</p>
                <p style={{ fontSize: "14px" }}>--select--</p>
              </div>

              <div className="flex items-center justify-between mt-4">
                <h1 className="text-sm font-bold">Total</h1>
                <h1 className="text-sm font-bold">NGN3,550</h1>
              </div>

              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-clock"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
                  </svg>
                  <p style={{ fontSize: "12px", fontWeight: "600" }}>
                    2 Days Delivery
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-arrow-clockwise"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z"
                    />
                    <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466" />
                  </svg>
                  <p style={{ fontSize: "12px", fontWeight: "600" }}>
                    1 Repair
                  </p>
                </div>
              </div>

              {/* Button import section goes here */}
              <div className="mt-4">
                {props.isDetails && props.isDetails == true ? (
                  <PaypalBtn />
                ) : (
                  <CheckoutBtn text="Proceed to Checkout" />
                )}
                {/* {props.step3 && (<CheckoutBtn />)} */}
              </div>
            </div>
            <div className="mt-4">
              <img src={pay} alt="payment.png" />
            </div>

            {/* Check for step3 */}
            {props.step3 && (
              <div className="mt-4">
                <CheckoutBtnLast />
              </div>
            )}

            {/* Message Button */}
            {!props.step3 && (
              <div className="mt-20">
                <Message />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutTemplate;
