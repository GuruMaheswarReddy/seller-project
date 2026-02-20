import { Outlet } from 'react-router-dom'
import Header from '../components/Header.jsx'

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-primary-900 text-gray-100">
      <Header />
      
        
          <main className="w-full pb-12 pt-6 lg:pt-10">
        <Outlet />
      </main>
    </div>
  )
}

export default MainLayout


