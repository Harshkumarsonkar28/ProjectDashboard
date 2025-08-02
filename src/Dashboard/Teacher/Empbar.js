import React from 'react';
import ReactECharts from 'echarts-for-react';

const Empbar = ({ data }) => {
  if (!Array.isArray(data)) {
    console.error("Data prop should be an array");
    return null;
  }

  const maleCount = data.filter((emp) => emp.Gender === 'Male').length;
  const femaleCount = data.filter((emp) => emp.Gender === 'Female').length;
  // const totalCount = data.length;

  const option = {
    title: {
      text: 'Total Employees Gender Wise',
      left: 'center',
      top:'10px'
    },
    tooltip: {},
    xAxis: {
      type: 'category',
      data: ['Male Employee', 'Female Employee'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [maleCount, femaleCount],
        type: 'bar',
        label: {
          show: true,
          position: 'top',
        },
        itemStyle: {
          color: function (params) {
            const colors = [ "#577590", "#277da1"];
            return colors[params.dataIndex];
           
          },
          shadowBlur: 2,
          shadowColor: (params) => {
            const colors = "black";
            return colors[params.dataIndex];
          },
          shadowOffsetX: 1,
          shadowOffsetY: 1,
        }
        },
      
    ],
  };

  return (
    <div style={{ width: "850px", height: "300px"}}>
      <ReactECharts option={option} />
    </div>
  );
};

export default Empbar;
