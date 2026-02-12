import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'

// Generic protected route wrapper for role-based access control.
// Usage:
// <ProtectedRoute allowedRoles={['admin']}><AdminLayout /></ProtectedRoute>
const ProtectedRoute = ({ children, allowedRoles }) => {
  const { user } = useAuth()

  if (!user) {
    return <Navigate to="/login" replace />
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    if (user.role === 'admin') return <Navigate to="/admin" replace />
    if (user.role === 'seller') return <Navigate to="/seller" replace />
    return <Navigate to="/" replace />
  }

  return children
}

export default ProtectedRoute


