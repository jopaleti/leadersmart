
import { priceimg } from "../../assets";
import VendorFooter from "../../Components/VendorFooter/VendorFooter";
import VendorNavbar from "../../Components/VendorNavbar/VendorNavbar";
import "./PricePlan.scss";

function PricePlan() {
  const benefits = [
    {
      id: 1,
      header: "Special badges for your ads",
      content:
        "Aenean eu urna tortor. Vestibulum ultrices ex erat, ut aliquam erat euismod in. Praesent convallis lobortis vehicula. In in massa nisl. Vivamus maximus odio et suscipit pretium. Curabitur at semper nisi, at molestie urna. Sed in mattis turpis.",
    },
    {
      id: 2,
      header: "Dedicated customer support",
      content:
        "Nunc tempus rhoncus venenatis. Nam eu elit id dolor hendrerit lobortis. Mauris mollis leo at ex lobortis dignissim. Aenean ac fermentum augue. Praesent suscipit nisi ut malesuada posuere. Morbi lacinia magna nunc.",
    },
    {
      id: 3,
      header: "Advertise your brand on Adlisting",
      content:
        "Cras id urna id orci aliquet aliquet at a nisl. Cras eleifend odio sed aliquam feugiat. Mauris velit felis, sagittis quis fermentum in, cursus sit amet leo. Duis lobortis erat nec arcu varius accumsan. Nullam bibendum nec libero a mollis. ",
    },
    {
      id: 4,
      header: "Add video and more images",
      content:
        "Sed sed mattis eros. Aenean eu tortor et urna mattis egestas. Maecenas vel massa non ligula tempus molestie. Sed non nisl nec tellus porta feugiat ac eu enim. Phasellus ultrices tortor id est ullamcorper, et rutrum nisi blandit.",
    },
  ];
  return (
    <div className="__price_plan">
      <VendorNavbar />
      <div
        className="pt-8 pb-16 px-4 flex justify-center items-center flex-col gap-3"
        style={{
          backgroundColor: "#5E3C20",
        }}
      >
        <h1 className="text-lg text-white">Emmanuel Lones</h1>
        <p
          className="__v_text text-center"
          style={{ fontSize: "12px", color: "grey" }}
        >
          Home / Ads List / Mobile / Vivo / Other Models / Vivo21 48MP OIS
          Slefie / Seller Profile {""}
          <span className="text-bold text-white">Seller Profile</span>
        </p>
      </div>

      {/* Main section */}

      <div className="__priceplan_container pt-20 pb-10 bg-white">
        <div className="flex justify-between items-start __priceplan_cont_flex">
          <div className="__price_cont_left">
            <h1>Increase your salse using adlisting memebership.</h1>
            <p>
              Fusce vulputate turpis non nulla efficitur posuere. Nam lorem
              velit, pharetra vel blandit sed, rutrum nec elit. Etiam pulvr
              augueda eleifend, iaculis turpis vel, viverra nisl. Sed ipsum
              malesuada at lacinia.
            </p>
          </div>
          <div className="__price_cont_right">
            <img src={priceimg} alt="img.jpg" />
          </div>
        </div>
      </div>

      {/* Benefits section */}
      <div className="__benefit_container pb-10 pt-14 bg-[#F5F7FA]">
        <h1 className="text-center">Benefits & feature of membership</h1>
        <div className="__benefit_flex_container mt-8">
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            {benefits &&
              benefits.map((item) => (
                <div className="py-4 pl-4 md:pl-20 pr-4 bg-white rounded-lg shadow-lg" key={item.id}>
                  <h3
                    style={{
                      color: "#191F33",
                      fontSize: "16",
                      fontWeight: "600",
                    }}
                  >
                    {item.header}
                  </h3>
                  <p
                    className="mt-3"
                    style={{ fontSize: "12px", color: "#767E94" }}
                  >
                    {item.content}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center px-5 flex-col">
        <h3 className="font-medium text-center" style={{ fontSize: "26px" }}>
          Gert membership right now
        </h3>
        <p
          className="text-center mt-4"
          style={{ fontSize: "12px", color: "#767E94" }}
        >
          Vestibulum ac sollicitudin enim. In hac habitasse platea dictumst.
          <br />
          Maecenas efficitur turpis maximus magna dignissim.
        </p>
        <div className="mt-4">
          <button
            className="flex p-2 items-stretch justify-center gap-2"
            style={{ backgroundColor: "#AEA7A7", borderRadius: "100px" }}
          >
            <div
              className="px-4 py-1"
              style={{
                backgroundColor: "white",
                borderRadius: "100px",
                padding: "8px, 24px, 8px, 24px",
                fontSize: "12px",
              }}
            >
              Monthly
            </div>
            <div
              className="px-4 py-1"
              style={{
                backgroundColor: "",
                borderRadius: "100px",
                padding: "8px, 24px, 8px, 24px",
                fontSize: "12px",
              }}
            >
              Annually
            </div>
          </button>
        </div>

        {/* Plan container display flex */}
        <div className="mt-8 flex items-stretch justify-center gap-4 flex-wrap shrink-0">
          <div className="__basic flex flex-col gap-4">
            <div className="__basic_top pt-6 pb-4 px-4">
              <h1 className="text-center" style={{ fontSize: "20px" }}>
                Basic
              </h1>
              <p
                className="mt-3 text-center"
                style={{ fontSize: "13px", color: "#767E94" }}
              >
                Vestibulum ante ipsum primis in faucibus orci
                <br /> luctus et ultrices posuere.
              </p>
              <h1
                className="mt-4 font-medium text-center"
                style={{ fontSize: "50px" }}
              >
                $20 <span style={{ fontSize: "12px" }}>/month</span>
              </h1>
              <div className="mt-4">
                <button
                  className="w-full p-2 __plan_btn"
                  style={{ fontSize: "12px", color: "white" }}
                >
                  Choose Plan
                </button>
              </div>
            </div>
            <div className="__basic_bottom pt-4 flex flex-col items-start gap-4 px-4 pb-6">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#66CCFF"
                  className="bi bi-check2"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0" />
                </svg>
                <p style={{ fontSize: "12px" }}>Post 3 Ads per week</p>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#66CCFF"
                  className="bi bi-check2"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0" />
                </svg>
                <p style={{ fontSize: "12px" }}>Multiple-images</p>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#66CCFF"
                  className="bi bi-check2"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0" />
                </svg>
                <p style={{ fontSize: "12px" }}>Basic customer support</p>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#66CCFF"
                  className="bi bi-check2"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0" />
                </svg>
                <p style={{ fontSize: "12px" }}>Featured ads</p>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#66CCFF"
                  className="bi bi-check2"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0" />
                </svg>
                <p style={{ fontSize: "12px" }}>Special ads badge</p>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#66CCFF"
                  className="bi bi-check2"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0" />
                </svg>
                <p style={{ fontSize: "12px" }}>Adlisting membership</p>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#66CCFF"
                  className="bi bi-check2"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0" />
                </svg>
                <p style={{ fontSize: "12px" }}>
                  Advertise your brand on Adlistings
                </p>
              </div>
            </div>
          </div>
          <div className="__basic flex flex-col gap-4">
            <div
              className="__basic_top pt-6 pb-4 px-4"
              style={{ backgroundColor: "#5E3C20" }}
            >
              <h1
                className="text-center text-white"
                style={{ fontSize: "20px" }}
              >
                Standard
              </h1>
              <p
                className="mt-3 text-center text-white"
                style={{ fontSize: "13px" }}
              >
                Vestibulum ante ipsum primis in faucibus orci
                <br /> luctus et ultrices posuere.
              </p>
              <h1
                className="mt-4 font-medium text-center text-white"
                style={{ fontSize: "50px" }}
              >
                $20 <span style={{ fontSize: "12px" }}>/month</span>
              </h1>
              <div className="mt-4">
                <button
                  className="w-full p-2 __plan_btn"
                  style={{ fontSize: "12px", color: "white" }}
                >
                  Choose Plan
                </button>
              </div>
            </div>
            <div className="__basic_bottom pt-4 flex flex-col items-start gap-4 px-4 pb-6">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#66CCFF"
                  className="bi bi-check2"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0" />
                </svg>
                <p style={{ fontSize: "12px" }}>Post 3 Ads per week</p>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#66CCFF"
                  className="bi bi-check2"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0" />
                </svg>
                <p style={{ fontSize: "12px" }}>Multiple-images</p>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#66CCFF"
                  className="bi bi-check2"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0" />
                </svg>
                <p style={{ fontSize: "12px" }}>Basic customer support</p>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#66CCFF"
                  className="bi bi-check2"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0" />
                </svg>
                <p style={{ fontSize: "12px" }}>Featured ads</p>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#66CCFF"
                  className="bi bi-check2"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0" />
                </svg>
                <p style={{ fontSize: "12px" }}>Special ads badge</p>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#66CCFF"
                  className="bi bi-check2"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0" />
                </svg>
                <p style={{ fontSize: "12px" }}>Adlisting membership</p>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#66CCFF"
                  className="bi bi-check2"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0" />
                </svg>
                <p style={{ fontSize: "12px" }}>
                  Advertise your brand on Adlistings
                </p>
              </div>
            </div>
          </div>
          <div className="__basic flex flex-col gap-4">
            <div className="__basic_top pt-6 pb-4 px-4">
              <h1 className="text-center" style={{ fontSize: "20px" }}>
                Premium
              </h1>
              <p
                className="mt-3 text-center"
                style={{ fontSize: "13px", color: "#767E94" }}
              >
                Vestibulum ante ipsum primis in faucibus orci
                <br /> luctus et ultrices posuere.
              </p>
              <h1
                className="mt-4 font-medium text-center"
                style={{ fontSize: "50px" }}
              >
                $20 <span style={{ fontSize: "12px" }}>/month</span>
              </h1>
              <div className="mt-4">
                <button
                  className="w-full p-2 __plan_btn"
                  style={{ fontSize: "12px", color: "white" }}
                >
                  Choose Plan
                </button>
              </div>
            </div>
            <div className="__basic_bottom pt-4 flex flex-col items-start gap-4 px-4 pb-6">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#66CCFF"
                  className="bi bi-check2"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0" />
                </svg>
                <p style={{ fontSize: "12px" }}>Post 3 Ads per week</p>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#66CCFF"
                  className="bi bi-check2"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0" />
                </svg>
                <p style={{ fontSize: "12px" }}>Multiple-images</p>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#66CCFF"
                  className="bi bi-check2"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0" />
                </svg>
                <p style={{ fontSize: "12px" }}>Basic customer support</p>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#66CCFF"
                  className="bi bi-check2"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0" />
                </svg>
                <p style={{ fontSize: "12px" }}>Featured ads</p>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#66CCFF"
                  className="bi bi-check2"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0" />
                </svg>
                <p style={{ fontSize: "12px" }}>Special ads badge</p>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#66CCFF"
                  className="bi bi-check2"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0" />
                </svg>
                <p style={{ fontSize: "12px" }}>Adlisting membership</p>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#66CCFF"
                  className="bi bi-check2"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0" />
                </svg>
                <p style={{ fontSize: "12px" }}>
                  Advertise your brand on Adlistings
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-10">
        <VendorFooter />
      </div>
    </div>
  );
}

export default PricePlan;
