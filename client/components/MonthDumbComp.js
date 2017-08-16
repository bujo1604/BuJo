import React from 'react';

const MonthDumbComp = (props) => {
    const { daysInMonth, month } = props;
    return (
        <span>
        <text>{month}</text>
        <table>
            
            
            <thead>
                
                <tr key="1">
                <th></th>
                <th></th>
                <th>Event</th>
                <th>Task</th>
                </tr>
            </thead>
            
              <tbody> {daysInMonth.map((day) => {
            if(day.weekday === "Su"){
                return (
                
                <tr>
                <td>
                   {day.weekday}
                </td>
                <td> {day.dateOfM}</td>
                <td>{"Sunday Event Data"}</td>
                <td>{"Sunday Task Data"}</td>
                </tr>
               
                )
            }
           else {return (
               <tr>
                <td>
                   {day.weekday}
                </td>
                <td> {day.dateofM}</td>
                <td>{"Insert Event Data"}</td>
                <td>{"Insert Task Data"}</td>
                </tr>
                
            )}
       })} </tbody>
            
            </table>
            </span>
    
    )
}

export default MonthDumbComp;