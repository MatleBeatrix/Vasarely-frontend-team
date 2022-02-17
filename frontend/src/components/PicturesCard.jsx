import React from 'react'
import { useState } from "react";
import Popup from './Popup';
import Popup2 from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


const Colors = ({pic}) => {
  if (pic.colors != null){
    return (<div>
      {pic.colors.map((c, index) => {
                  return <Popup2 trigger={<div className="colors" style={{backgroundColor: c.color}} key={index}> </div>} position="right center">
                  <div>{c.color}</div>

                </Popup2>
    })}
    </div>)

  }
  else {
    return (<div>
      <p>no data</p>
    </div>)
  }
}

const PicturesCard = ({ pic }) => {

  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <input type="image" id="image" alt={pic.imageid}
        src={pic.baseimageurl} onClick={togglePopup} />

      {isOpen && <Popup
        content={<>
          <img src={pic.baseimageurl} alt={pic.imageid} />
          <div>
            <p>{pic.date}</p>
            <p>Description:</p>
            {pic.description === null && <p>no data</p>}
            {pic.description !== null && <p>{pic.description}</p>}
            <p>Technique:</p>
            {pic.technique === null && <p>no data</p>}
            {pic.technique !== null && <p>{pic.technique}</p>}
            <p>Colors:</p>
          </div>
            {<Colors pic={pic} />}
        </>}
        handleClose={togglePopup}
      />}

      {/* <img src={pic.baseimageurl} alt={pic.imageid}/> */}
      {/* <p>{pic.date}</p> */}
      {/* <p>Description:</p>
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