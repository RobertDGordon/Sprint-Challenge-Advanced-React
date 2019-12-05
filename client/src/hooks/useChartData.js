import { useState } from 'react';

export const useChartData = (props) =>{
    const [chartData, setChartData] = useState([]);

    return [chartData];
}