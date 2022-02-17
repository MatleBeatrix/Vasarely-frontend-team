// import './App.css';
import http from 'axios';
import { useState, useEffect } from "react";
import { Pagination } from '@mui/material';
import PicturesCard from './components/PicturesCard';
import Registration from './components/Registration';


function App() {
  let [pageNumber, setPageNumber] = useState(1);
  let [totalPages, setTotalPages] = useState(0)
  let [pageData, setPageData] = useState([])

  const load = async () => {
    const res = await http.get(`https://api.harvardartmuseums.org/image?apikey=95ab7a44-f4f7-44df-97b4-fcaad30a3961&page=${pageNumber}`)

    setPageData(res.data.records)
    setTotalPages(res.data.info.pages)
    console.log(res)
  }
  
  useEffect(() => {
    load()
  }, [pageNumber])

  console.log(totalPages)
  console.log(pageData)

  return (
    <div className="App">
      <Registration />
      <Pagination count={totalPages} onChange={(event, value) => setPageNumber(value)}/>
      {/* <button onClick={() => { setPageNumber(pageNumber - 1); }}>Back</button>
      <button onClick={() => { setPageNumber(pageNumber + 1); }}>Next</button> */}
      <div>{pageData.map(pic => <PicturesCard key={pic.id} pic={pic} />)}</div>
    </div>
  );
}

export default App;
