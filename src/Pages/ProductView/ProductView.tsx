import { bed, chain, chk, fac, hand, lea, ln, pin, prof, shirt, shoe, star, twi, verif, what } from "../../assets";
import VendorFooter from "../../Components/VendorFooter/VendorFooter";
import VendorNavbar from "../../Components/VendorNavbar/VendorNavbar";
import "./product.scss";

function ProductView() {
  return (
    <div>
      <VendorNavbar />
      <div className="__templatex mt-4 flex justify-between items-start lg:flex-row flex-col">
        <div className="main">
          <div className="flex items-center gap-2">
            <span className="bg-[#FFF2CC] text-[#664C00] text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">
              Featured
            </span>
            <span className="flex items-center gap-1 bg-[#FFCCCC] text-[#664C00] text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">
              <img src={star} alt="" />
              Member
            </span>
            <span className="flex items-center gap-1 bg-[#E4F9E0] text-[#664C00] text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">
              <img src={verif} alt="" />
              Verified Seller
            </span>
          </div>
          <h1 className="mt-3 text-[#191F33] text-2xl">
            Men's Warm And Windproof Leather Jacket-Brown
          </h1>
          <div className="flex gap-4 items-center">
            <div className="mt-3 flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#767E94"
                className="bi bi-geo-alt"
                viewBox="0 0 16 16"
              >
                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
              </svg>
              <p style={{ fontSize: "12px", color: "#767E94" }}>
                Anifowoshe Street Ikorodu
              </p>
            </div>
            <div className="mt-3 flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#767E94"
                className="bi bi-clock"
                viewBox="0 0 16 16"
              >
                <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
              </svg>
              <p style={{ fontSize: "12px", color: "#767E94" }}>
                29 Jun 10:21 PM
              </p>
            </div>
            <div className="mt-3 flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#767E94"
                className="bi bi-eye"
                viewBox="0 0 16 16"
              >
                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
              </svg>
              <p style={{ fontSize: "12px", color: "#767E94" }}>
                69,656 Viewed
              </p>
            </div>
          </div>
          {/* Product */}
          <div className="rounded-lg shadow-lg pb-8 mt-4">
            <div className="w-full">
              <div className="__container_leftx flex flex-col gap-4 w-full">
                <div className="__prod_imgx">
                  <img
                    src={shirt}
                    alt=""
                    className="w-full object-contain object-center"
                    style={{ height: "400px" }}
                  />
                </div>
                <div className="mt-2 flex gap-4 items-center justify-center">
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
                {/* Product description */}
                <div className="mt-8 __product_description p-3 w-full">
                  <div>
                    <h1 className="text-xl font-medium">Product Description</h1>
                    <p
                      className="mt-2 text-sm"
                      style={{ color: "#767E94", fontSize: "12px" }}
                    >
                      This cutting-edge footwear solution is designed for
                      athletes and enthusiasts. It offers a plush, cushioned
                      insole for unmatched comfort and features an advanced
                      breathable mesh upper to keep your feet cool and dry
                      during your workout. Crafted from high-quality,
                      lightweight materials, these shoes are durable without
                      weighing you down. The precision-fit system ensures a
                      snug, secure feel, and the multi-surface tread pattern on
                      the outsole guarantees top-tier traction. StrideMax
                      combines style with function and is suitable for seasoned
                      marathon runners, casual joggers, and anyone seeking
                      everyday comfort. Elevate your running experience – order
                      the StrideMax Running Shoe today!
                    </p>
                  </div>
                  <h1 className="mt-4 mb-3 text-xl font-medium text-[#191F33]">
                    Feature
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
                          <p style={{ fontSize: "12px", color: "#464D61" }}>
                            Style: fashionable, casual, windproof
                          </p>
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
                          <p style={{ fontSize: "12px", color: "#464D61" }}>
                            Main material: PU leather, cotton
                          </p>
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
                          <p style={{ fontSize: "12px", color: "#464D61" }}>
                            Style: fashion style and casual style;
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="side_display">
          <div
            className="__side_top py-4"
            style={{ border: "1px solid #EBEEF7" }}
          >
            <div className="flex items-center justify-between w-full pb-4 px-4">
              <h1>₦18,499</h1>
              <img src={hand} alt="" />
            </div>
            <hr />
            <div
              className="mt-4 mb-8 mx-4 py-3 px-3"
              style={{ backgroundColor: "#F5F7FA" }}
            >
              <h3 className="text-center" style={{ fontSize: "12px" }}>
                (808) 5XX-XXXX
              </h3>
              <p style={{ fontSize: "10px" }}>
                Click here to reveal phone number.
              </p>
            </div>

            {/* Social media button */}
            <div className="__social pb-4">
              <div className="flex gap-1 items-center justify-center px-2 bg-[#2DD54B] py-2 mx-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="white"
                  className="bi bi-whatsapp"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                </svg>
                <p style={{ fontSize: "10px", color: "white" }}>
                  Click here to reveal phone number.
                </p>
              </div>
              <div className="mt-3 flex gap-1 items-center justify-center px-2 bg-[#EBEEF7] py-2 mx-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="black"
                  className="bi bi-envelope"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                </svg>
                <p style={{ fontSize: "10px", color: "black" }}>
                  Click here to reveal phone number.
                </p>
              </div>
            </div>
            <hr />

            {/* Profile verified */}
            <div className="px-4 py-4">
              <div className="flex items-center gap-4">
                <img className="w-10 h-10 rounded-full" src={prof} alt="" />
                <div>
                  <p style={{ fontSize: "10px", color: "#767E94" }}>Add by:</p>
                  <div className="flex items-center gap-1">
                    <h2 className="font-bold">Orshfod</h2>
                    <img src={chk} alt="" />
                  </div>
                </div>
              </div>
              <div className="__verified_content mt-3">
                <div className="flex items-center gap-1 mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-check"
                    viewBox="0 0 16 16"
                  >
                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z" />
                  </svg>
                  <p style={{ fontSize: "12px", color: "#5E3C20" }}>
                    korshfod@gmail.com
                  </p>
                </div>
                <div className="flex items-center gap-1 mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-check"
                    viewBox="0 0 16 16"
                  >
                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z" />
                  </svg>
                  <p style={{ fontSize: "12px", color: "#5E3C20" }}>
                    9 Anifowoshe Street Ikorodu
                  </p>
                </div>
                <div className="flex items-center gap-1 mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-check"
                    viewBox="0 0 16 16"
                  >
                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z" />
                  </svg>
                  <p style={{ fontSize: "12px", color: "#5E3C20" }}>
                    www.orshfod.com
                  </p>
                </div>
              </div>
            </div>
            <hr />
            {/* Ads location */}
            <div className="__ads_location pt-6 pb-4 px-4">
              <p style={{ fontSize: "12px" }}>Ads Location</p>
              <div className="mt-3">
                <iframe
                  className="rounded-lg"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d31659.399218070434!2d5.14419495!3d7.306068400000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1718352151106!5m2!1sen!2sng"
                  width="100%"
                  height="250"
                  style={{ border: "0" }}
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Side Bottom */}
          <div
            className="mt-4 __overview pt-6 pb-4"
            style={{ border: "1px solid #EBEEF7" }}
          >
            <div className="__overview_content px-4">
              <h3
                style={{
                  color: "#191F33",
                  fontSize: "16px",
                  fontWeight: "600",
                }}
              >
                Overview
              </h3>
              <div className="mt-4 flex flex-col gap-3 pb-4">
                <div className="flex items-center justify-between">
                  <p style={{ fontSize: "10px", color: "#5E3C20" }}>
                    Conditons
                  </p>
                  <p style={{ fontSize: "10px", color: "#5E3C20" }}>New</p>
                </div>
                <div className="flex items-center justify-between">
                  <p style={{ fontSize: "10px", color: "#5E3C20" }}>Brand</p>
                  <p style={{ fontSize: "10px", color: "#5E3C20" }}>Velotts</p>
                </div>
                <div className="flex items-center justify-between">
                  <p style={{ fontSize: "10px", color: "#5E3C20" }}>Model</p>
                  <p style={{ fontSize: "10px", color: "#5E3C20" }}>V2066</p>
                </div>
                <div className="flex items-center justify-between">
                  <p style={{ fontSize: "10px", color: "#5E3C20" }}>
                    Model Year
                  </p>
                  <p style={{ fontSize: "10px", color: "#5E3C20" }}>2024</p>
                </div>
                <div className="flex items-center justify-between">
                  <p style={{ fontSize: "10px", color: "#5E3C20" }}>
                    Authenticity
                  </p>
                  <p style={{ fontSize: "10px", color: "#5E3C20" }}>Original</p>
                </div>
              </div>
            </div>
            <hr />
            {/* Report */}
            <div className="py-4 px-4 flex items-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-exclamation-triangle"
                viewBox="0 0 16 16"
              >
                <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.15.15 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.2.2 0 0 1-.054.06.1.1 0 0 1-.066.017H1.146a.1.1 0 0 1-.066-.017.2.2 0 0 1-.054-.06.18.18 0 0 1 .002-.183L7.884 2.073a.15.15 0 0 1 .054-.057m1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767z" />
                <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z" />
              </svg>
              <p style={{ fontSize: "12px" }}>Report Abuse</p>
            </div>
            <hr />
            {/* Share */}
            <div className="__share_container py-4 px-4">
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-share"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5m-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" />
                </svg>
                <p style={{ fontSize: "10px", color: "#464D61" }}>Share Ads</p>
              </div>
              <div className="mt-2 flex items-center gap-2 mt-3">
                <img src={what} alt="" className="h-6 w-6" />
                <img src={fac} alt="" className="h-6 w-6" />
                <img src={twi} alt="" className="h-6 w-6" />
                <img src={ln} alt="" className="h-6 w-6" />
                <img src={pin} alt="" className="h-6 w-6" />
                <img src={chain} alt="" className="h-6 w-6" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="__rel_ad">
        {/* Ads */}
        <div className="mt-6 py-6 px-3 rounded-lg shadow-lg">
          <h1 className="text-lg font-bold">Related Ads</h1>
          <div className="mt-3 flex gap-4 items-stretch lg:flex-row flex-col flex-wrap">
            <div
              className="rounded-lg overflow-hidden"
              style={{ maxWidth: "280px", height: "auto" }}
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
              style={{ maxWidth: "280px", height: "auto" }}
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
              style={{ maxWidth: "280px", height: "auto" }}
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
      {/* Footer */}
      <div className="__footer-section mt-6">
        <VendorFooter />
      </div>
    </div>
  );
}

export default ProductView;
