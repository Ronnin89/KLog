import React from "react";

export function Grade_round({grades}) {
    if (grades.count > 60 && grades.count < 0) {
        return <h1> Limite de datos o no hay datos </h1>
    }else{
        let count = -1;
        var grades_rounds = grades.map(function(grade){
        count = count + 1;    
            if (grade > 100 && grade < 0){
                return <tr>
                        <td>
                            { count }
                        </td>
                        <td>
                            Nota no valida
                        </td>
                        <td>
                            Nota no valida
                        </td>
                    </tr>
            }
            else if( grade >= 39 && ( grade % 10 === 9 || grade % 10 === 8 || grade % 10 === 4 || grade % 10 === 3)){
            return <tr style= {{backgroundColor: getBackgroundColor(grade)}}>
                        <td>
                            { count }
                        </td>
                        <td>
                            { grade }
                        </td>
                        <td>
                            { Math.round(grade/5)*5 }
                        </td>
                    </tr>
            
            }
        return <tr style= {{backgroundColor: getBackgroundColor(grade)}}>
                        <td>
                            { count }
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
}

const getBackgroundColor = (grade) =>{
    let color;
    if (grade === 39) {
        color = 'blue';
    } else if (grade >= 40) {
        color = 'green';
    } else if (grade < 39) {
        color = 'red';
    }
    return color;
};