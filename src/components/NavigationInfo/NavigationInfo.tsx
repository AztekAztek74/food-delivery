import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './NavigationInfo.scss'
import { ShoppingCartOutlined } from '@ant-design/icons'
import { Badge } from 'antd'
import 'antd/dist/antd.css'
import logo from '../../img/logo/logoNavigationInfo.png'
import { BasketContext } from '../../context/basket/BasketContext'

export const NavigationInfo: React.FC = () =>{
    const { shoppingList } = useContext<any>(BasketContext)
    const [badge, setBadge] = useState<number>(0)

    useEffect(()=>{
        const badgeResult = () =>{
            if (shoppingList.length===0){
                setBadge(0)
            }
            else {
                let count: number = 0
                let position: number = 0
                while (true){
                    let foundPosition: number = shoppingList.indexOf('id', position)
                    if (foundPosition === -1) break
                    count += 1
                    position = foundPosition+1
                }
                setBadge(count)
            }
        }
        badgeResult()
    }, [shoppingList])

    return(
        <nav className='navigation-info'>
            <div className='navigation-info__links-block'>
                <Link to='/food-delivery'>Главная</Link>
                <Link to='/food-delivery/contacts'>Контакты</Link>
            </div>
            <div className='navigation-info__information-container'>
                <div className='navigation-info__information-block'>
                    <h1 className='navigation-info__work-hours'>Работаем: с 11:00 - 00:00</h1>
                    <address className='navigation-info__address'>
                        <a rel='noopener noreferrer' href='https://goo.gl/maps/HNy6vS7g8U9iA3Cx5' target='_blank'>
                            г. Москва, ул. Лермонтова, д. 17
                        </a>
                    </address>
                </div>
                <div className='navigation-info__logo-block'>
                    <img src={logo} alt='logo' />
                </div>
                <div className='navigation-info__basket'>
                    <Badge count={badge>0? badge: ' '}>
                        <Link to='/food-delivery/basket'>
                            <ShoppingCartOutlined />
                        </Link>
                    </Badge>
                </div>
            </div>
        </nav>
    )
}