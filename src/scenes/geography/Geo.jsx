import { Box, useTheme } from '@mui/material'
import React from 'react'
import Header from '../../components/Header'
import WorldChart from '../../components/WorldChart'
import { tokens } from '../../theme';



export default function Geo() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)
  return (
    <Box m={"20px"}>
        <Header title={"GEOGRAPHY CHART"} subtitle={"Simple Geography Chart"}/>
        <Box height={"75vh"} border={`1px solid ${colors.grey[100]}`} borderRadius={"4px"}>
            <WorldChart />
        </Box>
    </Box>
  )
}
