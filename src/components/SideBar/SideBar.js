import React from 'react'
import { Link } from 'react-router-dom'

import { SideNav } from '../SideNav/SideNav'
import { ReactComponent as Help } from '../../assets/img/help.svg';
import { ReactComponent as Heart } from '../../assets/img/heart.svg';
import { ReactComponent as Stethoscope } from '../../assets/img/stethoscope.svg';
import { ReactComponent as Speak } from '../../assets/img/speak.svg';
import { ReactComponent as Test } from '../../assets/img/test.svg';
import { ReactComponent as Book } from '../../assets/img/book.svg';

import './SideBar.scss'

export const SideBar = () => {
  return (
    <div className='sideBar'>
      <header className='sideBar__head sideBar__gap'>
        <Link to='/'><img src="./img/logo.png" alt="" /></Link>
      </header>
      <div className="sideBar__main">
        <nav>
          <SideNav
            links={[
              {
                to: '/profile',
                icon: <Heart />,
                title: 'Профиль'
              },
              {
                to: '/doctors',
                icon: <Stethoscope />,
                title: 'Врачи и клиники'
              },
              {
                to: '/massege',
                icon: <Speak />,
                title: 'Сообщения'
              },
              {
                to: '/test',
                icon: <Test />,
                title: 'Тестирование'
              },
              {
                to: '/book',
                icon: <Book />,
                title: 'Полезно знать'
              },
            ]}
          />
        </nav>
        <div className='sideBar__gap'>
          <button className="button button_full">Подать заявку</button>
        </div>
      </div>
      <footer className='sideBar__footer'>
        <SideNav
          links={[
            {
              to: '/help',
              icon: <Help />,
              title: 'Помощь'
            }
          ]}
        />
        <div className='sideBar__gap'>
          <img src="./img/logo.png" alt="" className='sideBar__footerLogo' />
        </div>
      </footer>
    </div>
  )
}