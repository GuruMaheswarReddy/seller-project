import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout.jsx'
import AdminLayout from '../layouts/AdminLayout.jsx'
import SellerLayout from '../layouts/SellerLayout.jsx'
import Home from '../pages/home/Home.jsx'
import Login from '../pages/auth/Login.jsx'
import Register from '../pages/auth/Register.jsx'
import AdminDashboard from '../pages/admin/AdminDashboard.jsx'
import ManageSellers from '../pages/admin/ManageSellers.jsx'
import AdminOrders from '../pages/admin/AdminOrders.jsx'
import AdminAllOrders from '../pages/admin/AdminAllOrders.jsx'
import SellerDashboard from '../pages/seller/SellerDashboard.jsx'
import SellerOrders from '../pages/seller/SellerOrders.jsx'
import AddProduct from '../pages/seller/AddProduct.jsx'
import ProtectedRoute from './ProtectedRoute.jsx'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public marketing shell */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        {/* Admin area */}
        <Route
          path="/admin/*"
          element={
            <ProtectedRoute allowedRoles={['admin']}>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<AdminDashboard />} />
          <Route path="sellers" element={<ManageSellers />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="all-orders" element={<AdminAllOrders />} />
        </Route>

        {/* Seller area */}
        <Route
          path="/seller/*"
          element={
            <ProtectedRoute allowedRoles={['seller']}>
              <SellerLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<SellerDashboard />} />
          <Route path="orders" element={<SellerOrders />} />
          <Route path="add-product" element={<AddProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter


