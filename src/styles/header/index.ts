import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  IconButton,
  InputBase,
  Link,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { ILinkProps } from "types/header";

export const HeaderContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  paddingTop: "0.5rem",
  [theme.breakpoints.down("md")]: {
    padding: "0.5rem 0",
  },
}));

export const HeaderBrandLogo = styled("img")(({ theme }) => ({
  padding: 4,
  width: 145,

  [theme.breakpoints.down("md")]: {
    margin: "auto",
  },
}));

export const TextCategory = styled(Typography)(() => ({
  padding: "0.3125rem 0.25rem",
  fontSize: "0.75rem",
  fontWeight: 500,
  transition: "color 280ms ease",
  margin: "0 1rem",
  color: "rgba(49,53,59,0.68)",
  cursor: "pointer",
  "&:hover": {
    color: "rgb(3,172,14)",
    borderRadius: "0.3125rem",
    backgroundColor: "rgba(0, 0, 0, 0.04)",
  },
}));

export const InputCategory = styled(InputBase)(() => ({
  zIndex: 20,
  border: "1px solid #E5E7E9",
  borderRadius: "0.5rem",
  "&.Mui-focused": {
    border: "1px solid #4FD15A",
  },
  "& .MuiInputBase-input": {
    padding: "0.5rem 0.75rem",
    fontSize: "0.75rem",
  },
}));

export const ButtonSearch = styled(IconButton)(() => ({
  backgroundColor: "#F3F4F5",
  minWidth: "32px",
  height: "100%",
  borderTopRightRadius: 8,
  borderBottomRightRadius: 8,
  borderTopLeftRadius: 0,
  borderBottomLeftRadius: 0,
  position: "absolute",
  top: 0,
  right: 0,
  bottom: 0,
  padding: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "&:hover": {
    bgcolor: "rgba(49,53,59,0.12)",
  },
}));

export const HeaderActionsWrapper = styled(Box)(() => ({
  marginLeft: "0.8125rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));

export const ButtonCart = styled(IconButton)(() => ({
  minWidth: "36px",
  height: "30px",
  marginLeft: "1.3125rem",
  marginRight: "1rem",
  borderRadius: "0.3125rem",
}));

export const MuiLink = styled(Link)(({ isLoggedin }: ILinkProps) => ({
  fontSize: "0.75rem",
  fontWeight: 800,
  color: isLoggedin ? "rgb(3,172,14)" : "#fff",
  borderRadius: "0.5rem",
  backgroundColor: isLoggedin ? "transparent" : "rgb(3,172,14)",
  border: isLoggedin ? "1px solid rgb(3,172,14)" : "none",
  height: "32px",
  padding: "0 1rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginRight: isLoggedin ? "0.8125rem" : 0,
}));

export const HeaderActionsMobile = styled(BottomNavigation)(() => ({
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: "rgb(3,172,14)",
  width: "100%",
}));

export const BottomNavigationAct = styled(BottomNavigationAction)(() => ({
  color: "white",
  fontWeight: 500,
  padding: "1.25rem",
  "& .MuiBottomNavigationAction-label": {
    paddingTop: "0.25rem",
  },
}));

export const CatalogWrapper = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  padding: "0.5rem 0",
}));

export const CatalogInnerWrapper = styled(Box)(() => ({
  display: "flex",
  width: "45%",
  paddingLeft: "0.25rem",
}));

export const CatalogText = styled(Typography)(() => ({
  marginRight: "0.8125rem",
  whiteSpace: "nowrap",
  overflow: "hidden",
  cursor: "pointer",
  fontSize: "0.75rem",
  textTransform: "capitalize",
  textOverflow: "ellipsis",
  color: "rgba(49,53,59,0.68)",
  fontWeight: 500,
  lineHeight: 1.5,
  "&:hover": {
    color: "rgb(3,172,14)",
  },
  "&:last-child": {
    marginRight: 0,
  },
}));

export const ChooseAddressWrapper = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  paddingRight: "0.625rem",
  cursor: "pointer",
}));

export const ChooseAddressInnerWrapper = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  marginLeft: "0.25rem",
}));

export const SentToText = styled(Typography)(() => ({
  color: "rgba(49, 53, 59, 0.68)",
  fontWeight: 400,
  fontSize: "0.75rem",
  marginRight: "0.25rem",
}));

export const CityText = styled(Typography)(() => ({
  whiteSpace: "nowrap",
  overflow: "hidden",
  cursor: "pointer",
  fontSize: "0.75rem",
  textTransform: "capitalize",
  textOverflow: "ellipsis",
  maxWidth: "300px",
  fontWeight: 700,
}));
