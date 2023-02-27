import { useEffect } from 'react'
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'

const slideShow = (images: string[]): void => {
  let slideshowContainer = document.querySelector('.slideshow')

  for (let i = 0; i < images.length; i++) {
    let img = document.createElement('img')
    img.setAttribute('src', images[i])
    img.setAttribute('class', 'slideshow-element')

    img.style.display = 'none'
    slideshowContainer?.appendChild(img)
  }
}

const Slideshow = () => {
  const changeImage = (id: number = 0): void => {
    let elements = document.querySelectorAll<HTMLElement>('.slideshow-element')
    currentImage = currentImage + id

    for (let i = 0; i < elements.length; i++) {
      elements[i].style.display = 'none'
    }

    if (currentImage < 0) currentImage = elements.length - 1
    if (currentImage > elements.length - 1) currentImage = 0

    elements[currentImage].style.display = 'block'
  }

  const resetInterval = (id: number) => {
    clearInterval(id)
    return window.setInterval(() => changeImage(1), 5000)
  }

  let images = [
    'https://m.media-amazon.com/images/I/71tIrZqybrL._SX3000_.jpg',
    'https://m.media-amazon.com/images/I/61TD5JLGhIL._SX3000_.jpg',
    'https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg',
    'https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg',
    'https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg',
    'https://m.media-amazon.com/images/I/61BvxKSpy3L._SX3000_.jpg'
  ]
  let currentImage = 0
  useEffect(() => {
    slideShow(images)
    changeImage()
  })
  let intervalId: number = window.setInterval(() => changeImage(1), 5000)

  return (
    <div className='slideshow'>
      <div className='button-container'>
        <button
          className='left-button'
          onClick={() => {
            changeImage(-1)
            intervalId = resetInterval(intervalId)
          }}
        >
          <SlArrowLeft size={40} />
        </button>
        <button
          className='right-button'
          onClick={() => {
            changeImage(1)
            intervalId = resetInterval(intervalId)
          }}
        >
          <SlArrowRight size={40} />
        </button>
      </div>
    </div>
  )
}

export default Slideshow
