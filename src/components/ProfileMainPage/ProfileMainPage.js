import React from 'react';

import { ElectronCard } from '../ElectronCard/ElectronCard';
import SheldueProfile from '../SheldueOnMain/SheldueOnMain';

export const ProfileMainPage = () => {
  return(
    <div>
      <h2 className='sectionTitle'>Записи на прием</h2>
      <SheldueProfile />
      <h2 className='sectionTitle'>Электронная карта</h2>
      <ElectronCard />
    </div>
  )
}