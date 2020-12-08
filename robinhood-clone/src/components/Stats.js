import React , {useEffect, useState}from 'react'
import './Stats.css'
import axios from "axios"
import StatsRow from './StatsRow'
function Stats() {


    const TOKEN="bv6n3bv48v6s9eue6f4g"
    const BASE_URL = "https://finnhub.io/api/v1/quote"
    const [stockData, setstockData] = useState([])

    const getStockData = (stock) =>{

    return axios.get(`${BASE_URL}?symbol=${stock}&token=${TOKEN}`).catch((error) => {
        console.error("Error", error.message);
      });

}

useEffect(() => {
   
 
    const stocksList = ["AAPL", "MSFT", "TSLA", "FB", "BABA", "UBER", "DIS", "SBUX"];

    let tempStocksData = [];
    let promises = [];

    stocksList.map((stock) => {
      promises.push(
        getStockData(stock).then((res) => {
            tempStocksData.push({
            name: stock,
            ...res.data
          });
        })
      )
    });

      Promise.all(promises).then(()=>{
        setstockData(tempStocksData);
        console.log(tempStocksData)
      })


}, [])

    return (
        <div className="Stats">
            
            <div className="Stats-container">
            
            <div className="Stats-header">
                 <p>Stacks</p>
            </div>
            <div className="Stats-content">
                 <div className="Stats-rows">
              
                   <StatsRow
                   key="APPL"
                name="APPL"
                openPrice="200"
                price="100"
                share="200"

                   />

             
                 </div>
            </div>


            <div className="Stats-header">
                 <p>List</p>
            </div>
            <div className="Stats-content">
                 <div className="Stats-rows">
                 {stockData.map((stock) => (
                   <StatsRow
                   key={stock.name}
                name={stock.name}
                openPrice={stock.o}
                price={stock.c}

                   />

                 ))}
                 </div>
            </div>



            </div>

        </div>
    )
}

export default Stats
