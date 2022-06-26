import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";

interface CenteringWrapperProps {
  children: React.ReactNode;
}

export default function CenteringWrapper({ children }: CenteringWrapperProps) {
  const theme = useTheme();

  return (
    <Box
      component="section"
      sx={{
        width: "1240px",
        margin: "0 auto",
        [theme.breakpoints.down("lg")]: {
          width: "auto",
        },
      }}
    >
      {children}
    </Box>
  );
}
