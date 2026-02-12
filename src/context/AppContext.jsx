import { createContext, useContext, useEffect, useMemo, useState } from 'react'

// LocalStorage keys – single source of truth for the mock "DB"
const STORAGE_KEYS = {
  USERS: 'bc_users',
  PRODUCTS: 'bc_products',
  ORDERS: 'bc_orders',
}

// Create a lightweight utility to safely read/write JSON from localStorage
const getStored = (key, fallback) => {
  try {
    const raw = window.localStorage.getItem(key)
    return raw ? JSON.parse(raw) : fallback
  } catch (e) {
    console.error('Failed to read from localStorage', key, e)
    return fallback
  }
}

const setStored = (key, value) => {
  try {
    window.localStorage.setItem(key, JSON.stringify(value))
  } catch (e) {
    console.error('Failed to write to localStorage', key, e)
  }
}

// Seed initial dummy data so the app feels alive on first load
const createInitialData = () => {
  const adminUser = {
    id: 'admin-1',
    name: 'Super Admin',
    email: 'admin@blackcart.com',
    phone: '+1 000 000 0000',
    address: 'BlackCart HQ',
    password: 'admin123',
    role: 'admin',
  }

  const sellerUser = {
    id: 'seller-1',
    name: 'Prime Seller',
    email: 'seller@blackcart.com',
    phone: '+1 111 111 1111',
    address: 'Seller Street, Commerce City',
    password: 'seller123',
    role: 'seller',
  }

  const products = [
    {
      id: 'p-1',
      name: 'AI Commerce Suite',
      price: 199,
      description: 'End-to-end automation for modern D2C brands.',
      imageUrl:
        'https://images.pexels.com/photos/1181465/pexels-photo-1181465.jpeg?auto=compress&cs=tinysrgb&w=800',
      sellerId: sellerUser.id,
    },
    {
      id: 'p-2',
      name: 'Realtime Analytics Cloud',
      price: 149,
      description: 'Streaming insights for every transaction in your store.',
      imageUrl:
        'https://images.pexels.com/photos/2706379/pexels-photo-2706379.jpeg?auto=compress&cs=tinysrgb&w=800',
      sellerId: sellerUser.id,
    },
    {
      id: 'p-3',
      name: 'Inventory Sync Engine',
      price: 99,
      description: 'Multi-channel inventory syncing built for speed.',
      imageUrl:
        'https://images.pexels.com/photos/3730760/pexels-photo-3730760.jpeg?auto=compress&cs=tinysrgb&w=800',
      sellerId: sellerUser.id,
    },
    {
      id: 'p-4',
      name: 'Checkout Optimization Toolkit',
      price: 129,
      description: 'Boost conversion with A/B tested checkout flows.',
      imageUrl:
        'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
      sellerId: sellerUser.id,
    },
  ]

  const now = new Date()
  const orders = [
    {
      id: 'o-1',
      sellerId: sellerUser.id,
      productId: 'p-1',
      productName: 'AI Commerce Suite',
      price: 199,
      createdAt: now.toISOString(),
      createdByRole: 'seller',
    },
    {
      id: 'o-2',
      sellerId: sellerUser.id,
      productId: 'p-2',
      productName: 'Realtime Analytics Cloud',
      price: 149,
      createdAt: new Date(
        now.getTime() - 3 * 24 * 60 * 60 * 1000,
      ).toISOString(),
      createdByRole: 'seller',
    },
    {
      id: 'o-3',
      sellerId: sellerUser.id,
      productId: 'p-3',
      productName: 'Inventory Sync Engine',
      price: 99,
      createdAt: new Date(
        now.getTime() - 6 * 24 * 60 * 60 * 1000,
      ).toISOString(),
      createdByRole: 'seller',
    },
  ]

  return {
    users: [adminUser, sellerUser],
    products,
    orders,
  }
}

const AppContext = createContext(null)

export const AppProvider = ({ children }) => {
  // Lazily hydrate initial state from localStorage or from our dummy seed
  const [users, setUsers] = useState(() => {
    const seeded = getStored(STORAGE_KEYS.USERS, null)
    if (seeded && seeded.length) return seeded
    const { users: initialUsers } = createInitialData()
    setStored(STORAGE_KEYS.USERS, initialUsers)
    return initialUsers
  })

  const [products, setProducts] = useState(() => {
    const seeded = getStored(STORAGE_KEYS.PRODUCTS, null)
    if (seeded && seeded.length) return seeded
    const { products: initialProducts } = createInitialData()
    setStored(STORAGE_KEYS.PRODUCTS, initialProducts)
    return initialProducts
  })

  const [orders, setOrders] = useState(() => {
    const seeded = getStored(STORAGE_KEYS.ORDERS, null)
    if (seeded && seeded.length) return seeded
    const { orders: initialOrders } = createInitialData()
    setStored(STORAGE_KEYS.ORDERS, initialOrders)
    return initialOrders
  })

  // Persist to localStorage whenever core collections change
  useEffect(() => {
    setStored(STORAGE_KEYS.USERS, users)
  }, [users])

  useEffect(() => {
    setStored(STORAGE_KEYS.PRODUCTS, products)
  }, [products])

  useEffect(() => {
    setStored(STORAGE_KEYS.ORDERS, orders)
  }, [orders])

  // ---- Seller CRUD ----

  const createSeller = (payload) => {
    const id = `seller-${Date.now()}`
    const newSeller = {
      id,
      role: 'seller',
      ...payload,
    }
    setUsers((prev) => [...prev, newSeller])
    return newSeller
  }

  const updateSeller = (id, updates) => {
    setUsers((prev) => prev.map((u) => (u.id === id ? { ...u, ...updates } : u)))
  }

  const deleteSeller = (id) => {
    setUsers((prev) => prev.filter((u) => u.id !== id))
    // Optional: cascade delete or mark related products/orders if needed
  }

  // ---- Products & Orders ----

  const createProduct = (payload) => {
    const id = `product-${Date.now()}`
    const newProduct = {
      id,
      ...payload,
    }
    setProducts((prev) => [...prev, newProduct])
    return newProduct
  }

  const createOrder = (payload) => {
    const id = `order-${Date.now()}`
    const newOrder = {
      id,
      createdAt: new Date().toISOString(),
      ...payload,
    }
    setOrders((prev) => [...prev, newOrder])
    return newOrder
  }

  // Small helper for AuthContext to register any user (admin or seller)
  const registerUser = (payload) => {
    const id = `${payload.role}-${Date.now()}`
    const newUser = {
      id,
      ...payload,
    }
    setUsers((prev) => [...prev, newUser])
    return newUser
  }

  const value = useMemo(
    () => ({
      users,
      products,
      orders,
      createSeller,
      updateSeller,
      deleteSeller,
      createProduct,
      createOrder,
      registerUser,
    }),
    [users, products, orders],
  )

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export const useAppContext = () => {
  const ctx = useContext(AppContext)
  if (!ctx) {
    throw new Error('useAppContext must be used within AppProvider')
  }
  return ctx
}


