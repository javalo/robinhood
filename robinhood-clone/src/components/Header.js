import React from 'react'
import Logo from '../robinhood.svg'
import './Header.css'

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

<div className="Header-menu-iteams">
 <a href="#">Free Stocks</a>
 <a href="#">Portfolio</a>
 <a href="#">Cash</a>
 <a href="#">Messages</a>
 <a href="#">Account</a>
</div>



        </div>
    )
}

export default Header
