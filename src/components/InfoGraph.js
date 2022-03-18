import { 
    Chart as ChartJS, 
    CategoryScale,  
    LinearScale, 
    BarElement, 
    Title, 
    Tooltip, 
    Legend, 
} from 'chart.js';
import {Bar} from "react-chartjs-2";
import React, {useState, useEffect} from 'react'

ChartJS.register(
    CategoryScale,  
    LinearScale, 
    BarElement, 
    Title, 
    Tooltip, 
    Legend 
);

function InfoGraph() {

    const [chartData, setChartData] = useState({
        datasets: [],

    })

    const [chartOptions, setChartOptions] = useState({
        
    })


    useEffect(() => {
      setChartData({
          labels: [ 'Baton Rouge, LA', "Fort Smith, AR", 'Honolulu, HI', "Little Rock, AR", "Los Angeles, CA",'Mobile, AL',  "Memphis, TN", "Oklahoma City, OK",  "Orlando, FL", "San Diego, CA" ],
          datasets: [
              {
                  label: 'Top 20 cities with the most termites (2018 Rank) ',
                  data: [17,15,19,16,11,20,14,2,4,2],
                  borderColor: 'rgb(53,162,235)',
                  backgroundColor: 'rgb(53,162,235,0.4)'
              },
          ],
      });

      setChartOptions({
          responsive: true, 
          plugins: {
              legend: {
                  position: "top"
              },
              title: {
                  display: true, 
                  text: "Consumer Affairs Report",
              }
          }
      })
    
    //   return () => {
    //     second
    //   }
    }, [])
    

  return (
    <Bar options={chartOptions} data={chartData}/>
  )
}

export default InfoGraph