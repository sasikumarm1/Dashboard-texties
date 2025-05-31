import Advertisement from "./Components/Pages/Advertisement";
import { Route,Routes } from "react-router-dom";
import Dashboard from "./Components/Pages/Dashboard";
import DeliveryTracking from "./Components/Pages/DeliveryTracking";
import Expense from "./Components/Pages/Expense";
import Logout from "./Components/Pages/Logout";
import Orders from "./Components/Pages/Orders";
import Stocks from "./Components/Pages/Stocks";
import ReviewsRatings from "./Components/Pages/ReviewsRatings";
import UploadProducts from "./Components/Pages/UploadProducts"; // Uncomment if you have this component

function RoutesComponent() {
  return (
    
      
    <Routes>
      <Route path="/advertisement" element={<Advertisement />} />
      <Route path="/" element={<Dashboard />} />
      <Route path="/delivery-tracking" element={<DeliveryTracking />} />
      <Route path="/upload-products" element={<UploadProducts />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/stocks" element={<Stocks />} />
      <Route path="/expense" element={<Expense />} />
      <Route path="/reviews-ratings" element={<ReviewsRatings />} />
      <Route path="/logout" element={<Logout />} />
      
    </Routes>
    
  );
}

export default RoutesComponent;
