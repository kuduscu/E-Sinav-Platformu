import React from 'react'

const OgrenciData = ({name1, score1, category1, difficulty1} ) => {
  return (
    <div>
      <li>{name1} isimli öğrenci {category1} dersinin {difficulty1} sınavından {score1} puan almıştır.</li>
    </div>
  )
}

export default OgrenciData;