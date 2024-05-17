function Active(props: { activeTxt?: string, activePrice?: string, select?: string, mainTxt?: string }) {
    // const { activeTxt, activePrice, select, mainTxt } = props;
  return (
    <div className="__active-container bg-white py-2 px-3 shadow-lg rounded-lg">
      <div className="w-full flex justify-between items-center">
        <h1 className="text-lg text-black">
          {props.activeTxt ? props.activeTxt : "Active orders"} - 
          <span className="ml-1 font-bold" style={{ color: "#808080" }}>
            {props.activePrice ? props.activePrice : "0 (N0)"}
          </span>
        </h1>

        {/* Dropdown selection for an active */}
        {props.select == "true" || !props.select ? (
          <form className="max-w-sm">
            <select
              id="countries"
              style={{ backgroundColor: "transparent", borderColor: "#814631" }}
              className="text-black border border-1 text-sm rounded-lg px-3 py-2  "
            >
              <option selected>Active orders (0)</option>
              <option value="US">United States</option>
            </select>
          </form>
        ) : (
          ""
        )}
      </div>
      <div className="text-center mt-4 pb-6 font-bold">
        <h1 style={{ color: "#808080", fontSize: "16px" }}>
          {props.mainTxt ? props.mainTxt : "NO ORDERS YET!"}
        </h1>
      </div>
    </div>
  );
}

export default Active;
