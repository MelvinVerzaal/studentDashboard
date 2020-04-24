import React from 'react';


function openMenu(e) {
  var x = document.getElementsByClassName("AppMenu")
  x[0].style.visibility ='visible';
}

function AppHeader() {
  return (
    <div className="AppHeader" onMouseEnter={openMenu}> 
        <img 
      src="https://wincacademy.nl/wp-content/uploads/2019/01/cropped-logoglat-small.png"
      style={{height: 30, width: 100, margin:10, filter: 'brightness(100)', display: 'inline-block'}}

      alt="new"
      />

    <h1 style={{color: '#5c9de8', margin: 0, display: 'inline-block'}}>  Student Dashboards</h1></div>



  )
}

export default AppHeader;