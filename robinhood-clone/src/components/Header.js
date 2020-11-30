import React from 'react'
import Logo from '../robinhood.svg'
function Header() {
    return (
        <div  className= "Header-wrapper">
            <div className="Header-logo">
<img src={Logo} width={25}></img>
            </div>


      <div className="Header-search">
          <div className="Header-search-container">
           <input placeholder="Seacher" type="text">
           </input>
          </div>
          </div> 

<div>
 <a href="#">Free Stocks</a>
 <a href="#">Portfolio</a>
 <a href="#">Free Stocks</a>
 <a href="#">Free Stocks</a>

</div>



        </div>
    )
}

export default Header
