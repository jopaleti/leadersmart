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
  CategoryList,
  ChatPage,
  ProductView
} from "./Pages";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContextProvider from "./Context";
// import { VendorDashTemplate } from "./Components";
function App() {
  return (
    <ContextProvider>
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
            <Route path="/category" element={<CategoryList />} />
            <Route path="/chat" element={<ChatPage />} />
            <Route path="/productview" element={<ProductView />} />
          </Routes>
        </BrowserRouter>
      </>
    </ContextProvider>
  );
}

export default App;
