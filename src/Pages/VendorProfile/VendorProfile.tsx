import { prof, spolish } from "../../assets";
import { Footer, Navbar, ProductShoe } from "../../Components";
import "./VendorProfile.scss";

function VendorProfile() {
  var itemLists: JSX.Element[] = [];
  for (var i = 0; i < 10; i++) {
    itemLists.push(<ProductShoe />);
  }
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
          <div className="flex flex-col rounded-lg overflow-hidden">
            <img src={spolish} alt="img.png" className="__sub-left-img" />
            <div className="px-5 py-4 bg-white">
              <div className="flex items-center justify-start gap-4">
                <img
                  className="w-10 h-10 rounded-full"
                  src={prof}
                  alt="prof_img.png"
                />
                <div className="flex flex-col gap-2 justify-start">
                  <div className="flex items-center gap-4">
                    <h1 className="text-lg font-bold">username</h1>
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
                  <div className="flex justify-start gap-6 items-center">
                    <h1
                      className="text-sm font-bold"
                      style={{ color: "#008000" }}
                    >
                      ONLINE
                    </h1>
                    <div className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="#0000FF"
                        className="bi bi-plus-lg"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
                        />
                      </svg>
                      <h1
                        className="text-sm font-bold"
                        style={{ color: "#0000FF" }}
                      >
                        FOLLOW
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5 flex items-stretch justify-between">
                <button
                  className="__vendor-btn p-3 text-white font-bold rounded-lg"
                  style={{ backgroundColor: "#814631" }}
                >
                  Contact Me
                </button>
                <button
                  className="__vendor-btn border border-1 p-3 text-white font-bold rounded-lg"
                  style={{
                    backgroundColor: "transparent",
                    color: "#814631",
                    borderColor: "#814631",
                  }}
                >
                  Bid Price
                </button>
              </div>
              {/* Flex column Time schedule */}
              <div className="mt-6 flex flex-col justify-start gap-2">
                <i className="text-lg text-black">
                  Avg Resp Time: <span className="font-bold">20 min</span>
                </i>
                <i className="text-lg text-black">
                  Location: <span className="font-bold">Nigeria</span>
                </i>
                <i className="text-lg text-black">
                  Merchant Since: <span className="font-bold">June 22</span>
                </i>
              </div>
              <div className="flex justify-center items-center mt-2">
                <i className=" text-black" style={{ fontSize: "16px" }}>
                  128 Trades
                </i>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="black"
                  className="bi bi-dot"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                </svg>
                <i className=" text-black" style={{ fontSize: "16px" }}>
                  64 Products
                </i>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="black"
                  className="bi bi-dot"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                </svg>
                <i className=" text-black" style={{ fontSize: "16px" }}>
                  23 Posts
                </i>
              </div>
            </div>
          </div>

          {/* About me section */}
          <div className="mt-4 px-3 py-5 rounded-lg bg-white">
            <h1 className="text-sm font-bold">About me</h1>
            <p className="mt-4 text-sm">
              You know this is that part where we write our Lorem simply because
              we accually do not know what the vendor is thinking at this time,
              see me simply typing meawhile a real vendor would meticulously
              type his bio so that he can attract more sales, lol. Now Lorem:
              !!iusto odio dignissimos ducimus qui blanditiis praesentium
              voluptatum deleniti atque corrupti quos dolores et quas molestias
              excepturi sint occaecat iusto odio dignissimos ducimus qui
              blanditiis praesentium praesentium voluptatum deleniti atque
              corrupti quos dolores et quas molestias{" "}
            </p>
          </div>

          {/* Languages */}
          <div className="mt-4 py-5 px-3 rounded-lg bg-white">
            <h1 className="text-sm font-bold">Languages</h1>
            <p className="mt-2 text-sm">English - Fluent</p>
            <p className="mt-2 text-sm">Yoruba - Native</p>
            <div className="mt-4">
              <h1 className="text-sm font-bold mb-2">Skills</h1>
              <div className="flex items-stretch justify-start gap-3 flex-wrap shrink-0">
                <h4 className="px-3 py-1 __lang_skills rounded-lg">Cutting</h4>
                <h4 className="px-3 py-1 __lang_skills rounded-lg">Shaping</h4>
                <h4 className="px-3 py-1 __lang_skills rounded-lg">Cutting</h4>
                <h4 className="px-3 py-1 __lang_skills rounded-lg">Shaping</h4>
                <h4 className="px-3 py-1 __lang_skills rounded-lg">Shaping</h4>
                <h4 className="px-3 py-1 __lang_skills rounded-lg">
                  Photography
                </h4>
                <h4 className="px-3 py-1 __lang_skills rounded-lg">Cutting</h4>
              </div>
            </div>

            {/* Certification */}
            <div className="mt-4">
              <h1 className="text-sm font-bold mb-2">Certification</h1>
              <div>
                <p style={{ fontSize: "13px" }}>
                  Exhibition Prize Certificate, Oxford Craftmen Exibition Show
                  for Leather talents
                </p>
                <p
                  className="text-sm"
                  style={{ color: "#808080", fontSize: "13px" }}
                >
                  PSC Uniben. 2015
                </p>
              </div>
            </div>
            <div className="mt-2">
              <p style={{ fontSize: "13px" }}>
                Exhibition Prize Certificate, Oxford Craftmen Exibition Show for
                Leather talents
              </p>
              <p
                className="text-sm"
                style={{ color: "#808080", fontSize: "13px" }}
              >
                PSC Uniben. 2015
              </p>
            </div>
            <div className="mt-2">
              <p style={{ fontSize: "13px" }}>
                Exhibition Prize Certificate, Oxford Craftmen Exibition Show for
                Leather talents
              </p>
              <p
                className="text-sm"
                style={{ color: "#808080", fontSize: "13px" }}
              >
                PSC Uniben. 2015
              </p>
            </div>
          </div>
        </div>
        <div className="__main-container">
          <div className="py-5 px-4 rounded-lg bg-white">
            <h1 className="text-lg">
              Your Products - <span style={{ color: "#808080" }}>15</span>
            </h1>
            <div className="mt-4 flex justify-start items-stretch gap-4 flex-wrap shrink-0">
              {itemLists.map((item, index) => (
                <div key={index}>{item}</div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-4">
        <Footer isFooterTop={false} />
      </div>
    </div>
  );
}

export default VendorProfile;
