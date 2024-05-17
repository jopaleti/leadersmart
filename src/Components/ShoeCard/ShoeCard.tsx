import { bs } from "../../assets";
import "./ShoeCard.scss";
function ShoeCard(props: { discount?: string, discountprice?: string, percent?: string }) {
  const { discount, discountprice, percent } = props;
  return (
    <>
      <div
        className="__shoe_card flex flex-col gap-4 rounded-lg overflow-hidden pb-2 shadow-lg"
        style={{ backgroundColor: "#F1F1F1" }}
      >
        <img src={bs} alt="" />
        <div className="px-2">
          {" "}
          <h3 className="text-lg">Brown leather bespoke cooperate shoes</h3>
          <h6 className="mt-1" style={{ fontSize: "10px" }}>
            NGN <span className="text-lg font-bold">15,234</span>.13
          </h6>
          {discount && discount == "true" && (
            <div className="mt-1 flex gap-4 items-center justify-start">
              <del style={{ fontSize: "10px" }}>
                {(discountprice || "NGN26, 560.13")}
              </del>
              <span
                className="p-1 rounded-lg"
                style={{
                  backgroundColor: "#FFCCCC",
                  color: "#FF0000",
                  fontSize: "10px",
                }}
              >
               {percent}
              </span>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default ShoeCard;
