import React,{useState, useContext} from 'react'
import {Form} from 'react-bootstrap';
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import {Line} from 'react-chartjs-2'
import { GlobalContext } from '../context/GlobalState'

Chart.register(CategoryScale);

export const Analytics = () => {

    const [analyticsSelection, setAnalyticsSelection] = React.useState('type');

    const handleChange = (event) => {
        setAnalyticsSelection(event.target.value);
    }
    const { transactions} = useContext(GlobalContext)
        /*  [
          { id: 1, description: 'Fall out from Phoenix Training ', amount: 50000, type: 'income', mode:'transfer',date:'1-8-2024' },
          { id: 2, description: 'TIA', amount: 65000, type: 'income', mode:'Transfer',date:'1-8-2024' },
          { id: 3, description: 'Money to Fowler', amount: 10000, type: 'expense', mode:'transfer',date:'1-8-2024' },
          { id: 4, description: 'Money for Week 6 Transport', amount: 10000, type: 'expense', mode:'cash',date:'1-8-2024' },
          { id: 5, description: 'Money for Madrasa', amount: 15000, type: 'expense', mode:'transfer',date:'1-8-2024' },
          { id: 6, description: 'LVIC Monthly Contribution', amount: 20000, type: 'expense', mode:'transfer',date:'1-8-2024' },
        ]
        */
    const data= {
        labels: ['Red', 'Orange', 'Blue'],
        // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
        datasets: [
            {
              label: 'Popularity of colours',
              data: [55, 23, 96],
              // you can set indiviual colors for each bar
              backgroundColor: [
                'rgba(255, 255, 255, 0.6)',
                'rgba(255, 255, 255, 0.6)',
                'rgba(255, 255, 255, 0.6)'
              ],
              borderWidth: 1,
            }
        ]
    }


  return (
    <>
    <h3>Income/Expense Analytics</h3>

        <Form.Select value={analyticsSelection} 
                onChange={handleChange} aria-label="Default select example">
        <option>Analyze By:</option>
        <option value="type">Transaction Type</option>
        <option value="mode">Transaction Mode</option>
        </Form.Select>

        <p>{analyticsSelection}</p>

       
    </>
  )
}
