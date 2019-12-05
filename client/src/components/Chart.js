import React, {useState} from 'react';
import useChartData from '../hooks/useChartData'
import {Pie} from 'react-chartjs-2';

const Chart = (props) => {

    const players = props.players

    // console.log(players)

    const [chartData, setChartData] = useChartData(players);

    // const chartData = {
    //     chartData:{
    //         labels: ['Test1','Test2'],
    //         datasets:[
    //             {
    //                 label: 'Searches',
    //                 data: [100,99,10,3,4],
    //                 backgroundColor: []
    //             }
    //         ]
    //     }
    // }

    return(
        <div><Pie
        data={chartData.chartData}
        width={1200}
        height={500}
        options={{
            title:{
                display:true,
                text:'Number of searches',
                // fontSize:50
            },
            legend:{
                display:true,
                position: 'right'
            }
        }}
    /></div>
    )
}

export default Chart;