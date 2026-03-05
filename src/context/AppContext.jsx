import { createContext, useContext, useEffect, useMemo, useState } from 'react'

// LocalStorage keys – single source of truth for the mock "DB"
const STORAGE_KEYS = {
USERS: 'bc_users',
PRODUCTS: 'bc_products',
ORDERS: 'bc_orders',
}

// Utility functions for localStorage
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

// Initial system data (only admin)
const createInitialData = () => {
const adminUser = {
id: 'admin-1',
name: 'Super Admin',
email: '[admin@blackcart.com](mailto:admin@blackcart.com)',
phone: '+1 000 000 0000',
address: 'BlackCart HQ',
password: 'admin123',
role: 'admin',
}

return {
users: [adminUser],
products: [],
orders: [],
}
}

const AppContext = createContext(null)

export const AppProvider = ({ children }) => {

const [users, setUsers] = useState(() => {
const seeded = getStored(STORAGE_KEYS.USERS, null)
if (seeded && seeded.length) return seeded
const { users } = createInitialData()
setStored(STORAGE_KEYS.USERS, users)
return users
})

const [products, setProducts] = useState(() => {
const seeded = getStored(STORAGE_KEYS.PRODUCTS, null)
if (seeded && seeded.length) return seeded
const { products } = createInitialData()
setStored(STORAGE_KEYS.PRODUCTS, products)
return products
})

const [orders, setOrders] = useState(() => {
const seeded = getStored(STORAGE_KEYS.ORDERS, null)
if (seeded && seeded.length) return seeded
const { orders } = createInitialData()
setStored(STORAGE_KEYS.ORDERS, orders)
return orders
})

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
setUsers((prev) =>
prev.map((u) => (u.id === id ? { ...u, ...updates } : u))
)
}

const deleteSeller = (id) => {
setUsers((prev) => prev.filter((u) => u.id !== id))
}

// ---- Products ----

const createProduct = (payload) => {
const id = `product-${Date.now()}`
const newProduct = {
id,
...payload,
}
setProducts((prev) => [...prev, newProduct])
return newProduct
}

// ---- Orders ----

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

// Register new user
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

return (
<AppContext.Provider value={value}>
{children}
</AppContext.Provider>
)
}

export const useAppContext = () => {
const ctx = useContext(AppContext)
if (!ctx) {
throw new Error('useAppContext must be used within AppProvider')
}
return ctx
}
