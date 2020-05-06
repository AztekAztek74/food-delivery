import React from 'react'
import './Contacts.scss'

export const Contacts: React.FC = () => {
    return (
        <div className='container__content'>
            <section className='contacts'>
                <div className='contacts__map-block'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d563.09987345429!2d37.8573667!3d55.629864!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414ab718a43690a5%3A0x21276edd5ff926c6!2z0YPQuy4g0JvQtdGA0LzQvtC90YLQvtCy0LAsIDE3LCDQlNC30LXRgNC20LjQvdGB0LrQuNC5LCDQnNC-0YHQutC-0LLRgdC60LDRjyDQvtCx0LsuLCAxNDAwOTA!5e0!3m2!1sru!2sru!4v1588694081603!5m2!1sru!2sru" title='123' ></iframe>
                </div>
                <div className='contacts__info-block'>
                    <p className='contacts__info-description'>Мы находимся: <span className='contacts__info-allocated'>г. Москва, ул. Лермонтова, д. 17</span></p>
                    <p className='contacts__info-description'>Наш телефон: <a className='contacts__info-allocated' href="tel:+79524601823">+7 (952) 460 18 23</a></p>
                </div>
            </section>
        </div>
    )
}
