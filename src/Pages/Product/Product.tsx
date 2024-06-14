import {
  bed,
  butom,
  days,
  lea,
  polish,
  prof,
  shirt,
  shoe,
  year,
} from "../../assets";
import { Footer, Navbar } from "../../Components";
import "./Product.scss";

function Product() {
  return (
    <div>
      <Navbar />
      {/* Subnav */}
      <div className="shadow-xl">
        <div className="__product flex">
          <div className="mt-4 py-4 px-2 flex justify-start items-center gap-8 __product-flex flex-nowrap shrink-0">
            <a className="active __link text-sm font-semibold">Overview</a>
            <a className="text-sm __link font-semibold">Description</a>
            <a className="text-sm __link font-semibold">About the seller</a>
            <a className="text-sm __link font-semibold">Recommendations</a>
            <a className="text-sm __link font-semibold">FAQ</a>
            <a className="text-sm __link font-semibold">Reviews</a>
          </div>
        </div>
      </div>

      <div className="__template mt-4 flex justify-between items-start lg:flex-row flex-col">
        <div className="main">
          <div className="rounded-lg shadow-lg pb-8">
            {" "}
            <div className="flex justify-between items-start lg:flex-row flex-col">
              <div className="__container_left flex flex-col gap-4">
                <div className="__prod_img">
                  <img src={shirt} alt="" />
                </div>
                <div className="mt-2 flex gap-4 items-center justify-start">
                  <div className="__sub_img">
                    <img src={lea} alt="" />
                  </div>
                  <div className="__sub_img">
                    <img src={lea} alt="" />
                  </div>
                  <div className="__sub_img">
                    <img src={lea} alt="" />
                  </div>
                  <div className="__sub_img">
                    <img src={lea} alt="" />
                  </div>
                </div>
              </div>
              <div className="__container_right py-3 px-4">
                <h2 className="text-sm text-blue-700">Customizable</h2>
                <h1 className="mt-1 font-semibold text-xl lg:text-2xl">
                  Product Title and short Description of Product
                </h1>

                <div className="mt-2 grid grid-cols-3 gap-2">
                  <div className="text-black text-sm">
                    Brand: <span className="text-gray-500">DAM PK</span>
                  </div>
                  <div className="text-black text-sm">
                    Brand: <span className="text-gray-500">DAM PK</span>
                  </div>
                  <div className="text-black text-sm">
                    Brand: <span className="text-gray-500">DAM PK</span>
                  </div>
                  <div className="text-black text-sm">
                    Brand: <span className="text-gray-500">DAM PK</span>
                  </div>
                  <div className="text-black text-sm">
                    Brand: <span className="text-gray-500">DAM PK</span>
                  </div>
                  <div></div>
                  <div className="text-black text-sm">
                    Tag:
                    <span className="text-gray-500"> Casual, Sport</span>
                  </div>
                </div>

                {/* Rating */}
                <div className="mt-2 flex gap-2 items-center justify-start">
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
                  {/* Half */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#814631"
                    className="bi bi-star-half"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.77-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223 8 2.226z" />
                  </svg>

                  <h5 className="text-sm">Rated 4.5</h5>
                </div>
                <div className="__qty mt-2">
                  <h4 className="text-sm ">Quantity</h4>
                  <h4
                    className="mt-1 pl-2 pr-6 py-1 inline-block"
                    style={{ backgroundColor: "#F1F1F1" }}
                  >
                    1
                  </h4>
                </div>
                <div className="mt-2 __color">
                  <h3 className="text-small">
                    Colour: <span style={{ color: "#808080" }}>Gray</span>
                  </h3>
                </div>
                {/* Chat with seller section and shoe types */}
                <div className="mt-2 flex flex-col lg:flex-row items-stretch justify-start gap-4">
                  <div className="flex items-stretch justify-start gap-4">
                    <img
                      className="w-20 h-20 rounded"
                      src={shoe}
                      alt="Large avatar"
                    />
                    <img
                      className="w-20 h-20 rounded ring-red-600 ring-2"
                      src={shoe}
                      alt="Large avatar"
                    />
                    <img
                      className="w-20 h-20 rounded ring-blue-600 ring-2"
                      src={shoe}
                      alt="Large avatar"
                    />
                  </div>
                  <button
                    className="px-6 flex justify-center items-center rounded-lg py-4 __chat_seller_btn"
                    style={{ backgroundColor: "#814631" }}
                  >
                    <div>
                      <h1 className="text-sm text-white font-semibold text-center">
                        Chat with seller, an icon
                      </h1>
                    </div>
                  </button>
                </div>

                {/* Available sizes */}
                <div className="mt-2">
                  <h1 className="text-sm">
                    Available sizes:{" "}
                    <span style={{ color: "#808080" }}>40</span>
                  </h1>
                  <div className="flex items-start justify-start gap-2">
                    <h1 className="mt-2 px-3 py-2 rounded-lg border-gray-200 border inline-block">
                      39
                    </h1>
                    <h1 className="mt-2 px-3 py-2 rounded-lg border-gray-200 border inline-block">
                      39
                    </h1>
                    <h1 className="mt-2 px-3 py-2 rounded-lg border-gray-200 border inline-block">
                      39
                    </h1>
                  </div>
                </div>

                {/* Request */}
                <div className="mt-2 flex items-stretch justify-between">
                  <button
                    className="px-5 py-4 text-white text-sm rounded-lg"
                    style={{ backgroundColor: "#814631", width: "48%" }}
                  >
                    REQUEST A BESPOKE
                  </button>
                  <button
                    className="px-5 py-4 text-sm rounded-lg border"
                    style={{
                      backgroundColor: "white",
                      color: "#814631",
                      borderColor: "#814631",
                      width: "48%",
                    }}
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-center items-center gap-16 w-full">
              <div>
                <img src={year} alt="img.jpg" />
              </div>
              <div>
                <img src={days} alt="img.jpg" />
              </div>
            </div>
          </div>

          {/* Product description */}
          <div className="mt-8 __product_description p-3 w-full rounded-lg shadow-lg">
            <div>
              <h1 className="text-xl font-bold">Product Description</h1>
              <p className="mt-2 text-sm">
                This cutting-edge footwear solution is designed for athletes and
                enthusiasts. It offers a plush, cushioned insole for unmatched
                comfort and features an advanced breathable mesh upper to keep
                your feet cool and dry during your workout. Crafted from
                high-quality, lightweight materials, these shoes are durable
                without weighing you down. The precision-fit system ensures a
                snug, secure feel, and the multi-surface tread pattern on the
                outsole guarantees top-tier traction. StrideMax combines style
                with function and is suitable for seasoned marathon runners,
                casual joggers, and anyone seeking everyday comfort. Elevate
                your running experience – order the StrideMax Running Shoe
                today!
              </p>
            </div>
            <h1 className="mt-4 mb-3 text-xl font-bold text-black">
              Other Details
            </h1>
            <div className="flex justify-start items-start gap-4 lg:gap-20 lg:flex-row flex-col">
              <div className="flex justify-start items-start gap-16">
                <div className="flex flex-col gap-2">
                  <div className="flex gap-1 items-center justify-start">
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
                    <p className="text-sm">SKU: 20156</p>
                  </div>
                  <div className="flex gap-1 items-center justify-start">
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
                    <p className="text-sm">Model: NG005</p>
                  </div>
                  <div className="flex gap-1 items-center justify-start">
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
                    <p className="text-sm">Production Country: Nigeria 6</p>
                  </div>
                </div>
              </div>

              {/* Right content */}
              <div className="flex justify-start items-start gap-16">
                <div className="flex flex-col gap-2">
                  <div className="flex gap-1 items-center justify-start">
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
                    <p className="text-sm">SKU: 20156</p>
                  </div>
                  <div className="flex gap-1 items-center justify-start">
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
                    <p className="text-sm">Model: NG005</p>
                  </div>
                  <div className="flex gap-1 items-center justify-start">
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
                    <p className="text-sm">Production Country: Nigeria 6</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recommendation */}
          <div className="mt-6 py-6 px-3 rounded-lg shadow-lg">
            <h1 className="text-lg font-bold">Recommendation</h1>
            <div className="mt-3 flex gap-4 items-stretch lg:flex-row flex-col flex-wrap">
              <div
                className="rounded-lg overflow-hidden"
                style={{ maxWidth: "312px", height: "auto" }}
              >
                <img src={bed} alt="" />
                <div className="flex flex-col p-4 border border-1 border-black border-t-0 rounded-lg rounded-t-none">
                  <div className="flex gap-2 items-center justify-start">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="#767E94"
                        className="bi bi-stack"
                        viewBox="0 0 16 16"
                      >
                        <path d="m14.12 10.163 1.715.858c.22.11.22.424 0 .534L8.267 15.34a.6.6 0 0 1-.534 0L.165 11.555a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.66zM7.733.063a.6.6 0 0 1 .534 0l7.568 3.784a.3.3 0 0 1 0 .535L8.267 8.165a.6.6 0 0 1-.534 0L.165 4.382a.299.299 0 0 1 0-.535z" />
                        <path d="m14.12 6.576 1.715.858c.22.11.22.424 0 .534l-7.568 3.784a.6.6 0 0 1-.534 0L.165 7.968a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0z" />
                      </svg>
                    </div>
                    <p className="text-sm">Vehicles</p>
                  </div>
                  <h1 className="mt-5 font-semibold">
                    Samsung Galaxy A22 2021...
                  </h1>
                  <hr className="h-px mt-8 bg-black border-0"></hr>

                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-2 justify-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="green"
                        className="bi bi-geo-alt"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                      </svg>
                      <p className="text-small" style={{ color: "#767E94" }}>
                        Wisconsin
                      </p>
                    </div>
                    <p className="text-sm" style={{ color: "#FF4F4F" }}>
                      $70.00
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="rounded-lg overflow-hidden"
                style={{ maxWidth: "312px", height: "auto" }}
              >
                <img src={bed} alt="" />
                <div className="flex flex-col p-4 border border-1 border-black border-t-0 rounded-lg rounded-t-none">
                  <div className="flex gap-2 items-center justify-start">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="#767E94"
                        className="bi bi-stack"
                        viewBox="0 0 16 16"
                      >
                        <path d="m14.12 10.163 1.715.858c.22.11.22.424 0 .534L8.267 15.34a.6.6 0 0 1-.534 0L.165 11.555a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.66zM7.733.063a.6.6 0 0 1 .534 0l7.568 3.784a.3.3 0 0 1 0 .535L8.267 8.165a.6.6 0 0 1-.534 0L.165 4.382a.299.299 0 0 1 0-.535z" />
                        <path d="m14.12 6.576 1.715.858c.22.11.22.424 0 .534l-7.568 3.784a.6.6 0 0 1-.534 0L.165 7.968a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0z" />
                      </svg>
                    </div>
                    <p className="text-sm">Vehicles</p>
                  </div>
                  <h1 className="mt-5 font-semibold">
                    Samsung Galaxy A22 2021...
                  </h1>
                  <hr className="h-px mt-8 bg-black border-0"></hr>

                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-2 justify-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="green"
                        className="bi bi-geo-alt"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                      </svg>
                      <p className="text-small" style={{ color: "#767E94" }}>
                        Wisconsin
                      </p>
                    </div>
                    <p className="text-sm" style={{ color: "#FF4F4F" }}>
                      $70.00
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="rounded-lg overflow-hidden"
                style={{ maxWidth: "312px", height: "auto" }}
              >
                <img src={bed} alt="" />
                <div className="flex flex-col p-4 border border-1 border-black border-t-0 rounded-lg rounded-t-none">
                  <div className="flex gap-2 items-center justify-start">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="#767E94"
                        className="bi bi-stack"
                        viewBox="0 0 16 16"
                      >
                        <path d="m14.12 10.163 1.715.858c.22.11.22.424 0 .534L8.267 15.34a.6.6 0 0 1-.534 0L.165 11.555a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.66zM7.733.063a.6.6 0 0 1 .534 0l7.568 3.784a.3.3 0 0 1 0 .535L8.267 8.165a.6.6 0 0 1-.534 0L.165 4.382a.299.299 0 0 1 0-.535z" />
                        <path d="m14.12 6.576 1.715.858c.22.11.22.424 0 .534l-7.568 3.784a.6.6 0 0 1-.534 0L.165 7.968a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0z" />
                      </svg>
                    </div>
                    <p className="text-sm">Vehicles</p>
                  </div>
                  <h1 className="mt-5 font-semibold">
                    Samsung Galaxy A22 2021...
                  </h1>
                  <hr className="h-px mt-8 bg-black border-0"></hr>

                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-2 justify-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="green"
                        className="bi bi-geo-alt"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                      </svg>
                      <p className="text-small" style={{ color: "#767E94" }}>
                        Wisconsin
                      </p>
                    </div>
                    <p className="text-sm" style={{ color: "#FF4F4F" }}>
                      $70.00
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="side_display">
          <div className="rounded-lg shadow-lg py-4 px-3">
            <h1 className="text-lg font-bold">N13,500</h1>
            <div className="flex items-center justify-start gap-6 mt-2">
              <del style={{ fontSize: "12px" }}>#10,000</del>
              <span
                className="p-1 rounded-lg"
                style={{
                  backgroundColor: "#FFCCCC",
                  fontSize: "12px",
                  color: "#FF0000",
                }}
              >
                -23%
              </span>
            </div>
            <div className="mt-2 flex items-center justify-start gap-6">
              <p style={{ fontSize: "12px" }}>Custom</p>
              <p style={{ fontSize: "12px" }}>Slightly Negotiable</p>
            </div>
            <p className="mt-2" style={{ fontSize: "12px" }}>
              This is a short description of the product posted an written by
              the vendor who graciously loves our platform and cherishes it.
            </p>
            <div className="flex items-center justify-between mt-2">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  fill="currentColor"
                  className="bi bi-clock"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
                </svg>
                <p style={{ fontSize: "12px" }}>2 Days Delivery</p>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
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
                <p style={{ fontSize: "12px" }}>1 Repair</p>
              </div>
            </div>
            <h1 className="mt-2 text-sm font-bold">Choose delivery location</h1>
            <div
              className="mt-2 flex items-center justify-between p-2 border border-1"
              style={{ borderColor: "#814631" }}
            >
              <p style={{ fontSize: "14px" }}>Lagos - Ikeja</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                fill="black"
                className="bi bi-plus"
                viewBox="0 0 16 16"
              >
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
              </svg>
            </div>
            <div className="mt-2 flex items-center justify-start gap-2">
              <p className="text-sm font-bold">Delivery Cost</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                fill="black"
                className="bi bi-water"
                viewBox="0 0 16 16"
              >
                <path d="M.036 3.314a.5.5 0 0 1 .65-.278l1.757.703a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.757-.703a.5.5 0 1 1 .372.928l-1.758.703a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0L.314 3.964a.5.5 0 0 1-.278-.65m0 3a.5.5 0 0 1 .65-.278l1.757.703a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.757-.703a.5.5 0 1 1 .372.928l-1.758.703a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0L.314 6.964a.5.5 0 0 1-.278-.65m0 3a.5.5 0 0 1 .65-.278l1.757.703a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.757-.703a.5.5 0 1 1 .372.928l-1.758.703a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0L.314 9.964a.5.5 0 0 1-.278-.65m0 3a.5.5 0 0 1 .65-.278l1.757.703a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.757-.703a.5.5 0 1 1 .372.928l-1.758.703a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.757-.703a.5.5 0 0 1-.278-.65" />
              </svg>
              <p className="text-sm font-bold">N520</p>
            </div>
            <div className="mt-4">
              <p style={{ fontSize: "12px" }}>
                Click continue to negotiate a better price
              </p>
            </div>
            <button
              className="w-full py-4 text-center text-white rounded-sm mt-1"
              style={{ backgroundColor: "#814631" }}
            >
              Continue (N14,200)
            </button>
            <p className="mt-1" style={{ fontSize: "11px" }}>
              depending on your location,delivery rates may apply
            </p>
          </div>

          {/* Polish case */}
          <div className="rounded-lg mt-3 shadow-lg relative">
            <img
              src={polish}
              alt="img.png"
              style={{ maxHeight: "auto", width: "100%" }}
            />
            <button>
              <div
                className="z-50 absolute left-5 top-2 p-2 shadow-lg rounded-lg flex justify-between items-center w-full"
                style={{ zIndex: "10000000" }}
              >
                <div className="flex gap-3 items-center justify-start">
                  <img
                    className="w-10 h-10 rounded-full"
                    src={prof}
                    alt="img.png"
                  />
                  <h1 className="font-bold text-sm">Messaging</h1>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="black"
                  className="bi bi-chevron-down"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                  />
                </svg>
              </div>
            </button>
          </div>

          {/* Last image */}
          <div className="rounded-lg mt-3 shadow-lg overflow-hidden">
            <img
              src={butom}
              alt="img.png"
              style={{ maxHeight: "auto", width: "100%" }}
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="__footer-section mt-6">
        <Footer isFooterTop={true} />
      </div>
    </div>
  );
}

export default Product;
