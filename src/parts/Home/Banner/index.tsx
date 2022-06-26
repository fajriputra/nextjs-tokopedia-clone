import { useEffect, useState } from "react";
import { Slide, Box } from "@mui/material";
import { ArrowForwardIos, ArrowBackIos } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import useHover from "hooks/useHover";
import {
  BannerActionsInnerWrapper,
  BannerActionsWrapper,
  BannerImage,
  BannerIndicator,
  BannerWrapper,
  BannerWrapperImage,
  NextSlider,
  PreviousSlider,
  PromoLink,
} from "styles/banner";
import CenteringWrapper from "components/CenteringWrapper";

const images = ["banner.webp", "banner1.webp", "banner2.webp"];

export default function Banner() {
  const theme = useTheme();
  const matches = theme.breakpoints.down("md");

  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(true);
  const { ref, hovered } = useHover();

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
      setShow(true);

      setTimeout(() => {
        setShow(false);
      }, 3000);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const prevSlide = (): void => {
    setIndex(index === 0 ? images.length - 1 : index - 1);
  };

  const nextSlide = (): void => {
    setIndex(index === images.length - 1 ? 0 : index + 1);
  };

  const moveDots = (currIndex: number): void => {
    setIndex(currIndex);
  };

  return (
    <CenteringWrapper>
      <BannerWrapper>
        <BannerWrapperImage ref={ref}>
          <PreviousSlider isHovered={hovered} onClick={prevSlide}>
            <ArrowBackIos
              sx={{
                fontSize: matches ? "1rem" : "1.25rem",
                marginLeft: matches ? "0.375rem" : "0.5rem",
              }}
            />
          </PreviousSlider>
          <NextSlider isHovered={hovered} onClick={nextSlide}>
            <ArrowForwardIos
              sx={{
                fontSize: matches ? "1rem" : "1.25rem",
                marginLeft: "0.18175rem",
              }}
            />
          </NextSlider>
          <Slide
            in={show}
            easing="ease-in-out"
            direction={show ? "left" : "right"}
            timeout={{ enter: 750, exit: 750 }}
            appear={false}
          >
            <BannerImage src={`images/${images[index]}`} alt="banner" />
          </Slide>
          <BannerActionsWrapper>
            <BannerActionsInnerWrapper>
              <Box sx={{ display: "flex" }}>
                {images.map((banner, i) => (
                  <BannerIndicator
                    key={banner}
                    active={i === index}
                    onClick={() => moveDots(i)}
                  />
                ))}
              </Box>
              <PromoLink underline="none">lihat promo lainnya</PromoLink>
            </BannerActionsInnerWrapper>
          </BannerActionsWrapper>
        </BannerWrapperImage>
      </BannerWrapper>
    </CenteringWrapper>
  );
}
