function Message() {
  return (
    <div className="flex items-center justify-between rounded-lg px-3 py-2 bg-white">
      <div className="flex items-center gap-2 justify-start">
        <h1
          className="h-10 w-10 rounded-full"
          style={{ backgroundColor: "#814631" }}
        ></h1>
        <h1 className="text-sm font-bold">Messaging</h1>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-chevron-down"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
        />
      </svg>
    </div>
  );
}

export default Message;
