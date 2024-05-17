import {
  Homepage,
  Product,
  Supplier,
  Dashboard,
  Admin,
  VendorProfile,
  CheckOrder,
  CheckDetails,
  CheckComplete,
  Success,
  VendorDashProfile,
  PostJob,
  PostJobLast,
  MyAds,
  FavouriteAds,
  PlanBill,
  PricePlan,
  Message,
} from "./Pages";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { VendorDashTemplate } from "./Components";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/product" element={<Product />} />
          <Route path="/supplier" element={<Supplier />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/vendorprofile1" element={<VendorProfile />} />
          <Route path="/checkorder" element={<CheckOrder />} />
          <Route path="/checkdetails" element={<CheckDetails />} />
          <Route path="/checkcomplete" element={<CheckComplete />} />
          <Route path="/success" element={<Success />} />
          <Route path="/vendorprofile" element={<VendorDashProfile />} />
          <Route path="/postjob" element={<PostJob />} />
          <Route path="/postjoblast" element={<PostJobLast />} />
          <Route path="/myads" element={<MyAds />} />
          <Route path="/favouriteads" element={<FavouriteAds />} />
          <Route path="/planbill" element={<PlanBill />} />
          <Route path="/priceplan" element={<PricePlan />} />
          <Route path="/message" element={<Message />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
