import { NavLink, Outlet } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'

const navItems = [
  { to: '/admin', label: 'Dashboard Overview' },
  { to: '/admin/sellers', label: 'Manage Sellers' },
  { to: '/admin/orders', label: 'Orders' },
  { to: '/admin/all-orders', label: 'All Orders' },
]

const AdminLayout = () => {
  const { user, logout } = useAuth()

  return (
    <div className="flex min-h-screen bg-black text-gray-100">
      {/* Sidebar */}
      <aside className="flex w-64 flex-col border-r border-yellow-500/20 bg-zinc-950/90 px-4 py-6">
        <div className="mb-8">
          <h2 className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-xl font-semibold text-transparent">
            BlackCart Admin
          </h2>
          <p className="mt-1 text-xs text-gray-400">Control center</p>
        </div>

        <nav className="flex-1 space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/admin'}
              className={({ isActive }) =>
                [
                  'flex items-center rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                  isActive
                    ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-black shadow-lg'
                    : 'text-gray-300 hover:bg-zinc-900 hover:text-yellow-400',
                ].join(' ')
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="mt-6 border-t border-yellow-500/20 pt-4 text-xs text-gray-400">
          <div className="mb-2 flex items-center justify-between">
            <span>{user?.name ?? 'Admin'}</span>
            <span className="rounded-full bg-yellow-500/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-yellow-400">
              Admin
            </span>
          </div>
          <button
            onClick={logout}
            className="w-full rounded-lg border border-zinc-700 px-3 py-1.5 text-left text-xs text-gray-300 transition hover:border-yellow-500 hover:text-yellow-400"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 bg-gradient-to-br from-zinc-950 via-black to-zinc-900">
        <header className="flex items-center justify-between border-b border-yellow-500/20 px-8 py-4">
          <div>
            <h1 className="text-lg font-semibold text-white">Admin Dashboard</h1>
            <p className="text-xs text-gray-400">
              High level overview of sellers, orders and performance.
            </p>
          </div>
        </header>
        <main className="px-6 pb-10 pt-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default AdminLayout


