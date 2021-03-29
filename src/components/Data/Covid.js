import React from "react"
import styled from "styled-components"
import { Bar3D, Column2D } from "./Charts"
import COVID270321 from "../../data/covid/COVID2021S07.json"

const Covid = () => {
  return (
    <Wrapper>
      {COVID270321.map(area => {
        // console.log(area["region"])
        const name = area["region"]
        const chartData = Object.keys(area)
          .slice(1)
          .map(item => {
            return { label: item, value: area[item] }
          })
        console.log(chartData)
        return <Column2D data={chartData} title={name} />
      })}
    </Wrapper>
  )
}

const Wrapper = styled.section``

export default Covid
