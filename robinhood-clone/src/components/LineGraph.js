import React from 'react'
import { Line } from 'react-chartjs-2'

function LineGraph() {
    return (
        <div className="LineGraph">
            
            <Line

data= {{
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
        label: '# of Votes',
        type: 'line',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
        ]
}] 

}
}

          
            />
        </div>
    )
}

export default LineGraph
