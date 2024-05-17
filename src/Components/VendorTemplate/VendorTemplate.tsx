import Navbar from "../Navbar/Navbar";
import "./VendorTemplate.scss";

function VendorTemplate() {
  return (
    <div className="__vendor-Template">
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
      <div className="flex justify-start items-center">
        <div className="__side-left"></div>
        <div className="__main-container"></div>
      </div>
    </div>
  );
}

export default VendorTemplate