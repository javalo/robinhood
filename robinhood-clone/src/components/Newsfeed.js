import React from 'react'
import LineGraph from './LineGraph'
import './Newsfeed.css'
import TimeLine from './TimeLine'
const Newsfeed = () => {
    return (
        <div className="Newsfeed">
              <div className="Newsfeed-container">
                  <div className="Newsfeed-chart-Section">
            
            
                        <div className="Newsfeed-portfolio">
                             <h1>$250,978</h1>
                             <p> +$44.63 (+O.04%) Today </p>
                        </div>

                         <div className="Newsfeed-chart">
                             <LineGraph/>
                             <TimeLine/>
                         </div>
                         
                 </div>
            </div>
        </div>
    )
}

export default Newsfeed
