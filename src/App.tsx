import './App.scss'
import Body from './components/Body'
import NavBar from './components/NavBar'
import Slideshow from './components/Slideshow'
import Footer from './components/Footer'

function App () {
  return (
    <div className='App'>
      <NavBar />
      <Slideshow />
      <Body />
      <Footer />
    </div>
  )
}

export default App
