import React from "react";
import ReactECharts from "echarts-for-react";

const Progress = ({ value }) => {
  const total = 100;
  const percentage = (value / total) * 100;

  const option = {
    title: {
      text: "Employee Progress",
      left: "center",
      top: "-4px",
      textStyle: {
        fontSize: 18,
      },
    },
    series: [
      {
        type: "gauge",
        startAngle: 90,
        endAngle: -270,
        progress: {
          show: true,
          roundCap: true,
          width: 30,
          itemStyle: {
            color: "#836394", // Color of the progress bar
            shadowBlur: 0, // Adjust as needed
            shadowColor: "black", // Shadow color
            shadowOffsetX: 0, // Horizontal shadow offset
            shadowOffsetY: 0, // Vertical shadow offset
          },
        },
        axisLine: {
          roundCap: true,
          lineStyle: {
            width: 30,
          },
        },
        pointer: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          show: false,
        },
        axisLabel: {
          show: false,
        },
        detail: {
          valueAnimation: true,
          formatter: "{value}",
          fontSize: 18,
          offsetCenter: [0, "40%"],
        },
        data: [
          {
            value: value,
            name: " Total Employee",
          },
        ],
        title: {
          offsetCenter: [0, "-20%"],
          fontSize: 15,
        },
      },
    ],
  };

  return (
    <div style={{ marginTop: "70px", border: "0px solid red" }}>
      <ReactECharts option={option} style={{ height: 300, width: 850 }} />
    </div>
  );
};

export default Progress;
