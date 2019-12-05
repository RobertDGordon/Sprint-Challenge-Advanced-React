import { useState } from 'react';

const useChartData = (props) =>{

    const howManyToShow = 50;

    const randomColors = () =>{
        let colors = []
        for(let i = 0; i < howManyToShow; i++){
            colors.push('#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6),) 
        }
        console.log(colors)
        return colors
    }

    const playerNames = () =>{
        let names = []
        for (let i = 0; i < howManyToShow; i++){
            names.push(props[i].name)
        }
        console.log(names)
        return names
    }

    const initialValue = {
        chartData:{
            labels: playerNames(),
            datasets:[
                {
                    label: 'Searches',
                    data: [props[0].searches, props[1].searches,props[2].searches,3,4],
                    backgroundColor: randomColors()
                }
            ]
        }
    }

    const [chartData, setChartData] = useState(initialValue);

    return [chartData];
}

export default useChartData;