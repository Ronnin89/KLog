import React from "react";

export function Grade_round({grades}) {
    
    var grades_rounds = grades.map(function(grade){
        if( grade >= 39 && ( grade % 10 === 9 || grade % 10 === 8 || grade % 10 === 4 || grade % 10 === 3)){
          return <tr>
                    <td>
                        {grades.indexOf(grade)}
                    </td>
                    <td>
                        { grade }
                    </td>
                    <td>
                        { Math.round(grade/5)*5 }
                    </td>
                </tr>
      }
      return <tr>
                    <td>
                        {grades.indexOf(grade)}
                    </td>
                    <td>
                        { grade }
                    </td>
                    <td>
                        { grade }
                    </td>
                </tr>
            

    })
    return <table >
                <tr>
                    <th>ID</th>
                    <th>Nota Original</th>
                    <th>Nota Final</th>
                </tr>
                {grades_rounds}
            </table>

}