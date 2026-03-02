import { Outlet } from 'react-router-dom'
import Header from '../components/Header.jsx'
import Footer from "../components/Footer.jsx"

const MainLayout = () => {
  return (
    <div className="min-h-screen text-gray-900 flex flex-col">
      <Header />

      <main className="w-full flex-grow">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export default MainLayout
