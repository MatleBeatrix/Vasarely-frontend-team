import React from 'react'



const PicturesCard = ({pic}) => {
  return (
  <div>
    <img src={pic.baseimageurl} alt={pic.renditionnumber} />
    {pic.date}
    {pic.technique}
    {pic.height}
    {pic.width}
  </div>
  )
}

export default PicturesCard