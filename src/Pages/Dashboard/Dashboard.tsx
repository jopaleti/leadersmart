import { plus } from "../../assets";
import { ProductShoe, VendorDashboardTemplate } from "../../Components";
import "./Dashboard.scss";
function Dashboard() {
  var itemLists: JSX.Element[] = [];
  for (var i = 0; i < 10; i++) {
    itemLists.push(<ProductShoe />);
  }
  return (
    <VendorDashboardTemplate isTop={false}>
      <div className="px-3 py-5 rounded-lg shadow-lg">
        <h1 className="text-lg mb-8">
          Mike’s Products - <span style={{ color: "#808080" }}>15</span>
        </h1>
        <div className="flex flex-ro items-stretch justify-start gap-4 flex-wrap shrink-0">
          {itemLists.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
          <button className="rounded-lg overflow-hidden">
            <img src={plus} alt="img.png" className="__plus-img h-full w-full" />
          </button>
        </div>
      </div>
    </VendorDashboardTemplate>
  );
}

export default Dashboard;
