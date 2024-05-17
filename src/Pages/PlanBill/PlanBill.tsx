import "./plan.scss";
import { VendorDashTemplate } from "../../Components";
import { car, visa } from "../../assets";

function PlanBill() {
  return (
    <VendorDashTemplate
      breadcrumb="Home / Dashboard "
      breadcrumbheader="Message"
      myAds={true}
      background="#191F33"
    >
      <div className="__plan_bill">
        {/* Code goes here... */}
        <div
          className="py-4 px-3 rounded-xl shadow-xl"
          style={{ border: "1px solid #EBEEF7" }}
        >
          <p style={{ fontSize: "13px" }}>Current Plans</p>
          <div className="flex justify-between pr-10 items-center __standard">
            <div className="mt-2">
              <h1 className="text-2xl">Standard</h1>
              <p
                className="mt-3"
                style={{ color: "#767E94", fontSize: "12px" }}
              >
                Standard monthly subscription plan active since: Apr 16, 2021
              </p>
            </div>
            <button
              type="button"
              className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100  "
              style={{ color: "#002233" }}
            >
              Cancel Plan
            </button>
          </div>
        </div>

        <div className="flex justify-between items-stretch __plan_con">
          <div
            className="mt-4 pb-4 pt-5 px-4 __plan_left bg-white rounded-xl shadow-xl"
            style={{ border: "1px solid #EBEEF7" }}
          >
            <p style={{ fontSize: "16px" }}>Current Plans Benefits</p>
            <div className="mt-4">
              <div className="flex items-center gap-16">
                <div className="flex items-center justify-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#E8F7FF"
                    className="bi bi-check-circle-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                  </svg>
                  <p style={{ fontSize: "12px" }}>Post 10 Ads per week</p>
                </div>
                <div className="flex items-center justify-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#E8F7FF"
                    className="bi bi-check-circle-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                  </svg>
                  <p style={{ fontSize: "12px" }}>Featured ads</p>
                </div>
              </div>
              <div className="mt-3 flex items-center gap-14">
                <div className="flex items-center justify-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#E8F7FF"
                    className="bi bi-check-circle-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                  </svg>
                  <p style={{ fontSize: "12px" }}>Multiple-images & video</p>
                </div>
                <div className="flex items-center justify-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#E8F7FF"
                    className="bi bi-check-circle-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                  </svg>
                  <p style={{ fontSize: "12px" }}>Special ads badge</p>
                </div>
              </div>
              <div className="mt-3 flex items-center gap-10">
                <div className="flex items-center justify-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#E8F7FF"
                    className="bi bi-check-circle-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                  </svg>
                  <p style={{ fontSize: "12px" }}>Standard customer support</p>
                </div>
                <div className="flex items-center justify-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#E8F7FF"
                    className="bi bi-check-circle-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                  </svg>
                  <p style={{ fontSize: "12px" }}>Adlisting Membership</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="mt-4 pb-4 pt-5 px-4 __plan_right bg-white rounded-xl shadow-xl"
            style={{ border: "1px solid #EBEEF7" }}
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <div>
                    <p style={{ fontSize: "12px" }}>Next Invoices</p>
                    <div className="mt-4">
                      <h3 style={{ fontSize: "20px", color: "#191F33" }}>
                        $20.00
                      </h3>
                    </div>
                  </div>
                  <div
                    className="__plan_svg h-10 w-10 rounded-full flex justify-center items-center"
                    style={{ backgroundColor: "#E8F7FF" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#FFFFFF"
                      className="bi bi-credit-card"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" />
                      <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
                    </svg>
                  </div>
                </div>
                <div className="mt-2 flex items-center justify-start gap-6">
                  <p style={{ fontSize: "12px" }}>Plan type:</p>
                  <p style={{ fontSize: "12px", color: "#939AAD" }}>
                    Standard (monthly)
                  </p>
                </div>
                <div className="mt-2 flex items-center justify-start gap-6">
                  <p style={{ fontSize: "12px" }}>Next Invoice:</p>
                  <p style={{ fontSize: "12px", color: "#939AAD" }}>
                    Aug 16, 2021
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Payment */}
        <div className="mt-4 flex items-stretch justify-between __plan_pay_con">
          <div
            className="__pay_left mt-4 pb-4 pt-5 pl-4 pr-6 __plan_left bg-white rounded-xl shadow-xl"
            style={{ border: "1px solid #EBEEF7" }}
          >
            <h2 style={{ fontSize: "13px" }}>Payment Method</h2>
            <div className="mt-6 flex items-center justify-between">
              <img src={visa} alt="visa.png" className="w-12" />
              <h1>**** 6521</h1>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <p style={{ fontSize: "11px" }}>Name on Card:</p>
              <p style={{ fontSize: "11px", color: "#939AAD" }}>Jenny Wilson</p>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <p style={{ fontSize: "11px" }}>Expiration date:</p>
              <p style={{ fontSize: "11px", color: "#939AAD" }}>8/21</p>
            </div>

            {/* Delete last */}
            <div className="mt-4 flex items-center gap-4">
              <button
                type="button"
                className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100  "
                style={{ color: "#002233" }}
              >
                Change Card
              </button>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="red"
                  className="bi bi-trash"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                </svg>
              </button>
            </div>
          </div>
          <div
            className="__pay_right mt-4 pb-4 pt-5 pl-4 pr-6 __plan_left bg-white rounded-xl shadow-xl"
            style={{ border: "1px solid #EBEEF7" }}
          >
            <h3 className="px-6 font-medium" style={{ fontSize: "13px" }}>
              Recent Invoice
            </h3>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead
                className="text-xs text-gray-700 uppercase"
                style={{ borderBottom: "2px solid #F5F7FA" }}
              >
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3"
                    style={{ color: "#939AAD", fontSize: "11px" }}
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3"
                    style={{ color: "#939AAD", fontSize: "11px" }}
                  >
                    Payment type
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3"
                    style={{ color: "#939AAD", fontSize: "11px" }}
                  >
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody className="w-full">
                <tr className="odd:bg-white  even:bg-gray-50 relative">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium whitespace-nowrap"
                  >
                    Jul 16, 2021 at <br />
                    11:34 PM
                  </th>
                  <td className="px-6 py-4">Standard subcription (monthly)</td>
                  <td className="px-6 py-4">$20.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </VendorDashTemplate>
  );
}

export default PlanBill