import React, { Component } from 'react';

var assignments = [];

class MainChart extends Component {
render() {
  return (
        <div className="MainChart" >
           
           <div className='ChartY' >
              <div>5</div>
              <div>4</div>
              <div>3</div>
              <div>2</div>
              <div>1</div>
              <div>&nbsp;</div>
           </div>

            {
                    this.props.data.students.map((data) => {



                      if(assignments.includes(data.assignment)){}else{
                        assignments.push(data.assignment);

                        
                      return (
                          <div>
                             <div className='difficultyChart'>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <div className='likeabilityChart'>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <div>{data.assignment}</div>
                          </div>
                        )
                      }

                    })
            }

            
       
        </div>
  )
}
}

export default MainChart;
