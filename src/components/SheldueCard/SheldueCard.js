import React from 'react';
import { connect } from 'react-redux';
import { cancelRecord, rewriteRecord } from '../../redux/actions';
import './SheldueCard.scss'

const WEEK_DAYS_NAMES_FROM_MONDAY = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']

class SheldueCard extends React.Component {
  constructor(props) {
    super(props)

    this.state = { showAlert: false }
  }
  
  dateToTitle = (date) => {
    const dayName = WEEK_DAYS_NAMES_FROM_MONDAY[date.getDay()]
    const day = ('0' + date.getDate()).slice(-2)
    const month = ('0' + (date.getMonth() + 1)).slice(-2)
    const year = ('0' + date.getFullYear()).slice(-2)
    const hour = ('0' + date.getHours()).slice(-2)
    const min = ('0' + date.getMinutes()).slice(-2)
    // return day
    return `${dayName} ${day}.${month}.${year} | ${hour}:${min}`
  }

  cancelHandler = (e) => {
    e.preventDefault()
    this.setState( state => ({ showAlert: true }))
  }
  alertNoHandler = (e) => {
    e.preventDefault()
    this.setState( state => ({ showAlert: false }))
  }
  alertYesHandler = (e, id) => {
    e.preventDefault()
    this.props.cancelRecord({id})
    this.setState( state => ({ showAlert: false }))
  }
  rewriteHandler = (e, id) => {
    e.preventDefault()
    this.props.rewriteRecord({id})
  }

  render() {
    const {card, className} = this.props
    return(
      <section className={`sheldueCard ${className ? className : ''}`}>
        
        { 
        this.state.showAlert && 
        <div className='sheldueCard__alert alert'>
          <p className='alert__text'>Вы действительно хотите отменить запись?</p>
          <div className='alert__buttons'>
            <button className='button button_outline alert__button' onClick={this.alertNoHandler} >Нет</button>
            <button className='button alert__button' onClick={e => this.alertYesHandler(e, card.id)} >Да</button>
          </div>
        </div> 
        }

        <header className='sheldueCard__header'>
          <h3 className='sheldueCard__title'>{this.dateToTitle(card.date)}</h3>
          <address className='sheldueCard__address'>{card.address}</address>
        </header>
        <footer className='sheldueCard__footer'>
          <div className='doctorInfo'>
            <div className="doctorInfo__img">
              <img src={card.doctor.img} alt="" />
            </div>
            <div className='doctorInfo__main'>
              <strong className='doctorInfo__name'>{card.doctor.name}</strong>
              <span className='doctorInfo__spec'>{card.doctor.spec}</span>
            </div>
          </div>
          {
            (card.status === 'active' &&
            <button className='button' onClick={this.cancelHandler}>Отменить</button>) 
            ||
            (card.status === 'cancel' && 
            <div className='sheldueCard__canceled'>
              <span className='sheldueCard__canceledText'>Отменено!</span>
              <button className='button button_outline' onClick={e => this.rewriteHandler(e, card.id)}>Вернуть</button>
            </div>)
          }
        </footer>
      </section>
    )
  }
}

const mapDispatchToProps = {
  cancelRecord,
  rewriteRecord
}

export default connect(null, mapDispatchToProps)(SheldueCard)