import React from 'react';

import './ScrollableBlock.scss';

export const ScrollableBlock = ({children}) => {
  return(
    <div className='scrollableBlock'>
      <div className="scrollableBlock__content">
        {children}
      </div>
    </div>
  )
}