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
              <div style={{height: 17 +'%', margin: 0}}>3</div>
              <div>2</div>
              <div>1</div>
              <div style={{height: 100}}>&nbsp;</div>
              <div >&nbsp;</div>
           </div>

          { 
              this.props.data.students.map((data) => {
              if(assignments.includes(data.assignment)){}else{
                        
                 //push assignment for cheacking if in array so we display them one time only
                      assignments.push(data.assignment);


                      //average the number of difficulty per assignment
                        let difficultyNumber='';
                        let countDifficulty='';
                        let averageDifficulty='';
                          this.props.data.students.forEach(element => {
                              if (Object.values(element).indexOf(data.assignment) > -1) {
                                difficultyNumber = +difficultyNumber + +Object.values(element.difficulty)                        
                                countDifficulty++
                              }
                              averageDifficulty = difficultyNumber/countDifficulty
                          });
                          let originalAverageDifficulty = averageDifficulty

                          //calculations for height of div
                          if(averageDifficulty > 3){averageDifficulty = averageDifficulty*1.05}
                        let averageDifficultyHeight = averageDifficulty*19 +'%'
                      
                        //average the number of likeability per assignment
                       let likeabilityNumber='';
                       let countLikeability='';
                       let averageLikeability='';
                         this.props.data.students.forEach(element => {
                             if (Object.values(element).indexOf(data.assignment) > -1) {
                              likeabilityNumber = +likeabilityNumber + +Object.values(element.likeability)                        
                               countLikeability++
                             }
                           averageLikeability = likeabilityNumber/countLikeability
                         });

                         let originalAverageLikeability = averageLikeability

                         //calculations for height of div
                         if(averageLikeability > 3){averageLikeability = averageLikeability*1.05}
                       let averageLikeabilityHeight = averageLikeability*19 +'%'

                return (
                     <div>
                       <div className='difficultyChart' title={originalAverageDifficulty} style={{height:averageDifficultyHeight}}></div>
                       <div className='likeabilityChart' title={originalAverageLikeability} style={{height:averageLikeabilityHeight}}> </div>
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
