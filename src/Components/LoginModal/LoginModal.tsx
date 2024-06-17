import "./LoginModal.scss";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { MyContext } from "../../Context";

function LoginModal() {
  const userContext: any = useContext(MyContext)
  const { setValue } = userContext;
  const navigate = useNavigate();
  return (
    <div className="__signin__modal rounded-lg py-6 px-5 bg-white shadow-2xl">
      <h1 className="font-bold">Login into your account !</h1>
      <div className="flex items-center justify-start gap-4 mt-2">
        <button className="px-6 py-2 __sign__modal_btn1 font-bold">
          Email
        </button>
        <button className="px-6 py-2 __sign__modal_btn2 font-bold">
          Phone Number
        </button>
      </div>
      <div className="mt-2">
        <form>
          <div className="mt-2">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-black"
            >
              Personal Email
            </label>
            <input
              type="email"
              id="email"
              className=" border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              placeholder=""
              required
            />
          </div>
          <div className="mt-4">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-black"
            >
              Password
            </label>
            <input
              type="email"
              id="email"
              className=" border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              placeholder=""
              required
            />
          </div>
          {/* Referral Id */}
          <div className="mt-4">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-black"
            >
              Refreral ID:
            </label>
            <input
              type="email"
              id="email"
              className=" border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              style={{ backgroundColor: "#F1F1F1" }}
              placeholder="54422566"
              required
            />
          </div>
          <div className="flex items-center mt-4">
            <input
              id="checked-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
            />
            <label
              htmlFor="checked-checkbox"
              className="ms-2 text-sm font-medium text-gray-900"
            >
              I have read and agree to Cobb’s{" "}
              <span className="font-bold">
                Terms
                <br /> of Service and Privacy Policy
              </span>
            </label>
          </div>
          {/* Button */}
          <div className="mt-4">
            <button
              className="w-full py-3 font-bold text-white rounded-lg"
              style={{ backgroundColor: "#814631" }}
              onClick={() => navigate("/vendorprofile")}
            >
              Login
            </button>
          </div>
          <div className="mt-4">
            <p className="font-medium" style={{ fontSize: "12px" }}>
              Forgot Password ?
              <button className="ms-1" onClick={()=> setValue((prevState: any)=> !prevState)}>
                <a style={{ color: "#814631" }}>Reset Your Password</a>
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginModal;
