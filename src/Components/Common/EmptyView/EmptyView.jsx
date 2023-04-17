import React from 'react';
import Empty from './empty.gif';
import './styles.css';

const EmptyView = () => {
  return (
    <div className="emptyView-wrap">
      <img src={Empty} alt="Empty View"/>
    </div>
  )
}

export default EmptyView