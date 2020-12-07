import React , {useEffect, useState}from 'react'
import './Stats.css'
import axios from "axios"
function Stats() {


    const TOKEN="bv6n3bv48v6s9eue6f4g"
    const BASE_URL = "https://finnhub.io/api/v1/quote"
    
    const getStockData = (stock) =>{

    return axios.get(`${BASE_URL}?symbol=${stock}&token=${TOKEN}`).catch((error) => {
        console.error("Error", error.message);
      });

}

useEffect(() => {
   
 
    const stocksList = ["AAPL", "MSFT", "TSLA", "FB", "BABA", "UBER", "DIS", "SBUX"];

    
    let promises = [];
    stocksList.map((stock) => {
      promises.push(
        getStockData(stock).then((res) => {
        console.log(res);
        })
      )
    });

}, [])

    return (
        <div className="Stats">
            
            <div className="Stats-container">
            
            <div className="Stats-header">
                 <p>Stacks</p>
            </div>
            <div className="Stats-content">
                 <div className="Stats-rows">
                 {/* for our current stocks */}
                 </div>
            </div>


            <div className="Stats-header">
                 <p>List</p>
            </div>
            <div className="Stats-content">
                 <div className="Stats-rows">
                   {/* for stocks we can buy  */}
                 </div>
            </div>



            </div>

        </div>
    )
}

export default Stats
