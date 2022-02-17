import React from 'react'



const PicturesCard = ({pic}) => {
  return (
  <div>
    <img src={pic.baseimageurl} alt={pic.imageid} />
    <p>{pic.date}</p>
    <p>{pic.technique}</p>
    {/* {pic.height}
    {pic.width} */}
  </div>
  )
}

export default PicturesCard