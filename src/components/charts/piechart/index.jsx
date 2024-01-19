"use client";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import NoDataToDisplay from "highcharts/modules/no-data-to-display";

NoDataToDisplay(Highcharts);
function numberWithCommas(x) {
  if (x) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  }
}
function PieChart({ data }) {
  const defaultOptions = {
    credits: false,
    chart: {
      type: "pie",
      events: {
        render: function () {
          const chart = this;
          const textX = chart.plotLeft + chart.series[0].center[0];
          const textY = chart.plotTop + chart.series[0].center[1];
          const a = data.centerfonta || 32;
          const y = 0;
          if (chart.centerText) chart.centerText.destroy();
          const textformat = `<div style="text-align: center;">
                <span style="font-size: ${a} px">
                    <b>${numberWithCommas(data.total)}</b>
                </span><br>
            </div>`;
          if (!(data.total == 0 || undefined)) {
            chart.centerText = chart.renderer
              .text(textformat, textX, textY - y)
              .attr({ align: "center" })
              .add();
          }
        },
      },
      height: data.height || null,
      width: data.width || null,
      style: {
        textAlign: "center",
        color: "#4f81af",
      },
    },
    title: {
      text: "",
      align: "left",
    },
    tooltip: {
      pointFormat: "{series.name}: <b>{point.y}</b>",
    },
    legend: {
      enabled: false,
      align: "center",
      verticalAlign: "bottom",
      layout: "horizontal",
      x: 0,
      y: 0,
    },
    plotOptions: {
      pie: {
        cursor: "pointer",
        innerSize: "60%",
        size: 150,
        showInLegend: true,
        dataLabels: {
          enabled: data.label,
          format:
            '<span style="font-size: 1.2em"><b>{point.percentage:.2f} %</b></span>',
          connectorColor: "rgba(128,128,128,0.5)",
          distance: "1%",
        },
      },
    },
    series: [data.datas],
    colors: data.color || ["#ffbc79", "#4f81af"],
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

export default PieChart;
