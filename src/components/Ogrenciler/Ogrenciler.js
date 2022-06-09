import React from 'react'
import OgrenciData from '../OgrenciData/OgrenciData'

const Ogrenciler = ({items}) => {
  return (
    <div>
        <OgrenciData
          name1={items[0].name}
          category1={items[0].category}
          difficulty1={items[0].difficulty}
          score1={items[0].score}
        />
        <OgrenciData
          name1={items[1].name}
          category1={items[1].category}
          difficulty1={items[1].difficulty}
          score1={items[1].score}
        ></OgrenciData>
        <OgrenciData
          name1={items[2].name}
          category1={items[2].category}
          difficulty1={items[2].difficulty}
          score1={items[2].score}
        />
        <OgrenciData
          name1={items[3].name}
          category1={items[3].category}
          difficulty1={items[3].difficulty}
          score1={items[3].score}
        />
        <OgrenciData
          name1={items[4].name}
          category1={items[4].category}
          difficulty1={items[4].difficulty}
          score1={items[4].score}
        />
        <OgrenciData
          name1={items[5].name}
          category1={items[5].category}
          difficulty1={items[5].difficulty} 
          score1={items[5].score}
        />
        <OgrenciData
          name1={items[6].name}
          category1={items[6].category}
          difficulty1={items[6].difficulty}
          score1={items[6].score}
        />
    </div>
  )
}

export default Ogrenciler