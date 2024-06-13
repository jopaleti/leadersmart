import { useState } from "react";
import { shoe } from "../../assets";
import "./cart.scss";
function CartPopup() {
    const [cart, setCart] = useState([
        {
          id: 1,
        title: "Brown leather bespoke cooperate shoes",
        price: "15,234",
        originalPrice: "26,560.13",
      },
        {
          id: 2,
        title: "Brown leather bespoke cooperate shoes",
        price: "15,234",
        originalPrice: "26,560.13",
      },
    ]);
    const handleDelete = (item: any) => {
        setCart(cart.filter(element => element.id !== item.id))
    }
    return (
      <div className="absolute __cart_popup shadow-lg">
        <div className="__cart_container pt-6 pb-4 px-3">
          <h1 className="text-center font-bold">CART</h1>
          <div className="mt-3 flex items-stretch gap-3 __cart_container">
            {cart.map((item) => (
              <div className="flex items-center gap-4 __cart_item" key={item.id}>
                <img src={shoe} alt="" />
                <div className="py-3 pe-4">
                  <h1 style={{ fontSize: "12px" }}>
                   {item.title}
                  </h1>
                  <p className="mt-1" style={{ fontSize: "11px" }}>
                    NGN
                    <span className="font-bold" style={{ fontSize: "18px" }}>
                      {item.price}
                    </span>
                    .13
                  </p>
                  <del className="mt-1" style={{ fontSize: "11px" }}>
                    NGN{item.originalPrice}
                  </del>
                  <div className="flex justify-end">
                    <button onClick={()=>handleDelete(item)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-trash"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="__checkout_btn flex items-center justify-center mt-4">
            <button
              className="py-2 px-4 rounded-lg"
              style={{
                width: "60%",
                backgroundColor: "#814631",
                color: "white",
              }}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    );
}

export default CartPopup;
