import { pshoe } from "../../assets";
import "./ProductShoe.scss";

function ProductShoe(props: {backgroundColor?: string}) {
  return (
    <>
      <div
        className="__product-shoe flex flex-col gap-2 py-5 px-4 rounded-lg"
        style={{ backgroundColor: `${props.backgroundColor? props.backgroundColor : "#F1F1F1"}` }}
      >
        <img className="__product-shoe-img" src={pshoe} alt="shoe.png" />
        <h1 className="text-black" style={{ fontSize: "16px" }}>
          Brown leather bespoke cooperate shoes
        </h1>
        <div>
          <span className="text-sm">
            NGN <h1 className="text-lg font-bold inline">15,234</h1>.13
          </span>
          <div className="flex items-center gap-4">
            <del className="text-sm">NGN26,560.13</del>
            <span
              className="px-2 py-1 rounded-lg"
              style={{
                backgroundColor: "#FFCCCC",
                color: "#FF0000",
                fontSize: "12px",
              }}
            >
              -8%
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductShoe;
