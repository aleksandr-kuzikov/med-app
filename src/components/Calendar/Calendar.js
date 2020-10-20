import React from 'react'
import classnames from 'classnames'

import * as tools from './calendarTools'

import { ReactComponent as Left } from '../../assets/img/left.svg';
import { ReactComponent as Right } from '../../assets/img/right.svg';

import './Calendar.scss'

export default class Calendar extends React.Component {
  static defaultProps = {
    date: new Date(),
    monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    weekDayNames: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
    onClickEventGroup: Function.prototype,
    selectedDate: null,
    events: []
  }
  constructor(props) {
    super(props)

    this.state = {
      date: this.props.date,
      currentDate: new Date(),
    }
  }

  get year() {
    return this.state.date.getFullYear()
  }

  get month() {
    return this.state.date.getMonth()
  }

  get day() {
    return this.state.date.getDate()
  }

  handlePrevMonthButtonClick = () => {
    const date = new Date(this.year, this.month - 1)

    this.setState({ date })
  }

  handleNextMonthButtonClick = () => {
    const date = new Date(this.year, this.month + 1)

    this.setState({ date })
  }

  handleClickEventGroup = (arr, date) => {
    if (date.getMonth() === this.month) 
      this.props.onClickEventGroup(arr, date)
  }

  render() {
    const { events, monthNames, weekDayNames, selectedDate } = this.props
    const { currentDate } = this.state

    const monthData = tools.getMonthData(this.year, this.month)

    return (
      <div className='calendar'>
        <header className='calendar__head'>
          <button className='calendar__button' onClick={this.handlePrevMonthButtonClick}><Left /></button>
          <span className='calendar__title' >{monthNames[this.month]}, {this.year}</span>
          <button className='calendar__button'  onClick={this.handleNextMonthButtonClick}><Right /></button>
        </header>

        <table className='calendar__main' cellSpacing='0'>
          <thead>
            <tr>
              {weekDayNames.map(name =>
                <th className='calendar__dayTitleCell' key={name}>{name}</th>
              )}
            </tr>
          </thead>

          <tbody>
            {monthData.map((week, index) =>
              <tr key={index} className="calendar__week">
                {week.map((date, index) => (
                  <td
                    key={index}
                    className={classnames('calendar__dayCell', {
                      'calendar__today': tools.areEqual(date.date, currentDate),
                      'calendar__selected': tools.areEqual(date.date, selectedDate),
                      'calendar__dayInThisMounth': date.monthStatus === 'this',
                      'calendar__dayInPrevMounth': date.monthStatus === 'prev',
                      'calendar__dayInNextMounth': date.monthStatus === 'next',
                    })}
                  >
                    <span className='calendar__dayNumber'>{date.date.getDate()}</span>
                    <div className='calendar__dayEvents'>
                      {
                        events.filter((item => tools.areEqual(item.date, date.date))).reduce((accum, item, index, arr) => (
                          <button className='calendar__eventButton' onClick={() => {this.handleClickEventGroup(arr, date.date)}} >{arr.length}</button>
                        ), '')  
                      }
                    </div>
                  </td>
                )
                )}
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}