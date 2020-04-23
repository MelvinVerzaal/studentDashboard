import React, { Component } from 'react';

var assignments =[]



class MainChart extends Component {











render() {
  return (
        <div className="MainChart" >
           <div className='MainChartframe' >
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


                      //average the number of difficulty per assignment
                        let difficultynumber='';
                        let countdifficulty='';
                        let averagedifficulty='';

                          this.props.data.students.forEach(element => {
                              if (Object.values(element).indexOf(data.assignment) > -1) {
                                difficultynumber = +difficultynumber + +Object.values(element.difficulty)                        
                                countdifficulty++
                              }

                            averagedifficulty = difficultynumber/countdifficulty
                          });

                        let averagedifficultyheight = averagedifficulty*19 +'%'
                      
                        //average the number of likeability per assignment
                       let likeabilitynumber='';
                       let countlikeability='';
                       let averagelikeability='';

                         this.props.data.students.forEach(element => {
                             if (Object.values(element).indexOf(data.assignment) > -1) {
                              likeabilitynumber = +likeabilitynumber + +Object.values(element.likeability)                        
                               countlikeability++
                             }

                           averagelikeability = likeabilitynumber/countlikeability
                         });

                       let averagelikeabilityheight = averagelikeability*19 +'%'

                      return (
                          <div>
                            <div className='difficultyChart' title={averagedifficulty} style={{height:averagedifficultyheight}}></div>
                            <div className='likeabilityChart' title={averagelikeability} style={{height:averagelikeabilityheight}}> </div>
                            <div>{data.assignment}</div>
                          </div>
                        )
                      }
                    })
            }

            
      </div>
        </div>
  )
}
}

export default MainChart;
