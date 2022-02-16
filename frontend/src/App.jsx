// import './App.css';
import http from 'axios';
import PicturesCard from './PicturesCard';
import { useState,useEffect } from "react";



function App() {
  let [pageNumber, setPageNumber] = useState(1);
  let [pageData, setPageData] = useState([])

  const recivePage = http.get(`https://api.harvardartmuseums.org/image?apikey=95ab7a44-f4f7-44df-97b4-fcaad30a3961&page=${pageNumber}`)
  // .then(res => setPageData(res.data.records))



  useEffect(() => {
    const consoleRecievedRequest = (data) => {
      console.log(data)
      setPageData(data.data.records)
    };
    recivePage.then(consoleRecievedRequest)

  }, [pageNumber])
  

  console.log(pageData)
  
  return (
    <div className="App">
      <button onClick={(event) => {setPageNumber(pageNumber-1);}}>Back</button>
      <button onClick={(event) => {setPageNumber(pageNumber+1);}}>Next</button>
      <div>{pageData.map(pic => <PicturesCard pic={pic} />)}</div>
    </div>
  );
}

export default App;
