import './App.scss'
import './components/ScreenSizes/Big.scss'
import './components/ScreenSizes/Medium.scss'
import './components/ScreenSizes/Small.scss'
import Body from './components/Body'
import NavBar from './components/NavBar'
import Slideshow from './components/Slideshow'
import Footer from './components/Footer'
import FooterMobile from './components/FooterMobile'

function App () {
  return (
    <div className='App'>
      <NavBar />
      <Slideshow />
      <Body />
      <Footer />
      <FooterMobile />
    </div>
  )
}

export default App
