import React from "react";
import ReactECharts from "echarts-for-react";

const Stdcaste = ({ data }) => {
  if (!Array.isArray(data)) {
    console.error("Data prop should be an array");
    return null;
  }

  const stCount = data.filter((emp) => emp.Caste === "St").length;
  const scCount = data.filter((emp) => emp.Caste === "Sc").length;
  const obcCount = data.filter((emp) => emp.Caste === "Obc").length;
  const generalCount = data.filter((emp) => emp.Caste === "General").length;

  const option = {
    title: {
      text: "Caste Disturbution",
      left: "center",
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    legend: {},
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: {
      type: "value",
      boundaryGap: [0, 0.01],
    },
    yAxis: {
      type: "category",
      data: ["ST Students", "SC Students", "OBC Students", "GENERAL Students"],
    },
    series: [
      {
        type: "bar",
        data: [stCount, scCount, obcCount, generalCount],
        itemStyle: {
          color: (params) => {
            const colors = ["#f9c74f", "#277da1", "#577590", "#90be6d"];
            return colors[params.dataIndex];
          },
          shadowBlur: 1,
          shadowColor: (params) => {
            const colors = "black";
            return colors[params.dataIndex];
          },
          shadowOffsetX: 1,
          shadowOffsetY: 1,
        },
      },
    ],
  };

  return (
    <div style={{ width: "100%", height: "300px" }}>
      <ReactECharts option={option} />
    </div>
  );
};

export default Stdcaste;
