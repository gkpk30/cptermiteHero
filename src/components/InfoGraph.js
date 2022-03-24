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
import Box from '@mui/material/Box'

ChartJS.register(
    CategoryScale,  
    LinearScale, 
    BarElement, 
    Title, 
    Tooltip, 
    Legend 
);

function InfoGraph(props) {

    const [chartData, setChartData] = useState({
        datasets: [],

    })

    const [chartOptions, setChartOptions] = useState({
        
    })

    const aspectRatio = props.aspectRatio

    useEffect(() => {
      setChartData({
          labels: [ 'Burbank, CA', 
                    "Hollywood, CA", 
                    'Los Angeles, CA', 
                    "Van Nuys, CA", 
                    "San Diego, CA",
                    // 'Mobile, AL',  
                    // "Memphis, TN", 
                    // "Oklahoma City, OK",  
                    // "Orlando, FL", 
                    // "San Diego, CA" 
                ],
          datasets: [
              {
                //   label: 'Top 20 cities with the most termites (2018 Rank) ',
                label: 'Top 5 cities in CA with most termites (2018)',
                  data: [
                            9,
                            3,
                            19,
                            16,
                            6,
                            // 20,
                            // 14,
                            // 2,
                            // 4,
                            // 2
                        ],
                  borderColor: 'rgb(53,162,235)',
                  backgroundColor: 'rgb(53,162,235,0.4)'
              },
          ],
      });

      setChartOptions({
          responsive: true, 
        //   maintainAspectRatio: false,
        aspectRatio: aspectRatio,
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
    }, [aspectRatio])
    

  return (
      <Box sx={{ position: 'relative',  minHeight:'300px' }}>
        <Bar options={chartOptions} data={chartData}/>
      </Box>
  )
}

export default InfoGraph