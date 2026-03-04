import { createContext, useContext, useEffect, useMemo, useState } from "react"
import { useAppContext } from "./AppContext.jsx"

const CURRENT_USER_KEY = "bc_current_user"

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {

  const { users, registerUser } = useAppContext()

  const [user, setUser] = useState(() => {
    try {
      const raw = window.localStorage.getItem(CURRENT_USER_KEY)
      return raw ? JSON.parse(raw) : null
    } catch (e) {
      console.error("Failed to parse current user from storage", e)
      return null
    }
  })

  useEffect(() => {
    try {
      if (user) {
        window.localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user))
      } else {
        window.localStorage.removeItem(CURRENT_USER_KEY)
      }
    } catch (e) {
      console.error("Failed to persist current user", e)
    }
  }, [user])

  // LOGIN FUNCTION
  const login = async (email, password) => {

    // DEFAULT ADMIN LOGIN
    if (email === "admin@arshith.com" && password === "admin@123") {

      const adminUser = {
        id: "admin-1",
        name: "Admin",
        email: "admin123",
        role: "admin"
      }

      setUser(adminUser)

      return { success: true, user: adminUser }
    }

    // NORMAL USER LOGIN (SELLERS)
    const found = users.find(
      (u) =>
        u.email.toLowerCase() === email.toLowerCase() &&
        u.password === password
    )

    if (!found) {
      return { success: false, message: "Invalid credentials" }
    }

    setUser(found)

    return { success: true, user: found }
  }

  // LOGOUT
  const logout = () => {
    setUser(null)
  }

  // REGISTER SELLER
  const register = async (payload) => {

    const exists = users.some(
      (u) => u.email.toLowerCase() === payload.email.toLowerCase()
    )

    if (exists) {
      return { success: false, message: "Email is already registered" }
    }

    const created = registerUser({
      ...payload,
      role: "seller"
    })

    return { success: true, user: created }
  }

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
      register
    }),
    [user, users]
  )

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const ctx = useContext(AuthContext)

  if (!ctx) {
    throw new Error("useAuth must be used within AuthProvider")
  }

  return ctx
}
