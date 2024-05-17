import { prof_pic, shoe, verified } from "../../assets";
import "./Card.scss";

function Card(props: {isFollow?: boolean}) {
  return (
    <>
      <div
        className="flex flex-col gap-4 __card rounded-lg overflow-hidden pb-3"
        style={{ backgroundColor: "#F1F1F1" }}
      >
        <img src={shoe} alt="" className="__product__pic" />
        <div className="px-4">
          <div className="flex justify-between items-start">
            <div className="flex gap-3 items-center justify-center">
              <div className="avatar">
                <img
                  className="w-10 h-10 rounded-full"
                  src={prof_pic}
                  alt="Rounded avatar"
                />
              </div>
              <div>
                <h1 className="font-bold __text__small text-lg">username</h1>
                <i>
                  <h4 style={{ fontSize: "12px" }}>Avg Resp Time: 20 min</h4>
                </i>
              </div>
            </div>
            <img src={verified} alt="" />
          </div>
          <div className="flex items-center justify-between flex-wrap shrink-0 mt-1">
            <i>
              <h4 style={{ fontSize: "12px" }}>128 Trades</h4>
            </i>
            <div>
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
            </div>
            <i>
              <h4 style={{ fontSize: "12px" }}>64 Products</h4>
            </i>
            <div>
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
            </div>
            <i>
              <h4 style={{ fontSize: "12px" }}>23 Posts</h4>
            </i>
          </div>
          
          {!props.isFollow ? (
            <div className="follow mt-1">
              <h1
                className="font-bold text-right"
                style={{ color: "#AAAAAA", fontSize: "12px" }}
              >
                FOLLOWING
              </h1>
            </div>
          ) : (
            <div className="follow mt-1 flex gap-2 items-center justify-end">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#0000FF"
                className="bi bi-plus-lg font-bold"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
                />
              </svg>
              <h1
                className="font-bold text-right"
                style={{
                  color: "#0000FF",
                  fontSize: "12px",
                }}
              >
                FOLLOW
              </h1>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Card;
