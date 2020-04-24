import React, { Component } from 'react';


/*bassic settings*/
    var names =[];
    setTimeout(() => {
        var inputs = document.getElementsByTagName('input');
        for(var i=0; i<inputs.length; i++){
        
            if(inputs[i].getAttribute('type')=='checkbox' && inputs[i].name!=''){
            document.getElementsByName(inputs[i].name)[0].checked= true
            }
        } 
    }, 100);

/*popupHandeler*/
function openPopup(e) {
    var x = document.getElementsByClassName("PersonalChartContiner")
    x.PersonalChartContiner.style.display ='block';
    document.getElementById('name').innerHTML = e.target.innerHTML
    document.getElementById('bigName').innerHTML = e.target.innerHTML

    document.getElementById('street').innerHTML = e.target.getAttribute("street")
    document.getElementById('number').innerHTML = e.target.getAttribute("number")
    document.getElementById('zipcode').innerHTML = e.target.getAttribute("zipcode")
    document.getElementById('city').innerHTML = e.target.getAttribute("city")
    document.getElementById('email').innerHTML = e.target.getAttribute("email")
    document.getElementById('phone').innerHTML = e.target.getAttribute("phone")
    document.getElementById('github').innerHTML = e.target.getAttribute("github")
  
    


}

/*menuHandeler*/
    function closeMenu(e) {
        var x = document.getElementsByClassName("AppMenu")
        x[0].style.visibility ='hidden';
    }

/*filterHandeler*/
    function filterChart(event) {
        var x = document.getElementsByClassName(event.target.name+"Chart")
            if(event.target.checked){
                for (let i = 0; i < x.length; i++) {
                    x[i].style.visibility ='visible';
                }
            
                document.getElementsByName(event.target.name)[0].checked = true
                console.log(document.getElementsByName(event.target.name)[0].checked)
            }
            else{
                for (let i = 0; i < x.length; i++) {
                    x[i].style.visibility ='hidden';  
                } 

                document.getElementsByName(event.target.name)[0].checked = false
                console.log(document.getElementsByName(event.target.name)[0].checked)
            }
    }

    class AppMenu extends Component {





render() {
  return (
        <div className="AppMenu" onMouseLeave={closeMenu}>
                <input name='difficulty'  type='checkbox'  onChange={filterChart}/><label>Makelijkheid</label>
                <input name='likeability' type='checkbox' onChange={filterChart}/><label>Leuk</label><br/>
                {
                    this.props.data.students.map((data) => {
                        if(names.includes(data.name)){}else{
                            names.push(data.name);
                    return (
                    <div>
                        <input name={data.name} type='checkbox'/>
                        <label  onClick={openPopup} 
                                street={data.street} 
                                number={data.number} 
                                zipcode={data.zipcode} 
                                city={data.city} 
                                email={data.email} 
                                phone={data.phone} 
                                github={data.github} 
                            >{data.name}
                        </label>
                    </div>
                        )
                    }
                    })
                }
        </div>
  )
}
}

export default AppMenu;










