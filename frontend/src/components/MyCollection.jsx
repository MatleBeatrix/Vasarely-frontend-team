import React from 'react'
import { useState, useEffect } from "react";
import 'reactjs-popup/dist/index.css';
// import noPicture from '../../components/nopic.jpg'
import http from 'axios';
import MyColPicturesCard from './MyColPicturesCard';
// import PicturesCard from '../PicturesCard';
import { useNavigate } from "react-router-dom";





const MyCollection = () => {
  const [myCollectionData, setMyCollectionData] = useState([])
  const navigate = useNavigate();
  const [tagList, setTagList] = useState([]);
  const [searchWord, setSearchWord] = useState("");
  const [update, setUpdate] = useState('')


  const getImages = async () => {
    try {
      //const res = await http.get(`http://localhost:4000/api/todo`,{
      const res = await http.get(`http://localhost:4000/api/todo?find=${searchWord}`,{

        headers: {
          'Authorization': localStorage.getItem('sessionID')
        }
      })
      //console.log(res.data.info.pages)
      //console.log(res);
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

  const getTags = async () => {
    try {
      const res = await http.get('http://localhost:4000/api/taglist', {
        headers: {
          'Authorization': localStorage.getItem('sessionID')
        }
      })
      setTagList(res.data)
      console.log(tagList)
    }
    catch (error) {

    }
  }


  useEffect(() => {
    getImages();
    getTags();
    setUpdate('')

  }, [update])

  //console.log(typeof myCollectionData)
  //console.log( JSON.parse(myCollectionData[0].picData).id)
 
  //let picId = JSON.parse(myCollectionData[0].picData).id;


  return (
    <div>
      <h1>My Collection</h1>
      <div>
        <h2>Tags:</h2>
        <input type="text"  onChange={e => setSearchWord(e.target.value)}/>
        <button type="button" onClick={getImages}>Search</button>

      </div>
      {myCollectionData.length < 1 &&
        <div>
          <h1>You don't have any saved photos</h1>
        </div>}
        {console.log(myCollectionData.length)}
      {myCollectionData !== 'session' &&
        <div
        id="pics">{myCollectionData.map(pic => <MyColPicturesCard key={Math.random()} collection={pic} childToParentUpdate={update => setUpdate(update)}/>)}
      </div>} 
        

    </div>
  )
}

export default MyCollection
