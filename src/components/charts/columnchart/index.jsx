"use client";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import NoDataToDisplay from "highcharts/modules/no-data-to-display";

NoDataToDisplay(Highcharts);

function ColumnChart({ data }) {
  const defaultOptions = {
    credits: false,
    chart: {
      type: "column",
      height: data.height || null,
      width: data.width || null,
      style: {
        fontFamily: "__Poppins_6d1a03, __Poppins_Fallback_6d1a03",
      },
    },
    yAxis: [
      {
        // Primary yAxis
        labels: {
          format: "{value}",
          style: {
            color: "red",
          },
        },
        title: {
          text: "Percentage",
          style: {
            color: "red",
          },
        },
      },
      {
        // Secondary yAxis
        title: {
          text: "Total",
          style: {
            color: "red",
          },
        },
        labels: {
          format: "{value}",
          style: {
            color: "red",
          },
        },
        opposite: true,
      },
    ],
    title: {
      text: "",
      align: "left",
    },
    tooltip: {
      pointFormat: "{series.name}: <b>{point.y}</b>",
    },
    legend: {
      align: "center",
      verticalAlign: "bottom",
      layout: "horizontal",
      x: 0,
      y: 0,
    },
    plotOptions: {
      column: {
        stacking: data.stacking || undefined,
      },
    },
    series: [data.datas],
    colors: data.color || [
      "#4f81af",
      "#ffbc79",
      "#fc2d2f",
      "#5c5c61",
      "#5182b0",
      "#ffbc79",
      "#fc2d2f",
      "#5c5c61",
    ],
  };
  const options = {
    ...defaultOptions,
    ...data,
  };

  return (
    <>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </>
  );
}

export default ColumnChart;
