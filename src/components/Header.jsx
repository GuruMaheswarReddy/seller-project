import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'
import logo from '../assets/Arshith_circle_logo.jpeg'

const Header = () => {
  const { user } = useAuth()
  const navigate = useNavigate()

  return (
    <header className="sticky top-0 z-30 border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <div
          className="flex cursor-pointer items-center gap-2"
          onClick={() => navigate('/')}
        >
          <img
            src={logo}
            alt="Arshith Fresh Logo"
            className="h-9 w-auto object-contain"
          />
          <span className="text-lg font-semibold text-[#094b3d]">
            ArshithFresh
          </span>
        </div>

        {/* Center Nav */}
        <nav className="hidden items-center gap-8 text-sm font-medium text-gray-700 md:flex">
          <NavLink to="/" className="hover:text-[#094b3d] transition">
            Sell Online
          </NavLink>
          <NavLink to="/how-it-works" className="hover:text-[#094b3d] transition">
            How it works
          </NavLink>
          <NavLink to="/pricing" className="hover:text-[#094b3d] transition">
            Pricing & Commission
          </NavLink>
          <NavLink to="/shipping" className="hover:text-[#094b3d] transition">
            Shipping & Returns
          </NavLink>
          <NavLink to="/grow" className="hover:text-[#094b3d] transition">
            Grow Business
          </NavLink>
        </nav>

        {/* Right Side Buttons */}
        <div className="flex items-center gap-4">
          {!user && (
            <>
              <button
                onClick={() => navigate('/login')}
                className="rounded-md border border-[#094b3d] px-5 py-2 text-sm font-medium text-[#094b3d] transition hover:bg-[#094b3d] hover:text-white"
              >
                Login
              </button>

              <button
                onClick={() => navigate('/register')}
                className="rounded-md bg-[#094b3d] px-5 py-2 text-sm font-medium text-white transition hover:bg-[#063c31]"
              >
                Start Selling
              </button>
            </>
          )}

          {user && (
            <button
              onClick={() =>
                navigate(user.role === 'admin' ? '/admin' : '/seller')
              }
              className="rounded-md bg-[#094b3d] px-5 py-2 text-sm font-medium text-white transition hover:bg-[#063c31]"
            >
              Dashboard
            </button>
          )}
        </div>

      </div>
    </header>
  )
}

export default Header


