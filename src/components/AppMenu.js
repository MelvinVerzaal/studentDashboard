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
    function filterChart(e) {

        var x = document.getElementsByClassName(e.target.name+"Chart")
            if(e.target.checked){
                for (let i = 0; i < x.length; i++) {
                    x[i].style.visibility ='visible';
                }
                document.getElementsByName(e.target.name)[0].checked = true
                console.log(document.getElementsByName(e.target.name)[0].checked)
            }
            else{
                for (let i = 0; i < x.length; i++) {
                    x[i].style.visibility ='hidden';  
                } 
                document.getElementsByName(e.target.name)[0].checked = false
                console.log(document.getElementsByName(e.target.name)[0].checked)
            }         
        }

  
  


     function filterChartName(data ,name){
            
        if(document.getElementsByName(name)[0].checked){

            window.location.reload()

        }else{
            let newState = []
            data.students.forEach(element => {
                if (Object.values(element).indexOf(name) > -1) {}else{
                    newState.push(element)
                }
            })
            console.log(newState)
        }


               
    }



    class AppMenu extends Component {





render() {
  return (
        <div className="AppMenu" onMouseLeave={closeMenu}>
                <input name='difficulty'  type='checkbox'  onChange={filterChart}/><label>Makelijkheid</label>
                <input name='likeability' type='checkbox' onChange={filterChart}/><label>Leuk</label><br/><br/>
                {
                    
                    this.props.data.students.map((data) => {
                        if(names.includes(data.name)){}else{
                            names.push(data.name);
                           

                    return (
                    <div style={{marginRight:2+'%'}}>
                        
                        <input name={data.name} onChange={() => filterChartName(this.props.data, data.name)}
                        type='checkbox'/>
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










