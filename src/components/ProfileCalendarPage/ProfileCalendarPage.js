import React from 'react';
import { connect } from 'react-redux'

import Calendar from '../Calendar/Calendar'
import SheldueCard from '../SheldueCard/SheldueCard'
import { ScrollableBlock } from '../ScrollableBlock/ScrollableBlock';

import './ProfileCalendarPage.scss'


import { ReactComponent as Arrow } from '../../assets/img/arrow.svg';

import { areEqual } from '../Calendar/calendarTools';
import { Link } from 'react-router-dom';

class ProfileCalendarPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showAll: false,
      selectedDate: null
    }
  }

  eventGroupClick = (events, date) => {
    this.setState(state => ({ ...state, showAll: true, selectedDate: date }))
  }

  showAllHandler = (e) => {
    e.preventDefault()

    this.setState(state => ({ ...state, selectedDate: null, showAll: false }))
  }

  render() {
    const { sheldue } = this.props
    const { showAll, selectedDate } = this.state

    const events = sheldue.filter(item => item.status === 'active').map(item => ({
      date: item.date,
      id: item.index
    }
    ))

    if (sheldue.length === 0)
      return <p className='sheldueNoFound'>У вас нет записей <button className='button'>Записаться</button></p>

    return (
      <div>
        <h2 className='sectionTitle'><Link className='backArrow' to='/profile'><Arrow /></Link>Мои записи</h2>
        <div className="calendarPage">
          <div className="calendarPage__scroll">
            {showAll &&
              <Link className='calendarPage__showAll' onClick={this.showAllHandler}>Показать все записи</Link>
            }
            <ScrollableBlock>
              {sheldue.filter(item => areEqual(new Date(item.date), selectedDate) || !showAll).map((card) => <SheldueCard className='calendarPage__card' key={card.id} card={card} />)}
            </ScrollableBlock>
          </div>
          <div className="calendarPage__calendar">
            <Calendar selectedDate={selectedDate} events={events} onClickEventGroup={this.eventGroupClick} />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    sheldue: state.sheldue.list
  }
}

export default connect(mapStateToProps, null)(ProfileCalendarPage)