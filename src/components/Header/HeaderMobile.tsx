import { IconButton } from "@mui/material";
import {
  ShoppingCart,
  Favorite,
  Person,
  Menu,
  Search,
} from "@mui/icons-material";
import {
  HeaderActionsMobile,
  HeaderContainer,
  HeaderBrandLogo,
  BottomNavigationAct,
} from "styles/header";

export default function HeaderMobile() {
  return (
    <HeaderContainer>
      <IconButton>
        <Menu />
      </IconButton>
      <HeaderBrandLogo src="images/tokopedia.png" />
      <IconButton>
        <Search />
      </IconButton>
      <HeaderActionsMobile showLabels>
        <BottomNavigationAct
          label="Cart"
          icon={<ShoppingCart sx={{ color: "white" }} />}
        />
        <BottomNavigationAct
          label="Favorites"
          icon={<Favorite sx={{ color: "white" }} />}
        />
        <BottomNavigationAct
          label="Users"
          icon={<Person sx={{ color: "white" }} />}
        />
      </HeaderActionsMobile>
    </HeaderContainer>
  );
}
