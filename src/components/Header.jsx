import { useTheme } from '@emotion/react'
import { Box, Typography } from '@mui/material'
import React from 'react'
import { tokens } from '../theme';

export default function Header({title, subtitle}) {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)
  return (
    <Box mb={"30px"}>
        <Typography
            variant='h3'
            color={colors.grey[100]}
            fontWeight={"bold"}
            sx={{m:"0 0 5px 0"}}
        >
            {title}
        </Typography>
        <Typography variant='h6' color={colors.greenAccent[400]}>
            {subtitle}
        </Typography>
    </Box>
  )
}
