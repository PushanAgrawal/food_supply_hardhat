import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <div>

    <section className="h-wrapper ">
      <div className="flexCenter paddings innerWidth h-container">
        {/* <img src="./ledger.jpg" alt="png" width={100} /> */}
        <div className="h-menu flexCenter">
          {/* <a href="">Resedencies</a>
          <a href="">Our Value</a>
          <a href="">Contact Us</a>
          <a href="">Get Started</a> */}
  

          <button className="button" onClick={()=>{"abcde"}}>
        Coneect
          </button>
      
          {/* <button className="button" onClick={()=>addUni()}>
          Add Uni
          </button>
          <button className="button" onClick={()=>getinfo()}>
          get info
        </button> */}
        </div>
      </div>
    </section>
        </div>
  );
};

export default Header;