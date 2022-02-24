import React from 'react'
import { useState, useEffect } from "react";
import Popup from '../components/Popup';
import 'reactjs-popup/dist/index.css';
import noPicture from '../components/nopic.jpg'
import http from 'axios';
import './myCollection.css'
import MyCollectInfo from './MyCollectInfo';


const MyColPicturesCard = ({ collection, childToParentUpdate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [tag, setTag] = useState("");
  
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  const addTags = async (id) => {
		try {
		  const response = await http.post('http://localhost:4000/api/tags', { msg: tag, picId: id }, {
			headers: {
			  'Authorization': localStorage.getItem('sessionID')
			}
		  });
      setTag("");    
		}
		catch (error) {
		  if (error.response.status === 401) {
			alert('Your session has expired')
			localStorage.removeItem('sessionID')
		  }
		}
	}

  const deleteTag = async (picId, word) => {
		try {
		  const response = await http.delete(`http://localhost:4000/api/tag?tag=${word}&picId=${picId}`, {
			headers: {
			  'Authorization': localStorage.getItem('sessionID')
			}
		  });
		}
		catch (error) {
		  if (error.response.status === 401) {
			alert('Your session has expired')
			localStorage.removeItem('sessionID')
		  }
		}
	}

  const deleteImage = async (picId) => {
		try {
		  const response = await http.delete(`http://localhost:4000/api/todo?picId=${picId}`, {
			headers: {
			  'Authorization': localStorage.getItem('sessionID')
			}
		  });
		}
		catch (error) {
		  if (error.response.status === 401) {
			alert('Your session has expired')
			localStorage.removeItem('sessionID')
		  }
		}
	}


  
  
  let pic = JSON.parse(collection.picData);

  return (
    <div>
      <div className='galleryImageBox' onClick={()=>{togglePopup();}}>
        {(pic.primaryimageurl !== null && pic.primaryimageurl !== undefined) && <input type="image" className="galleryImage" alt={pic.imageid} src={pic.primaryimageurl} />}
        {(pic.primaryimageurl === null) && <input type="image" className="galleryImage" alt={pic.imageid} src={noPicture} />}
        {(pic.primaryimageurl === undefined) && <input type="image" className="galleryImage" alt={pic.imageid} src={noPicture} />}
      </div>

      <div className='popup'>
        {isOpen && <Popup
          content={<>

              <MyCollectInfo pic={pic}/>

              <div className='tagsList'>
              <input type="text"  onChange={e => setTag(e.target.value)}/>
              <button type="button" onClick={() => {
                if (tag !== ""){
                  addTags(collection.picId);
                  childToParentUpdate('update');

                }
              }}>Add tag</button>
              {collection.picTag.map((tag,index) => {
                return (
                <div className="tag" key={index}>
                  <p>{tag}</p>
                  <button onClick={() => { deleteTag(collection.picId, tag); childToParentUpdate('update');}}>X</button>
                </div>
                )
              })}
            </div>
              <button onClick={() => {deleteImage(collection.picId); childToParentUpdate('update');}}>Delete</button>

 

          </>}
          handleClose={togglePopup}
        />}
      </div>
    </div>
  )
}

export default MyColPicturesCard