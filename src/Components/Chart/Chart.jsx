import React from "react";
// import * as React from 'react';
import { BarChart } from "@mui/x-charts/BarChart";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";
import "./Chart.scss";


export default function Chart() {
  const data = [
    {
      group: "المطاعم المساهمة",
      value: 5,
      label: "المطاعم المساهمة",
      color: "red",
    },
    {
      group: "الجمعيات المتاحة",
      value: 8,
      label: "الجمعيات المتاحة",
      color: "blue",
    },
    { group: "المتطوعين", value: 89, label: "المتطوعين", color: "gray" },
  ];

  const chartSetting = {
    width: 400,
    height: 300,
  };
  const customColors = ["#ff0000", "#0000ff", "#808080"];
  return (
    <>
      <div className="col-12 ">
        <div className="col-12 container">
          <div className="row charts">
            <div className="col-md-6 col-sm-12">
              <div className="row ">
                <BarChart
                  colors={customColors}
                  xAxis={[
                    {
                      scaleType: "band",
                      data: [
                        "المطاعم المساهمة",
                        "الجمعيات المتاحة",
                        "المتطوعين",
                      ],
                    },
                  ]}
                  series={[
                    {
                      data: [5, 8, 89],
                      // backgroundColor: "rgba(255, 99, 132, 0.2)",
                    },
                  ]}
                  {...chartSetting}
                />
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="row">
                <PieChart  series={[
        {
          arcLabel: (item) => `${item.label} (${item.value})`,
          arcLabelMinAngle: 45,
          data,
        },
      ]}  width={400} height={300} 
              
                  sx={{
                    [`& .${pieArcLabelClasses.root}`]: {
                      fill: 'white',
                      fontWeight: 'bold',
                    },
                  }}
                  {...chartSetting}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
