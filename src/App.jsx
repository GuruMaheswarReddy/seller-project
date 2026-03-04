import './App.css'
import AppRouter from './routes/AppRouter.jsx'

function App() {

  return (
    <>
      <AppRouter />

      {/* WhatsApp Floating Button */}
      <a
        href="https://api.whatsapp.com/send/?phone=919945676029&text=Hi%20Arshith%20Fresh,%20I%27m%20interested%20in%20your%20products!"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
          alt="WhatsApp"
          className="w-14 h-14 hover:scale-110 transition"
        />
      </a>

    </>
  )
}

export default App
