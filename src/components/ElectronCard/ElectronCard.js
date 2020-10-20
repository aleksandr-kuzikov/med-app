import React from 'react';

import { SectionLink } from '../SectionLink/SectionLink';

import './ElectronCard.scss';
import { ReactComponent as PatientInfo } from '../../assets/img/patient_info.svg';
import { ReactComponent as History } from '../../assets/img/history.svg';
import { ReactComponent as Doc } from '../../assets/img/doc.svg';
import { ReactComponent as Colb } from '../../assets/img/colb.svg';

export const ElectronCard = () => {
  return (
    <nav className='electronCard'>
      <SectionLink
        to='/profile/info'
        title='Информация о пациенте'
        text={
          <ul className='customDots'>
            <li>Ваши личные данные</li>
            <li>Рекомендации врачей</li>
            <li>История болезней</li>
          </ul>}
        Icon={PatientInfo}
      />
      <SectionLink
        to='/profile/results'
        title='Результыты анализов'
        text={<p>Вы можете узнать здесь результаты своих анализов</p>}
        Icon={Colb}
      />
      <SectionLink
        to='/profile/add'
        title='Добавить информацию'
        text={<p>Добавляйте в свою электронную медицинскую карту новые данные</p>}
        Icon={Doc}
      />
      <SectionLink
        to='/profile/history'
        title='История приемов'
        text={<p>Вся информация о полученных услугах за все время хранится здесь</p>}
        Icon={History}
      />
    </nav>
  )
}