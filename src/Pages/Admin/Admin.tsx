import { prof } from "../../assets";
import { Active, Card, ProductShoe, VendorDashboardTemplate } from "../../Components";
import "./Admin.scss";

function Admin() {
  return (
    <VendorDashboardTemplate isAdmin={true} isTop={false}>
      <div>
        <div className="mt-4 rounded-lg px-3 py-5 bg-white">
          <h2 className="text-lg">
            Dispute Raised - <span style={{ color: "#808080" }}>0 (N0)</span>
          </h2>
          <div className="flex items-stretch justify-start gap-5 flex-wrap shrink-0">
            <div
              style={{ backgroundColor: "#F1F1F1" }}
              className="mt-4 rounded-lg flex gap-5 items-stretch justify-start __dispute-card"
            >
              <div className="flex items-end pr-4 __dispute-item">
                <div className="__prod-shoe">
                  <ProductShoe backgroundColor="#F1F1F1" />
                </div>
                <div className="pb-5 __prod-desc">
                  <h1 className="text-sm font-bold mb-2">Description</h1>
                  <p style={{ fontSize: "14px" }}>
                    This is why I don’t like online stuffs, Me: Oga, go staight
                    to the point. Complaint: So I’m suppsosed to attend a
                    wedding today right and this baba has refused to make my
                    shoe. Now what do I wear? Me: Wear sandals oga.
                  </p>
                </div>
              </div>
            </div>

            <div
              style={{ backgroundColor: "#F1F1F1" }}
              className="mt-4 rounded-lg flex gap-5 items-stretch justify-start __dispute-card"
            >
              <div className="flex items-end pr-4 __dispute-item">
                <div className="__prod-shoe">
                  <ProductShoe backgroundColor="#F1F1F1" />
                </div>
                <div className="pb-5 __prod-desc">
                  <h1 className="text-sm font-bold mb-2">Description</h1>
                  <p style={{ fontSize: "14px" }}>
                    This is why I don’t like online stuffs, Me: Oga, go staight
                    to the point. Complaint: So I’m suppsosed to attend a
                    wedding today right and this baba has refused to make my
                    shoe. Now what do I wear? Me: Wear sandals oga.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Admin avatar flex */}
        <div className="mt-4 py-5 px-3 rounded-lg shadow-lg bg-white">
          <h2 className="text-lg mb-4">
            Admins - <span style={{ color: "#808080" }}>3 (N0)</span>
          </h2>
          <div className="flex items-center justify-start gap-4 flex-wrap shrink-o">
            <div
              className="flex items-center gap-2 py-4 px-3 rounded-lg __admin-avatar"
              style={{ backgroundColor: "#F1F1F1" }}
            >
              <img
                className="w-10 h-10 rounded-full"
                src={prof}
                alt="Rounded avatar"
              />
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-sm font-bold text-black">
                    Admin <span></span>
                  </h1>
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
                  <h1 className="text-sm font-bold text-black">
                    Admin <span></span>
                  </h1>
                </div>
                <p className="mt-1" style={{ fontSize: "12px" }}>
                  All assess granted
                </p>
              </div>
            </div>
            <div
              className="flex items-center gap-2 py-4 px-3 rounded-lg __admin-avatar"
              style={{ backgroundColor: "#F1F1F1" }}
            >
              <img
                className="w-10 h-10 rounded-full"
                src={prof}
                alt="Rounded avatar"
              />
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-sm font-bold text-black">
                    Admin <span></span>
                  </h1>
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
                  <h1 className="text-sm font-bold text-black">
                    Admin <span></span>
                  </h1>
                </div>
                <p className="mt-1" style={{ fontSize: "12px" }}>
                  All assess granted
                </p>
              </div>
            </div>
            <div
              className="flex items-center gap-2 py-4 px-3 rounded-lg __admin-avatar"
              style={{ backgroundColor: "#F1F1F1" }}
            >
              <img
                className="w-10 h-10 rounded-full"
                src={prof}
                alt="Rounded avatar"
              />
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-sm font-bold text-black">
                    Admin <span></span>
                  </h1>
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
                  <h1 className="text-sm font-bold text-black">
                    Admin <span></span>
                  </h1>
                </div>
                <p className="mt-1" style={{ fontSize: "12px" }}>
                  All assess granted
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Vendor card flex */}
        <div className="mt-4 py-5 px-3 rounded-lg shadow-lg bg-white">
          <h2 className="text-lg mb-4">
            Vendors - <span style={{ color: "#808080" }}>4</span>
          </h2>
          <div className="mt-4 flex items-stretch justify-start gap-1.5 flex-wrap shrink-0">
            <div className="__vendor-card">
              <Card />
            </div>
            <div className="__vendor-card">
              <Card isFollow={true} />
            </div>{" "}
            <div className="__vendor-card">
              <Card isFollow={true} />
            </div>{" "}
            <div className="__vendor-card">
              <Card isFollow={true} />
            </div>
          </div>
        </div>

        {/* New category */}
        <div className="mt-4">
          <Active select="false" mainTxt="NO NEW CATEGORY REQUEST" />
        </div>
      </div>
    </VendorDashboardTemplate>
  );
}

export default Admin;
