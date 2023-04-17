import React from 'react';
import ListItem from './ListItem/ListItem';
import './list.css'

const Listing = ({list}) => {
  return (
    <div className="list-wrap">
      {list.map((item)=><ListItem item={item}/>)}
    </div>
  )
}

export default Listing