// Step 1 - Include react
import React from "react"

// Step 2 - Include the react-fusioncharts component
import ReactFC from "react-fusioncharts"

// Step 3 - Include the fusioncharts library
import FusionCharts from "fusioncharts"

// Step 4 - Include the chart type
import Chart from "fusioncharts/fusioncharts.charts"

// Step 5 - Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion"

// Step 6 - Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Chart, FusionTheme)

const ChartComponent = ({ data }) => {
  const chartConfigs = {
    type: "bar3d",
    height: "400",
    width: "100%",
    dataFormat: "json",
    dataSource: {
      // Chart configuration
      chart: {
        caption: "Most Forked",
        // yAxisName: "Forks",
        yAxisName: "Repos",
        // xAxisName: "Repos",
        xAxisName: "Forks",
        xAxisNameFontSize: "16px",
        yAxisNameFontSize: "16px",
      },
      // Chart data
      data,
    },
  }
  return <ReactFC {...chartConfigs}></ReactFC>
}

export default ChartComponent
