import React from "react";
import ReactECharts from "echarts-for-react";

const StdBar = ({ data }) => {
  // Filter data to include only male students
  const femaleData = data.filter((student) => student.Gender === "Female");

  // Count the number of male students in each caste
  const femaleCasteCount = femaleData.reduce((acc, student) => {
    acc[student.Caste] = (acc[student.Caste] || 0) + 1;
    return acc;
  }, {});

  // Define colors for each bar (you can customize these colors)
  const colors = [" #90be6d", "#277da1", "#577590", "#f9c74f"];

  const option = {
    title: {
      text: "Female Students Caste Distribution",
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
      data: Object.keys(femaleCasteCount),
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        name: "female",
        type: "bar",
        data: Object.values(femaleCasteCount).map((value, index) => ({
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

export default StdBar;
