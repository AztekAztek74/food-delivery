import React from 'react'
import 'antd/dist/antd.css'
import './CarouselImg.scss'
import { Carousel } from 'antd'
import { Link } from 'react-router-dom'
import { TCarouselProps } from '../../constants/types/types'

export const CarouselImg: React.FC<{carouselItems: TCarouselProps}> = ({carouselItems}) =>{
    return(
        <section className='carousel'>
            <Carousel autoplay>
                {carouselItems.map((item: string) =>{
                    return(
                        <div key={item}>
                            <Link to={
                                item.includes('pizza')? '/food-delivery/food/pizza': 
                                item.includes('pasta')? '/food-delivery/food/pasta': 
                                '/food-delivery/food/soup'}
                            >
                                <img className='carousel__img' src={item} alt='carousel' />
                            </Link>
                        </div>
                    )
                })}
            </Carousel>
        </section>
        
    )
}
