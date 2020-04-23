import React from 'react';


function openMenu(e) {
  var x = document.getElementsByClassName("AppMenu")
  //console.log(x);
  x[0].style.display ='block';
}

function AppHeader() {
  return (
    <div className="AppHeader" onMouseEnter={openMenu}>

    </div>

  )
}

export default AppHeader;