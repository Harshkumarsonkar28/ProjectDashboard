import React from "react";
import ReactECharts from "echarts-for-react";

const Malecaste = ({ data }) => {
  // Filter data to include only male students
  const maleData = data.filter((student) => student.Gender === "Male");

  // Count the number of male students in each caste
  const maleCasteCount = maleData.reduce((acc, student) => {
    acc[student.Caste] = (acc[student.Caste] || 0) + 1;
    return acc;
  }, {});

  // Define colors for each bar (you can customize these colors)
  const colors = ["#277da1", "#577590", "#f9c74f", "#90be6d"];

  const option = {
    title: {
      text: "Male Students Caste Distribution",
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      data: Object.keys(maleCasteCount),
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        name: "male",
        type: "bar",
        data: Object.values(maleCasteCount).map((value, index) => ({
          value,
          itemStyle: {
            color: colors[index % colors.length], // Cycle through the colors array
            shadowBlur: 1,
            shadowColor: "black",
            shadowOffsetX: 1,
            shadowOffsetY: 1,
          },
        })),
      },
    ],
  };

  return (
    <ReactECharts option={option} style={{ height: 300, width: "520px" }} />
  );
};

export default Malecaste;
