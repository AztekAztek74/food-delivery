import React from 'react'
import { CarouselImg } from '../../../components/CarouselImg/CarouselImg'

//images
import imgPizza from '../../../img/carousel-photo/pizza.jpg'
import imgPasta from '../../../img/carousel-photo/pasta.jpg'
import imgSoup from '../../../img/carousel-photo/soup.jpg'

export const Home: React.FC  = () => {
  return (
    <div className='main'>
      <div className='main__container-carousel'>
        <CarouselImg carouselItems={[imgPizza, imgPasta, imgSoup]} />
      </div>
    </div>
  )
}
