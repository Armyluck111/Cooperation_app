import React from 'react'
// import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';
import './Chart.scss'
const data = [
  { value: 5, label: 'المطاعم المساهمة' },
  { value: 8, label: 'الجمعيات المتاحة' },
  { value: 89, label: 'المتطوعين' },


 

];

const size = {
  width: 400,
  height: 200,
};
export default function Chart() {
    return (
        <>
        <div className='col-12 '>
          <div className='col-12 container'>
             <div className="row charts">
              <div className='col-md-6 col-sm-12'>
                <div className="row ">
                <BarChart
                  xAxis={[{ scaleType: 'band', data: ['المطاعم المساهمة', 'الجمعيات المتاحة', 'المتطوعين'] }]}
                  series={[{ data: [5, 8, 89] }]}  // Use your actual data here
                  width={500}
                  height={300}
                  
                />
                
                </div>
              </div>
              <div className='col-md-6 col-sm-12'>
                <div className="row">
                <PieChart
      series={[
        {
          arcLabel: (item) => `${item.label} (${item.value})`,
          arcLabelMinAngle: 90,
          data,
        },
      ]}
      sx={{
        [`& .${pieArcLabelClasses.root}`]: {
          fill: 'whiteSmoke',
          fontWeight: 'bold',
        },
      }}
      {...size}
    />
                </div>
              </div>
             </div>
          </div>

        </div>
  
         
        </>
  
      );
}
