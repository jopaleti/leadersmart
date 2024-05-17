import { hbag, master, paypal } from "../../assets";
import { CheckoutTemplate } from "../../Components";
import "./CheckDetails.scss";

function CheckDetails() {
  return (
    <CheckoutTemplate step2={true} isDetails={true}>
      <div className="pb-16">
        <div className="mt-3 flex items-start gap-3 __check_order px-8 pb-8">
          <div className="__check_order_left">
            <div>
              <img src={hbag} alt="" />
            </div>
          </div>
          <div className="__check_order_right">
            <h1 className="text-lg font-semibold">
              Product Title and short Description of Product
            </h1>
            <div className="mt-2 flex items-center gap-2 justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#814631"
                className="bi bi-star-fill"
                viewBox="0 0 16 16"
              >
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#814631"
                className="bi bi-star-fill"
                viewBox="0 0 16 16"
              >
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#814631"
                className="bi bi-star-fill"
                viewBox="0 0 16 16"
              >
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#814631"
                className="bi bi-star-fill"
                viewBox="0 0 16 16"
              >
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
              <p style={{ fontSize: "12px" }}>Rated 4.5</p>
            </div>

            {/* Payment method */}
            <div className="__pay_method mt-4">
              <h3 className="mb-2 text-sm font-bold">Choose payment method</h3>
              <p style={{ fontSize: "12px" }}>
                Your payment would be saved in an escrow account till you
                recieve and confirm your order is appropriate
              </p>
            </div>

            {/* Display payment method */}
            <div className="__pay_container mt-4 flex flex-row gap-10 justify-start items-stretch">
              <div className="flex flex-col gap-4 items-start justify-start">
                <div className="flex justify-start items-center gap-4">
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      id="wallet"
                      name="wallet"
                      value="wallet_balance"
                      checked
                    />
                    <label
                      htmlFor="default-radio-1"
                      className=" text-sm font-medium text-black"
                    >
                      Wallet Balance
                    </label>
                  </div>
                </div>
                <div className="flex justify-start items-center gap-4">
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      id="wallet"
                      name="wallet"
                      value="wallet_balance"
                      checked
                    />
                    <img src={paypal} alt="" />
                  </div>
                </div>
              </div>

              {/* Second payment radio section */}
              <div className="flex flex-col gap-4 items-start justify-start">
                <div className="flex justify-start items-center gap-4">
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      id="wallet"
                      name="wallet"
                      value="wallet_balance"
                    />
                    <img src={master} alt="" />
                  </div>
                </div>
                <div className="flex justify-start items-center gap-4">
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      id="wallet"
                      name="wallet"
                      value="wallet_balance"
                    />
                    <img src={paypal} alt="" />
                  </div>
                </div>
              </div>
            </div>

            {/* Checkbox Remember */}
            <div className="mt-4 flex justify-start items-center gap-4">
              <input type="checkbox" id="remember" name="remember" />
              <label style={{ fontSize: "13px" }} htmlFor="remember">
                Remember for future payments
              </label>
            </div>
          </div>
        </div>

        {/* Bottom flex container */}
        <div className="mt- flex flex-col justify-center items-center gap-3">
          <button
            className="mb-1 p-3 rounded-sm __detail_btn"
            style={{ fontSize: "13px", border: "1px solid #814631" }}
          >
            ADD ADDRESS
          </button>
          <button
            className="mb-1 p-3 rounded-sm __detail_btn"
            style={{ fontSize: "13px", border: "1px solid #814631" }}
          >
            CHOOSE DELIVERY METHOD
          </button>
          <button
            className="mb-1 p-3 rounded-sm __detail_btn"
            style={{ fontSize: "13px", border: "1px solid #814631" }}
          >
            MAYBE THE SELLER DETAILS
          </button>
          <button
            className="mb-1 p-3 rounded-sm __detail_btn"
            style={{ fontSize: "13px", border: "1px solid #814631" }}
          >
            THEN, BECAUSE OF 3, MAYBE AN ACTIVE CART
          </button>
        </div>
      </div>
    </CheckoutTemplate>
  );
}

export default CheckDetails;
