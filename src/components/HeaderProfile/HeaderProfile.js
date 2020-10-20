import React from 'react';

import './HeaderProfile.scss'

import { ReactComponent as Bell } from '../../assets/img/subsc.svg';
import { ReactComponent as Search } from '../../assets/img/search.svg';
import { ReactComponent as Eye } from '../../assets/img/eye.svg';
import { ReactComponent as Drop } from '../../assets/img/drop.svg';
import { connect } from 'react-redux';
import classnames from 'classnames'


class HeaderProfile extends React.Component {

  constructor(props) {
    super(props)

    this.state = { dropdown: false }
  }
  dropDownHeandlerToggle = (e) => {
    e.preventDefault();
    
  }
  render() {
    return (
      <header className='headerProfile'>
        <h1 className="headerProfile__left">Мой профиль</h1>
        <div className="headerProfile__right">
          <button className='headerProfile__button'>
            <Search />
          </button>
          <button className='headerProfile__button'>
            <Bell />
          </button>
          <button className='headerProfile__button'>
            <Eye />
          </button>
          <div className="headerProfile__avatar">
            <img src={this.props.user.img} alt="" />
          </div>
          <div className="dropdownContainer">
            <button className='headerProfile__button headerProfile__button_drop' onClick={() => this.setState(state => ({ dropdown: !state.dropdown }))}>
              <Drop />
            </button>
            <div className={classnames('dropdownContainer__dropdown',{
              'dropdownContainer__dropdown_dropped': this.state.dropdown
            })}>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, null)(HeaderProfile) 