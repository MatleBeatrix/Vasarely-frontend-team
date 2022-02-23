import React from 'react'
import { useState, useEffect } from "react";
import 'reactjs-popup/dist/index.css';
// import noPicture from '../../components/nopic.jpg'
import http from 'axios';
import MyColPicturesCard from '../MyColPicturesCard';
// import PicturesCard from '../PicturesCard';
import { useNavigate } from "react-router-dom";


const MyCollection = () => {
  const [myCollectionData, setMyCollectionData] = useState([])
  const navigate = useNavigate();

  const getImages = async () => {
    try {
      const res = await http.get('http://localhost:4000/api/todo', {
        headers: {
          'Authorization': localStorage.getItem('sessionID')
        }
      })
      //console.log(res.data.info.pages)
      console.log(res);
      setMyCollectionData(res.data)
      //console.log(res.data);
      // setTotalPages(res.data.info.pages)
      // setPageData(res.data.records)
    }
    catch (error) {
      // alert("No data")
      navigate("/mycollection");

    }
  }

  useEffect(() => {
    getImages()

  }, [])

  console.log(myCollectionData)

  return (
    <div>
      <h1>My Collection</h1>
      {myCollectionData.length < 1 &&
        <div>
          <h1>You don't have any saved photos</h1>
        </div>}
        
      <div
        id="pics">{myCollectionData.map(pic => <MyColPicturesCard key={pic.id} pic={pic} />)}
      </div>
        

    </div>
  )
}

export default MyCollection
