import { pol } from "../../assets";
import "./Reel.scss";

function Reel() {
  return (
    <>
      <div
        className="__reel_card pb-2 flex flex-col gap-2 rounded-lg overflow-hidden"
        style={{ backgroundColor: "#F1F1F1" }}
      >
        <img src={pol} alt="" />
        <div className="mt-1 px-2">
          <h1 className="text-sm">How I tie my shoe lace when I think...</h1>
          <div className="flex items-center gap-2">
            <h4 style={{ fontSize: "10px" }}>125k views</h4>
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
            <h4 style={{ fontSize: "10px" }}>1hr</h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default Reel