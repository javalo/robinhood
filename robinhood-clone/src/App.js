
import './App.css';
import Header from './components/Header';
import Newsfeed from './components/Newsfeed';
import Stats from './components/Stats';

function App() {
  return (
    <div className="App">
      <div className="App-header">
       <Header/>
       </div>
       <div className="App-body"> 

       <div className="App-container">

       <Newsfeed/>


<Stats/>
 
       </div>

 
       </div>
    </div>
  );
}

export default App;
