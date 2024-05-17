import { paybtn } from "../../assets";
import "./PaypalBtn.scss";

function PaypalBtn() {
  return (
    <div className="__paypal_btn w-full">
      <button className="w-full">
        <img src={paybtn} alt="paypal.png" className="w-full h-auto" />
      </button>
      <div className="mt-2 flex items-center justify-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="black"
          className="bi bi-lock-fill"
          viewBox="0 0 16 16"
        >
          <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2" />
        </svg>
        <p style={{fontSize: "13px"}}>SSL Secure Payment</p>
      </div>
    </div>
  );
}

export default PaypalBtn