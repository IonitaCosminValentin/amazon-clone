import { useEffect } from 'react'
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'
import { slideShow } from './miscFunctions'

const changeImage = (imgIndex: number, id: number): void => {
  clearInterval(2)
}

const Slideshow = () => {
  let images = [
    'https://m.media-amazon.com/images/I/71tIrZqybrL._SX3000_.jpg',
    'https://m.media-amazon.com/images/I/61TD5JLGhIL._SX3000_.jpg',
    'https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg',
    'https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg',
    'https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg'
  ]
  let imgIndex = 0

  useEffect(() => {
    slideShow(images)
  })

  return (
    <div className='slideshow'>
      <div className='button-container'>
        <button
          className='left-button'
          onClick={() => {
            changeImage(imgIndex, -1)
          }}
        >
          <SlArrowLeft size={40} />
        </button>
        <button
          className='right-button'
          onClick={() => {
            changeImage(imgIndex, 1)
          }}
        >
          <SlArrowRight size={40} />
        </button>
      </div>
    </div>
  )
}

export default Slideshow
