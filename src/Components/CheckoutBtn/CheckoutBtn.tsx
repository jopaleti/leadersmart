function CheckoutBtn(props: { text: string }) {
  return (
    <div className="py-4 w-full px-3 text-center text-white rounded-lg" style={{ backgroundColor: "#814631", fontSize: "14px", fontWeight: "600" }}>
      {props.text}
    </div>
  );
}

export default CheckoutBtn;
