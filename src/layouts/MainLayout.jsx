import { Outlet } from 'react-router-dom'
import Header from '../components/Header.jsx'

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-zinc-900 text-gray-100">
      <Header />
      <main className="mx-auto max-w-6xl px-4 pb-12 pt-6 lg:pt-10">
        <Outlet />
      </main>
    </div>
  )
}

export default MainLayout


