import { hbag, shp } from "../../assets";
import { CheckoutTemplate } from "../../Components";
import "./CheckOrder.scss";

function CheckOrder() {
  return (
    <CheckoutTemplate step1={true}>
      <div className="mt-3 flex items-start gap-3 __check_order px-8 pb-16">
        <div className="__check_order_left">
          <div>
            <img src={hbag} alt="" />
            <p style={{ fontSize: "12px" }}>
              DO YOU WANT TO ADD THESE TO YOUR ORDER?
            </p>

            <div className="mt-6">
              <button
                className="mb-1 p-3 w-full rounded-sm"
                style={{ fontSize: "13px", border: "1px solid #814631" }}
              >
                CARTS
              </button>
              <button
                className="mb-1 p-3 w-full rounded-sm"
                style={{ fontSize: "13px", border: "1px solid #814631" }}
              >
                AND PROBABLY FAVOURITES
              </button>
            </div>
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
          {/* Quantity */}
          <div className="mt-2">
            <p style={{ fontSize: "12px" }}>Quantity</p>
            <div className="flex items-start justify-between __qty_flex">
              <div className="flex items-center gap-2">
                <p
                  className="pr-3 pl-1 py-1"
                  style={{ fontSize: "12px", backgroundColor: "#F1F1F1" }}
                >
                  1
                </p>
                <p style={{ fontSize: "12px" }}>$8</p>
              </div>
              <button
                style={{
                  backgroundColor: "transparent",
                  border: "1px solid #814631",
                  fontSize: "14px",
                }}
                className="px-3 py-3 rounded-sm font-semibold __qty_btn"
              >
                REQUEST A BESPOKE
              </button>
            </div>
          </div>
          {/* Color */}
          <div className="mt-2 __color">
            <h1 style={{ fontSize: "12px" }}>
              Colour: <span className="font-bold">Gray</span>
            </h1>
            <div className="flex items-stretch gap-2">
              <img src={shp} alt="" className="__color_img rounded-lg" />
              <img
                src={shp}
                alt=""
                className="ring-2 ring-pink-300 ring-inset __color_img rounded-lg"
              />
            </div>
          </div>
          {/* Size */}
          <div className="mt-2">
            <h1 style={{ fontSize: "12px" }}>
              Shoe size: <span className="font-bold">40</span>
            </h1>

            {/* Shoe size flex */}
            <div className="flex items-center justify-start gap-2">
              <p
                style={{
                  fontSize: "12px",
                  backgroundColor: "transparent",
                  border: "1px solid #D9D9D9",
                }}
                className="px-3 py-2 rounded-lg"
              >
                42
              </p>
              <p
                style={{
                  fontSize: "12px",
                  backgroundColor: "transparent",
                  border: "1px solid #D9D9D9",
                }}
                className="px-3 py-2 rounded-lg ring-1 ring-pink-300 ring-inset"
              >
                43
              </p>
            </div>
          </div>
        </div>
      </div>
    </CheckoutTemplate>
  );
}

export default CheckOrder;
