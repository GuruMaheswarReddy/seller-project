import { NavLink, Outlet } from "react-router-dom"
import { useAuth } from "../context/AuthContext.jsx"

const PRIMARY = "#094b3d"

const navItems = [
  { to: "/seller", label: "Dashboard Overview" },
  { to: "/seller/orders", label: "Orders" },
  { to: "/seller/add-product", label: "Add Product" },
]

const SellerLayout = () => {
  const { user, logout } = useAuth()

  return (
    <div className="flex min-h-screen bg-[#eef5f3]">

      {/* Sidebar */}
      <aside className="flex w-64 flex-col px-6 py-8 text-white"
        style={{ backgroundColor: PRIMARY }}
      >
        <div className="mb-10">
          <h2 className="text-xl font-bold">
            Seller Console
          </h2>
          <p className="mt-1 text-xs text-white/70">
            Manage products & orders
          </p>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/seller"}
              className={({ isActive }) =>
                [
                  "block rounded-lg px-4 py-2 text-sm font-medium transition",
                  isActive
                    ? "bg-white text-[#094b3d] shadow-md"
                    : "text-white/80 hover:bg-white/10",
                ].join(" ")
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* User Info */}
        <div className="mt-8 border-t border-white/20 pt-4 text-sm">
          <div className="mb-3">
            <p className="font-medium truncate">{user?.name ?? "Seller"}</p>
            <span className="text-xs text-white/60">Seller Account</span>
          </div>

          <button
            onClick={logout}
            className="w-full rounded-lg bg-white text-[#094b3d] py-2 font-semibold transition hover:opacity-90"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1">

        {/* Header */}
        <header className="bg-white shadow-sm px-8 py-5 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-gray-800">
              Seller Dashboard
            </h1>
            <p className="text-sm text-gray-500">
              Track your catalog, orders and revenue.
            </p>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-8">
          <Outlet />
        </main>
      </div>

    </div>
  )
}

export default SellerLayout
