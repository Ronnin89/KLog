import React from "react";

export function Grade_round({grades}) {
    var grades_rounds = grades.map(function(grade){
        if( grade >= 39 && ( grade % 10 === 9 || grade % 10 === 8 || grade % 10 === 4 || grade % 10 === 3)){
          return Math.round(grade/5)*5;
      }
      return <ul>
                <li>
                    {grade}
                </li>
            </ul>
    })
    return grades_rounds;
}