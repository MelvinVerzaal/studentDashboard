import React from 'react';



function closePopup(e) {
  var x = document.getElementsByClassName("PersonalChartContiner")
  //console.log(x);
  x.PersonalChartContiner.style.display ='none';
}

function PersonalChart() {
  return (
    <div id='PersonalChartContiner' onClick={closePopup} className="PersonalChartContiner">
      
      <div className="PersonalChart">
      <h1 className='Cross' onClick={closePopup}>X</h1>
        <h1>Melvin Verzaal</h1>
         


      </div>
    </div>
  );
}

export default PersonalChart;