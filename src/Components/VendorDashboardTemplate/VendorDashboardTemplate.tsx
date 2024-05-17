import { polish, prof_pic, verified } from "../../assets";
import { Active, Footer, Navbar } from "..";
import "./Vendor.scss";
import { ReactElement } from "react";

function VendorDashboardTemplate(props: {
  children: ReactElement;
  profileDashboard?: boolean;
  supplier?: boolean;
  admin?: boolean;
  isTop: boolean;
  isAdmin?: boolean;
}) {
  return (
    <div className="__supplier">
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
      <div className="flex justify-between items-start __sup-con mt-4 md:flex-row flex-col">
        <div className="__sub-left">
          <div className="py-3 px-2 rounded-lg shadow-lg bg-white __sub-avt">
            <div className="mb-4 flex justify-start items-start">
              <div className="flex gap-3 items-center justify-center">
                <div className="avatar">
                  <img
                    className="w-10 h-10 rounded-full"
                    src={prof_pic}
                    alt="Rounded avatar"
                  />
                </div>
                <div>
                  <h1 className="font-bold text-lg">username</h1>
                  <i>
                    <h4 style={{ fontSize: "12px" }}>Avg Resp Time: 20 min</h4>
                  </i>
                </div>
              </div>
              <img src={verified} alt="" />
            </div>

            <div className="flex justify-between items-center mb-2">
              <p style={{ fontSize: "12px" }}>Inbox response rate</p>
              <p style={{ fontSize: "12px" }}>100%</p>
            </div>
            <div className="flex justify-between items-center mb-2">
              <p style={{ fontSize: "12px" }}>Inbox response rate</p>
              <p style={{ fontSize: "12px" }}>100%</p>
            </div>
            <div className="flex justify-between items-center mb-2">
              <p style={{ fontSize: "12px" }}>Inbox response rate</p>
              <p style={{ fontSize: "12px" }}>100%</p>
            </div>
            <div className="flex justify-between items-center mb-2 font-bold">
              <p style={{ fontSize: "12px" }}>Earned in November</p>
              <p style={{ fontSize: "12px" }}>#30000</p>
            </div>
          </div>

          {/* Wallet */}
          {!props.supplier && (
            <div className="mt-4 py-3 px-2 rounded-lg shadow-lg bg-white">
              <div className="flex justify-between items-center mb-2 font-bold">
                <p style={{ fontSize: "12px" }}>My Wallet</p>
                <p style={{ fontSize: "12px" }}>$0</p>
              </div>

              {!props.isAdmin && (
                <button
                  className="mt-5 py-2 w-full text-white rounded-sm"
                  style={{ backgroundColor: "#814631", fontSize: "12px" }}
                >
                  Withdraw (N14,200)
                </button>
              )}
            </div>
          )}

          {/* Earning */}
          {!props.isAdmin && (
            <div className="mt-4 py-3 px-2 rounded-lg shadow-lg bg-white">
              <div className="flex justify-between items-center mb-2">
                <h1 style={{ fontSize: "15px" }}>Earnings</h1>
                <p
                  className="py-2 px-4 rounded-lg text-white"
                  style={{ fontSize: "12px", backgroundColor: "#814631" }}
                >
                  Month
                </p>
              </div>
              <div className="flex justify-between items-center mb-2">
                <p style={{ fontSize: "12px" }}>Inbox response rate</p>
                <p style={{ fontSize: "12px" }}>100%</p>
              </div>
              <div className="flex justify-between items-center mb-2">
                <p style={{ fontSize: "12px" }}>Inbox response rate</p>
                <p style={{ fontSize: "12px" }}>100%</p>
              </div>
              <div className="flex justify-between items-center mb-2">
                <p style={{ fontSize: "12px" }}>Inbox response rate</p>
                <p style={{ fontSize: "12px" }}>100%</p>
              </div>
              <div className="flex justify-between items-center mb-2 font-bold gap-4">
                <p style={{ fontSize: "12px" }}>Total Earned in 6 months</p>
                <p style={{ fontSize: "12px" }}>N140,000</p>
              </div>
            </div>
          )}

          {/* Polish case */}
          {!props.isAdmin && (
            <div className="rounded-lg mt-3 shadow-lg relative">
              <img
                src={polish}
                alt="img.png"
                style={{ maxHeight: "auto", width: "100%" }}
              />
            </div>
          )}
        </div>
        <div className="__main-container">
          {/* Active container import */}
          <Active />
          {!props.isAdmin && (
            <div className="mt-4 py-4 px-3 rounded-lg shadow-lg __boost bg-white">
              <h3 className="text-black">Boost up your sales on Cobbs Mart</h3>
              <div className="mt-8 flex sm:justify-between w-full sm:gap-4 gap-10 flex-wrap shrink-0">
                <div className="flex flex-col gap-4 justify-start __boost-container">
                  <h1 className="font-bold text-lg">Get Noticed</h1>
                  <p className="text-sm">
                    taque earum rerum hic tenetur a sapiente delectus, ut aut
                    reiciendis voluptatibus maiores alias consequatur aut
                    perferendis doloribus asperiores repellat."
                  </p>
                  <div className="mt-4 inline-block">
                    <button
                      className="px-5 py-2 rounded-lg border inline-block border-1"
                      style={{ borderColor: "#814631" }}
                    >
                      Get Noticed
                    </button>
                  </div>
                </div>
                <div className="flex flex-col gap-4 justify-start __boost-container">
                  <h1 className="font-bold text-lg">Get Noticed</h1>
                  <p className="text-sm">
                    taque earum rerum hic tenetur a sapiente delectus, ut aut
                    reiciendis voluptatibus maiores alias consequatur aut
                    perferendis doloribus asperiores repellat."
                  </p>
                  <div className="mt-4 inline-block">
                    <button
                      className="px-5 py-2 rounded-lg border inline-block border-1"
                      style={{ borderColor: "#814631" }}
                    >
                      Get Noticed
                    </button>
                  </div>
                </div>
                <div className="flex flex-col gap-4 justify-start __boost-container">
                  <h1 className="font-bold text-lg">Get Noticed</h1>
                  <p className="text-sm">
                    taque earum rerum hic tenetur a sapiente delectus, ut aut
                    reiciendis voluptatibus maiores alias consequatur aut
                    perferendis doloribus asperiores repellat."
                  </p>
                  <div className="mt-4 inline-block">
                    <button
                      className="px-5 py-2 rounded-lg border inline-block border-1"
                      style={{ borderColor: "#814631" }}
                    >
                      Get Noticed
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* How to become a vendor */}
          {!props.isAdmin && (
            <div className="mt-4 py-4 px-3 rounded-lg shadow-lg __boost bg-white">
              <div className="flex items-center gap-4">
                <h3 className="text-black">How to become a verified Vendor</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#814631"
                  className="bi bi-patch-check-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708" />
                </svg>
              </div>
              <div className="mt-8 flex sm:justify-between w-full sm:gap-4 gap-10 flex-wrap shrink-0">
                <div className="flex flex-col gap-4 justify-start __boost-container">
                  <h1 className="font-bold text-lg">Get Noticed</h1>
                  <p className="text-sm">
                    taque earum rerum hic tenetur a sapiente delectus, ut aut
                    reiciendis voluptatibus maiores alias consequatur aut
                    perferendis doloribus asperiores repellat."
                  </p>
                </div>
                <div className="flex flex-col gap-4 justify-start __boost-container">
                  <h1 className="font-bold text-lg">Get Noticed</h1>
                  <p className="text-sm">
                    taque earum rerum hic tenetur a sapiente delectus, ut aut
                    reiciendis voluptatibus maiores alias consequatur aut
                    perferendis doloribus asperiores repellat."
                  </p>
                </div>
                <div className="flex flex-col gap-4 justify-start __boost-container">
                  <h1 className="font-bold text-lg">Get Noticed</h1>
                  <p className="text-sm">
                    taque earum rerum hic tenetur a sapiente delectus, ut aut
                    reiciendis voluptatibus maiores alias consequatur aut
                    perferendis doloribus asperiores repellat."
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Children props container */}
          {props.children}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-4">
        <Footer isFooterTop={props.isTop} />
      </div>
    </div>
  );
}

export default VendorDashboardTemplate;
