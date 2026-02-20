import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'
import logo from '../assets/logo.jpeg'

const Header = () => {
  const { user } = useAuth()
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
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
          
        </div>

        {/* Desktop Nav (UNCHANGED) */}
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

        {/* Desktop Buttons (UNCHANGED) */}
        <div className="hidden items-center gap-4 md:flex">
          {!user ? (
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
          ) : (
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

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-[#094b3d]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white px-6 py-4 space-y-4 text-sm font-medium text-gray-700 shadow-lg">

          <NavLink to="/" onClick={() => setMenuOpen(false)} className="block">
            Sell Online
          </NavLink>
          <NavLink to="/how-it-works" onClick={() => setMenuOpen(false)} className="block">
            How it works
          </NavLink>
          <NavLink to="/pricing" onClick={() => setMenuOpen(false)} className="block">
            Pricing & Commission
          </NavLink>
          <NavLink to="/shipping" onClick={() => setMenuOpen(false)} className="block">
            Shipping & Returns
          </NavLink>
          <NavLink to="/grow" onClick={() => setMenuOpen(false)} className="block">
            Grow Business
          </NavLink>

          <div className="pt-4 border-t border-gray-200 space-y-3">
            {!user ? (
              <>
                <button
                  onClick={() => {
                    navigate('/login')
                    setMenuOpen(false)
                  }}
                  className="w-full rounded-md border border-[#094b3d] py-2 text-[#094b3d]"
                >
                  Login
                </button>

                <button
                  onClick={() => {
                    navigate('/register')
                    setMenuOpen(false)
                  }}
                  className="w-full rounded-md bg-[#094b3d] py-2 text-white"
                >
                  Start Selling
                </button>
              </>
            ) : (
              <button
                onClick={() => {
                  navigate(user.role === 'admin' ? '/admin' : '/seller')
                  setMenuOpen(false)
                }}
                className="w-full rounded-md bg-[#094b3d] py-2 text-white"
              >
                Dashboard
              </button>
            )}
          </div>

        </div>
      )}
    </header>
  )
}

export default Header
