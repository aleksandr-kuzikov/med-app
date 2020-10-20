import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchSheldue } from '../../redux/actions'
import { Loader } from '../Loader/Loader'
import SheldueCard from '../SheldueCard/SheldueCard'

import './SheldueOnMain.scss'

class SheldueProfile extends React.Component {
  constructor(props) {
    super(props)
    this.state = { forSlice: window.innerWidth >= 1800 ? 3 : 2 };
  }
  updateSlice = () => {
    const forSlice = window.innerWidth >= 1800 ? 3 : 2
    this.setState({ forSlice:forSlice })
  }
  componentDidMount() {
    if (!this.props.updated)
      this.props.fetchSheldue()
    window.addEventListener('resize', this.updateSlice)
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateSlice);
  }

  render() {
    const {sheldue, updated} = this.props
    const {forSlice} = this.state

    if (!updated && sheldue.length === 0) {
      return <div className='sheldueNoFound'><Loader /></div>
    }
    else if (sheldue.length === 0)
      return <p className='sheldueNoFound'>При обновлении страницы загружается случайное количество записей 0/3/6</p>
    
    return (
      <section className='sheldueProfile'>
        { sheldue.slice(0, forSlice).map((card, item) => <div className='sheldueProfile__itemWrap' key={card.id}><SheldueCard className='sheldueProfile__item' card={card} /></div>)}
        {((sheldue.length - forSlice) > 0 &&
        <div className='sheldueProfile__toSheldue'>
          <strong>Еще {sheldue.length - forSlice} записи</strong>
          <Link to='/profile/calendar'>Подробнее</Link>
        </div>)
        ||
        (<div className='sheldueProfile__toSheldue'>
          <Link to='/profile/calendar'>Календарь ({sheldue.length})</Link>
        </div>)}
      </section>
    )
  }
}

const mapStateToProps = state => {
  return {
    sheldue: state.sheldue.list,
    updated: state.sheldue.updated
  }
}
const mapDispatchToProps = {
  fetchSheldue
}

export default connect(mapStateToProps, mapDispatchToProps)(SheldueProfile) 