import React from 'react';
import './App.scss';
import { NavigationInfo } from '../../../components/NavigationInfo/NavigationInfo'
import { NavigationFood } from '../../../components/NavigationFood/NavigationFood'

export const App: React.FC  = ({children}) => {

  return (
    <div className='container'>
      <div className='container__navinfo'>
        <NavigationInfo />
      </div>
      <div className='container__navfood'>
        <NavigationFood />
      </div>
      {children}
    </div>
  )
}