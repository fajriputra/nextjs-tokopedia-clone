import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

import HeaderMobile from "./HeaderMobile";
import HeaderDesktop from "./HeaderDesktop";

export default function Header() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return <header>{matches ? <HeaderMobile /> : <HeaderDesktop />}</header>;
}
