import React, {useState, useEffect} from 'react'
import './Checkout.scss'
import { Loader } from '../../../components/Loader/Loader'

export const Checkout: React.FC = () => {
    const [loader, setLoader] = useState<boolean>(true)
    useEffect(()=>{
        setTimeout(()=>{
            setLoader(false)
        }, 4000)
    }, [])
    return (
        
        <div className='container__content'>
            {loader? 
                <Loader />
            :
                <section className='checkout'>
                    <h1 className='checkout__header'>Ваш заказ принят!</h1>
                    <p className='checkout__description'>В течении 5 минут с вами свяжется оператор для уточнения заказа</p>
                </section>
            }
        </div>
    )
}
