// Step 1 - Include react
import React from "react"

// Step 2 - Include the react-fusioncharts component
import ReactFC from "react-fusioncharts"

// Step 3 - Include the fusioncharts library
import FusionCharts from "fusioncharts"

// Step 4 - Include the chart type
import Column2D from "fusioncharts/fusioncharts.charts"

// Step 5 - Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion"

// Step 6 - Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme)

const ChartComponent = ({ data, title }) => {
  const chartConfigs = {
    type: "column2d",
    width: "100%",
    height: "500",
    dataFormat: "json",
    dataSource: {
      chart: {
        // caption: "COVID-19 décès par classe d'âge", //Set the chart caption
        caption: title, //Set the chart caption
        // subCaption: "In MMbbl = One Million barrels", //Set the chart subcaption
        xAxisName: "Classes d'âges", //Set the x-axis name
        yAxisName: "Nombre de décès", //Set the y-axis name
        // numberSuffix: "K",
        theme: "fusion", //Set the theme for your chart
      },
      data: data,
    },
  }

  return <ReactFC {...chartConfigs} />
}

export default ChartComponent
