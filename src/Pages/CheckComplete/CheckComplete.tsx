import { hbag } from "../../assets";
import { CheckoutTemplate } from "../../Components";
import "./CheckComplete.scss";

function CheckComplete() {
  return (
    <CheckoutTemplate step3={true}>
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
          </div>
        </div>

        {/* Bottom flex container */}
        <div className="mt- flex flex-col justify-center items-center gap-3">
          <button
            className="mb-1 p-3 rounded-sm __detail_btn"
            style={{ fontSize: "13px", border: "1px solid #814631" }}
          >
            CHECK B!
          </button>
        </div>
      </div>
    </CheckoutTemplate>
  );
}

export default CheckComplete;
