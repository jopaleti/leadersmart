// import { ring } from "../../assets";
import "./AdCard.scss";

function AdCard(props: { item: any }) {
  const item: any = props.item;
  return (
    <div>
      <div className="flex shadow-lg flex-col">
        <div className="__ring_container">
          <img src={item.productImage[0]} alt="img.png" />
        </div>
        <div className="px-4 flex flex-col gap-2 pb-3">
          <div className="flex items-center gap-2 justify-start">
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
            <p style={{ color: "#767E94", fontSize: "14px" }}>
              {item.category}
            </p>
          </div>
          <h1 style={{ color: "#191F33", fontSize: "18px" }}>
            {item.productName}
          </h1>
        </div>
        <hr />
        <div className="__bottom_flex px-4 flex justify-between items-center py-3 ">
          <div className="flex items-center justify-start gap-2">
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
            <p style={{ fontSize: "14px", color: "#767E94" }}>Calabar</p>
          </div>
          <p style={{ fontSize: "16px", color: "#FF4F4F" }}>
            {item.originalPrice}
          </p>
        </div>
      </div>
    </div>
  );
}

export default AdCard