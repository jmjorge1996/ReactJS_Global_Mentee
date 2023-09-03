import React from 'react'
import GenreItem from '../genreItem/GenreItem'

import './GenreList.scss'

const GenreList = ({items, itemSelected, onSelectCallback}) => {
  return (
    <div className='genre-list__container'>
      {items && items.map((item, index) => {
        return <GenreItem key={`genre-${index}`} name={item} isSelected={itemSelected == item} onSelectCallback={onSelectCallback}></GenreItem>
      })}
    </div>
  )
}

export default GenreList
