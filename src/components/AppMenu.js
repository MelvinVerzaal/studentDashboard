import React, { Component } from 'react';

var names =[];

function closeMenu(e) {
    var x = document.getElementsByClassName("AppMenu")
    x[0].style.display ='none';
  }


function openPopup(e) {
    var x = document.getElementsByClassName("PersonalChartContiner")
    //console.log(x);
    x.PersonalChartContiner.style.display ='block';
}


function filterChart(event) {
    var x = document.getElementsByClassName(event.target.name+"Chart")
        if(event.target.checked){
             for (let i = 0; i < x.length; i++) {
                x[i].style.visibility ='visible';
             }
   
        }
        else{
            for (let i = 0; i < x.length; i++) {
                x[i].style.visibility ='hidden';
                 
             } 
        }
    
}

class AppMenu extends Component {
render() {
  return (
        <div className="AppMenu" onMouseLeave={closeMenu}>
                <input name='difficulty' type='checkbox'  onChange={filterChart}/><label>Makelijkheid</label>
                <input name='likeability' type='checkbox' onChange={filterChart}/><label>Leuk</label><br/>
                {
                    this.props.data.students.map((data) => {
                        if(names.includes(data.name)){}else{
                            names.push(data.name);
                    return (
                    <div><input type='checkbox'/><label onClick={openPopup}>{data.name}</label></div>
                        )
                    }
                    })
                }
            
       
        </div>
  )
}
}

export default AppMenu;










