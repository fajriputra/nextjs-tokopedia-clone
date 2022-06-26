import { Box } from "@mui/material";
import { LocationOnOutlined, KeyboardArrowDown } from "@mui/icons-material";
import {
  CatalogInnerWrapper,
  CatalogText,
  CatalogWrapper,
  ChooseAddressInnerWrapper,
  ChooseAddressWrapper,
  CityText,
  SentToText,
} from "styles/header";
import { ICatalogProps, ICatalogsProps } from "types/header";

export default function HeaderCatalog({ catalogs }: ICatalogsProps) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box sx={{ width: "18%" }} />
      <CatalogWrapper>
        <CatalogInnerWrapper>
          {catalogs.map((catalog: ICatalogProps) => (
            <CatalogText key={catalog.id}>{catalog.name}</CatalogText>
          ))}
        </CatalogInnerWrapper>

        <ChooseAddressWrapper>
          <LocationOnOutlined sx={{ fontSize: "0.75rem" }} />
          <ChooseAddressInnerWrapper>
            <SentToText>Dikirim ke</SentToText>
            <CityText>Jakarta Pusat</CityText>
            <KeyboardArrowDown sx={{ fontSize: "0.8125rem" }} />
          </ChooseAddressInnerWrapper>
        </ChooseAddressWrapper>
      </CatalogWrapper>
    </Box>
  );
}
