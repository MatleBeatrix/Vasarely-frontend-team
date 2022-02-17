import React from 'react'

const Colors = ({pic}) => {
  if (pic.colors != null){
    return (<div>
      {pic.colors.map((c, index) => {
      return <div style={{backgroundColor: c.color}} key={index}>{c.color}</div>;
    })}
    </div>)

  }
  else {
    return (<div>
      <p>no data</p>
    </div>)
  }
}

const PicturesCard = ({pic}) => {

  return (
  <div>
    <img src={pic.baseimageurl} alt={pic.imageid}/>
    <p>{pic.date}</p>
    <p>Description:</p>
    {pic.description === null && <p>no data</p>}
    {pic.description !== null && <p>{pic.description}</p>}
    <p>Technique:</p>
    {pic.technique === null && <p>no data</p>}
    {pic.technique !== null && <p>{pic.technique}</p>}
    <p>Colors:</p>
    {<Colors pic={pic}/>}
    {/* {pic.height}
    {pic.width} */}
  </div>
  )
}

export default PicturesCard