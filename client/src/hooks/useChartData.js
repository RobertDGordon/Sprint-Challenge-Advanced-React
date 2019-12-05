import { useState } from 'react';

const useChartData = (props) =>{

    console.log (props[2])

    const initialValue = {
        chartData:{
            labels: [props[0].name,props[1].name],
            datasets:[
                {
                    label: 'Searches',
                    data: [props[0].searches, props[1].searches,props[2].searches,3,4],
                    backgroundColor: []
                }
            ]
        }
    }

    const [chartData, setChartData] = useState(initialValue);

    return [chartData];
}

export default useChartData;