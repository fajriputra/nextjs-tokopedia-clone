import Link from "next/link";
import { Box, Divider } from "@mui/material";
import { Search, ShoppingCart } from "@mui/icons-material";
import catalogs from "constans/catalog";
import {
  HeaderContainer,
  HeaderBrandLogo,
  InputCategory,
  ButtonSearch,
  ButtonCart,
  HeaderActionsWrapper,
  MuiLink,
  TextCategory,
} from "styles/header";
import HeaderCatalog from "./HeaderCatalog";

export default function HeaderDesktop() {
  return (
    <>
      <HeaderContainer>
        <HeaderBrandLogo src="images/tokopedia.png" />
        <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
          <TextCategory>Kategori</TextCategory>
          <Box sx={{ width: "100%", position: "relative" }}>
            <InputCategory
              placeholder="cari apapun yang kamu mau di sini"
              fullWidth
            />
            <ButtonSearch>
              <Search sx={{ fontSize: "1.5rem", color: "gray" }} />
            </ButtonSearch>
          </Box>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <ButtonCart>
            <ShoppingCart sx={{ fontSize: "1.25rem", color: "gray" }} />
          </ButtonCart>
          <Divider
            orientation="vertical"
            flexItem
            sx={{ bgcolor: "#e0e0e0", height: "24px" }}
            variant="middle"
          />
          <HeaderActionsWrapper>
            <Link passHref href="/login">
              <MuiLink underline="none" isLoggedin>
                Masuk
              </MuiLink>
            </Link>
            <Link passHref href="/register">
              <MuiLink underline="none">Daftar</MuiLink>
            </Link>
          </HeaderActionsWrapper>
        </Box>
      </HeaderContainer>
      <HeaderCatalog catalogs={catalogs} />
    </>
  );
}
