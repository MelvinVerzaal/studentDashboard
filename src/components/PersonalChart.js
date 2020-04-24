import React from 'react';



function closePopup(e) {
  var x = document.getElementsByClassName("PersonalChartContiner")
  //console.log(x);
  x.PersonalChartContiner.style.display ='none';
}

function PersonalChart() {
  return (
    <div id='PersonalChartContiner' onClick={closePopup} className="PersonalChartContiner">
      
      <div className="Personal">
      <h1 className='Cross' onClick={closePopup}>X</h1>
        <h1 id='bigName'>Melvin Verzaal</h1>

    <table>
<tr><td>Naam:</td>               <td colspan='2' id='name'></td></tr>
<tr><td>Adres:</td>              <td id='street'></td><td id='number'></td></tr>
<tr><td></td>                   <td id='zipcode'></td><td id='city'></td></tr>
<tr><td>Email adres:</td>        <td colspan='2' id='email'></td></tr>
<tr><td>Telefoon nummer:</td>    <td colspan='2' id='phone'></td></tr>
<tr><td>Github:</td>    <td colspan='2' id='github'></td></tr>

</table>
<div className="PersonalChart">
<div className='PersonalChartframe' >
           <div className='ChartY' >
              <div>5</div>
              <div>4</div>
              <div style={{height: 10 +'%', margin: 0}}>3</div>
              <div>2</div>
              <div>1</div>
              <div style={{height: 100}}>&nbsp;</div>
              <div >&nbsp;</div>
           </div>


</div>

</div>






         


      </div>
    </div>
  );
}

export default PersonalChart;