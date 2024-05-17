import Message from "../Message/Message";

function CheckoutBtnLast() {
  return (
    <div>
      <div className="rounded-lg bg-white py-6 px-5">
        <h1 className="text-sm font-semibold mb-3">Price Summary</h1>
        <div className="flex items-center justify-between">
          <p style={{ fontSize: "14px" }}>category cost</p>
          <p style={{ fontSize: "14px" }}>NGN3,000</p>
        </div>
        <div className="flex items-center justify-between mt-1">
          <p style={{ fontSize: "14px" }}>Delivery fee (5%)</p>
          <p style={{ fontSize: "14px" }}>NGN3,000</p>
        </div>
        <div className="flex items-center justify-between mt-1">
          <p style={{ fontSize: "14px" }}>Discount Vouchers</p>
          <p style={{ fontSize: "14px" }}>--select--</p>
        </div>

        <div className="flex items-center justify-between mt-4">
          <h1 className="text-sm font-bold">Total</h1>
          <h1 className="text-sm font-bold">NGN3,550</h1>
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-clock"
              viewBox="0 0 16 16"
            >
              <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
              <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
            </svg>
            <p style={{ fontSize: "12px", fontWeight: "600" }}>
              2 Days Delivery
            </p>
          </div>
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-clockwise"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z"
              />
              <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466" />
            </svg>
            <p style={{ fontSize: "12px", fontWeight: "600" }}>1 Repair</p>
          </div>
        </div>

        {/* Button import section goes here */}
        <div
          className="ps-4 pt-2 rounded-lg mt-4"
          style={{ backgroundColor: "#814631" }}
        >
          <Message />
        </div>
      </div>
    </div>
  );
}

export default CheckoutBtnLast;
