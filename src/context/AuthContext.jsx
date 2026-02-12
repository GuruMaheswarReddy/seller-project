import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { useAppContext } from './AppContext.jsx'

const CURRENT_USER_KEY = 'bc_current_user'

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const { users, registerUser } = useAppContext()

  const [user, setUser] = useState(() => {
    try {
      const raw = window.localStorage.getItem(CURRENT_USER_KEY)
      return raw ? JSON.parse(raw) : null
    } catch (e) {
      console.error('Failed to parse current user from storage', e)
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
      console.error('Failed to persist current user', e)
    }
  }, [user])

  // Simple login with email + password against our in-memory + localStorage users
  const login = async (email, password) => {
    const found = users.find(
      (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password,
    )
    if (!found) {
      return { success: false, message: 'Invalid credentials' }
    }
    setUser(found)
    return { success: true, user: found }
  }

  const logout = () => {
    setUser(null)
  }

  // Registration delegates to AppContext so that global state & localStorage stay in sync
  const register = async (payload) => {
    const exists = users.some(
      (u) => u.email.toLowerCase() === payload.email.toLowerCase(),
    )
    if (exists) {
      return { success: false, message: 'Email is already registered' }
    }
    const created = registerUser(payload)
    return { success: true, user: created }
  }

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
      register,
    }),
    [user, users],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const ctx = useContext(AuthContext)
  if (!ctx) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return ctx
}


