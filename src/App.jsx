import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Home from './components/sections/Home'
import About from './components/sections/About'
import Movies from './components/sections/Movies'
import Characters from './components/sections/Characters'
import Contact from './components/sections/Contact'
import Footer from './components/Footer'
import Cursor from './components/Cursor'
import MagicClick from './components/MagicClick'
import PreLoader from './components/PreLoader'
import AudioManager from './components/AudioManager'
import ClickSound from './components/ClickSound'
import TypingSound from './components/TypingSound'
import AuthButtons from './components/AuthButtons'
import { BrowserRouter } from 'react-router-dom'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  return (
    <BrowserRouter>
      <div className="app">
        <ClickSound />
        <TypingSound />
        <AudioManager />
        <AuthButtons />
        {isLoading ? (
          <PreLoader onLoadingComplete={handleLoadingComplete} />
        ) : (
          <>
            <Header />
            <Cursor />
            <MagicClick />
            <main>
              <Home />
              <About />
              <Movies />
              <Characters />
              <Contact />
            </main>
            <Footer />
          </>
        )}
      </div>
    </BrowserRouter>
  )
}

export default App
