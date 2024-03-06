import React from 'react'
import './Suggestions.css'
import { Avatar } from '@mui/material'


const Suggestions = ({}) => {
  return (
    <div className='suggestion'>
    <div className="change__acc">
        <div className="change__left">
          <span className="avatar">
            <Avatar>R</Avatar>
          </span>
          <div className="change__info">
            <span className="username">redian_</span>
            <span className="status">Live a life</span>
          </div>
        </div>
        <button className='change__button'>Переключиться</button>
      </div>
    <div className='suggestions'>
      <div className="suggestions__title">Рекомендации для вас</div>
      <div className="suggestions__username">
        <div className="username__left">
          <span className="avatar">
            <Avatar>R</Avatar>
          </span>
          <div className="username__info">
            <span className="username">redian_</span>
            <span className="relation">Рекомендации для вас</span>
          </div>
        </div>
        <button className='follow__button'>Подписаться</button>
      </div>
    </div>
    </div>
  )
}

export default Suggestions