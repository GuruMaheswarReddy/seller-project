import { NavLink, useNavigate } from 'react-router-dom'
import ThemeToggle from './ThemeToggle.jsx'
import { useAuth } from '../context/AuthContext.jsx'
import logo from '../assets/Arshith_circle_logo.jpeg' 

const Header = () => {
  const { user } = useAuth()
  const navigate = useNavigate()

  const goToDashboard = () => {
    if (!user) return
    if (user.role === 'admin') navigate('/admin')
    if (user.role === 'seller') navigate('/seller')
  }

  return (
    <header className="sticky top-0 z-30 border-b border-gray-200 bg-white shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Logo */}
        <div
          className="flex cursor-pointer items-center gap-2"
          onClick={() => navigate('/')}
        >
          <img
  src={logo}
  alt="Arshith Fresh Logo"
  className="h-10 w-auto object-contain"
/>

          <div>
            <div className="bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-sm font-semibold uppercase tracking-[0.18em] text-transparent">
              ArshithFresh
            </div>
            <p className="text-[11px] text-gray-400">
              Empowering sellers. Managing commerce.
            </p>
          </div>
        </div>

        {/* Nav links */}
        <nav className="hidden items-center gap-6 text-sm text-gray-300 md:flex">
          <NavLink
            to="/"
            className={({ isActive }) =>
              [
                'transition hover:text-yellow-400',
                isActive ? 'text-yellow-400' : '',
              ].join(' ')
            }
          >
            Home
          </NavLink>
          {!user && (
            <>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  [
                    'transition hover:text-yellow-400',
                    isActive ? 'text-yellow-400' : '',
                  ].join(' ')
                }
              >
                Login
              </NavLink>
              <NavLink
                to="/register"
                className={({ isActive }) =>
                  [
                    'transition hover:text-yellow-400',
                    isActive ? 'text-yellow-400' : '',
                  ].join(' ')
                }
              >
                Register
              </NavLink>
            </>
          )}
          {user && (
            <button
              type="button"
              onClick={goToDashboard}
              className="rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 px-3 py-1 text-xs font-semibold text-black shadow-md shadow-yellow-500/40 transition hover:-translate-y-0.5"
            >
              Open {user.role === 'admin' ? 'Admin' : 'Seller'} Dashboard
            </button>
          )}
        </nav>

        {/* Right cluster */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}

export default Header


