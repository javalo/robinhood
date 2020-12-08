import React , { useState, useEffect } from "react";
import LineGraph from "./LineGraph";
import "./Newsfeed.css";
import TimeLine from "./TimeLine";
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
const Newsfeed = () => {

    const [popularTopics, setTopics] = useState([
        "Technology",
        "Top Movies",
        "Upcoming Earnings",
        "Crypto",
        "Cannabis",
        "Healthcare Supplies",
        "Index ETFs",
        "Technology",
        "China",
        "Pharma",
      ]);


      const handleDelete = () => {
        console.info('You clicked the delete icon.');
      };

  return (
    <div className="Newsfeed">
      <div className="Newsfeed-container">
        <div className="Newsfeed-chart-Section">
          <div className="Newsfeed-portfolio">
            <h1>$250,978</h1>
            <p> +$44.63 (+O.04%) Today </p>
          </div>

          <div className="Newsfeed-chart">
            <LineGraph />
            <TimeLine />
          </div>
        </div>

        <div className="Newfeed-buying-section">
            <h2>Buying power</h2>
            <h2>$5.23</h2>
          </div>

<div className="Newfeed-market-section">
<div className="Newfeed-market-box">
     <p>Cash Management</p>
     <h1>Happy Black friday</h1>
</div>
</div>


<div className="Newsfeed-popularlists-section">
          <div className="Newsfeed-popularlists-intro">
            <h1>Popular lists</h1>
            <p>Show More</p>
          </div>

          <div className="newsfeed_popularlists_badges">
            {popularTopics.map((topic) => (
              <Chip className="Topic-badge"
              avatar={<Avatar
                src={`https://avatars.dicebear.com/api/human/${topic}.svg`}
              />} 
              label={topic}
             
              variant="outlined"



              />
            ))}
          </div>




          </div>


      </div>
    </div>
  );
};

export default Newsfeed;
