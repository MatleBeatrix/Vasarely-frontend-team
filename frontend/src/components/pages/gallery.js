import React from 'react'
import '../../App.css';
import http from 'axios';
import { useState, useEffect } from "react";
import { Pagination } from '@mui/material';
import PicturesCard from '../PicturesCard';

const Gallery = () => {

  let [pageNumber, setPageNumber] = useState(1);
  let [totalPages, setTotalPages] = useState(1)
  let [pageData, setPageData] = useState([])

  const load = async () => {
    const res = await http.get(`https://api.harvardartmuseums.org/image?apikey=95ab7a44-f4f7-44df-97b4-fcaad30a3961&page=${pageNumber}`)

    setPageData(res.data.records)
    setTotalPages(res.data.info.pages)
    console.log(res)
    console.log(res.data.info.prev)
  }

  useEffect(() => {
    load()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNumber])

  // console.log(totalPages)
  console.log(pageData)
  console.log(pageNumber)

  return (
	<div>

<Pagination count={totalPages} onChange={(event, value) => setPageNumber(value)} />
      {/* <button onClick={() => { setPageNumber(pageNumber - 1); }}>Back</button>
      <button onClick={() => { setPageNumber(pageNumber + 1); }}>Next</button> */}
      <div id="pics">{pageData.map(pic => <PicturesCard key={pic.id} pic={pic} />)}</div>

  </div>
  )
}

export default Gallery