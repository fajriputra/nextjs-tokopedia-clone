import { Box, Button, Link } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Colors } from "styles/theme";

interface IBannerProps {
  active?: boolean;
  isHovered?: boolean;
}

export const BannerWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: Colors.light_gray,
  position: "relative",
  borderRadius: "0.75rem",
  [theme.breakpoints.down("md")]: {
    borderRadius: 0,
  },
  overflow: "hidden",
}));

export const BannerWrapperImage = styled(Box)(({ theme }) => ({
  position: "relative",
  borderRadius: "0.75rem",
  width: "100%",
  height: 302,
  zIndex: 10,

  [theme.breakpoints.down("md")]: {
    borderRadius: 0,
    height: 200,
  },
}));

export const PreviousSlider = styled(Button)(
  ({ isHovered, theme }: IBannerProps) => ({
    position: "absolute",
    top: "45%",
    padding: 0,
    opacity: isHovered ? 1 : 0,
    left: isHovered ? 5 : -30,
    minWidth: "40px",
    height: "40px",
    backgroundColor: "#fff",
    borderRadius: "100%",
    transition: "all 0.5s",
    transitionTimingFunction: "cubic-bezier(0.2,0.64,0.21,1)",
    zIndex: 40,
    "&:hover": {
      backgroundColor: "#fff",
    },
    [theme.breakpoints.down("md")]: {
      minWidth: "30px",
      height: "30px",
      fontSize: "1.125rem",
    },
  })
);

export const NextSlider = styled(Button)(
  ({ isHovered, theme }: IBannerProps) => ({
    position: "absolute",
    top: "45%",
    padding: 0,
    opacity: isHovered ? 1 : 0,
    right: isHovered ? 5 : -30,
    zIndex: 40,
    minWidth: "40px",
    height: "40px",
    backgroundColor: "#fff",
    borderRadius: "100%",
    transition: "all 0.5s",
    transitionTimingFunction: "cubic-bezier(0.2,0.64,0.21,1)",
    "&:hover": {
      backgroundColor: "#fff",
    },
    [theme.breakpoints.down("md")]: {
      minWidth: "30px",
      height: "30px",
      fontSize: "1.125rem",
    },
  })
);

export const BannerImage = styled("img")(({ theme }) => ({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "inherit",
  [theme.breakpoints.down("lg")]: {
    objectFit: "fill",
  },
}));

export const BannerActionsWrapper = styled(Box)(() => ({
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
}));

export const BannerActionsInnerWrapper = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  padding: "0.5rem",
}));

export const BannerIndicator = styled(Box)(({ active }: IBannerProps) => ({
  width: "8px",
  height: "8px",
  borderRadius: "100%",
  backgroundColor: active ? "white" : "rgba(255, 255, 255, 0.44)",
  cursor: "pointer",
  marginRight: "0.25rem",
  "&:last-child": {
    marginRight: 0,
  },
}));

export const PromoLink = styled(Link)(() => ({
  fontSize: "0.625rem",
  outline: "none",
  backgroundColor: "rgba(49,53,59,0.96)",
  padding: "0.25rem 0.5rem",
  textTransform: "capitalize",
  color: "#fff",
  borderRadius: "0.25rem",
  cursor: "pointer",
}));
