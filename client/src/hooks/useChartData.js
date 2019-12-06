import { useState } from 'react';

const useChartData = (props) =>{

    const howManyToShow = 50;

    const randomColors = () =>{
        let colors = []
        for(let i = 0; i < howManyToShow; i++){
            colors.push('#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6),) 
        }
        // console.log(colors)
        return colors
    }

    const playerNames = () =>{
        let names = []
        for (let i = 0; i < howManyToShow; i++){
            if (props === undefined){
                return ''
            }else{
                names.push(props[i].name)
            }
        }
        // console.log(names)
        return names
    }

    const playerSearches = () =>{
        let searches = []
        for (let i = 0; i < howManyToShow; i++){
            searches.push(props[i].searches)
        }
        // console.log(searches)
        return searches
    }

    const initialValue = {
        chartData:{
            labels: playerNames(),
            datasets:[
                {
                    label: 'Searches',
                    data: playerSearches(),
                    backgroundColor: randomColors()
                }
            ]
        }
    }

    const [chartData] = useState(initialValue);

    return [chartData];
}

export default useChartData;