import { Navbar } from "../../Components";
import "./CategoryList.scss";

function CategoryList() {
  return (
    <div>
      <div className="__navbar-top __main_x">
        <Navbar />
        {/* Sub main */}
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
            Slefie /<span className="text-bold text-white">Seller Profile</span>
          </p>
        </div>

        {/* Search category section */}
        <div
          className="__search_category __main mt-1 flex items-center justify-between p-2 rounded-lg"
          style={{ border: "1px solid #EBEEF7" }}
        >
          <div className="__search_left flex items-stretch justify-start">
            <div className="__elem_st py-2 pl-6 pr-2">
              <input
                type="text"
                placeholder="Search by craft tittle, keyword..."
                style={{ fontSize: "16px", borderRight: "1px solid #EBEEF7" }}
                className="w-full h-full outline-none"
              />
            </div>
            <div className="__elem_ py-2 pl-6 pr-2">
              <input
                type="text"
                placeholder="Locations"
                style={{ fontSize: "16px", borderRight: "1px solid #EBEEF7" }}
                className="w-full h-full outline-none"
              />
            </div>
            <div className="__elem_ py-2 pl-6 pr-2">
              <select
                id="countries"
                style={{
                  border: "none",
                  backgroundColor: "transparent",
                  fontSize: "16px",
                  color: "#939AAD",
                }}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full outline-none"
              >
                <option selected>Choose a country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>
          </div>
          <div className="__search_right"></div>
        </div>
        {/* Result founds */}
        <div className="__result_founds __main flex items-center justify-between py-4">
          <div>
            <h1 style={{ fontSize: "20px", color: "black" }}>
              574,395
              <span style={{ color: "#939AAD" }}> Results Founds</span>
            </h1>
          </div>
          <div className="__result_right flex items-center gap-2 justify-end">
            <select
              id="countries"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5"
              style={{ backgroundColor: "transparent", color: "#464D61" }}
            >
              <option selected>Latest</option>
            </select>
            <select
              id="countries"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5"
              style={{ backgroundColor: "transparent", color: "#464D61" }}
            >
              <option selected>21 per page</option>
            </select>
          </div>
        </div>
        <hr />
        <main className="__main mt-1">
          <div className="__main_left"></div>
          <div className="__main_right"></div>
        </main>
      </div>
    </div>
  );
}

export default CategoryList;
