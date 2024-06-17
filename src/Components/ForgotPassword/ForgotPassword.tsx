import "./forgot.scss";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
  const navigate = useNavigate();
  return (
    <div className="__signin__modal rounded-lg py-6 px-5 bg-white shadow-2xl">
      <h1 className="font-bold">Reset Password !</h1>
      <div className="mt-2">
        <form>
          <div className="mt-2">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-black"
            >
              Enter the email
            </label>
            <input
              type="email"
              id="email"
              className=" border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              placeholder="Enter the email"
              required
            />
          </div>
          {/* Button */}
          <div className="mt-4">
            <button
              className="w-full py-3 font-bold text-white rounded-lg"
              style={{ backgroundColor: "#814631" }}
              onClick={() => navigate("/vendorprofile")}
            >
              Reset Password
            </button>
          </div>
          {/* <div className="mt-4 flex justify-center items-center">
            <button>
              <p
                className="font-medium text-center"
                style={{ fontSize: "12px" }}
              >
                <a style={{ color: "#814631" }}>Log in</a>
              </p>
            </button>
          </div> */}
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
