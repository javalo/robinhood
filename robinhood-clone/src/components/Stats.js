import React from 'react'
import './Stats.css'

function Stats() {

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
