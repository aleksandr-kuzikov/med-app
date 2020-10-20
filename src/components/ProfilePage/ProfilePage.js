import React from 'react';
import { connect } from 'react-redux';

import HeaderProfile from '../HeaderProfile/HeaderProfile';
import ProfileCalendarPage from '../ProfileCalendarPage/ProfileCalendarPage';
import { ProfileMainPage } from '../ProfileMainPage/ProfileMainPage';

import './ProfilePage.scss';

const ProfilePage = ({match, user}) => {
  const subpage = match.params.subpage
  let component
  console.log(subpage)
  switch(subpage) {
    case 'calendar':
      component = <ProfileCalendarPage />
      break;
    default:
      component = <ProfileMainPage />
  }
  
  if (!user.isAutorizate)
    return <p>Вы не авторизованны</p>

  return (
    <div className='profilePage'>
      <div className="profilePage__header">
        <HeaderProfile />
      </div>
      <div className='profilePage__content'>
        {component}
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, null)(ProfilePage)