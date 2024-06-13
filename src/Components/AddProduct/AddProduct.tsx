import "./AddProduct.scss";

function AddProduct() {
  return (
    <div className="absolute __cart_popup shadow-lg">
      <div className="__cart_container pt-6 pb-4 px-3">
        <h1 className="text-center font-bold mb-3">ADD PRODUCT</h1>
        <form>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="first_name"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Product Name
              </label>
              <input
                type="text"
                id="first_name"
                className="bg-gray-50 border border-[#814631] text-gray-900 text-sm rounded-lg block w-full p-2.5 "
                placeholder="John"
                required
              />
            </div>
            <div>
              <label
                htmlFor="last_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Product Name
              </label>
              <input
                type="text"
                id="first_name"
                className="bg-gray-50 border border-[#814631] text-gray-900 text-sm rounded-lg block w-full p-2.5 "
                placeholder="John"
                required
              />
            </div>
            <div>
              <label
                htmlFor="first_name"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Product Category
              </label>
              <input
                type="text"
                id="first_name"
                className="bg-gray-50 border border-[#814631] text-gray-900 text-sm rounded-lg block w-full p-2.5 "
                placeholder="John"
                required
              />
            </div>
            <div>
              <label
                htmlFor="last_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Product Category
              </label>
              <input
                type="text"
                id="first_name"
                className="bg-gray-50 border border-[#814631] text-gray-900 text-sm rounded-lg block w-full p-2.5 "
                placeholder="John"
                required
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddProduct