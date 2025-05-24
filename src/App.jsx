import Home from "./pages/Home";
import { FaBeer } from "react-icons/fa";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLayout from "./components/Layout/UserLayout";
import { Toaster } from "sonner";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import CollectionPage from "./pages/CollectionPage";
import ProductDetails from "./components/Products/ProductDetails";
import Checkout from "./components/Cart/Checkout";
import OrderConfirmationPage from "./pages/OrderConfirmationPage";
import OrderDetailsPage from "./pages/OrderDetailsPage";
import MyOrderPage from "./pages/MyOrderPage";
import AdminLayout from "./components/Admin/AdminLayout";
import AdminHomePage from "./pages/AdminHomePage";
import UserManagement from "./components/Admin/UserManagement";
import AdminProductManagement from "./components/Admin/AdminProductManagement";
import AdminProductDescription from "./components/Admin/AdminProductDescription";
import OrderManagement from "./components/Admin/OrderManagement";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Toaster position="top-right" richColors />
        <Routes>
          <Route path="/" element={<UserLayout />}>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Signup />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/collection/:id" element={<CollectionPage />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route
              path="/order-confirmation"
              element={<OrderConfirmationPage />}
            />
            <Route path="/order/:id" element={<OrderDetailsPage />} />
          </Route>

          <Route path="/my-orders" element={<MyOrderPage />}></Route>

          <Route path="/admin" element={<AdminLayout />}>
            <Route index  element={<AdminHomePage />} />
            <Route path="/admin/users" element={<UserManagement />} />
            <Route
              path="/admin/products"
              element={<AdminProductManagement />}
            />
            <Route path="/admin/products/:id/edit" element={<AdminProductDescription/>} />
            
            <Route path="/admin/orders" element={<OrderManagement />} />



          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
