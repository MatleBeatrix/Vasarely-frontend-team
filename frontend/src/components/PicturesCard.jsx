import React from 'react'
import { useState } from "react";
import Popup from './Popup';
import Popup2 from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import noPicture from '../components/nopic.jpg'
import infoButton from '../components/info.png'
import Button from '@mui/material/Button';


const Colors = ({ pic }) => {
  if (pic.colors != null) {
    return (<div className='colors-box'>
      {pic.colors.map((c, index) => {
        return (
          <div key={index}>
            <Popup2 trigger={<div className="colors" style={{ backgroundColor: c.color }}> </div>} position="right center">
              <div>{c.color}</div>
            </Popup2>

          </div>
        )
      })}
    </div>)

  }
  else {
    return (<div>
      <p>no data</p>
    </div>)
  }
}



const PicturesCard = ({ pic, createMyCollection, setMyCollection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isInfo, setIsInfo] = useState(false);
  
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <div className='galleryImageBox' onClick={()=>{togglePopup(); setMyCollection(pic)}}>
        {(pic.primaryimageurl !== null && pic.primaryimageurl !== undefined) &&
          <input type="image" className="galleryImage" alt={pic.imageid} src={pic.primaryimageurl} />
        }
        {(pic.primaryimageurl === null) &&
          /*<input type="image" id="image" alt={pic.imageid} src={"https://harvardartmuseums.org/collections/object/356250"} onClick={togglePopup} />*/
          <input type="image" className="galleryImage" alt={pic.imageid} src={noPicture} />
        }
        {(pic.primaryimageurl === undefined) &&
          <input type="image" className="galleryImage" alt={pic.imageid} src={noPicture} />
        }
      </div>

      <div className='popup'>
        {isOpen && <Popup
          content={<>

            <div className='popupTop'>
              <div className='popupLeft'>
                {console.log(localStorage.getItem('sessionID'))}
                {localStorage.getItem('sessionID') &&
                  <Button variant="contained" color="error" onClick={() => {createMyCollection()}}>
                      + Add to My Collection
                  </Button>
                }

              {(pic.primaryimageurl !== null && pic.primaryimageurl !== undefined) &&
                <img className="popupImage" src={pic.primaryimageurl} alt={pic.imageid} />
              }
              {(pic.primaryimageurl === null || pic.primaryimageurl === undefined) &&
                <img className="popupImage" src={noPicture} alt={pic.imageid} />
              }

              </div>
              <div className='popupRight'>
                <h2>{pic.title}</h2>

                {(pic.people !== null && pic.people !== undefined) &&
                  <div className="popupDataBox">
                    <h3>Artist:</h3>
                    <div>
                      {pic.people.map((person, index) => <p key={index}>{person.name}</p>)}
                    </div>
                  </div>
                }
                {pic.century !== null &&
                  <div className="popupDataBox">
                    <h3>Century:</h3>
                    <p>{pic.century}</p>
                  </div>
                }
                {pic.culture !== null &&
                  <div className="popupDataBox">
                    <h3>Culture:</h3>
                    <p>{pic.culture}</p>
                  </div>
                }
                {pic.technique !== null &&
                  <div className="popupDataBox">
                    <h3>Technique:</h3>
                    <p>{pic.technique}</p>
                  </div>
                }

                {(pic.worktypes !== null && pic.worktypes !== undefined) &&
                  <div className="popupDataBox">
                    <h3>Worktypes:</h3>
                    <div>
                      {pic.worktypes.map(type => <p key={type.worktypeid}>{type.worktype}</p>)}
                    </div>
                  </div>
                }
                {(pic.colors !== null && pic.colors !== undefined) &&
                  <div className="popupDataBox">
                    <h3>Colors:</h3>
                    {<Colors pic={pic} />}
                  </div>
                }
                {(pic.description !== null ) &&
                  <div className='moreInfo' onClick={()=>setIsInfo(!isInfo)}>
                    <input type="image"  className="buttonInfo" alt={"info"} src={infoButton} />
                    <p>More Info</p>
                  </div>
                }
                {isInfo &&
                <div className='des'>
                  <h3>Description:</h3>
                  <hr></hr>
                  <p>{pic.description}</p>
                </div>
                }
    
              </div>
              <div>

              </div>


            </div>


          </>}
          handleClose={togglePopup}
        />}
      </div>
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